import styled from "styled-components";

const MovieImgWidth = 260;
const MovieInfoWrapperWidth = 420;
const MovieRatingWidthSvg = 20;
const MovieDescriptionWidthPercent = 100;

export const MovieInfoSection = styled.div`
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
