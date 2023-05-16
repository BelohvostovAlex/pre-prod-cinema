import { Dispatch, SetStateAction } from "react";

export interface HeaderButtonsGroupProps {
  handleAuthPortalOpen: () => void;
  setIsSignUp: Dispatch<SetStateAction<boolean>>;
}
