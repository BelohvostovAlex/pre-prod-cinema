import alertSliceReducer from "./alertSlice/alertSlice";
import movieSliceReducer from "./movieSlice";
import portalSliceReducer from "./portalSlice/portalSlice";
import userSliceReducer from "./userSlice/userSlice";
import videoSliceReducer from "./videoSlice/videoSlice";
import daysSliceReducer from "./daysSlice/daysSlice";
import bookingSliceReducer from "./bookingSlice/bookingSlice";

export const allReducers = {
  user: userSliceReducer,
  portal: portalSliceReducer,
  alert: alertSliceReducer,
  video: videoSliceReducer,
  movies: movieSliceReducer,
  booking: bookingSliceReducer,
  days: daysSliceReducer,
};
