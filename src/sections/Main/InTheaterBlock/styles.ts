import styled from "styled-components";

const InTheaterBlockWrapperHeightPercent = 100;
const InTheaterImgWrapperHeightPercent = 100;
const InTheaterImgHeight = 200;
const InTheaterImgHeightL = 160;
const InTheaterImgWrapperWidth = 180;
const InTheaterImgSkeletonWrapperWidth = 50;

export const InTheaterBlockWrapper = styled.div`
  ${({ theme }) => theme.flexAlignCenter};
  height: ${InTheaterBlockWrapperHeightPercent}%;

  @media (max-width: ${({ theme }) => `${theme.breakPoints.m}px`}) {
    flex-direction: column;
  }
`;

export const InTheaterSliderWrapper = styled.div`
  ${({ theme }) => theme.flexAlignCenter};
`;

export const InTheaterImgWrapper = styled.div`
  height: ${InTheaterImgWrapperHeightPercent}%;
  width: ${InTheaterImgWrapperWidth}px;
  margin: 5px 30px 5px 55px;
  align-self: end;
  ${({ theme }) => theme.flexAlignCenter};
  flex-direction: column;
  cursor: pointer;

  @media (max-width: ${({ theme }) => `${theme.breakPoints.l}px`}) {
    margin: 5px 5px 5px 25px;
    width: 100%;
  }

  @media (max-width: ${({ theme }) => `${theme.breakPoints.m}px`}) {
    align-self: center;
    margin: 5px 5px 5px 0px;
  }
`;

export const InTheaterImgSkeletonWrapper = styled.div`
  ${({ theme }) => theme.flexAlignCenter};
  height: ${InTheaterImgWrapperHeightPercent}%;
  width: ${InTheaterImgSkeletonWrapperWidth}%;

  @media (max-width: ${({ theme }) => `${theme.breakPoints.l}px`}) {
    width: 100%;
    justify-content: center;
  }
`;

export const InTheaterImgSkeletonContainer = styled.div`
  margin: 10px 45px 5px 55px;
  align-self: end;

  @media (max-width: ${({ theme }) => `${theme.breakPoints.l}px`}) {
    margin: 5px 5px 5px 25px;
  }

  @media (max-width: ${({ theme }) => `${theme.breakPoints.m}px`}) {
    align-self: center;
    margin: 5px 5px 5px 0px;
  }
`;

export const InTheaterImg = styled.img`
  width: auto;
  height: ${InTheaterImgHeight}px;
  margin-bottom: ${({ theme }) => theme.margin.mb10};
  border-radius: ${({ theme }) => theme.border_radius[10]};

  @media (max-width: ${({ theme }) => `${theme.breakPoints.l}px`}) {
    height: ${InTheaterImgHeightL}px;
  }
`;

export const InTheterImgTitle = styled.h3`
  ${({ theme }) => theme.typography.poppins_m};
  font-size: ${({ theme }) => theme.fontSize[16]};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 5px;
  text-align: center;

  @media (max-width: ${({ theme }) => `${theme.breakPoints.l}px`}) {
    font-size: ${({ theme }) => theme.fontSize[12]};
  }
`;

export const TagsWrapper = styled.div`
  ${({ theme }) => theme.flexAlignCenter};
  flex-wrap: wrap;
`;

export const SliderBox = styled.div`
  margin-top: 20px;
`;
