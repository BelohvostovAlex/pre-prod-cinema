export interface Badge {
  time: string;
  hallNumber: string;
}

export interface ChosenSeat {
  time: string;
  day: number;
  movie: string;
  seats: number[];
}

export interface UserChoiceState {
  chosenDay: number;
  chosenBadge: Badge;
  chosenMovie: string;
  chosenSeats: ChosenSeat[];
}
