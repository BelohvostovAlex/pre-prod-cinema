import { IDate } from "../../../../models/IDate";
import { Badge, UserChoiceState } from "../interfaces";

export const defaultState: UserChoiceState = {
  chosenDay: {} as IDate,
  chosenMovie: "",
  chosenBadge: {} as Badge,
  chosenSeats: [],
};
