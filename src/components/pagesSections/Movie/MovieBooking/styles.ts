import styled from "styled-components";

import { SliderItemsHorizontalWidth } from "../../../Slider/styles";

const MovieBookingWrapperWidthPercent = 100;

export const MovieBookingWrapper = styled.div`
  padding: 50px 0px 20px 0px;
  width: ${MovieBookingWrapperWidthPercent}%;
  ${({ theme }) => theme.flexAlignCenter};
  flex-direction: column;
`;

export const MovieBookingTitle = styled.h2`
  ${({ theme }) => theme.typography.nunito_b};
  font-size: ${({ theme }) => theme.fontSize[26]};
  color: ${({ theme }) => theme.colors.lightGray};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.margin.mb20};
`;

export const MovieHallBadgeWrapper = styled.div`
  ${({ theme }) => theme.flexAlignCenter};
  justify-content: space-between;
  width: ${SliderItemsHorizontalWidth}px;
  margin-top: 30px;
`;
