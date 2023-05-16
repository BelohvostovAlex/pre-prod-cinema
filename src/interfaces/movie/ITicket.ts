import { IDate } from "@interfaces/IDate";

export interface ITicket {
  id: string;
  userId: string;
  movie: string;
  time: string;
  day: IDate;
  price: number;
  seatsAmount: number;
  isCanceled: boolean;
}
