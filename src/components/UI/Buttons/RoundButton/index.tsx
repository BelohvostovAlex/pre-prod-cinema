import { FunctionComponent } from "react";

import { RounduttonProps } from "./interfaces";
import { StyledRoundButton } from "./styles";

const RoundButton: FunctionComponent<RounduttonProps> = ({
  children,
  onClick,
  background,
  color,
  height,
  width,
  extra,
}) => {
  return (
    <StyledRoundButton
      onClick={onClick}
      width={width}
      height={height}
      background={background}
      color={color}
      extra={extra}
    >
      {children}
    </StyledRoundButton>
  );
};

export default RoundButton;
