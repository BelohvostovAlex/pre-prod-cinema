import styled from "styled-components";

import { ControlsWrapper } from "./Controls/styles";

const VidePlayerWrapperHeight = 260;
const VidePlayerWrapperHeightSm = 200;
const VidePlayerWrapperWidth = 390;
const VidePlayerWrapperWidthSm = 290;
const VideoHeightPercent = 100;
const VideoWidthPercent = 100;
const VideoLayoutWidthPercent = 101;
const VideoLayoutHeightPercent = 100;

export const VideoLayout = styled.div`
  position: absolute;
  top: 0px;
  left: -2px;
  right: 0px;
  bottom: 0px;
  background: rgba(0, 0, 0, 0.6);
  width: ${VideoLayoutWidthPercent}%;
  height: ${VideoLayoutHeightPercent}%;
  z-index: ${({ theme }) => theme.zIndex[1]};
  opacity: 0;
  transition: linear 0.4s;
`;

export const VidePlayerWrapper = styled.div`
  width: ${VidePlayerWrapperWidth}px;
  height: ${VidePlayerWrapperHeight}px;
  position: relative;
  transition: linear 0.4s;
  margin-top: 50px;
  &:hover ${ControlsWrapper} {
    opacity: 1;
  }
  &:hover ${VideoLayout} {
    opacity: 1;
  }

  @media (max-width: ${({ theme }) => `${theme.breakPoints.sm}px`}) {
    width: ${VidePlayerWrapperWidthSm}px;
    height: ${VidePlayerWrapperHeightSm}px;
  }
`;

export const Video = styled.video`
  width: ${VideoWidthPercent}%;
  height: ${VideoHeightPercent}%;
`;

export const Source = styled.source``;
