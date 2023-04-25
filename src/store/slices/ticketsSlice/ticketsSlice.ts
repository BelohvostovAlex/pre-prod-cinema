import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { ITicket } from "../../../models/movie/ITicket";

import { TicketsState } from "./interfaces";

const initialState: TicketsState = {
  tickets: [] as ITicket[],
};

export const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    setTicket: (state, action: PayloadAction<ITicket>) => {
      state.tickets.push(action.payload);
    },
    removeTicket: (state, action: PayloadAction<string>) => {
      const currTicket = state.tickets.find(({ id }) => id === action.payload);
      if (currTicket) {
        currTicket.isCanceled = true;
      }
    },
  },
});

export const { setTicket, removeTicket } = ticketsSlice.actions;

export default ticketsSlice.reducer;
