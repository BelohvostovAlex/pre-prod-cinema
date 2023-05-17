import { FunctionComponent, useEffect } from "react";

import { initialAlertValue } from "@constants/alert";
import { useActions } from "@hooks/useActionts";
import { useAppSelector } from "@hooks/useAppSelector";
import { alertSelector } from "@store/slices/alertSlice/selectors";

import { AlertProps } from "./interfaces";
import { AlertWrapper } from "./styles";

const Alert: FunctionComponent<AlertProps> = ({ time = 4000 }) => {
  const { setIsAlertOpen } = useActions();
  const { isOpen, text, type } = useAppSelector(alertSelector);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setIsAlertOpen(initialAlertValue), time);
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return <AlertWrapper type={type}>{text}</AlertWrapper>;
};

export default Alert;
