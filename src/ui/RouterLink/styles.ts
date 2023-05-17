import { Link } from "react-router-dom";

import styled from "styled-components";

import { StyledLinkProps } from "./interfaces";

const styledLinkAfterHeight = 1;

export const StyledLink = styled(Link)<StyledLinkProps>`
  color: ${({ theme, $active }) =>
    $active ? theme.colors.secondary : theme.colors.primary};
  ${({ theme, typography }) => theme.typography[typography]};
  font-size: ${({ fontSize, theme }) => fontSize || theme.fontSize[14]};
  &:after {
    position: absolute;
    content: "";
    bottom: 2px;
    left: 0;
    right: 0;
    height: ${styledLinkAfterHeight}px;
    background-color: ${({ theme, $active }) =>
      $active ? theme.colors.secondary : theme.colors.primary};
    z-index: 1;
    display: ${({ $active }) => ($active ? "block" : "none")};
  }
  cursor: pointer;
  ${({ extra }) => extra};
  &:hover {
    ${({ theme }) => theme.hover}
  }
  position: relative;
`;
