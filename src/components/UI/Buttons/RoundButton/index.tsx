import { FunctionComponent } from "react";

import { RounduttonProps } from "./interfaces";
import { StyledRoundButton } from "./styles";

const RoundButton: FunctionComponent<RounduttonProps> = ({
  icon,
  onClick,
  background,
  color,
  height,
  width,
}) => {
  return (
    <StyledRoundButton
      onClick={onClick}
      width={width}
      height={height}
      background={background}
      color={color}
    >
      {icon}
    </StyledRoundButton>
  );
};

export default RoundButton;
