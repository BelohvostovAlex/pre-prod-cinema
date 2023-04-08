import { FunctionComponent, useEffect } from "react";

import { AlertProps } from "./interfaces";
import { AlertWrapper } from "./styles";

import { useAppSelector } from "../../hooks/useAppSelector";
import { useActions } from "../../hooks/useActionts";
import { alertSelector } from "../../store/slices/alertSlice/selectors";
import { initialAlertValue } from "../../constants/alert";

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
