import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { DaysState, SetDaysPayload } from "./interfaces";

const initialState: DaysState = {
  currDay: 0,
  days: [],
};

export const daysSlice = createSlice({
  name: "days",
  initialState,
  reducers: {
    setDays: (state, action: PayloadAction<SetDaysPayload>) => {
      state.currDay = action.payload.currDay;
      state.days = action.payload.days;
    },
    setCurrDay: (state, action: PayloadAction<number>) => {
      state.currDay = action.payload;
    },
  },
});

export const { setDays, setCurrDay } = daysSlice.actions;

export default daysSlice.reducer;
