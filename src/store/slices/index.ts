import userSliceReducer from "./userSlice/userSlice";
import portalSliceReducer from "./portalSlice/portalSlice";
import alertSliceReducer from "./alertSlice/alertSlice";

export const allReducers = {
  user: userSliceReducer,
  portal: portalSliceReducer,
  alert: alertSliceReducer,
};
