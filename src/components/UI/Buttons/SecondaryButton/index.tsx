import { FunctionComponent } from "react";

import { SecondaryButtonProps } from "./interfaces";
import { StyledSecondaryButton } from "./styles";

const SecondaryButton: FunctionComponent<SecondaryButtonProps> = ({
  onClick,
  text,
  typography,
  extra,
  fontSize,
}) => {
  return (
    <StyledSecondaryButton
      onClick={onClick}
      typography={typography}
      extra={extra}
      fontSize={fontSize}
    >
      {text}
    </StyledSecondaryButton>
  );
};

export default SecondaryButton;
