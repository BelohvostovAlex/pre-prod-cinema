import styled from "styled-components";

import { StyledSecondaryButtonProps } from "./interfaces";

const styledSecondaryButtonAfterHeight = 1;

export const StyledSecondaryButton = styled.button<StyledSecondaryButtonProps>`
  color: ${({ theme }) => theme.colors.primary};
  ${({ theme, typography }) => theme.typography[typography]};
  font-size: ${({ fontSize, theme }) => fontSize || theme.fontSize[21]};
  &:after {
    position: absolute;
    content: "";
    bottom: 6px;
    left: 0;
    right: 0;
    height: ${styledSecondaryButtonAfterHeight}px;
    background-color: ${({ theme }) => theme.colors.primary};
    z-index: ${({ theme }) => theme.zIndex[1]};
    display: block;
  }
  cursor: pointer;
  ${({ extra }) => extra};
  &:hover {
    ${({ theme }) => theme.hover};
  }
  background: transparent;
  border: none;
  position: relative;
  transition: linear 0.2s;
`;
