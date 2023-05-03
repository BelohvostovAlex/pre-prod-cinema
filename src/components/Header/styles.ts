import { Link } from "react-router-dom";
import styled from "styled-components";

const headerWidthPercent = 100;
const headerHeight = 80;
const logoWrapperWidth = 140;
const logoWrapperWidthSm = 110;
const logoWrapperSvgWidth = 100;
const profileBtnSvgWidth = 30;
const HeaderButtonGroupSvgWidth = 25;
const HeaderButtonGroupSvgHeight = 25;

export const HeaderWrapper = styled.div`
  width: ${headerWidthPercent}%;
  height: ${headerHeight}px;
  padding: ${({ theme }) => theme.padding.header};
  ${({ theme }) => theme.flexAlignCenter};
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  transition: background-color ease-in 0.2s;
`;

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
`; // поменять цвет лого

export const HeaderButtonGroup = styled.div`
  ${({ theme }) => theme.flexAlignCenter};
  svg {
    width: ${HeaderButtonGroupSvgWidth}px;
    height: ${HeaderButtonGroupSvgHeight}px;
    cursor: pointer;
  }
  svg path {
    fill: ${({ theme }) => theme.colors.primary};
  }
  svg:hover path {
    fill: ${({ theme }) => theme.colors.secondary};
    transition-duration: 0.3s;
  }
`;

export const ProfileBtn = styled.div`
  ${({ theme }) => theme.flexAlignCenter};
  &:hover svg path {
    fill: ${({ theme }) => theme.colors.secondary};
    transition-duration: 0.3s;
  }
  svg {
    width: ${profileBtnSvgWidth}px;
  }
  svg path {
    fill: ${({ theme }) => theme.colors.primary};
  }
  cursor: pointer;
  :hover {
    ${({ theme }) => theme.hover}
  }
`;

export const ProfileBtnText = styled.p`
  ${({ theme }) => theme.typography.poppins_l};
  font-size: ${({ theme }) => theme.fontSize[18]};
  margin-right: 15px;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: ${({ theme }) => `${theme.breakPoints.sm}px`}) {
    display: none;
  }
`;

export const BurgerWrapper = styled.div`
  display: none;

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
