import styled, { keyframes } from "styled-components";

const loaderAnimation = keyframes`
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`;

export const MoviePageLoaderWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  background: ${({ theme }) => theme.colors.backgroundColor};
  ${({ theme }) => theme.flexAlignCenter};
  flex-direction: column;
  justify-content: center;
`;

export const MovieLoader = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
`;

export const MovieLoaderItem = styled.div`
  position: absolute;
  border: 4px solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: ${loaderAnimation} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

  &:nth-child(2) {
    animation-delay: -0.5s;
  }
`;
