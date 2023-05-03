import styled from "styled-components";

const MovieImgWidth = 260;
const MovieImgWidthM = 200;
const MovieImgWidthSM = 140;
const MovieInfoWrapperWidth = 420;
const MovieRatingWidthSvg = 20;
const MovieDescriptionWidthPercent = 100;

export const MovieInfoSection = styled.div`
  display: flex;

  @media (max-width: ${({ theme }) => `${theme.breakPoints.s}px`}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const MovieImg = styled.img`
  width: ${MovieImgWidth}px;
  height: fit-content;
  border-radius: ${({ theme }) => theme.border_radius[10]};
  margin-right: 30px;

  @media (max-width: ${({ theme }) => `${theme.breakPoints.m}px`}) {
    width: ${MovieImgWidthM}px;
  }

  @media (max-width: ${({ theme }) => `${theme.breakPoints.sm}px`}) {
    width: ${MovieImgWidthSM}px;
  }

  @media (max-width: ${({ theme }) => `${theme.breakPoints.s}px`}) {
    margin-right: 0px;
    margin-bottom: 20px;
  }
`;

export const MovieInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: ${MovieInfoWrapperWidth}px;

  @media (max-width: ${({ theme }) => `${theme.breakPoints.l}px`}) {
    width: 100%;
  }
`;

export const MovieInfoItem = styled.p`
  ${({ theme }) => theme.typography.nunito_b};
  font-size: ${({ theme }) => theme.fontSize[18]};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.margin.mb10};

  @media (max-width: ${({ theme }) => `${theme.breakPoints.m}px`}) {
    font-size: ${({ theme }) => theme.fontSize[14]};
  }

  @media (max-width: ${({ theme }) => `${theme.breakPoints.sm}px`}) {
    font-size: ${({ theme }) => theme.fontSize[10]};
  }
`;

export const MovieInfoItemSpan = styled.span`
  ${({ theme }) => theme.typography.nunito_l};
  font-size: ${({ theme }) => theme.fontSize[18]};
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: ${({ theme }) => `${theme.breakPoints.m}px`}) {
    font-size: ${({ theme }) => theme.fontSize[14]};
  }

  @media (max-width: ${({ theme }) => `${theme.breakPoints.sm}px`}) {
    font-size: ${({ theme }) => theme.fontSize[10]};
  }
`;

export const MovieBookWrapper = styled.div`
  ${({ theme }) => theme.flexAlignCenter};
  margin-top: 10px;

  @media (max-width: ${({ theme }) => `${theme.breakPoints.sm}px`}) {
    button {
      font-size: ${({ theme }) => theme.fontSize[12]};
    }
  }
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

  @media (max-width: ${({ theme }) => `${theme.breakPoints.m}px`}) {
    font-size: ${({ theme }) => theme.fontSize[18]};
  }

  @media (max-width: ${({ theme }) => `${theme.breakPoints.sm}px`}) {
    font-size: ${({ theme }) => theme.fontSize[16]};
  }
`;

export const MovieDescription = styled.p`
  ${({ theme }) => theme.typography.nunito_l};
  font-size: ${({ theme }) => theme.fontSize[18]};
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 20px;
  width: ${MovieDescriptionWidthPercent}%;
  margin-bottom: ${({ theme }) => theme.margin.mb50};

  @media (max-width: ${({ theme }) => `${theme.breakPoints.sm}px`}) {
    font-size: ${({ theme }) => theme.fontSize[16]};
  }
`;
