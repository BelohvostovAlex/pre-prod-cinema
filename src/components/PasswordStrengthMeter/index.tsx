import { FunctionComponent } from "react";

import { PasswordStrengthMeterProps } from "./interfaces";
import { Progress, ProgressBar } from "./styles";

const PasswordStrengthMeter: FunctionComponent<PasswordStrengthMeterProps> = ({
  value,
}) => {
  return (
    <Progress>
      <ProgressBar value={value} />
    </Progress>
  );
};

export default PasswordStrengthMeter;
