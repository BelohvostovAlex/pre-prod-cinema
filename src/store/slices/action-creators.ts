import { setIsAlertOpen } from "./alertSlice/alertSlice";
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
import { getMoviesThunk } from "./movieSlice/thunks/getMoviesThunk";
import {
  resetChoice,
  setChosenDay,
  setChosenMovie,
  setChosenMovieBadge,
  setChosenSeats,
} from "./userChoiceSlice/userChoiceSlice";
import {
  removePrevMovies,
  setCinemaMovie,
  setCinemaMovieDay,
  setReserve,
} from "./cinemaSlice/cinemaSlice";
import { removeTicket, setTicket } from "./ticketsSlice/ticketsSlice";

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
