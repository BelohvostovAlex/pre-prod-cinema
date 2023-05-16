import styled from "styled-components";

const headerWidthPercent = 100;
const headerHeight = 80;

const profileBtnSvgWidth = 30;

export const HeaderWrapper = styled.div`
  width: ${headerWidthPercent}%;
  height: ${headerHeight}px;
  padding: ${({ theme }) => theme.padding.header};
  ${({ theme }) => theme.flexAlignCenter};
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  transition: background-color ease-in 0.2s;
  position: sticky;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex[100]};
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
