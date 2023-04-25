import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../..";
import { currDaySelector } from "../daysSlice/selectors";

export const ticketsSelector = (state: RootState) => state.tickets.tickets;

export const missedTicketsSelector = createSelector(
  ticketsSelector,
  (tickets) => {
    return tickets.filter(({ isCanceled }) => isCanceled);
  },
);

export const pastTicketsSelector = createSelector(
  ticketsSelector,
  currDaySelector,
  (tickets, { fullDateInfo, date }) => {
    return tickets.filter(
      ({ day, isCanceled }) =>
        !isCanceled && day.fullDateInfo < fullDateInfo && day.date !== date,
    );
  },
);

export const upcomingTicketsSelector = createSelector(
  ticketsSelector,
  currDaySelector,
  (tickets, { fullDateInfo, date }) => {
    return tickets.filter(
      ({ day, isCanceled }) =>
        (!isCanceled && day.date === date) || day.fullDateInfo > fullDateInfo,
    );
  },
);
