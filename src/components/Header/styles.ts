import { Link } from "react-router-dom";
import styled from "styled-components";

const headerWidthPercent = 100;
const headerHeight = 100;
const logoWrapperWidth = 140;
const logoWrapperSvgWidth = 100;
const profileBtnSvgWidth = 30;

export const HeaderWrapper = styled.div`
  width: ${headerWidthPercent}%;
  height: ${headerHeight}px;
  padding: ${({ theme }) => theme.padding.header};
  ${({ theme }) => theme.flexAlignCenter};
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.backgroundColor};
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
`; // поменять цвет лого

export const HeaderButtonGroup = styled.div`
  ${({ theme }) => theme.flexAlignCenter};
  svg path {
    fill: ${({ theme }) => theme.colors.primary};
  }
  &:hover svg path {
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
`;
