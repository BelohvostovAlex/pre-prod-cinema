import styled from "styled-components";

import { StyledRoundButtonProps } from "./interfaces";

const styledRoundButtonSVGWidthPercent = 100;
const styledRoundButtonSVGHeightPercent = 100;

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
    width: ${styledRoundButtonSVGWidthPercent}%;
    height: ${styledRoundButtonSVGHeightPercent}%;
  }
  ${({ theme }) => theme.flexAlignCenter}
  justify-content: center;
  cursor: pointer;
  ${({ extra }) => extra}
`;
