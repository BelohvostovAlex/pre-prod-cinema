import commonTheme from "../common";
import { ITheme, MergedTheme } from "../interfaces";

export const mergeThemes = (theme: ITheme): MergedTheme => {
  return {
    ...commonTheme,
    ...theme,
    colors: {
      ...theme.colors,
      ...commonTheme.colors,
    },
  };
};
