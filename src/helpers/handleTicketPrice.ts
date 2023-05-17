import { IDate } from "@interfaces/IDate";
import { futureLimit } from "@sections/Movie/MovieBooking/config";

import { getAvailableDates } from "./date/getAvailableDates";

interface PriceArrItem {
  date: number;
  price: number;
}

export const handleTicketPrice = (day: IDate): number => {
  const priceArr: PriceArrItem[] = [];
  let discount = 0;
  const commonPrice = 10;
  const availableDates = getAvailableDates(new Date(), futureLimit);
  availableDates.forEach((item) => {
    priceArr.push({ date: item.date, price: commonPrice - discount / 10 });
    discount += 5;
  });
  const chosenDate = priceArr.find((item) => item.date === day.date);

  return chosenDate?.price || 10;
};
