import styled from "styled-components";

import { FooterWrapperProps } from "./interfaces";

export const FooterWrapper = styled.div<FooterWrapperProps>`
  display: ${({ visible }) => (visible ? "block" : "none")};
`;
