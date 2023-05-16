import alertSliceReducer from "./alertSlice/alertSlice";
import movieSliceReducer from "./movieSlice";
import userSliceReducer from "./userSlice/userSlice";
import videoSliceReducer from "./videoSlice/videoSlice";
import cinemaSliceReducer from "./cinemaSlice/cinemaSlice";
import useChoiceSliceReducer from "./userChoiceSlice/userChoiceSlice";
import ticketsSliceReducer from "./ticketsSlice/ticketsSlice";

export const allReducers = {
  user: userSliceReducer,
  alert: alertSliceReducer,
  video: videoSliceReducer,
  movies: movieSliceReducer,
  cinema: cinemaSliceReducer,
  userChoice: useChoiceSliceReducer,
  tickets: ticketsSliceReducer,
};
