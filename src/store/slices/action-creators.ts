import {
  changeTheme,
  setUser,
  removeUser,
  setLoading,
  setUserError,
} from "./userSlice/userSlice";
import { setPortal } from "./portalSlice/portalSlice";
import { setIsAlertOpen } from "./alertSlice/alertSlice";

export const allActionCreators = {
  changeTheme,
  setUser,
  removeUser,
  setPortal,
  setLoading,
  setUserError,
  setIsAlertOpen,
};
