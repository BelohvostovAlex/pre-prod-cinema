import styled from "styled-components";

export const MoviePageLoaderWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  background: ${({ theme }) => theme.colors.backgroundColor};
  ${({ theme }) => theme.flexAlignCenter};
  flex-direction: column;
  justify-content: center;
`;
