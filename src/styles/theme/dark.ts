import { ITheme } from "./interfaces";
import { Colors } from "../../constants/styles/colors";
import { ThemeTypes } from "../../constants/styles/theme";

const darkTheme: ITheme = {
  name: ThemeTypes.DARK,
  colors: {
    primary: Colors.WHITE,
    secondary: Colors.ORANGE,
    backgroundColor: Colors.BG_DARK,
  },
};

export default darkTheme;
