import { setIsAlertOpen } from "./alertSlice/alertSlice";
import {
  removePrevMovies,
  setCinemaMovie,
  setCinemaMovieDay,
  setReserve,
} from "./cinemaSlice/cinemaSlice";
import { setCurrDay, setDays } from "./daysSlice/daysSlice";
import { getMoviesThunk } from "./movieSlice/thunks/getMoviesThunk";
import { setPortal } from "./portalSlice/portalSlice";
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
  setPortal,
  setLoading,
  setUserError,
  setIsAlertOpen,
  togglePlay,
  setProgress,
  setSpeed,
  toggleMute,
  updateUser,
  getMoviesThunk,
  setDays,
  setCurrDay,
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
