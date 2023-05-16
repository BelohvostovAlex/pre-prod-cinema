import { AlertTypes } from "@constants/alert";

export interface AlertState {
  isOpen: boolean;
  text: string;
  type: AlertTypes;
}
