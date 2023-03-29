import commonTheme from "../common";
import { ITheme, CommonThemeType } from "../interfaces";

export const mergeThemes = (theme: ITheme): ITheme & CommonThemeType => {
  return {
    ...commonTheme,
    ...theme,
    colors: {
      ...theme.colors,
      ...commonTheme.colors,
    },
  };
};
