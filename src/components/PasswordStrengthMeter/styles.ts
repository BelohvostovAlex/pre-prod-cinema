import styled from "styled-components";

import { passwordStrengthHandler } from "../../helpers/passwordStrengthHandler";

import { ProgressBarProps } from "./interfaces";

export const Progress = styled.div`
  width: 100%;
  height: 2px;
  margin-bottom: 10px;
`;

export const ProgressBar = styled.div<ProgressBarProps>`
  height: 100%;

  ${({ value }) =>
    `background: ${passwordStrengthHandler(value)?.color}; width: ${
      passwordStrengthHandler(value)?.width
    };`}};
    transition: width 0.3s ease;
`;
