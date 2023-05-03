import styled from "styled-components";

import { ModalContainerProps } from "./interfaces";

const ModalContainerWidthSm = 360;

export const ModalContainer = styled.div<ModalContainerProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({ width }) => width || "fit-content"};
  height: ${({ height }) => height || "fit-content"};
  padding: ${({ theme }) => theme.padding.modal};
  background: ${({ theme }) => theme.colors.backgroundColor};
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => `${theme.breakPoints.sm}px`}) {
    width: ${ModalContainerWidthSm}px;
    padding: ${({ theme }) => theme.padding.modalMobile};
  }
`;

export const ModalButtonWrapper = styled.div`
  position: absolute;
  top: 5%;
  right: 7%;
`;
