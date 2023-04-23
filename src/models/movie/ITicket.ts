import { IDate } from "../IDate";

export interface ITicket {
  id: string;
  movie: string;
  time: string;
  day: IDate;
  price: string;
  seatsAmount: number;
  isCanceled: boolean;
}
