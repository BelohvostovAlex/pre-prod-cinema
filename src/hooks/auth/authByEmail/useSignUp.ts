import { createUserWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";

import { AuthFormInputProps } from "@forms/AuthForm/interfaces";
import { auth } from "@lib/firebase.prod";
import { useErrorTranslation } from "@hooks/errorTranslation/useErrorTranslation";
import { useActions } from "@hooks/useActionts";
import { createDocument } from "@api/firebase/createDocument";
import { Gender } from "@constants/authForm";
import { FirebaseCollections } from "@constants/firebase/collections";
import { isStrIncludesValueHandler } from "@helpers/isStrIncludeValueHandler";
import { FirebaseErrorsTypes } from "@constants/errors/firebaseErrors";
import { AlertTypes } from "@constants/alert";

export const useSignUp = (handlePortal: () => void) => {
  const { setUser, setLoading, setUserError, setIsAlertOpen } = useActions();
  const { emailAlreadyInUse } = useErrorTranslation();

  const handleSignUp = async (options: AuthFormInputProps) => {
    try {
      setLoading(true);
      const { user } = await createUserWithEmailAndPassword(
        auth,
        options.email,
        options.password,
      );
      const token = await user.getIdToken();

      const newUser = {
        id: user.uid,
        username: options.username,
        surname: options.surname,
        photo: user.photoURL || "",
        gender: Gender.MALE,
        password: options.password,
        email: user.email,
        token,
      };
      await createDocument({
        collection: FirebaseCollections.USERS,
        document: newUser,
        id: user.uid,
      });
      setUser(newUser);
      handlePortal();
    } catch (e) {
      if (
        e instanceof FirebaseError &&
        isStrIncludesValueHandler(e.code, FirebaseErrorsTypes.EMAIL_IN_USE)
      ) {
        setUserError(emailAlreadyInUse);
        setIsAlertOpen({
          isOpen: true,
          text: emailAlreadyInUse,
          type: AlertTypes.ERROR,
        });
      } else {
        setUserError((e as Error).message);
      }
    }
  };

  return handleSignUp;
};
