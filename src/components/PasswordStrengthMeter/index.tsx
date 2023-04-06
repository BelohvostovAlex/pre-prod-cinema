import { FunctionComponent } from "react";

import { Progress, ProgressBar } from "./styles";
import { PasswordStrengthMeterProps } from "./interfaces";

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
