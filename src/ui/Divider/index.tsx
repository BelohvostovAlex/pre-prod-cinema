import { FunctionComponent } from "react";

import { Colors } from "@constants/styles/colors";

import { defaultDividerHeight, defaultDividerWidthPercent } from "./config";
import { DividerProps } from "./interfaces";
import { DividerWrapper } from "./styles";

const Divider: FunctionComponent<DividerProps> = ({
  color = Colors.ORANGE,
  height = defaultDividerHeight,
  width = defaultDividerWidthPercent,
}) => {
  return <DividerWrapper color={color} height={height} width={width} />;
};

export default Divider;
