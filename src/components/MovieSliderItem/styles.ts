import styled from "styled-components";

import {
  MovieSliderImgHorizontalProps,
  MovieSliderItemWrapperProps,
} from "./interface";

const MovieSliderItemWrapperWidth = 68;
const MovieSliderItemWrapperHeight = 100;
const MovieSliderImgVerticalWidthPercent = 100;
const MovieSliderImgVerticalHeightPercent = 100;
const BookSliderItemSquareHW = {
  prevDirection: {
    width: "10%",
    height: "auto",
  },
  direction: {
    width: "11%",
    height: "auto",
  },
  center: {
    width: "13%",
    height: "auto",
  },
};

export const MovieSliderItemWrapperVertical = styled.div<MovieSliderItemWrapperProps>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  margin: 10px auto;
  width: ${MovieSliderItemWrapperWidth}px;
  height: ${MovieSliderItemWrapperHeight}px;
  border-radius: ${({ theme }) => theme.border_radius[10]};
  transform: ${({ top, center, bot }) =>
    top
      ? "translateY(0%) scale(0.8);"
      : center
      ? "translateY(110%) scale(1.1);"
      : bot
      ? "translateY(220%) scale(0.8);"
      : "translateY(310%) scale(0);"};
  transition: 0.2s ease-out;
  cursor: pointer;
`;

export const MovieSliderImgVertical = styled.img`
  width: ${MovieSliderImgVerticalWidthPercent}%;
  height: ${MovieSliderImgVerticalHeightPercent}%;
  border-radius: ${({ theme }) => theme.border_radius[10]};
`;

export const MovieSliderImgHorizontal = styled.img<MovieSliderImgHorizontalProps>`
  height: ${({ prevLeft, prevRight, left, right }) =>
    prevRight || prevLeft
      ? BookSliderItemSquareHW.prevDirection.height
      : left || right
      ? BookSliderItemSquareHW.direction.height
      : BookSliderItemSquareHW.center.height};
  width: ${({ prevLeft, prevRight, left, right }) =>
    prevRight || prevLeft
      ? BookSliderItemSquareHW.prevDirection.width
      : left || right
      ? BookSliderItemSquareHW.direction.width
      : BookSliderItemSquareHW.center.width};
  border-radius: ${({ theme }) => theme.border_radius[10]};
`;

export const MovieSliderItemWrapperHorizontal = styled.div<MovieSliderItemWrapperProps>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: start;
  margin: 10px auto;
  width: 490px;
  height: 200px;
  border-radius: ${({ theme }) => theme.border_radius[10]};
  transform: ${({ left, center, right, prevLeft, prevRight }) =>
    prevLeft
      ? "translateX(3%)"
      : left
      ? "translateX(20%)"
      : center
      ? "translateX(40.5%)"
      : right
      ? "translateX(63.5%)"
      : prevRight
      ? "translateX(83%)"
      : "translateX(110%)"};
  transition: 0.2s ease-out;
  cursor: pointer;
`;
