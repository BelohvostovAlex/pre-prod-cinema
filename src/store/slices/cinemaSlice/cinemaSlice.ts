import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IDate } from "@interfaces/IDate";

import { CinemaInfo, CinemaState, ReservePayload } from "./interfaces";
import { createCinemaSession } from "./config";

const initialState: CinemaState = {
  cinema: [] as CinemaInfo[],
};

export const cinemaSlice = createSlice({
  name: "cinema",
  initialState,
  reducers: {
    setCinemaMovie: (state, action: PayloadAction<CinemaInfo>) => {
      const { movie } = action.payload;
      const isCinemaExists = state.cinema.find(
        (cinema) => cinema.movie === movie,
      );
      if (!isCinemaExists) {
        state.cinema.push(action.payload);
      }
    },
    setCinemaMovieDay: (
      state,
      action: PayloadAction<{ movie: string; chosenDay: IDate }>,
    ) => {
      const { chosenDay, movie } = action.payload;
      const isCinemaExists = state.cinema.find(
        (cinema) => cinema.movie === movie,
      );
      if (isCinemaExists) {
        const dayBooking = isCinemaExists.movieInfoBookings.find(
          (item) => item.day.date === chosenDay.date,
        );
        if (!dayBooking) {
          isCinemaExists.movieInfoBookings.push(createCinemaSession(chosenDay));
        }
      }
    },
    setReserve: (state, action: PayloadAction<ReservePayload>) => {
      const {
        day: actionDay,
        time: actionTime,
        seat,
        movie: actionMovie,
      } = action.payload;
      const selectedMovie = state.cinema.find(
        (item) => item.movie === actionMovie,
      );
      const selectedMovieDay = selectedMovie?.movieInfoBookings.find(
        ({ day }) => day.date === actionDay.date,
      );
      const selectedSession = selectedMovieDay?.session.find(
        ({ time }) => time === actionTime,
      );
      if (selectedSession) {
        if (!seat.some((item) => selectedSession.reserved.includes(item))) {
          selectedSession.reserved = selectedSession.reserved.concat(seat);
          selectedSession.available = selectedSession.available.filter(
            (item) => !seat.includes(item),
          );
        }
      }
    },
    removePrevMovies: (
      state,
      action: PayloadAction<{ date: IDate; movieTitle: string }>,
    ) => {
      const { movieTitle, date } = action.payload;
      const currMovie = state.cinema.find(({ movie }) => movie === movieTitle);
      if (currMovie) {
        currMovie.movieInfoBookings = currMovie.movieInfoBookings.filter(
          (movInfo) => movInfo?.day?.fullDateInfo >= date?.fullDateInfo,
        );
      }
    },
  },
});

export const {
  setReserve,
  setCinemaMovie,
  setCinemaMovieDay,
  removePrevMovies,
} = cinemaSlice.actions;

export default cinemaSlice.reducer;
