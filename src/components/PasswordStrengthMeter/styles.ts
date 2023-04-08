import styled from "styled-components";

import { ProgressBarProps } from "./interfaces";
import { passwordStrengthHandler } from "../../helpers/passwordStrengthHandler";

const progressWidthPercent = 100;
const progressHeight = 2;
const progressBarHeightPercent = 100;

export const Progress = styled.div`
  width: ${progressWidthPercent}%;
  height: ${progressHeight}px;
  ${({ theme }) => theme.margin.mb10}
`;

export const ProgressBar = styled.div<ProgressBarProps>`
  height: ${progressBarHeightPercent}%;

  ${({ value }) =>
    `background: ${passwordStrengthHandler(value)?.color}; width: ${
      passwordStrengthHandler(value)?.width
    };`}};
    transition: width 0.3s ease;
`;
