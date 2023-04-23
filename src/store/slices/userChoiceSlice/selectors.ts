import { RootState } from "../..";

export const userChoiceSelector = (state: RootState) => state.userChoice;
export const chosenDaySelector = (state: RootState) =>
  state.userChoice.chosenDay;
