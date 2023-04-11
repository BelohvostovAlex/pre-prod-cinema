import styled from "styled-components";

import { MovieInfoBlockWrapperProps } from "./interfaces";

const MovieInfoBlockWrapperWidthPercent = 50;

export const MovieInfoBlockWrapper = styled.div<MovieInfoBlockWrapperProps>`
  ${({ theme, typography }) => theme.typography[typography]};
  color: ${({ theme }) => theme.colors.primary};
  width: ${MovieInfoBlockWrapperWidthPercent}%;
`;

export const MovieInfoBlockTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize[26]};
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.margin.mb20};
`;

export const MovieInfoBlockText = styled.p`
  font-size: ${({ theme }) => theme.fontSize[18]};
`;
