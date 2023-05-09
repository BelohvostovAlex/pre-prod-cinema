import { Colors } from "@constants/styles/colors";
import { ThemeTypes } from "@constants/styles/theme";

import { ITheme } from "./interfaces";

const lightTheme: ITheme = {
  name: ThemeTypes.LIGHT,
  colors: {
    primary: Colors.BLACK,
    secondary: Colors.ORANGE,
    backgroundColor: Colors.BG_LIGHT,
  },
};

export default lightTheme;
