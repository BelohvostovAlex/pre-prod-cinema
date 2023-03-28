import { FunctionComponent, useRef } from "react";

import useOnClickOutside from "../../hooks/useOnClickOutside";

import { ModalProps } from "./interfaces";
import { ReactComponent as Close } from "../../assets/svg/tools/Close.svg";
import { ModalContainer } from "./styles";

const Modal: FunctionComponent<ModalProps> = ({
  children,
  onClose,
  height,
  width,
}) => {
  const ref = useRef(null);
  useOnClickOutside({ ref, handler: onClose });

  return (
    <ModalContainer height={height} width={width} ref={ref}>
      {children}
      <Close onClick={onClose} />
    </ModalContainer>
  );
};

export default Modal;
