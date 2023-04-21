import styled from "styled-components";

import { SliderItemsHorizontalWidth } from "../../../Slider/styles";

export const MovieHallBadgeWrapper = styled.div`
  ${({ theme }) => theme.flexAlignCenter};
  justify-content: space-between;
  width: ${SliderItemsHorizontalWidth}px;
  margin: 10px auto;
  cursor: pointer;
`;
