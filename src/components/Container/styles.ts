import styled from "styled-components";

const ContainerWrapperWidthPercent = 100;
const ContainerWrapperHeightPercent = 100;

export const ContainerWrapper = styled.div`
  width: ${ContainerWrapperWidthPercent}%;
  height: ${ContainerWrapperHeightPercent}%;
  margin: 0 auto;
  padding: 0px 120px;

  @media (max-width: ${({ theme }) => `${theme.breakPoints.l}px`}) {
    padding: 0px 100px;
  }

  @media (max-width: ${({ theme }) => `${theme.breakPoints.m}px`}) {
    padding: 0px 60px;
  }

  @media (max-width: ${({ theme }) => `${theme.breakPoints.sm}px`}) {
    padding: 0px 30px;
  }
`;
