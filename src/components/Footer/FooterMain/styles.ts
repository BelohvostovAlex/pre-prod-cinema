import styled from "styled-components";

import { FooterWrapperProps } from "./interfaces";

const FooterWrapperHeight = 200;
const FooterWrapperWidthPercent = 100;

export const FooterWrapper = styled.div<FooterWrapperProps>`
  display: ${({ visible }) => (visible ? "block" : "none")};
  height: ${FooterWrapperHeight}px;
  width: ${FooterWrapperWidthPercent}%;
`;
