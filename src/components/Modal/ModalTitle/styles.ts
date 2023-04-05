import styled from "styled-components";

export const StyledModalTitle = styled.h2`
  ${({ theme }) => theme.typography.inria_l_ital};
  font-size: 16px;
  width: 70%;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const StyledModalTitleSpan = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
`;
