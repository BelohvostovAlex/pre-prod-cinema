import { FunctionComponent } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase.prod";

import AuthForm from "../AuthForm";

import { useActions } from "../../hooks/useActionts";
import { getDocument } from "../../api/firebase/getDocument";
import { FirebaseCollections } from "../../constants/firebase/collections";

import { SignInProps } from "./interfaces";
import { IUser } from "../../models/IUser";
import { FirebaseError } from "firebase/app";
import { isStrIncludesValueHandler } from "../../helpers/isStrIncludeValueHandler";
import { FirebaseErrorsTypes } from "../../constants/errors/firebaseErrors";
import { useErrorTranslation } from "../../hooks/errorTranslation/useErrorTranslation";
import { AlertTypes } from "../../constants/alert";
import { updateDocument } from "../../api/firebase/updateDocument";

const SignIn: FunctionComponent<SignInProps> = ({
  onFormTypeChange,
  signUp,
}) => {
  const { setLoading, setUser, setUserError, setIsAlertOpen, setIsOpenPortal } =
    useActions();
  const { wrongPassword, userNotFound } = useErrorTranslation();

  const handleSignIn = async (email: string, password: string) => {
    try {
      setLoading(true);
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      const id = user.uid;
      const token = await user.getIdToken();
      const isUserExists = (await getDocument(
        FirebaseCollections.USERS,
        id,
      )) as IUser | false;

      if (isUserExists) {
        const newUserDoc = { ...isUserExists, token };
        await updateDocument({
          collection: FirebaseCollections.USERS,
          id,
          newDoc: newUserDoc,
        });
        setUser(newUserDoc);
        setIsOpenPortal(false);
      }
    } catch (e) {
      if (
        e instanceof FirebaseError &&
        isStrIncludesValueHandler(e.code, FirebaseErrorsTypes.WRONG_PASSWORD)
      ) {
        setUserError(wrongPassword);
        setIsAlertOpen({
          isOpen: true,
          text: wrongPassword,
          type: AlertTypes.ERROR,
        });
      }
      if (
        e instanceof FirebaseError &&
        isStrIncludesValueHandler(e.code, FirebaseErrorsTypes.USER_NOT_FOUND)
      ) {
        setUserError(userNotFound);
        setIsAlertOpen({
          isOpen: true,
          text: userNotFound,
          type: AlertTypes.ERROR,
        });
      }
    }
  };

  return (
    <AuthForm
      onFormTypeChange={onFormTypeChange}
      onSubmit={handleSignIn}
      signUp={signUp}
    />
  );
};

export default SignIn;
