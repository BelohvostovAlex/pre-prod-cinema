import { setIsAlertOpen } from "./alertSlice/alertSlice";
import { setPortal } from "./portalSlice/portalSlice";
import {
  changeDarkTheme,
  changeLightTheme,
  removeUser,
  setLoading,
  setUser,
  setUserError,
  updateUser,
} from "./userSlice/userSlice";
import {
  setProgress,
  setSpeed,
  toggleMute,
  togglePlay,
} from "./videoSlice/videoSlice";

export const allActionCreators = {
  changeDarkTheme,
  changeLightTheme,
  setUser,
  removeUser,
  setPortal,
  setLoading,
  setUserError,
  setIsAlertOpen,
  togglePlay,
  setProgress,
  setSpeed,
  toggleMute,
  updateUser,
};
