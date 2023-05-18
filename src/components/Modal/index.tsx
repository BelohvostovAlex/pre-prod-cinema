import { FunctionComponent, useRef } from "react";

import { RoundButton } from "cinema-ui-belohvostov";

import Close from "@assets/svg/tools/Close.svg";
import Portal from "@components/Portal";
import { Colors } from "@constants/styles/colors";
import useOnClickOutside from "@hooks/useOnClickOutside";

import { defaultModalWidth } from "./config";
import { ModalProps } from "./interfaces";
import { ModalButtonWrapper, ModalContainer } from "./styles";

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
      <ModalContainer height={height} width={width} ref={ref} data-cy="modal">
        {children}
        <ModalButtonWrapper data-cy="close-modal-btn-wrapper">
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
