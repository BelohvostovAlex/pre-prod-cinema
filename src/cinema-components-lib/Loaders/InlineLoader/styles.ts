import styled, { keyframes } from "styled-components";

import { Colors } from "../../../constants/styles/colors";

import { InlineLoaderProps } from "./interfaces";

const loaderFirstAnimation = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const loaderSecondAnimation = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
`;

const loaderThirdAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

export const LoaderWrapper = styled.div`
  display: block;
  position: relative;
  width: 30px;
  height: 30px;
  margin: 0 auto;
  transform: translateX(-100%);
`;
export const LoaderItem = styled.div<InlineLoaderProps>`
  position: absolute;
  top: 33px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ color }) => (color ? color : Colors.WHITE)};
  animation-timing-function: cubic-bezier(0, 1, 1, 0);

  &:nth-child(1) {
    left: 8px;
    animation: ${loaderFirstAnimation} 0.6s infinite;
  }

  &:nth-child(2) {
    left: 8px;
    animation: ${loaderSecondAnimation} 0.6s infinite;
  }

  &:nth-child(3) {
    left: 32px;
    animation: ${loaderSecondAnimation} 0.6s infinite;
  }

  &:nth-child(4) {
    left: 56px;
    animation: ${loaderThirdAnimation} 0.6s infinite;
  }
`;
