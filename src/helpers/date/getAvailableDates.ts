import { IDate } from "../../models/IDate";

import { getMonthString } from "./getMonthString";

export const getAvailableDates = (
  startDate: Date,
  daysToAdd: number,
): IDate[] => {
  const availableDates = [] as IDate[];

  for (let i = 0; i <= daysToAdd; i++) {
    const currentDate = new Date();
    currentDate.setDate(startDate.getDate() + i);
    const dateMs = currentDate.getTime();
    availableDates.push({
      date: currentDate.getDate(),
      year: currentDate.getFullYear(),
      month: getMonthString(currentDate.getMonth()),
      fullDateInfo: dateMs,
    });
  }

  return availableDates;
};
