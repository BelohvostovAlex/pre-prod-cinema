import styled from "styled-components";

import { DividerWrapperProps } from "./interfaces";

export const DividerWrapper = styled.div<DividerWrapperProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: ${({ color }) => color};
`;
