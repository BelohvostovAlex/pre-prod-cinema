import styled from "styled-components";

export const StyledDrawer = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  height: 100%;
  width: 32%;
  z-index: 100;
  padding: 40px 40px 20px 40px;
  background: ${({ theme }) => theme.colors.backgroundColor};
`;

export const DrawerTitle = styled.h3`
  ${({ theme }) => theme.typography.poppins_l}
  font-size: 30px;
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
  width: 40px;
  cursor: pointer;
  svg {
    display: block;
    width: 100%;
    height: auto;
  }
`;
