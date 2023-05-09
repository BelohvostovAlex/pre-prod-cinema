import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { AlertTypes } from "@constants/alert";

import { AlertState } from "./interfaces";

const initialState: AlertState = {
  isOpen: false,
  text: "",
  type: AlertTypes.ERROR,
};

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setIsAlertOpen: (state, action: PayloadAction<AlertState>) => {
      const { isOpen, text, type } = action.payload;
      state.isOpen = isOpen;
      state.text = text;
      state.type = type;
    },
  },
});

export const { setIsAlertOpen } = alertSlice.actions;

export default alertSlice.reducer;
