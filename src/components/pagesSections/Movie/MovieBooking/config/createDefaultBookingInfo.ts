import { halls, seats } from "../../../../../constants/booking";
import { BookingInfo } from "../../../../../store/slices/bookingSlice/interfaces";

export const createDefaultBookingInfo = (day: number): BookingInfo => {
  return {
    day,
    session: [
      {
        hall: halls[0].hallNumber,
        startTime: halls[0].time,
        available: seats,
        reserved: seats,
        selected: seats,
      },
      {
        hall: halls[1].hallNumber,
        startTime: halls[1].time,
        available: seats,
        reserved: seats,
        selected: seats,
      },
      {
        hall: halls[2].hallNumber,
        startTime: halls[2].time,
        available: seats,
        reserved: seats,
        selected: seats,
      },
    ],
  };
};
