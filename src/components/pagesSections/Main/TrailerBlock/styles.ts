import styled from "styled-components";

const TrailerBlockWidthPercent = 100;
const TrailerItemWrapperWidth = 50;
const TrailerItemWrapperWidthM = 100;
const TrailerItemWrapperHeight = 260;
const TrailerItemWrapperHeightL = 200;
const TrailerItemLayoutWidthPercent = 20;
const TrailerItemLayoutHeightPercent = 100;

export const TrailerBlockWrapper = styled.div`
  ${({ theme }) => theme.flexAlignCenter};
  justify-content: space-between;
  width: ${TrailerBlockWidthPercent}%;
  padding: 30px 0px;

  @media (max-width: ${({ theme }) => `${theme.breakPoints.m}px`}) {
    flex-direction: column;
  }
`;

export const TrailerItemWrapper = styled.div`
  width: ${TrailerItemWrapperWidth}%;
  height: ${TrailerItemWrapperHeight}px;
  position: relative;

  @media (max-width: ${({ theme }) => `${theme.breakPoints.l}px`}) {
    height: ${TrailerItemWrapperHeightL}px;
  }

  @media (max-width: ${({ theme }) => `${theme.breakPoints.m}px`}) {
    width: ${TrailerItemWrapperWidthM}%;
  }
`;

export const TrailerItemLayout = styled.div`
  background: ${({ theme }) =>
    `linear-gradient(to right, ${theme.colors.backgroundColor} 20%, transparent 70%);`};
  opacity: 0.9;
  width: ${TrailerItemLayoutWidthPercent}%;
  height: ${TrailerItemLayoutHeightPercent}%;
  position: absolute;
  left: 0px;
  top: 0px;
`;
