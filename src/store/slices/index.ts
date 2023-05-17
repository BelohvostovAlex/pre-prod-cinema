import alertSliceReducer from "./alertSlice/alertSlice";
import cinemaSliceReducer from "./cinemaSlice/cinemaSlice";
import movieSliceReducer from "./movieSlice";
import ticketsSliceReducer from "./ticketsSlice/ticketsSlice";
import useChoiceSliceReducer from "./userChoiceSlice/userChoiceSlice";
import userSliceReducer from "./userSlice/userSlice";
import videoSliceReducer from "./videoSlice/videoSlice";

export const allReducers = {
  user: userSliceReducer,
  alert: alertSliceReducer,
  video: videoSliceReducer,
  movies: movieSliceReducer,
  cinema: cinemaSliceReducer,
  userChoice: useChoiceSliceReducer,
  tickets: ticketsSliceReducer,
};
