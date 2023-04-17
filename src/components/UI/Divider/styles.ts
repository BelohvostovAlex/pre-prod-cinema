import styled from "styled-components";

import { DividerWrapperProps } from "./interfaces";

const dividerWrapperWidthPercent = 100;

export const DividerWrapper = styled.div<DividerWrapperProps>`
  width: ${dividerWrapperWidthPercent}%;
  height: ${({ height }) => height};
  background: ${({ color }) => color};
`;
