import styled from "styled-components";

export const MovieFooterWrapper = styled.div`
  ${({ theme }) => theme.flexAlignCenter};
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.margin.mb20};
`;

export const MovieFooterBookingInfo = styled.div`
  ${({ theme }) => theme.flexAlignCenter};
  flex-direction: column;
  color: ${({ theme }) => theme.colors.primary};
  margin-right: 20px;
`;

export const MovieFooterBookingInfoText = styled.h4`
  ${({ theme }) => theme.typography.poppins_b};
  font-size: ${({ theme }) => theme.fontSize[18]};
`;

export const MovieFooterBookingInfoSubText = styled.p`
  ${({ theme }) => theme.typography.poppins_r};
  font-size: ${({ theme }) => theme.fontSize[14]};
`;
