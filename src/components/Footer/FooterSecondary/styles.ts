import styled from "styled-components";

const footerSvgHeight = 36;
const footerSvgHeightSm = 26;

export const FooterSecondaryWrapper = styled.div`
  ${({ theme }) => theme.flexAlignCenter};
  flex-direction: column;
  margin-top: 80px;
  @media (max-width: ${({ theme }) => `${theme.breakPoints.m}px`}) {
    margin-top: 60px;
  }
`;

export const FooterSecondaryItemsWrapper = styled.div`
  ${({ theme }) => theme.flexAlignCenter};
  svg {
    height: ${footerSvgHeight}px;
    width: fit-content;
    margin-right: 15px;
  }
  svg:last-of-type {
    margin-right: 0px;
  }
  margin-bottom: ${({ theme }) => theme.margin.mb20};

  @media (max-width: ${({ theme }) => `${theme.breakPoints.sm}px`}) {
    svg {
      height: ${footerSvgHeightSm}px;
    }
  }
`;

export const FooterSecondaryYear = styled.h3`
  ${({ theme }) => theme.typography.poppins_l};
  font-size: ${({ theme }) => theme.fontSize[12]};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.margin.mb10};
`;
