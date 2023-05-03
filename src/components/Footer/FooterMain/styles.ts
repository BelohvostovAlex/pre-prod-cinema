import styled from "styled-components";

import { FooterWrapperProps } from "./interfaces";

const FooterWrapperWidthPercent = 100;
const FooterLogoWidth = 110;
const FooterLogoWidthPercentSvg = 100;
const FooterColumnWidthPercent = 10;
const FooterColumnWidthLPercent = 20;
const FooterColumnWidthSMPercent = 31;
const FooterColumnWidthLastPercent = 28;
const FooterColumnWidthLastSMPercent = 100;
const FooterFooterSubscribeInputWrapperHeight = 36;
const FooterSubscribeInputHeightPercent = 100;

export const FooterWrapper = styled.div<FooterWrapperProps>`
  display: ${({ visible }) => (visible ? "flex" : "none")};
  height: auto;
  width: ${FooterWrapperWidthPercent}%;
  padding: 50px 15%;
  justify-content: space-between;
  align-items: start;

  @media (max-width: ${({ theme }) => `${theme.breakPoints.sm}px`}) {
    flex-wrap: wrap;
  }
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

  @media (max-width: ${({ theme }) => `${theme.breakPoints.l}px`}) {
    display: none;
  }
`;

export const FooterColumn = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: ${FooterColumnWidthPercent}%;
  &:last-of-type {
    width: ${FooterColumnWidthLastPercent}%;
  }

  @media (max-width: ${({ theme }) => `${theme.breakPoints.l}px`}) {
    width: ${FooterColumnWidthLPercent}%;
  }

  @media (max-width: ${({ theme }) => `${theme.breakPoints.sm}px`}) {
    width: ${FooterColumnWidthSMPercent}%;
    &:last-of-type {
      margin-top: 10px;
      width: ${FooterColumnWidthLastSMPercent}%;
    }
  }
`;

export const FooterColumnTitle = styled.li`
  margin-bottom: ${({ theme }) => theme.margin.mb20};
  ${({ theme }) => theme.typography.inter_b};
  font-size: ${({ theme }) => theme.fontSize[14]};
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: ${({ theme }) => `${theme.breakPoints.l}px`}) {
    font-size: ${({ theme }) => theme.fontSize[12]};
  }
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

  @media (max-width: ${({ theme }) => `${theme.breakPoints.l}px`}) {
    a {
      font-size: ${({ theme }) => theme.fontSize[10]};
    }
  }
`;

export const FooterSubscribeInputWrapper = styled.form`
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
  width: 80%;

  @media (max-width: ${({ theme }) => `${theme.breakPoints.l}px`}) {
    font-size: ${({ theme }) => theme.fontSize[10]};
  }
`;

export const FooterColumnSubscribeSubText = styled.p`
  ${({ theme }) => theme.typography.inter_r};
  font-size: ${({ theme }) => theme.fontSize[12]};
  color: ${({ theme }) => theme.colors.darkGray};

  @media (max-width: ${({ theme }) => `${theme.breakPoints.l}px`}) {
    font-size: ${({ theme }) => theme.fontSize[10]};
  }
`;

export const FooterSubmitBtn = styled.button`
  background: transparent;
  border: none;
  display: flex;
  justify-content: center;
`;
