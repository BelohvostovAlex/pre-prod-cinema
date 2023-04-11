import styled from "styled-components";

import { StyledRoundButton } from "../UI/Buttons/RoundButton/styles";

const VidePlayerWrapperHeight = 260;
const VidePlayerWrapperWidth = 400;
const VideoHeightPercent = 100;
const VideoWidthPercent = 100;

export const VidePlayerWrapper = styled.div`
  width: ${VidePlayerWrapperWidth}px;
  height: ${VidePlayerWrapperHeight}px;
  position: relative;

  &:hover ${StyledRoundButton} {
    opacity: 1;
    transition: 0.5s linear;
  }
`;

export const Video = styled.video`
  width: ${VideoWidthPercent}%;
  height: ${VideoHeightPercent}%;
`;
