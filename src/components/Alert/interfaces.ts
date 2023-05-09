import { AlertTypes } from "@constants/alert";

export interface AlertProps {
  time?: number;
}

export interface AlertWrapperStyleProps {
  type: AlertTypes;
}
