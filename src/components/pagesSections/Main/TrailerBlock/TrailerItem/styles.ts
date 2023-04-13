import styled from "styled-components";

const TrailerItemImgHeightPercent = 100;
const TrailerItemImgWidthPercent = 100;

export const TrailerItemImg = styled.img`
  width: ${TrailerItemImgWidthPercent}%;
  height: ${TrailerItemImgHeightPercent}%;
  object-fit: cover;
  overflow: hidden;
`;
