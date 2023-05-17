import { Link } from "react-router-dom";

import styled from "styled-components";

const logoWrapperWidth = 140;
const logoWrapperWidthSm = 110;
const logoWrapperSvgWidth = 100;

export const NavWrapper = styled.div`
  ${({ theme }) => theme.flexAlignCenter};
`;

export const LogoWrapper = styled(Link)`
  width: ${logoWrapperWidth}px;
  svg {
    width: ${logoWrapperSvgWidth}%;
  }
  margin-right: 50px;
  cursor: pointer;
  svg path {
    fill: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => `${theme.breakPoints.sm}px`}) {
    margin-right: 20px;
    width: ${logoWrapperWidthSm}px;
  }
`;

export const BurgerWrapper = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: ${({ theme }) => `${theme.breakPoints.s}px`}) {
    display: block;
    height: 30px;
    svg {
      width: 30px;
    }
    svg path {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
`;
