import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { PortalState } from "./interfaces";

const initialState: PortalState = {
  isOpen: false,
};

export const portalSlice = createSlice({
  name: "portal",
  initialState,
  reducers: {
    setIsOpenPortal: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const { setIsOpenPortal } = portalSlice.actions;

export default portalSlice.reducer;
