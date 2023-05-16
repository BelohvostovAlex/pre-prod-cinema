import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../..";
import { userIdSelector } from "../userSlice/selectors";
import { getCurrDay } from "../../../helpers/date/getCurrDay";

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
  userIdSelector,
  (tickets, id) => {
    const { date, fullDateInfo } = getCurrDay();
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
  userIdSelector,
  (tickets, id) => {
    const { date, fullDateInfo } = getCurrDay();
    return tickets.filter(
      ({ day, isCanceled, userId }) =>
        (userId === id && !isCanceled && day.date === date) ||
        (userId === id && !isCanceled && day.fullDateInfo > fullDateInfo),
    );
  },
);

export const allCategoriesTicketsSelector = createSelector(
  missedTicketsSelector,
  pastTicketsSelector,
  upcomingTicketsSelector,
  (missedTickets, pastTickets, upcomingTickets) => {
    return { missedTickets, pastTickets, upcomingTickets };
  },
);
