import { getMonthString } from "./getMonthString";

export const getCurrDay = () => {
  const date = new Date();
  return {
    date: date.getDate(),
    year: date.getFullYear(),
    month: getMonthString(date.getMonth()),
    fullDateInfo: date,
  };
};
