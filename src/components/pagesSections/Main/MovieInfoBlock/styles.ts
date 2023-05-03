import styled from "styled-components";

import { MovieInfoBlockWrapperProps } from "./interfaces";

const MovieInfoBlockWrapperWidthPercent = 50;
const MovieInfoBlockWrapperWidthPercentM = 100;

export const MovieInfoBlockWrapper = styled.div<MovieInfoBlockWrapperProps>`
  ${({ theme, typography }) => theme.typography[typography]};
  color: ${({ theme }) => theme.colors.primary};
  width: ${MovieInfoBlockWrapperWidthPercent}%;

  @media (max-width: ${({ theme }) => `${theme.breakPoints.m}px`}) {
    width: ${MovieInfoBlockWrapperWidthPercentM}%;
  }
`;

export const MovieInfoBlockTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize[26]};
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.margin.mb20};

  @media (max-width: ${({ theme }) => `${theme.breakPoints.l}px`}) {
    font-size: ${({ theme }) => theme.fontSize[18]};
  }
`;

export const MovieInfoBlockText = styled.p`
  font-size: ${({ theme }) => theme.fontSize[18]};

  @media (max-width: ${({ theme }) => `${theme.breakPoints.l}px`}) {
    font-size: ${({ theme }) => theme.fontSize[14]};
  }
`;
