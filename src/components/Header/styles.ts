import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 100px;
  padding: 20px 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.backgroundColor};
`;

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoWrapper = styled(Link)`
  width: 140px;
  svg {
    width: 100%;
  }
  margin-right: 50px;
  cursor: pointer;
`;

export const HeaderButtonGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileBtn = styled.div`
  display: flex;
  align-items: center;
  &:hover svg path {
    fill: ${({ theme }) => theme.colors.secondary};
    transition-duration: 0.3s;
  }

  svg {
    width: 30px;
  }
  cursor: pointer;
  :hover {
    ${({ theme }) => theme.hover}
  }
`;

export const ProfileBtnText = styled.p`
  ${({ theme }) => theme.typography.poppins_l};
  font-size: 18px;
  margin-right: 15px;
  color: ${({ theme }) => theme.colors.primary};
`;
