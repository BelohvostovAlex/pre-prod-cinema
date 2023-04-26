import styled from "styled-components";

const MainWrapperWidthPercent = 80;
const MainWrapperHeightPercent = 100;
const MainWrapperMinHeight = 100;

export const MainWrapper = styled.div`
  width: ${MainWrapperWidthPercent}%;
  margin: 0 auto;
  height: ${MainWrapperHeightPercent}%;
  min-height: ${MainWrapperMinHeight}vh;
  background: ${({ theme }) => theme.colors.backgroundColor};
  transition: background-color ease-in 0.2s;
`;
