import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { createDocument } from "@api/firebase/createDocument";
import { AuthFormInputProps } from "@components/AuthForm/interfaces";
import { AlertTypes } from "@constants/alert";
import { Gender } from "@constants/authForm";
import { FirebaseErrorsTypes } from "@constants/errors/firebaseErrors";
import { FirebaseCollections } from "@constants/firebase/collections";
import { isStrIncludesValueHandler } from "@helpers/isStrIncludeValueHandler";
import { useErrorTranslation } from "@hooks/errorTranslation/useErrorTranslation";
import { useClosePortal } from "@hooks/portal/useClosePortal";
import { useActions } from "@hooks/useActionts";
import { auth } from "@lib/firebase.prod";

export const useSignUp = () => {
  const { setUser, setLoading, setUserError, setIsAlertOpen } = useActions();
  const { emailAlreadyInUse } = useErrorTranslation();
  const closePortal = useClosePortal();

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
      closePortal();
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
