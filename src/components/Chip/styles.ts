import styled from "styled-components";

import { ChipWrapperProps } from "./interfaces";

export const ChipWrapper = styled.div<ChipWrapperProps>`
  padding: 5px 6px;
  border-radius: ${({ theme }) => theme.border_radius[10]};
  background: ${({ theme, background }) => background || theme.colors.darkGray};
  color: ${({ theme }) => theme.colors.primary};
  ${({ theme }) => theme.typography.poppins_m};
  font-size: ${({ theme }) => theme.fontSize[6]};
  width: fit-content;
  margin: 5px;
`;
