import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { ITicket } from "../../../models/movie/ITicket";

import { TicketsState } from "./interfaces";

const initialState: TicketsState = {
  tickets: [],
};

export const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    setTicket: (state, action: PayloadAction<ITicket>) => {
      state.tickets.push(action.payload);
    },
  },
});

export const { setTicket } = ticketsSlice.actions;

export default ticketsSlice.reducer;
