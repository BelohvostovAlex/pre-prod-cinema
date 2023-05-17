import { setIsAlertOpen } from "./alertSlice/alertSlice";
import {
  removePrevMovies,
  setCinemaMovie,
  setCinemaMovieDay,
  setReserve,
} from "./cinemaSlice/cinemaSlice";
import { getMoviesThunk } from "./movieSlice/thunks/getMoviesThunk";
import { removeTicket, setTicket } from "./ticketsSlice/ticketsSlice";
import {
  resetChoice,
  setChosenDay,
  setChosenMovie,
  setChosenMovieBadge,
  setChosenSeats,
} from "./userChoiceSlice/userChoiceSlice";
import {
  changeTheme,
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
  changeTheme,
  setUser,
  removeUser,
  setLoading,
  setUserError,
  setIsAlertOpen,
  togglePlay,
  setProgress,
  setSpeed,
  toggleMute,
  updateUser,
  getMoviesThunk,
  setChosenDay,
  setChosenMovieBadge,
  setReserve,
  setCinemaMovie,
  setCinemaMovieDay,
  setChosenMovie,
  setChosenSeats,
  resetChoice,
  removePrevMovies,
  setTicket,
  removeTicket,
};
