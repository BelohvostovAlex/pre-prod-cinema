import { FirebaseError } from "firebase/app";
import { signInWithPopup } from "firebase/auth";

import { createDocument } from "@api/firebase/createDocument";
import { getDocument } from "@api/firebase/getDocument";
import { updateDocument } from "@api/firebase/updateDocument";
import { AlertTypes } from "@constants/alert";
import { Gender } from "@constants/authForm";
import { FirebaseErrorsTypes } from "@constants/errors/firebaseErrors";
import { FirebaseCollections } from "@constants/firebase/collections";
import { isStrIncludesValueHandler } from "@helpers/isStrIncludeValueHandler";
import { useErrorTranslation } from "@hooks/errorTranslation/useErrorTranslation";
import { useActions } from "@hooks/useActionts";
import { IUser } from "@interfaces/IUser";
import { auth } from "@lib/firebase.prod";

import { mockUserData } from "./config";
import { UseAuthBySocialNetwork } from "./interfaces";

export const useAuthBySocialNetwork = (options: UseAuthBySocialNetwork) => {
  const { ClassProvider, provider, handlePortal } = options;
  const { setUser, setUserError, setIsAlertOpen } = useActions();
  const { userAlreadyExistsViaSocialError, popupClosedByUser } =
    useErrorTranslation();

  const handleAuthBySocialNetwork = async () => {
    try {
      const { mockEmail, mockPhoto, mockSurname, mockUsername } = mockUserData;
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const credential = ClassProvider.credentialFromResult(result);

      const isUserExists = (await getDocument(
        FirebaseCollections.USERS,
        user.uid,
      )) as IUser | false;

      const id = user.uid;
      const token = credential?.accessToken;
      const username = user.displayName?.split(" ")[0] || mockUsername;
      const surname = user.displayName?.split(" ")[1] || mockSurname;
      const photo = user.photoURL || mockPhoto;
      const email = user.email ? user.email : mockEmail;

      const newUser = {
        email,
        id,
        photo,
        username,
        surname,
        gender: Gender.MALE,
        token,
      };

      if (isUserExists) {
        const newUserDoc = { ...isUserExists, token };
        await updateDocument({
          collection: FirebaseCollections.USERS,
          id,
          newDoc: newUserDoc,
        });
        setUser(newUserDoc);
        handlePortal();
      } else {
        await createDocument({
          collection: FirebaseCollections.USERS,
          document: newUser,
          id,
        });

        setUser(newUser);
        handlePortal();
      }
    } catch (e) {
      if (
        e instanceof FirebaseError &&
        isStrIncludesValueHandler(e.code, FirebaseErrorsTypes.ACCOUNT_EXISTS)
      ) {
        setUserError(userAlreadyExistsViaSocialError);
        setIsAlertOpen({
          isOpen: true,
          text: userAlreadyExistsViaSocialError,
          type: AlertTypes.ERROR,
        });
      }

      if (
        e instanceof FirebaseError &&
        isStrIncludesValueHandler(e.code, FirebaseErrorsTypes.CLOSED_POPUP)
      ) {
        setUserError(popupClosedByUser);
        setIsAlertOpen({
          isOpen: true,
          text: popupClosedByUser,
          type: AlertTypes.ERROR,
        });
      } else {
        setUserError((e as Error).message);
      }
    }
  };

  return handleAuthBySocialNetwork;
};
