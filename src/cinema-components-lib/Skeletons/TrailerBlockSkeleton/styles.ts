import styled from "styled-components";

const boxWidthPercent = 100;
const boxHeightPercent = 100;

export const Box = styled.div`
  height: ${boxHeightPercent}%;
  width: ${boxWidthPercent}%;
  ${({ theme }) => theme.animations.skeleton};
  margin-left: 10px;

  @media (max-width: ${({ theme }) => `${theme.breakPoints.m}px`}) {
    margin-left: 0px;
  }
`;
