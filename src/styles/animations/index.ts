import { keyframes } from "styled-components";

import { Colors } from "@/constants/styles/colors";

export const colorAnimation = keyframes`
  0%   { background: ${Colors.ASPHALT_COLOR} }
  25%  { background: ${Colors.BG_DARK} }
  50%  { background: ${Colors.ASPHALT_COLOR} }
  75%  { background: ${Colors.BG_DARK} }
  100%  { background: ${Colors.ASPHALT_COLOR} }
`;
