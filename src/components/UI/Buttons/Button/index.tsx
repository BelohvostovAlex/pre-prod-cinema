import { FunctionComponent } from "react";

import { ButtonProps } from "./interfaces";
import { StyledButton } from "./styles";

const Button: FunctionComponent<ButtonProps> = ({
  variant,
  height,
  width,
  typography,
  fontSize,
  backgroundColor,
  margin,
  icon,
  children,
  ...rest
}) => {
  return (
    <StyledButton
      variant={variant}
      height={height}
      width={width}
      typography={typography}
      fontSize={fontSize}
      backgroundColor={backgroundColor}
      margin={margin}
      {...rest}
    >
      {icon}
      {children}
    </StyledButton>
  );
};

export default Button;
