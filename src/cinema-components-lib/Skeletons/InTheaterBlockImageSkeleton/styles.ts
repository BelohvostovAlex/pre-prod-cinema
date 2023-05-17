import styled from "styled-components";

const inTheaterImgHeight = 200;
const inTheaterImgHeightL = 160;
const imgWidth = 140;
const titleWidth = 180;
const titleHeight = 40;
const chipWrapper = 160;
const chipWidth = 40;
const chipHeight = 20;

export const Box = styled.div`
  ${({ theme }) => theme.flexAlignCenter};
  flex-direction: column;
`;

export const Img = styled.div`
  width: ${imgWidth}px;
  height: ${inTheaterImgHeight}px;
  margin-bottom: ${({ theme }) => theme.margin.mb10};
  border-radius: ${({ theme }) => theme.border_radius[10]};
  ${({ theme }) => theme.animations.skeleton};

  @media (max-width: ${({ theme }) => `${theme.breakPoints.l}px`}) {
    height: ${inTheaterImgHeightL}px;
  }
`;

export const Title = styled.div`
  width: ${titleWidth}px;
  height: ${titleHeight}px;
  margin-bottom: ${({ theme }) => theme.margin.mb10};
  ${({ theme }) => theme.animations.skeleton};
`;

export const ChipWrapper = styled.div`
  ${({ theme }) => theme.flexAlignCenter};
  justify-content: space-around;
  width: ${chipWrapper}px;
  margin-bottom: 5px;
`;

export const Chip = styled.div`
  width: ${chipWidth}px;
  height: ${chipHeight}px;
  border-radius: ${({ theme }) => theme.border_radius[10]};
  ${({ theme }) => theme.animations.skeleton};
`;
