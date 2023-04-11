import styled from "styled-components";

import { SliderDirectionVariant } from "../../constants/slider";

import { SliderItemsProps } from "./interfaces";

const SliderWrapperSvgHeight = 16;
const SliderItemsWidth = 100;
const SliderItemsHeight = 330;

export const SliderWrapper = styled.div`
  ${({ theme }) => theme.flexAlignCenter};

  svg {
    height: ${SliderWrapperSvgHeight}px;
    width: auto;
    cursor: pointer;
    transition: 0.2s linear;
  }
  svg:first-of-type {
    margin-bottom: ${({ theme }) => theme.margin.mb10};
  }
  svg:hover {
    transform: scale(1.1);
  }
  svg path {
    stroke: ${({ theme }) => theme.colors.primary};
  }
`;

export const SliderItems = styled.div<SliderItemsProps>`
  ${({ theme }) => theme.flexAlignCenter};
  flex-direction: ${({ direction }) =>
    direction === SliderDirectionVariant.HORIZONTAL ? "row" : "column"};
  margin-right: 30px;
  height: ${SliderItemsHeight}px;
  width: ${SliderItemsWidth}px;
  position: relative;
  overflow: hidden;
`;

export const SliderControls = styled.div`
  ${({ theme }) => theme.flexAlignCenter};
  flex-direction: column;
`;
