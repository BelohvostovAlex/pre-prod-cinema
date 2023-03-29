import { Colors } from "../../constants/styles/colors";
import { TThemeType } from "../../constants/styles/theme";
import commonTheme from "./common";

export type CommonThemeType = typeof commonTheme;
export interface ITheme {
  name: TThemeType;
  colors: {
    primary: Colors;
    secondary: Colors;
    backgroundColor: Colors;
  };
}
