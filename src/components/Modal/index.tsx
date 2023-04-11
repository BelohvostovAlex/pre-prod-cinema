import { FunctionComponent, useRef } from "react";

import { ReactComponent as Close } from "../../assets/svg/tools/Close.svg";
import { Colors } from "../../constants/styles/colors";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import RoundButton from "../UI/Buttons/RoundButton";

import { ModalButton, ModalContainer } from "./styles";
import { ModalProps } from "./interfaces";

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
