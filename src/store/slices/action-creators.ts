import {
  changeTheme,
  setUser,
  removeUser,
  setLoading,
  setUserError,
} from "./userSlice/userSlice";
import { setIsOpenPortal } from "./portalSlice/portalSlice";
import { setIsAlertOpen } from "./alertSlice/alertSlice";

export const allActionCreators = {
  changeTheme,
  setUser,
  removeUser,
  setIsOpenPortal,
  setLoading,
  setUserError,
  setIsAlertOpen,
};
