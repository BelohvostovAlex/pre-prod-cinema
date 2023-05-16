import styled from "styled-components";

export const AppLayoutWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  transition: background-color ease-in 0.2s;
`;
