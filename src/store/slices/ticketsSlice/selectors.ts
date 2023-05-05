import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../..";
import { currDaySelector } from "../daysSlice/selectors";
import { userIdSelector } from "../userSlice/selectors";

export const ticketsSelector = (state: RootState) => state.tickets.tickets;

export const missedTicketsSelector = createSelector(
  ticketsSelector,
  userIdSelector,
  (tickets, id) => {
    return tickets.filter(
      ({ isCanceled, userId }) => isCanceled && userId === id,
    );
  },
);

export const pastTicketsSelector = createSelector(
  ticketsSelector,
  currDaySelector,
  userIdSelector,
  (tickets, { fullDateInfo, date }, id) => {
    return tickets.filter(
      ({ day, isCanceled, userId }) =>
        !isCanceled &&
        id === userId &&
        day.fullDateInfo < fullDateInfo &&
        day.date !== date,
    );
  },
);

export const upcomingTicketsSelector = createSelector(
  ticketsSelector,
  currDaySelector,
  userIdSelector,
  (tickets, { fullDateInfo, date }, id) => {
    return tickets.filter(
      ({ day, isCanceled, userId }) =>
        (userId === id && !isCanceled && day.date === date) ||
        (userId === id && !isCanceled && day.fullDateInfo > fullDateInfo),
    );
  },
);
