import { FunctionComponent } from "react";

import { ChipProps } from "./interfaces";
import { ChipWrapper } from "./styles";

const Chip: FunctionComponent<ChipProps> = ({ text, background }) => {
  return <ChipWrapper background={background}>{text}</ChipWrapper>;
};

export default Chip;
