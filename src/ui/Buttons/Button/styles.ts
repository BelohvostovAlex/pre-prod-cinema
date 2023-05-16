import styled from "styled-components";

import { ButtonStyleProps } from "./interfaces";

const svgWidth = 16;

export const StyledButton = styled.button<ButtonStyleProps>`
  ${({ theme, typography }) => theme.typography[typography]}
  font-size: ${({ fontSize, theme }) => fontSize || theme.fontSize};
  background: ${({ theme: { button }, variant, backgroundColor }) =>
    (variant && button[variant].background) || backgroundColor};
  color: ${({ theme: { button }, variant, color }) =>
    (variant && button[variant].color) || color};
  border-radius: ${({ theme }) => theme.border_radius[10]};
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  margin: ${({ margin }) => margin || "0px"};
  ${({ theme }) => theme.flexAlignCenter};
  justify-content: center;
  position: relative;
  border: none;
  svg {
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translate(-10%, -50%);
    width: ${svgWidth}px;
    height: auto;
  }
  padding: 6px 36px;
  cursor: pointer;
  &:hover {
    ${({ theme }) => theme.hover}
  }
  transition: linear 0.2s;
`;
