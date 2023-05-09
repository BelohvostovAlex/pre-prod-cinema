import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { handleTicketPrice } from "@helpers/handleTicketPrice";
import { IDate } from "@models/IDate";

import { defaultState } from "./config";
import { Badge } from "./interfaces";

const initialState = defaultState;

export const userChoiceSlice = createSlice({
  name: "userChoice",
  initialState,
  reducers: {
    setChosenDay: (state, action: PayloadAction<IDate>) => {
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
        day: IDate;
        movie: string;
        seat: number;
        time: string;
      }>,
    ) => {
      const { day, movie, seat, time } = action.payload;
      const isExist = state.chosenSeats.find(
        (item) =>
          item.movie === movie &&
          item.day.date === day.date &&
          item.time === time,
      );
      if (isExist && !isExist.seats.includes(seat)) {
        isExist.seats.push(seat);
        isExist.price = isExist.price + handleTicketPrice(day);
      }
      if (!isExist) {
        state.chosenSeats.push({
          day,
          movie,
          seats: [seat],
          time,
          price: handleTicketPrice(day),
        });
      }
    },
    resetChoice: () => {
      return defaultState;
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
