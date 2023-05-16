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
  button: {
    primary: {
      background: Colors.BLACK,
      color: Colors.ORANGE,
    },
    secondary: {
      background: Colors.ORANGE,
      color: Colors.BLACK,
    },
  },
};

export default lightTheme;
