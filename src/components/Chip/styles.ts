import styled from "styled-components";

export const ChipWrapper = styled.div`
  padding: 5px 6px;
  border-radius: ${({ theme }) => theme.border_radius[10]};
  background: ${({ theme }) => theme.colors.darkGray};
  color: ${({ theme }) => theme.colors.primary};
  ${({ theme }) => theme.typography.poppins_m};
  font-size: ${({ theme }) => theme.fontSize[6]};
  width: fit-content;
  margin: 5px;
`;
