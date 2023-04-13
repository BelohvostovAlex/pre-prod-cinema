import styled from "styled-components";

const ControlsWrapperWidthPercent = 100;
const ControlsWrapperHeightPercent = 100;
const MiddleControlsWidthPercent = 100;
const MiddleControlsWidthSvg = 20;
const MiddleControlsHeightSvg = 20;
const BottomControlsWidthSvg = 20;
const BottomControlsHeightSvg = 14;
const BottomControlsWidthPercent = 100;
const ProgressWidthPercent = 100;
const ProgressHeight = 4;
const ProgressThumbHeight = 12;
const ProgressThumbWidth = 12;

export const ControlsWrapper = styled.div`
  width: ${ControlsWrapperWidthPercent}%;
  height: ${ControlsWrapperHeightPercent}%;
  position: relative;
  svg {
    cursor: pointer;
  }
  svg path {
    fill: ${({ theme }) => theme.colors.primary};
  }
  opacity: 0;
`;

export const ControlsTitle = styled.h3`
  ${({ theme }) => theme.typography.poppins_sb};
  font-size: ${({ theme }) => theme.fontSize[14]};
  color: ${({ theme }) => theme.colors.primary};
  margin: 10px;
`;

export const MiddleControls = styled.div`
  position: absolute;
  left: 50.5%;
  top: 50.5%;
  transform: translate(-50.5%, -50.5%);
  width: calc(${MiddleControlsWidthPercent}% - 100px);
  ${({ theme }) => theme.flexAlignCenter};
  justify-content: space-between;
  svg {
    height: ${MiddleControlsHeightSvg}px;
    width: ${MiddleControlsWidthSvg}px;
    transition: ease-out 0.2s;
  }
  svg:hover {
    transform: scale(1.1);
  }
`;

export const BottomControls = styled.div`
  position: absolute;
  bottom: 7%;
  left: 0%;
  background: ${({ theme }) => theme.colors.asphaltColor};
  border-radius: ${({ theme }) => theme.border_radius[10]};
  padding: 10px 20px;
  width: calc(${BottomControlsWidthPercent}% - 20px);
  ${({ theme }) => theme.flexAlignCenter};
  svg {
    height: ${BottomControlsHeightSvg}px;
    width: ${BottomControlsWidthSvg}px;
  }
  margin-left: 10px;
`;

export const Progress = styled.input`
  width: ${ProgressWidthPercent}%;
  margin: 0px 25px;
  &::-moz-range-progress {
    height: ${ProgressHeight}px;
    background: ${({ theme }) => theme.colors.primary};
    border: 0;
    margin-top: 0;
  }
  -webkit-appearance: none !important;
  background: rgba(255, 255, 255, 0.2);
  border-radius: ${({ theme }) => theme.border_radius[20]};
  height: ${ProgressHeight}px;
  &::-webkit-slider-thumb {
    -webkit-appearance: none !important;
    background: ${({ theme }) => theme.colors.primary};
    height: ${ProgressThumbHeight}px;
    width: ${ProgressThumbWidth}px;
    border-radius: ${({ theme }) => theme.border_radius.circle};
  }
`;

export const Velocity = styled.select`
  appearance: none;
  background: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  color: ${({ theme }) => theme.colors.primary};
  outline: none;
  border: none;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize[12]};
  cursor: pointer;
  margin-right: 5px;
`;

export const VelocityOption = styled.option`
  background: ${({ theme }) => theme.colors.backgroundColor};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize[10]};
`;
