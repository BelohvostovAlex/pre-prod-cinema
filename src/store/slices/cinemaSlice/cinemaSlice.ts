import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { CinemaInfo, CinemaState, ReservePayload } from "./interfaces";
import { createCinemaSession } from "./config.ts";

const initialState: CinemaState = {
  cinema: [],
};

export const cinemaSlice = createSlice({
  name: "cinema",
  initialState,
  reducers: {
    setCinemaMovie: (state, action: PayloadAction<CinemaInfo>) => {
      const newCinema = state.cinema.find(
        (movie) => movie.movie === action.payload.movie,
      );
      if (!newCinema) {
        state.cinema.push(action.payload);
      }
    },
    setCinemaMovieDay: (
      state,
      action: PayloadAction<{ movie: string; chosenDay: number }>,
    ) => {
      const newCinema = state.cinema.find(
        (movie) => movie.movie === action.payload.movie,
      );
      if (newCinema) {
        const dayBooking = newCinema.movieInfoBookings.find(
          (item) => item.day === action.payload.chosenDay,
        );
        if (!dayBooking) {
          newCinema.movieInfoBookings.push(
            createCinemaSession(action.payload.chosenDay),
          );
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
        (item) => item.day === actionDay,
      );
      const selectedSession = selectedMovieDay?.session.find(
        (item) => item.time === actionTime,
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
      action: PayloadAction<{ day: number; movieTitle: string }>,
    ) => {
      const { movieTitle, day } = action.payload;
      const currMovie = state.cinema.find(({ movie }) => movie === movieTitle);
      if (currMovie) {
        currMovie.movieInfoBookings = currMovie.movieInfoBookings.filter(
          (movInfo) => movInfo.day >= day,
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
