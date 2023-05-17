import { signOut } from "firebase/auth";

import { useActions } from "@hooks/useActionts";
import { auth } from "@lib/firebase.prod";

export const useSignOut = () => {
  const { removeUser, resetChoice } = useActions();

  const signOutHandler = () => {
    signOut(auth);
    removeUser();
    resetChoice();
  };

  return signOutHandler;
};
