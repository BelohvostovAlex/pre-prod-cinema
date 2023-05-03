import styled from "styled-components";

import { MovieScreenCellWrapperProps } from "./interfaces";

const MovieScreenCellWrapperWidth = 36;
const MovieScreenCellWrapperHeight = 36;
const MovieScreenCellWrapperWidthM = 30;
const MovieScreenCellWrapperHeightM = 30;
const MovieScreenCellWrapperWidthS = 23;
const MovieScreenCellWrapperHeightS = 23;

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

  @media (max-width: ${({ theme }) => `${theme.breakPoints.m}px`}) {
    width: ${MovieScreenCellWrapperWidthM}px;
    height: ${MovieScreenCellWrapperHeightM}px;
    margin: 4px;
  }

  @media (max-width: ${({ theme }) => `${theme.breakPoints.s}px`}) {
    width: ${MovieScreenCellWrapperWidthS}px;
    height: ${MovieScreenCellWrapperHeightS}px;
    margin: 3px;
  }
`;
