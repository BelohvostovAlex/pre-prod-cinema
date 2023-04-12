import alertSliceReducer from "./alertSlice/alertSlice";
import movieSliceReducer from "./movieSlice";
import portalSliceReducer from "./portalSlice/portalSlice";
import userSliceReducer from "./userSlice/userSlice";
import videoSliceReducer from "./videoSlice/videoSlice";

export const allReducers = {
  user: userSliceReducer,
  portal: portalSliceReducer,
  alert: alertSliceReducer,
  video: videoSliceReducer,
  movies: movieSliceReducer,
};
