import styled from "styled-components";

import { MovieLayoutProps } from "./interfaces";

const MovieBtnNextWrapperWidthSvg = 36;
const MovieBtnNextWrapperHeightSvg = 20;
const MovieLayoutWidthPercent = 100;
const MovieLayoutHeightPercent = 100;
const MovieWrapperWidthPercent = 100;
const MovieWrapperMinHeight = 100;
const MovieTitleWidth = 290;
const MovieImgWidth = 260;
const MovieInfoWrapperWidth = 420;
const MovieRatingWidthSvg = 20;
const MovieDescriptionWidthPercent = 100;
const MovieTrailerItemWidth = 520;
const MovieTrailerItemHeight = 280;

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

export const MovieHeaderWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
`;

export const MovieTitle = styled.h2`
  ${({ theme }) => theme.typography.nunito_r};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize[26]};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.margin.mb20};
  width: ${MovieTitleWidth}px;
`;

export const MovieBtnNextWrapper = styled.div`
  ${({ theme }) => theme.flexAlignCenter};
  svg {
    width: ${MovieBtnNextWrapperWidthSvg}px;
    height: ${MovieBtnNextWrapperHeightSvg}px;
    margin-left: 15px;
    margin-top: 10px;
  }
  svg path {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

export const MovieInfo = styled.div`
  display: flex;
`;

export const MovieImg = styled.img`
  width: ${MovieImgWidth}px;
  height: fit-content;
  border-radius: ${({ theme }) => theme.border_radius[10]};
  margin-right: 30px;
`;

export const MovieInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: ${MovieInfoWrapperWidth}px;
`;

export const MovieInfoItem = styled.p`
  ${({ theme }) => theme.typography.nunito_b};
  font-size: ${({ theme }) => theme.fontSize[18]};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.margin.mb10};
`;

export const MovieInfoItemSpan = styled.span`
  ${({ theme }) => theme.typography.nunito_l};
  font-size: ${({ theme }) => theme.fontSize[18]};
  color: ${({ theme }) => theme.colors.primary};
`;

export const MovieBookWrapper = styled.div`
  ${({ theme }) => theme.flexAlignCenter};
  margin-top: 10px;
`;

export const MovieRating = styled.p`
  ${({ theme }) => theme.flexAlignCenter};
  ${({ theme }) => theme.typography.poppins_b};
  font-size: ${({ theme }) => theme.fontSize[26]};
  color: ${({ theme }) => theme.colors.primary};
  margin: 0px;
  margin-left: 25px;
  svg {
    width: ${MovieRatingWidthSvg}px;
    height: auto;
    margin-left: 5px;
    margin-bottom: 2px;
  }
  svg path {
    fill: ${({ theme }) => theme.colors.secondary};
  }
`;

export const MovieDescription = styled.p`
  ${({ theme }) => theme.typography.nunito_l};
  font-size: ${({ theme }) => theme.fontSize[18]};
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 20px;
  width: ${MovieDescriptionWidthPercent}%;
  margin-bottom: ${({ theme }) => theme.margin.mb50};
`;

export const MovieTrailerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
`;

export const MovieTrailerTitle = styled.h3`
  ${({ theme }) => theme.typography.poppins_sb};
  font-size: ${({ theme }) => theme.fontSize[24]};
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;

export const MovieTrailerItem = styled.div`
  width: ${MovieTrailerItemWidth}px;
  height: ${MovieTrailerItemHeight}px;
  filter: drop-shadow(15px 15px 50px #000000);
  margin: 50px auto 80px;
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
