import { ChangeEvent, useState } from "react";

import { FirebaseError } from "firebase/app";
import { SubmitHandler } from "react-hook-form";

import { updateDocument } from "@api/firebase/updateDocument";
import { updateUserPassword } from "@api/firebase/updateUserPassword";
import { uploadFile } from "@api/firebase/uploadFile";
import { AlertTypes } from "@constants/alert";
import { FirebaseErrorsTypes } from "@constants/errors/firebaseErrors";
import { FirebaseCollections } from "@constants/firebase/collections";
import { AuthFormInputProps } from "@forms/AuthForm/interfaces";
import { isStrIncludesValueHandler } from "@helpers/isStrIncludeValueHandler";
import { useErrorTranslation } from "@hooks/errorTranslation/useErrorTranslation";
import { useActions } from "@hooks/useActionts";
import { IUser } from "@interfaces/IUser";

type UserInfo = Partial<IUser>;

interface UseEditProfileProps {
  isValid: boolean;
  id: string;
  collection: FirebaseCollections;
  currUser: UserInfo;
}

export const useEditProfile = (options: UseEditProfileProps) => {
  const {
    isValid,
    id,
    collection,
    currUser: { gender, username, surname },
  } = options;
  const { updateUser, setIsAlertOpen } = useActions();
  const { requiresRecentLogin } = useErrorTranslation();
  const [file, setFile] = useState<File>();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setFile(files[0]);
    }
  };

  const onSubmitHandler: SubmitHandler<AuthFormInputProps> = async (data) => {
    try {
      const newUser = {
        username: data?.username || username,
        surname: data?.surname || surname,
        gender: data?.gender || gender,
      };
      if (isValid && file) {
        await uploadFile({ collection, id, file });

        const url = URL.createObjectURL(file);
        updateUser({ photo: url });
      }

      if (isValid && data.password) {
        await updateUserPassword(data.password);
        await updateDocument({
          collection,
          id,
          newDoc: { password: data.password },
        });
      }

      if (isValid && !data.password && !file) {
        await updateDocument({
          collection,
          id,
          newDoc: newUser,
        });
        updateUser(newUser);
      }
    } catch (e) {
      if (
        e instanceof FirebaseError &&
        isStrIncludesValueHandler(
          e.code,
          FirebaseErrorsTypes.REQUIRES_RECENT_LOGIN,
        )
      ) {
        setIsAlertOpen({
          isOpen: true,
          text: requiresRecentLogin,
          type: AlertTypes.ERROR,
        });
      } else {
        setIsAlertOpen({
          isOpen: true,
          text: (e as Error).message,
          type: AlertTypes.ERROR,
        });
      }
    }
  };

  return { handleFileChange, onSubmitHandler };
};
