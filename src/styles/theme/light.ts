import { ITheme } from "./interfaces";
import { Colors } from "../../constants/styles/colors";
import { ThemeTypes } from "../../constants/styles/theme";

const lightTheme: ITheme = {
  name: ThemeTypes.LIGHT,
  colors: {
    primary: Colors.BLACK,
    secondary: Colors.ORANGE,
    backgroundColor: Colors.BG_LIGHT,
  },
};

export default lightTheme;
