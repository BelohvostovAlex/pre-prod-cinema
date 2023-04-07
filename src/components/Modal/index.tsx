import { FunctionComponent, useRef } from "react";

import RoundButton from "../UI/Buttons/RoundButton";

import useOnClickOutside from "../../hooks/useOnClickOutside";

import { Colors } from "../../constants/styles/colors";

import { ReactComponent as Close } from "../../assets/svg/tools/Close.svg";
import { ModalProps } from "./interfaces";
import { ModalButton, ModalContainer } from "./styles";

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
      <ModalButton>
        <RoundButton
          children={<Close />}
          onClick={onClose}
          background={Colors.DARK_GRAY}
        />
      </ModalButton>
    </ModalContainer>
  );
};

export default Modal;
