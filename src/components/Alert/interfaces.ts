import { AlertTypes } from "../../constants/alert";

export interface AlertProps {
  ms?: number;
}

export interface AlertWrapperStyleProps {
  type: AlertTypes;
}
