import styled from "styled-components";

import { MovieScreenCellWrapperProps } from "./interfaces";

const MovieScreenCellWrapperWidth = 36;
const MovieScreenCellWrapperHeight = 36;

export const MovieScreenCellWrapper = styled.td<MovieScreenCellWrapperProps>`
  border: ${({ theme, selected, reserved }) =>
    `solid 2px ${
      reserved
        ? theme.colors.lightGray
        : selected
        ? theme.colors.secondary
        : theme.colors.lightGray
    }`};
  background: ${({ theme, selected, reserved }) =>
    reserved
      ? theme.colors.lightGray
      : selected
      ? theme.colors.secondary
      : "transparent"};
  border-radius: ${({ theme }) => theme.border_radius[8]};
  width: ${MovieScreenCellWrapperWidth}px;
  height: ${MovieScreenCellWrapperHeight}px;
  margin: 6px;
  cursor: pointer;
  &:hover {
    transform: ${({ selected, reserved }) =>
      !selected && !reserved && "scale(1.1)"};
  }
  transition: 0.2s linear;
`;
