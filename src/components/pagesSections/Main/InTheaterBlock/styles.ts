import styled from "styled-components";

const InTheaterBlockWrapperHeightPercent = 100;
const InTheaterImgWrapperHeightPercent = 100;
const InTheaterImgHeight = 200;

export const InTheaterBlockWrapper = styled.div`
  ${({ theme }) => theme.flexAlignCenter};
  height: ${InTheaterBlockWrapperHeightPercent}%;
`;

export const InTheaterImgWrapper = styled.div`
  height: ${InTheaterImgWrapperHeightPercent}%;
  width: 180px;
  margin: 5px 30px 5px 55px;
  align-self: end;
  ${({ theme }) => theme.flexAlignCenter};
  flex-direction: column;
`;

export const InTheaterImgSkeletonWrapper = styled.div`
  height: ${InTheaterImgWrapperHeightPercent}%;
  width: 140px;
  margin: 0px 90px 5px 125px;
  align-self: end;
`;

export const InTheaterImg = styled.img`
  width: auto;
  height: ${InTheaterImgHeight}px;
  margin-bottom: ${({ theme }) => theme.margin.mb10};
  border-radius: ${({ theme }) => theme.border_radius[10]};
`;

export const InTheterImgTitle = styled.h3`
  ${({ theme }) => theme.typography.poppins_m};
  font-size: ${({ theme }) => theme.fontSize[16]};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 5px;
  text-align: center;
`;

export const TagsWrapper = styled.div`
  ${({ theme }) => theme.flexAlignCenter};
  flex-wrap: wrap;
`;

export const SliderBox = styled.div`
  margin-top: 20px;
`;
