import { FunctionComponent } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

import AuthForm from "../AuthForm";

import { auth } from "../../lib/firebase.prod";
import { useActions } from "../../hooks/useActionts";
import { createDocument } from "../../api/firebase/createDocument";

import { SignUpProps } from "./interfaces";
import { FirebaseError } from "firebase/app";
import { FirebaseErrorsTypes } from "../../constants/errors/firebaseErrors";
import { useErrorTranslation } from "../../hooks/errorTranslation/useErrorTranslation";
import { isStrIncludesValueHandler } from "../../helpers/isStrIncludeValueHandler";
import { AlertTypes } from "../../constants/alert";

const SignUp: FunctionComponent<SignUpProps> = ({
  onFormTypeChange,
  signUp,
}) => {
  const { setUser, setLoading, setUserError, setIsOpenPortal, setIsAlertOpen } =
    useActions();
  const { emailAlreadyInUse } = useErrorTranslation();

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
        photo: user.photoURL || "myphoto",
        gender: "male",
        password,
        email: user.email,
        token,
      };
      await createDocument({
        collection: "users",
        document: newUser,
        id: user.uid,
      });
      setUser(newUser);
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
    } finally {
      setIsOpenPortal(false);
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
