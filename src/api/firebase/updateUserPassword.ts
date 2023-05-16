import { updatePassword } from "firebase/auth";

import { auth } from "@lib/firebase.prod";

export const updateUserPassword = async (password: string) => {
  try {
    const user = auth.currentUser;
    if (user && password) {
      await updatePassword(user, password);
    }
  } catch (error) {
    throw error;
  }
};
