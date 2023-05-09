import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IDate } from "@models/IDate";

import { DaysState } from "./interfaces";

const initialState: DaysState = {
  currDay: {} as IDate,
  days: [] as IDate[],
};

export const daysSlice = createSlice({
  name: "days",
  initialState,
  reducers: {
    setDays: (state, action: PayloadAction<IDate[]>) => {
      state.days = action.payload;
    },
    setCurrDay: (state, action: PayloadAction<IDate>) => {
      state.currDay = action.payload;
    },
  },
});

export const { setDays, setCurrDay } = daysSlice.actions;

export default daysSlice.reducer;
