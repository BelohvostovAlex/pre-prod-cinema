import styled from "styled-components";

const styledLoaderWidthPercent = 100;
const styledLoaderHeight = 100;

export const StyledLoader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${styledLoaderWidthPercent}%;
  height: calc(${styledLoaderHeight}vh);
  z-index: ${({ theme }) => theme.zIndex[10]};
  background: rgba(31, 31, 38, 0.7);
  ${({ theme }) => theme.flexAlignCenter};
  flex-direction: column;
  justify-content: center;
`;
