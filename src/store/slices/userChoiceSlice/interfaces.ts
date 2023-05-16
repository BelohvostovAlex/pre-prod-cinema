import { IDate } from "@interfaces/IDate";

export interface Badge {
  time: string;
  hallNumber: string;
}

export interface ChosenSeat {
  time: string;
  day: IDate;
  movie: string;
  seats: number[];
  price: number;
}

export interface UserChoiceState {
  chosenDay: IDate;
  chosenBadge: Badge;
  chosenMovie: string;
  chosenSeats: ChosenSeat[];
}
