import styled from "styled-components";

import { AlertWrapperStyleProps } from "./interfaces";
import { AlertTypes } from "../../constants/alert";

const alertWrapperRight = 50;
const alertWrapperBottom = 50;

export const AlertWrapper = styled.div<AlertWrapperStyleProps>`
  position: fixed;
  right: ${alertWrapperRight}x;
  bottom: ${alertWrapperBottom}px;
  width: fit-content;
  padding: 10px 16px;
  background-color: ${({ theme }) => theme.colors.asphaltColor};
  border-radius: ${({ theme }) => theme.border_radius[10]};
  color: ${({ theme, type }) =>
    type === AlertTypes.ERROR ? theme.colors.red : theme.colors.green};
  border: ${({ theme, type }) =>
    `1px solid ${
      type === AlertTypes.ERROR ? theme.colors.red : theme.colors.green
    }`};
  ${({ theme }) => theme.typography.poppins_l};
  font-size: ${({ theme }) => theme.fontSize[14]};
  z-index: ${({ theme }) => theme.zIndex[100]};
`;
