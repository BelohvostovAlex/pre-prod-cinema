import styled from "styled-components";

import { StyledRoundButtonProps } from "./interfaces";

export const StyledRoundButton = styled.div<StyledRoundButtonProps>`
  width: ${({ width }) => width || "36px"};
  height: ${({ height }) => height || "36px"};
  background: ${({ theme, background }) =>
    background || theme.colors.secondary};
  border-radius: ${({ theme }) => theme.border_radius.circle};
  padding: 5px;
  &:hover {
    ${({ theme }) => theme.hover}
  }
  svg {
    width: 100%;
    height: 100%;
  }
  cursor: pointer;
`;
