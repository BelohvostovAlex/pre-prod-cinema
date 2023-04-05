import { FunctionComponent } from "react";

import { StyledModalTitle, StyledModalTitleSpan } from "./styles";
import { ModalTitleProps } from "./interfaces";

const ModalTitle: FunctionComponent<ModalTitleProps> = ({ text, spanText }) => {
  return (
    <StyledModalTitle>
      {text} <StyledModalTitleSpan>{spanText}</StyledModalTitleSpan>
    </StyledModalTitle>
  );
};

export default ModalTitle;
