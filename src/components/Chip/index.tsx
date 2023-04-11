import { FunctionComponent } from "react";

import { ChipWrapper } from "./styles";
import { ChipProps } from "./interfaces";

const Chip: FunctionComponent<ChipProps> = ({ text }) => {
  return <ChipWrapper>{text}</ChipWrapper>;
};

export default Chip;
