import { FunctionComponent, useRef } from "react";
import { RoundButton } from "cinema-ui-belohvostov";

import { ReactComponent as Close } from "@assets/svg/tools/Close.svg";
import { Colors } from "@constants/styles/colors";
import useOnClickOutside from "@hooks/useOnClickOutside";
import Portal from "@components/Portal";

import { ModalButtonWrapper, ModalContainer } from "./styles";
import { ModalProps } from "./interfaces";
import { defaultModalWidth } from "./config";

const Modal: FunctionComponent<ModalProps> = ({
  children,
  onClose,
  isOpen,
  height,
  width = defaultModalWidth,
}) => {
  const ref = useRef(null);
  useOnClickOutside({ ref, handler: onClose });

  return (
    <Portal showContent={isOpen}>
      <ModalContainer height={height} width={width} ref={ref}>
        {children}
        <ModalButtonWrapper>
          <RoundButton
            children={<Close />}
            onClick={onClose}
            background={Colors.DARK_GRAY}
          />
        </ModalButtonWrapper>
      </ModalContainer>
    </Portal>
  );
};

export default Modal;
