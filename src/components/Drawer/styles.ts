import styled from "styled-components";

export const StyledDrawer = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  height: 100%;
  width: 28%;
  z-index: 100;
  padding: 50px 40px 20px 40px;
  background: ${({ theme }) => theme.colors.backgroundColor};
`;

export const DrawerTitle = styled.h3`
  ${({ theme }) => theme.typography.poppins_l}
  font-size: 21px;
  color: ${({ theme }) => theme.colors.primary};
  position: relative;
  width: 100%;
  text-align: center;
  margin-bottom: 50px;
`;

export const DrawerArrowWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(0%, -50%);
  width: 36px;
  cursor: pointer;
  svg {
    display: block;
    width: 100%;
    height: auto;
  }
  svg:hover path {
    fill: ${({ theme }) => theme.colors.secondary};
    transition-duration: 0.3s;
  }
`;
