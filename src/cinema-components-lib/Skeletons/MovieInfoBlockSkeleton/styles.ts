import styled from "styled-components";

const boxWidthPercent = 50;
const boxWidthPercentM = 100;
const titleHeight = 32;
const titleWidthPercent = 90;
const textHeight = 50;
const textWidthPercent = 100;

export const Box = styled.div`
  width: ${boxWidthPercent}%;

  @media (max-width: ${({ theme }) => `${theme.breakPoints.m}px`}) {
    width: ${boxWidthPercentM}%;
    margin-bottom: ${({ theme }) => theme.margin.mb10};
  }
`;

export const Title = styled.div`
  height: ${titleHeight}px;
  width: ${titleWidthPercent}%;
  margin-bottom: ${({ theme }) => theme.margin.mb20};
  ${({ theme }) => theme.animations.skeleton};
`;

export const Text = styled.div`
  height: ${textHeight}px;
  width: ${textWidthPercent}%;
  ${({ theme }) => theme.animations.skeleton};
`;
