import styled from "styled-components";

import { SliderDirectionVariant } from "../../constants/slider";

import { SliderItemsWrapperProps, SliderWrapperProps } from "./interfaces";

const SliderWrapperSvgHeight = 16;
const SliderWrapperHorizontalSvgHeight = 28;
const SliderItemsVerticalWidth = 100;
export const SliderItemsHorizontalWidth = 500;
const SliderItemsVerticalHeight = 330;
const SliderItemsHorizontalHeight = 106;

export const SliderWrapper = styled.div<SliderWrapperProps>`
  ${({ theme }) => theme.flexAlignCenter};

  svg {
    height: ${({ direction }) =>
      direction === SliderDirectionVariant.VERTICAL
        ? `${SliderWrapperSvgHeight}px`
        : `${SliderWrapperHorizontalSvgHeight}px`};
    width: auto;
    cursor: pointer;
    transition: 0.2s linear;
  }
  svg:first-of-type {
    margin-bottom: ${({ theme, direction }) =>
      direction === SliderDirectionVariant.VERTICAL
        ? theme.margin.mb10
        : "0px"};
    transform: ${({ direction }) =>
      direction === SliderDirectionVariant.HORIZONTAL && "rotate(-90deg)"};
  }
  svg:nth-of-type(2) {
    transform: ${({ direction }) =>
      direction === SliderDirectionVariant.HORIZONTAL && "rotate(-90deg)"};
  }
  svg:hover {
    transform: ${({ direction }) =>
      direction === SliderDirectionVariant.HORIZONTAL
        ? "rotate(-90deg) scale(1.1)"
        : "scale(1.1)"};
  }
  svg path {
    stroke: ${({ theme, direction }) =>
      direction === SliderDirectionVariant.VERTICAL
        ? theme.colors.primary
        : theme.colors.lightGray};
  }
`;

export const SliderItemsWrapper = styled.div<SliderItemsWrapperProps>`
  ${({ theme }) => theme.flexAlignCenter};
  flex-direction: ${({ direction }) =>
    direction === SliderDirectionVariant.HORIZONTAL ? "row" : "column"};
  margin-right: 30px;
  margin-left: ${({ direction }) =>
    direction === SliderDirectionVariant.HORIZONTAL ? "30px" : "0px"};
  width: ${({ direction }) =>
    direction === SliderDirectionVariant.HORIZONTAL
      ? `${SliderItemsHorizontalWidth}px`
      : `${SliderItemsVerticalWidth}px`};
  height: ${({ direction }) =>
    direction === SliderDirectionVariant.HORIZONTAL
      ? `${SliderItemsHorizontalHeight}px`
      : `${SliderItemsVerticalHeight}px`};
  position: relative;
  overflow: hidden;

  @media (max-width: ${({ theme }) => `${theme.breakPoints.m}px`}) {
    width: ${({ direction }) =>
      direction === SliderDirectionVariant.HORIZONTAL && "400px;"}
`;

export const SliderControls = styled.div`
  ${({ theme }) => theme.flexAlignCenter};
  flex-direction: column;
`;
