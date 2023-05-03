import styled from "styled-components";

const StyledModalTitleWithPercent = 70;

export const StyledModalTitle = styled.h2`
  ${({ theme }) => theme.typography.inria_l_ital};
  font-size: ${({ theme }) => theme.fontSize[16]};
  width: ${StyledModalTitleWithPercent}%;
  margin-bottom: ${({ theme }) => theme.margin.mb30};
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: ${({ theme }) => `${theme.breakPoints.sm}px`}) {
    font-size: ${({ theme }) => theme.fontSize[14]};
  }
`;

export const StyledModalTitleSpan = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
`;
