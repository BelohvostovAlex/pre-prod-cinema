import { signOut } from "firebase/auth";

import { auth } from "@lib/firebase.prod";

import { useActions } from "../useActionts";

export const useSignOut = () => {
  const { removeUser, resetChoice } = useActions();

  const signOutHandler = () => {
    signOut(auth);
    removeUser();
    resetChoice();
  };

  return signOutHandler;
};
