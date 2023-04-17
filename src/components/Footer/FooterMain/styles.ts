import styled from "styled-components";

import { FooterWrapperProps } from "./interfaces";

const FooterWrapperWidthPercent = 100;
const FooterLogoWidth = 110;
const FooterLogoWidthPercentSvg = 100;
const FooterColumnWidthPercent = 10;
const FooterColumnWidthLastPercent = 28;
const FooterFooterSubscribeInputWrapperHeight = 36;
const FooterSubscribeInputHeightPercent = 100;

export const FooterWrapper = styled.div<FooterWrapperProps>`
  display: ${({ visible }) => (visible ? "flex" : "none")};
  height: auto;
  width: ${FooterWrapperWidthPercent}%;
  padding: 50px 15%;
  justify-content: space-between;
  align-items: start;
`;

export const FooterLogo = styled.div`
  width: ${FooterLogoWidth}px;
  svg {
    width: ${FooterLogoWidthPercentSvg}%;
    height: fit-content;
  }
  svg path {
    fill: ${({ theme }) => theme.colors.primary};
  }
  margin-right: 20px;
  cursor: pointer;
`;

export const FooterColumn = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: ${FooterColumnWidthPercent}%;
  &:last-of-type {
    width: ${FooterColumnWidthLastPercent}%;
  }
`;

export const FooterColumnTitle = styled.li`
  margin-bottom: ${({ theme }) => theme.margin.mb20};
  ${({ theme }) => theme.typography.inter_b};
  font-size: ${({ theme }) => theme.fontSize[14]};
  color: ${({ theme }) => theme.colors.primary};
`;

export const FooterColumnItem = styled.li`
  margin-bottom: ${({ theme }) => theme.margin.mb10};
  a {
    ${({ theme }) => theme.typography.inter_r};
    font-size: ${({ theme }) => theme.fontSize[12]};
    color: ${({ theme }) => theme.colors.primary};
  }
  &:hover {
    ${({ theme }) => theme.hover}
  }
`;

export const FooterSubscribeInputWrapper = styled.div`
  ${({ theme }) => theme.flexAlignCenter};
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.darkGray};
  border-radius: ${({ theme }) => theme.border_radius[40]};
  height: ${FooterFooterSubscribeInputWrapperHeight}px;
  padding: 5px 20px;
  margin-bottom: ${({ theme }) => theme.margin.mb20};
  svg {
    cursor: pointer;
  }
`;

export const FooterSubscribeInput = styled.input`
  ${({ theme }) => theme.typography.inter_r};
  font-size: ${({ theme }) => theme.fontSize[14]};
  color: ${({ theme }) => theme.colors.regularGray};
  background: transparent;
  height: ${FooterSubscribeInputHeightPercent}%;
  outline: none;
  border: none;
`;

export const FooterColumnSubscribeSubText = styled.p`
  ${({ theme }) => theme.typography.inter_r};
  font-size: ${({ theme }) => theme.fontSize[12]};
  color: ${({ theme }) => theme.colors.darkGray};
`;
