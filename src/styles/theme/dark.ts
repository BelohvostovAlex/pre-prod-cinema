import { Colors } from "@constants/styles/colors";
import { ThemeTypes } from "@constants/styles/theme";

import { ITheme } from "./interfaces";

const darkTheme: ITheme = {
  name: ThemeTypes.DARK,
  colors: {
    primary: Colors.WHITE,
    secondary: Colors.ORANGE,
    backgroundColor: Colors.BG_DARK,
  },
};

export default darkTheme;
