import styled from "styled-components";

const footerSvgHeight = 36;

export const FooterSecondaryWrapper = styled.div`
  ${({ theme }) => theme.flexAlignCenter};
  flex-direction: column;
  margin-top: 80px;
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
`;

export const FooterSecondaryYear = styled.h3`
  ${({ theme }) => theme.typography.poppins_l};
  font-size: ${({ theme }) => theme.fontSize[12]};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.margin.mb10};
`;
