import { FunctionComponent } from "react";

import { ButtonProps } from "./interfaces";
import { StyledButton } from "./styles";

const Button: FunctionComponent<ButtonProps> = ({
  children,
  variant,
  height,
  width,
  onClick,
  typography,
  fontSize,
  backgroundColor,
  color,
  margin,
  buttonTypes,
}) => {
  return (
    <StyledButton
      variant={variant}
      buttonTypes={buttonTypes}
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
