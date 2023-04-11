import { FunctionComponent } from "react";

import { ModalTitleProps } from "./interfaces";
import { StyledModalTitle, StyledModalTitleSpan } from "./styles";

const ModalTitle: FunctionComponent<ModalTitleProps> = ({ text, spanText }) => {
  return (
    <StyledModalTitle>
      {text} <StyledModalTitleSpan>{spanText}</StyledModalTitleSpan>
    </StyledModalTitle>
  );
};

export default ModalTitle;
