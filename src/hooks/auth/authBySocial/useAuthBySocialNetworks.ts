import { FirebaseError } from "firebase/app";
import { signInWithPopup } from "firebase/auth";

import { createDocument } from "../../../api/firebase/createDocument";
import { getDocument } from "../../../api/firebase/getDocument";
import { updateDocument } from "../../../api/firebase/updateDocument";
import { AlertTypes } from "../../../constants/alert";
import { FirebaseErrorsTypes } from "../../../constants/errors/firebaseErrors";
import { FirebaseCollections } from "../../../constants/firebase/collections";
import { isStrIncludesValueHandler } from "../../../helpers/isStrIncludeValueHandler";
import { auth } from "../../../lib/firebase.prod";
import { IUser } from "../../../models/IUser";
import { useErrorTranslation } from "../../errorTranslation/useErrorTranslation";
import { useClosePortal } from "../../portal/useClosePortal";
import { useActions } from "../../useActionts";

import { UseAuthBySocialNetwork } from "./interfaces";

export const useAuthBySocialNetwork = (options: UseAuthBySocialNetwork) => {
  const { ClassProvider, provider } = options;
  const { setUser, setUserError, setIsAlertOpen } = useActions();
  const closePortal = useClosePortal();
  const { userAlreadyExistsViaSocialError, popupClosedByUser } =
    useErrorTranslation();

  const handleAuthBySocialNetwork = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const credential = ClassProvider.credentialFromResult(result);

      const isUserExists = (await getDocument(
        FirebaseCollections.USERS,
        user.email || user.uid,
      )) as IUser | false;

      const id = user.uid;
      const token = credential?.accessToken;
      const username = user.displayName?.split(" ")[0] || "Name";
      const surname = user.displayName?.split(" ")[1] || "Surname";
      const photo = user.photoURL || "";
      const email = user.email ? user.email : "";

      const newUser = {
        email,
        id,
        photo,
        username,
        surname,
        gender: "male",
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
        closePortal();
      } else {
        await createDocument({
          collection: FirebaseCollections.USERS,
          document: newUser,
          id,
        });

        setUser(newUser);
        closePortal();
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