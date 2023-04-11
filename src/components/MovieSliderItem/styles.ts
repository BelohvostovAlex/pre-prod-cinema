import styled from "styled-components";

import { MovieSliderItemWrapperProps } from "./interface";

const MovieSliderItemWrapperWidth = 68;
const MovieSliderItemWrapperHeight = 100;
const MovieSliderImgWidthPercent = 100;
const MovieSliderImgHeightPercent = 100;

export const MovieSliderItemWrapper = styled.div<MovieSliderItemWrapperProps>`
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
  zindex: ${({ theme, center }) => (center ? theme.zIndex[100] : "0")};
`;

export const MovieSliderImg = styled.img`
  width: ${MovieSliderImgWidthPercent}%;
  height: ${MovieSliderImgHeightPercent}%;
  border-radius: ${({ theme }) => theme.border_radius[10]};
`;
