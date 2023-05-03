import styled from "styled-components";

import { BookSliderItemWrapperProps } from "./interfaces";

export const BookSliderItemWrapperWidth = 500;
const BookSliderItemWrapperHeight = 110;
const BookSliderItemWrapperVerticalWidth = 90;
const BookSliderItemWrapperVerticalHeight = 100;
const BookSliderItemSquareHW = {
  prevDirection: {
    width: "65px",
    height: "65px",
  },
  direction: {
    width: "75px",
    height: "75px",
  },
  center: {
    width: "85px",
    height: "85px",
  },
};

export const BookSliderItemWrapperHorizontal = styled.div<BookSliderItemWrapperProps>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: start;
  margin: 10px auto;
  width: ${BookSliderItemWrapperWidth}px;
  height: ${BookSliderItemWrapperHeight}px;
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
  zindex: ${({ theme, center }) =>
    center ? theme.zIndex[100] : theme.zIndex[0]};
`;

export const BookSliderItemSquare = styled.div<BookSliderItemWrapperProps>`
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
  opacity: ${({ prevLeft, prevRight, left, right, center }) =>
    !prevLeft && !prevRight && !left && !right && !center ? "0" : "1"};
  border-radius: ${({ theme }) => theme.border_radius[10]};
  background: ${({ theme, center }) =>
    center ? theme.colors.secondary : theme.colors.lightGray};
  ${({ theme }) => theme.flexAlignCenter};
  justify-content: center;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.typography.nunito_l};
  font-size: ${({ theme }) => theme.fontSize[21]};
  color: ${({ theme }) => theme.colors.black};
`;

export const BookSliderItemMonth = styled.span`
  ${({ theme }) => theme.typography.nunito_l};
  font-size: ${({ theme }) => theme.fontSize[12]};
  color: ${({ theme }) => theme.colors.black};
`;

export const BookSliderItemWrapperVertical = styled.div<BookSliderItemWrapperProps>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  margin: 10px auto;
  width: ${BookSliderItemWrapperVerticalWidth}px;
  height: ${BookSliderItemWrapperVerticalHeight}px;
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
