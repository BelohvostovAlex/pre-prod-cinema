import { IDate } from "@interfaces/IDate";

export interface Session {
  time: string;
  hallNumber: string;
  available: number[];
  selected: number[];
  reserved: number[];
}

interface MovieInfo {
  day: IDate;
  session: Session[];
}

export interface CinemaInfo {
  movie: string;
  movieInfoBookings: MovieInfo[];
}

export interface CinemaState {
  cinema: CinemaInfo[];
}

export type ReservePayload = Pick<Session, "time" | "hallNumber"> &
  Pick<MovieInfo, "day"> &
  Pick<CinemaInfo, "movie"> & { seat: number[] };
