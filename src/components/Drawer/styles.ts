import styled from "styled-components";

import { StyledDrawerProps } from "./interfaces";

const StyledDrawerHeightPercent = 100;
const StyledDrawerWidthPercent = 28;
const DrawerTitleWidthPercent = 100;
const DrawerArrowWrapperWidth = 36;
const DrawerArrowWrapperSvgWidth = 100;

export const StyledDrawer = styled.div<StyledDrawerProps>`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  height: ${StyledDrawerHeightPercent}%;
  width: ${StyledDrawerWidthPercent}%;
  z-index: ${({ theme }) => theme.zIndex[100]};
  padding: ${({ theme }) => theme.padding.drawer};
  background: ${({ theme }) => theme.colors.backgroundColor};
  box-shadow: -4px 0px 8px 0px rgba(34, 60, 80, 0.4);
`;

export const DrawerTitle = styled.h3`
  ${({ theme }) => theme.typography.poppins_l}
  font-size: ${({ theme }) => theme.fontSize[21]};
  color: ${({ theme }) => theme.colors.primary};
  position: relative;
  width: ${DrawerTitleWidthPercent}%;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.margin.mb50};
`;

export const DrawerArrowWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(0%, -50%);
  width: ${DrawerArrowWrapperWidth}px;
  cursor: pointer;
  svg {
    display: block;
    width: ${DrawerArrowWrapperSvgWidth}%;
    height: auto;
  }
  svg path {
    fill: ${({ theme }) => theme.colors.primary};
  }
  svg:hover path {
    fill: ${({ theme }) => theme.colors.secondary};
    transition-duration: 0.3s;
  }
`;
