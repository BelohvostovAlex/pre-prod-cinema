import styled from "styled-components";

export const MovieBookingWrapper = styled.div`
  padding: 50px 0px;
  height: 600px;
  width: 100%;
`;

export const MovieBookingTitle = styled.h2`
  ${({ theme }) => theme.typography.nunito_b};
  font-size: ${({ theme }) => theme.fontSize[26]};
  color: ${({ theme }) => theme.colors.lightGray};
  text-align: center;
`;
