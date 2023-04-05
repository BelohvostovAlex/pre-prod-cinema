import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { PortalActionCreator, PortalState } from "./interfaces";

const initialState: PortalState = {
  isOpen: false,
  type: null,
};

export const portalSlice = createSlice({
  name: "portal",
  initialState,
  reducers: {
    setPortal: (state, action: PayloadAction<PortalActionCreator>) => {
      state.isOpen = action.payload.isOpen;
      state.type = action.payload.type;
    },
  },
});

export const { setPortal } = portalSlice.actions;

export default portalSlice.reducer;
