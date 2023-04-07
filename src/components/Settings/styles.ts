import styled from "styled-components";

export const SettingsWrapper = styled.div`
  height: 300px;
`;

export const SettingsControlWrapper = styled.div`
  margin-top: 70px;
`;

export const BoxWrapper = styled.div`
  display: flex;
  ${({ theme }) => theme.typography.poppins_l};
  margin-top: 10px;
`;

export const BoxTitle = styled.h2`
  font-size: 21px;
  margin-right: 16px;
  ${({ theme }) => theme.typography.poppins_l};
  color: ${({ theme }) => theme.colors.primary};
`;
