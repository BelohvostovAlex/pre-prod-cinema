import styled from "styled-components";

import { SliderItemsHorizontalWidth } from "cinema-components-lib/Slider/styles";

export const MovieHallBadgeWrapper = styled.div`
  ${({ theme }) => theme.flexAlignCenter};
  justify-content: space-between;
  width: ${SliderItemsHorizontalWidth}px;
  margin: 10px auto;
  cursor: pointer;

  @media (max-width: ${({ theme }) => `${theme.breakPoints.m}px`}) {
    flex-direction: column;
    width: 100%;
  }
`;