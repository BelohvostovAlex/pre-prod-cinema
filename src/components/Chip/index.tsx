import { FunctionComponent } from "react";

import { ChipWrapper } from "./styles";
import { ChipProps } from "./interfaces";

const Chip: FunctionComponent<ChipProps> = ({ text, background }) => {
  return <ChipWrapper background={background}>{text}</ChipWrapper>;
};

export default Chip;
