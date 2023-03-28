import styled from "styled-components";

import { ModalContainerProps } from "./interfaces";

export const ModalContainer = styled.div<ModalContainerProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({ width }) => width || "400px"};
  height: ${({ height }) => height || "400px"};
  padding: 40px 110px;
  background: #1e1f27;
  color: #ffffff;
`;
