import { FunctionComponent } from "react";

import { ButtonProps } from "./interfaces";
import { StyledButton } from "./styles";

const Button: FunctionComponent<ButtonProps> = ({
  children,
  buttonType,
  height,
  width,
  onClick,
  typography,
  fontSize = "16px",
  backgroundColor,
  color,
  margin,
}) => {
  return (
    <StyledButton
      buttonType={buttonType}
      onClick={onClick}
      height={height}
      width={width}
      typography={typography}
      fontSize={fontSize}
      backgroundColor={backgroundColor}
      color={color}
      margin={margin}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
