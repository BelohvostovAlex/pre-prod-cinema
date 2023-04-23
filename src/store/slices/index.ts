import alertSliceReducer from "./alertSlice/alertSlice";
import movieSliceReducer from "./movieSlice";
import portalSliceReducer from "./portalSlice/portalSlice";
import userSliceReducer from "./userSlice/userSlice";
import videoSliceReducer from "./videoSlice/videoSlice";
import daysSliceReducer from "./daysSlice/daysSlice";
import cinemaSliceReducer from "./cinemaSlice/cinemaSlice";
import useChoiceSliceReducer from "./userChoiceSlice/userChoiceSlice";
import ticketsSliceReducer from "./ticketsSlice/ticketsSlice";

export const allReducers = {
  user: userSliceReducer,
  portal: portalSliceReducer,
  alert: alertSliceReducer,
  video: videoSliceReducer,
  movies: movieSliceReducer,
  cinema: cinemaSliceReducer,
  days: daysSliceReducer,
  userChoice: useChoiceSliceReducer,
  tickets: ticketsSliceReducer,
};
