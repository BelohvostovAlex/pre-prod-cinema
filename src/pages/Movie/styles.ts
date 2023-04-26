import styled from "styled-components";

import { MovieLayoutProps } from "./interfaces";

const MovieLayoutWidthPercent = 100;
const MovieLayoutHeightPercent = 100;
const MovieWrapperWidthPercent = 100;
const MovieWrapperMinHeight = 100;

export const MovieLayout = styled.div<MovieLayoutProps>`
width: ${MovieLayoutWidthPercent}%;
height: ${MovieLayoutHeightPercent}%;
background: ${({ primaryColor, secondaryColor }) =>
  `linear-gradient(180deg, ${primaryColor} 0%, ${secondaryColor} 100%)`};
box-shadow: ${({
  theme,
}) => `inset 50px 50px 100px 20px ${theme.colors.backgroundColor},
inset -50px -50px 100px ${theme.colors.backgroundColor};`}
filter: blur(10px);
transition: background-color ease-in 0.2s;

position: absolute;
top: 0px;
left: 0px;
right: 0px;
bottom: 0px;
z-index: ${({ theme }) => theme.zIndex.minus1};
`;

export const MovieWrapper = styled.div`
  position: relative;
  width: ${MovieWrapperWidthPercent}%;
  min-height: ${MovieWrapperMinHeight}vh;
  padding: 100px 10%;
  z-index: ${({ theme }) => theme.zIndex[10]};
  margin-top: 10px;
`;

export const MovieReviewWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
`;

export const MovieNoReviewTitle = styled.h3`
  ${({ theme }) => theme.typography.poppins_sb};
  font-size: ${({ theme }) => theme.fontSize[24]};
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;
