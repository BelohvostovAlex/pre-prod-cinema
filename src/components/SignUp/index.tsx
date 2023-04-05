import { FunctionComponent } from "react";
import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase.prod";

import AuthForm from "../AuthForm";

import { useActions } from "../../hooks/useActionts";
import { useClosePortal } from "../../hooks/portal/useClosePortal";
import { createDocument } from "../../api/firebase/createDocument";
import { FirebaseErrorsTypes } from "../../constants/errors/firebaseErrors";
import { useErrorTranslation } from "../../hooks/errorTranslation/useErrorTranslation";
import { isStrIncludesValueHandler } from "../../helpers/isStrIncludeValueHandler";
import { AlertTypes } from "../../constants/alert";
import { FirebaseCollections } from "../../constants/firebase/collections";

import { SignUpProps } from "./interfaces";

const SignUp: FunctionComponent<SignUpProps> = ({
  onFormTypeChange,
  signUp,
}) => {
  const { setUser, setLoading, setUserError, setIsAlertOpen } = useActions();
  const { emailAlreadyInUse } = useErrorTranslation();
  const closePortal = useClosePortal();

  const handleSignUp = async (
    email: string,
    password: string,
    username: string,
    surname: string,
  ) => {
    try {
      setLoading(true);
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const token = await user.getIdToken();

      const newUser = {
        id: user.uid,
        username,
        surname,
        photo: user.photoURL || "",
        gender: "male",
        password,
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

  return (
    <AuthForm
      onSubmit={handleSignUp}
      onFormTypeChange={onFormTypeChange}
      signUp={signUp}
    />
  );
};

export default SignUp;
