import { signOut } from "firebase/auth";
import { auth } from "../../lib/firebase.prod";

import { useActions } from "../useActionts";

export const useSignOut = () => {
  const { removeUser } = useActions();

  const signOutHandler = () => {
    signOut(auth);
    removeUser();
  };

  return signOutHandler;
};
