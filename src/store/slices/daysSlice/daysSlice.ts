import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { DaysState } from "./interfaces";

const initialState: DaysState = {
  currDay: 0,
  days: [],
};

export const daysSlice = createSlice({
  name: "days",
  initialState,
  reducers: {
    setDays: (state, action: PayloadAction<number[]>) => {
      state.days = action.payload;
    },
    setCurrDay: (state, action: PayloadAction<number>) => {
      state.currDay = action.payload;
    },
  },
});

export const { setDays, setCurrDay } = daysSlice.actions;

export default daysSlice.reducer;
