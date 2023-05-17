import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";

import { getDocument } from "@api/firebase/getDocument";
import { updateDocument } from "@api/firebase/updateDocument";
import { AlertTypes } from "@constants/alert";
import { FirebaseErrorsTypes } from "@constants/errors/firebaseErrors";
import { FirebaseCollections } from "@constants/firebase/collections";
import { isStrIncludesValueHandler } from "@helpers/isStrIncludeValueHandler";
import { useErrorTranslation } from "@hooks/errorTranslation/useErrorTranslation";
import { useActions } from "@hooks/useActionts";
import { IUser } from "@interfaces/IUser";
import { auth } from "@lib/firebase.prod";

export const useSignIn = (handlePortal: () => void) => {
  const { setLoading, setUser, setUserError, setIsAlertOpen } = useActions();
  const { wrongPassword, userNotFound } = useErrorTranslation();

  const handleSignIn = async (option: { email: string; password: string }) => {
    try {
      setLoading(true);
      const { user } = await signInWithEmailAndPassword(
        auth,
        option.email,
        option.password,
      );
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
        handlePortal();
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

  return handleSignIn;
};
