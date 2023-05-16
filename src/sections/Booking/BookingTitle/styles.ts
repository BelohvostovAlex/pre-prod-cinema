import styled from "styled-components";

export const BookingTitleWrapper = styled.h3`
  ${({ theme }) => theme.typography.poppins_l};
  font-size: ${({ theme }) => theme.fontSize[26]};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.margin.mb20};

  @media (max-width: ${({ theme }) => `${theme.breakPoints.s}px`}) {
    font-size: ${({ theme }) => theme.fontSize[21]};
  }
`;
