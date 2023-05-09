import alertSliceReducer from "./alertSlice/alertSlice";
import cinemaSliceReducer from "./cinemaSlice/cinemaSlice";
import daysSliceReducer from "./daysSlice/daysSlice";
import movieSliceReducer from "./movieSlice";
import portalSliceReducer from "./portalSlice/portalSlice";
import ticketsSliceReducer from "./ticketsSlice/ticketsSlice";
import useChoiceSliceReducer from "./userChoiceSlice/userChoiceSlice";
import userSliceReducer from "./userSlice/userSlice";
import videoSliceReducer from "./videoSlice/videoSlice";

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
