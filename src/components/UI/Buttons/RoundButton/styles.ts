import styled from "styled-components";

import { StyledRoundButtonProps } from "./interfaces";

const styledRoundButtonSVGWidthPercent = 50;
const styledRoundButtonSVGHeightPercent = 50;

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
  svg path {
    fill: ${({ theme }) => theme.colors.primary};
  }
  ${({ theme }) => theme.flexAlignCenter};
  justify-content: center;
  cursor: pointer;
  ${({ extra }) => extra}
`;
