import { FunctionComponent } from "react";

import { useAppSelector } from "../../hooks/useAppSelector";
import { themeSelector } from "../../store/slices/userSlice/selectors";

import { ChipWrapper } from "./styles";
import { ChipProps } from "./interfaces";

const Chip: FunctionComponent<ChipProps> = ({ text }) => {
  const themeMode = useAppSelector(themeSelector);
  return <ChipWrapper themeMode={themeMode}>{text}</ChipWrapper>;
};

export default Chip;
