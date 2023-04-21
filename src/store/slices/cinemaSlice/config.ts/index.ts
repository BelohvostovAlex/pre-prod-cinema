import { halls, seats } from "../../../../constants/booking";
import { getCurrDay } from "../../../../helpers/date/getCurrDay";
import { CinemaInfo } from "../interfaces";

export const createDefaultCinemaInfo = (
  movie: string,
  day: number = getCurrDay(),
): CinemaInfo => {
  return {
    movie,
    movieInfoBookings: [
      {
        day,
        session: [
          {
            hallNumber: halls[0].hallNumber,
            time: halls[0].time,
            available: seats,
            reserved: [],
            selected: [],
          },
          {
            hallNumber: halls[1].hallNumber,
            time: halls[1].time,
            available: seats,
            reserved: [],
            selected: [],
          },
          {
            hallNumber: halls[2].hallNumber,
            time: halls[2].time,
            available: seats,
            reserved: [],
            selected: [],
          },
        ],
      },
    ],
  };
};

export const createCinemaSession = (day: number) => {
  return {
    day,
    session: [
      {
        hallNumber: halls[0].hallNumber,
        time: halls[0].time,
        available: seats,
        reserved: [],
        selected: [],
      },
      {
        hallNumber: halls[1].hallNumber,
        time: halls[1].time,
        available: seats,
        reserved: [],
        selected: [],
      },
      {
        hallNumber: halls[2].hallNumber,
        time: halls[2].time,
        available: seats,
        reserved: [],
        selected: [],
      },
    ],
  };
};
