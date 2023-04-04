import styled from "styled-components";

import { AlertWrapperStyleProps } from "./interfaces";
import { AlertTypes } from "../../constants/alert";

export const AlertWrapper = styled.div<AlertWrapperStyleProps>`
  position: fixed;
  right: 50px;
  bottom: 50px;
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
  font-size: 14px;
  z-index: 100;
`;
