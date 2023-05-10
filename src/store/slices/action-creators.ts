import { setIsAlertOpen } from "./alertSlice/alertSlice";
import { setPortal } from "./portalSlice/portalSlice";
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
import { setCurrDay, setDays } from "./daysSlice/daysSlice";
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
