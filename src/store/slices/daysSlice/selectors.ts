import { RootState } from "../..";

export const daysSelector = (state: RootState) => state.days;
export const currDaySelector = (state: RootState) => state.days.currDay;
export const daysInMonthSelector = (state: RootState) => state.days.days;
