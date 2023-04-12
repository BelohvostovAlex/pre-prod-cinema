import styled from "styled-components";

const TrailerBlockWidthPercent = 100;
const TrailerItemWrapperWidth = 50;
const TrailerItemWrapperHeight = 260;
const TrailerItemLayoutWidthPercent = 20;
const TrailerItemLayoutHeightPercent = 100;
const TrailerItemImgHeightPercent = 100;
const TrailerItemImgWidthPercent = 100;

export const TrailerBlockWrapper = styled.div`
  ${({ theme }) => theme.flexAlignCenter};
  justify-content: space-between;
  width: ${TrailerBlockWidthPercent}%;
  padding: 30px 0px;
`;

export const TrailerItemWrapper = styled.div`
  width: ${TrailerItemWrapperWidth}%;
  height: ${TrailerItemWrapperHeight}px;
  position: relative;
`;

export const TrailerItemLayout = styled.div`
  background: ${({ theme }) =>
    `linear-gradient(to right, ${theme.colors.backgroundColor} 20%, transparent 70%);`};
  opacity: 0.9;
  width: ${TrailerItemLayoutWidthPercent}%;
  height: ${TrailerItemLayoutHeightPercent}%;
  position: absolute;
  left: 0px;
  top: 0px;
`;

export const TrailerItemImg = styled.img`
  width: ${TrailerItemImgWidthPercent}%;
  height: ${TrailerItemImgHeightPercent}%;
  object-fit: cover;
  overflow: hidden;
`;
