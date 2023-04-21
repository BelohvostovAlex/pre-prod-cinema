import styled from "styled-components";

import { MovieHallBadgeWrapperProps } from "./interfaces";

const MovieHallBadgeWrapperWidthPercent = 31;
const SeatSvgHeight = 20;
const SeatSvgWidth = 20;

export const MovieHallBadgeWrapper = styled.div<MovieHallBadgeWrapperProps>`
  width: ${MovieHallBadgeWrapperWidthPercent}%;
  background: ${({ theme }) => theme.colors.extraDarkGray};
  border-radius: ${({ theme }) => theme.border_radius[20]};
  border: ${({ isActive, theme }) =>
    isActive
      ? `solid 3px ${theme.colors.secondary}`
      : `solid 3px ${theme.colors.extraDarkGray}`};
  color: ${({ theme }) => theme.colors.primary};
  padding: 10px;
`;

export const MovieHallBadgeTime = styled.h3`
  ${({ theme }) => theme.typography.poppins_sb};
  font-size: ${({ theme }) => theme.fontSize[14]};
`;

export const MovieHallBadgeNumber = styled.h4`
  ${({ theme }) => theme.typography.poppins_r};
  font-size: ${({ theme }) => theme.fontSize[14]};
`;

export const MovieHallBadgeSeats = styled.p`
  ${({ theme }) => theme.typography.poppins_l};
  font-size: ${({ theme }) => theme.fontSize[10]};
  ${({ theme }) => theme.flexAlignCenter};
  svg {
    margin-right: 5px;
    height: ${SeatSvgHeight}px;
    width: ${SeatSvgWidth}px;
  }
  svg path {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;
