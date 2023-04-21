import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Badge, UserChoiceState } from "./interfaces";

const initialState: UserChoiceState = {
  chosenDay: 0,
  chosenMovie: "",
  chosenBadge: {} as Badge,
  chosenSeats: [],
};

export const userChoiceSlice = createSlice({
  name: "userChoice",
  initialState,
  reducers: {
    setChosenDay: (state, action: PayloadAction<number>) => {
      state.chosenDay = action.payload;
    },
    setChosenMovieBadge: (state, action: PayloadAction<Badge>) => {
      state.chosenBadge = action.payload;
    },
    setChosenMovie: (state, action: PayloadAction<string>) => {
      state.chosenMovie = action.payload;
    },
    setChosenSeats: (
      state,
      action: PayloadAction<{
        day: number;
        movie: string;
        seat: number;
        time: string;
      }>,
    ) => {
      const { day, movie, seat, time } = action.payload;
      const isExist = state.chosenSeats.find(
        (item) =>
          item.movie === movie && item.day === day && item.time === time,
      );
      if (isExist && !isExist.seats.includes(seat)) {
        isExist.seats.push(seat);
      }
      if (!isExist) {
        state.chosenSeats.push({ day, movie, seats: [seat], time });
      }
    },
    resetChoice: (state) => {
      state.chosenBadge = {} as Badge;
      state.chosenDay = 0;
      state.chosenMovie = "";
      state.chosenSeats = [];
    },
  },
});

export const {
  setChosenDay,
  setChosenMovieBadge,
  setChosenMovie,
  setChosenSeats,
  resetChoice,
} = userChoiceSlice.actions;

export default userChoiceSlice.reducer;
