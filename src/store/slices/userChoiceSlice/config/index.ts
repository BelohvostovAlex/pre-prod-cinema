import { IDate } from "../../../../models/IDate";
import { Badge } from "../interfaces";

export const defaultState = {
  chosenDay: {} as IDate,
  chosenMovie: "",
  chosenBadge: {} as Badge,
  chosenSeats: [],
};
