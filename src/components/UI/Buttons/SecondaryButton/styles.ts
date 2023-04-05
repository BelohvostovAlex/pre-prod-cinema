import styled from "styled-components";

import { StyledSecondaryButtonProps } from "./interfaces";

export const StyledSecondaryButton = styled.button<StyledSecondaryButtonProps>`
  color: ${({ theme }) => theme.colors.primary};
  ${({ theme, typography }) => theme.typography[typography]};
  font-size: ${({ fontSize }) => fontSize || "21px"};
  &:after {
    position: absolute;
    content: "";
    bottom: 6px;
    left: 0;
    right: 0;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.primary};
    z-index: 1;
    display: block;
  }
  cursor: pointer;
  ${({ extra }) => extra};
  &:hover {
    ${({ theme }) => theme.hover}
  }
  background: transparent;
  border: none;
  position: relative;
`;
