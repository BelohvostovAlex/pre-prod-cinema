import { FunctionComponent, useEffect } from "react";

import { useAppSelector } from "../../hooks/useAppSelector";
import { useActions } from "../../hooks/useActionts";
import { alertSelector } from "../../store/slices/alertSlice/selectors";

import { initialAlertValue } from "../../constants/alert";

import { AlertProps } from "./interfaces";
import { AlertWrapper } from "./styles";

const Alert: FunctionComponent<AlertProps> = ({ ms = 4000 }) => {
  const { setIsAlertOpen } = useActions();
  const { isOpen, text, type } = useAppSelector(alertSelector);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setIsAlertOpen(initialAlertValue), ms);
    }
  }, [setIsAlertOpen, ms, isOpen]);

  if (!isOpen) {
    return null;
  }

  return <AlertWrapper type={type}>{text}</AlertWrapper>;
};

export default Alert;
