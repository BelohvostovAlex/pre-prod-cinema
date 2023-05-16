import styled from "styled-components";

const MovieTitleWidth = 290;
const MovieBtnNextWrapperWidthSvg = 36;
const MovieBtnNextWrapperHeightSvg = 20;

export const MovieHeaderWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
`;

export const MovieTitle = styled.h2`
  ${({ theme }) => theme.typography.nunito_r};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize[26]};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.margin.mb20};
  width: ${MovieTitleWidth}px;

  @media (max-width: ${({ theme }) => `${theme.breakPoints.m}px`}) {
    font-size: ${({ theme }) => theme.fontSize[21]};
  }
`;

export const MovieBtnNextWrapper = styled.div`
  ${({ theme }) => theme.flexAlignCenter};
  svg {
    width: ${MovieBtnNextWrapperWidthSvg}px;
    height: ${MovieBtnNextWrapperHeightSvg}px;
    margin-left: 15px;
    margin-top: 10px;
    cursor: pointer;
  }
  svg path {
    fill: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => `${theme.breakPoints.m}px`}) {
    button {
      display: none;
    }
  }
`;
