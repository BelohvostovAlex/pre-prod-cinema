import { FunctionComponent, useMemo } from "react";

import { ThemeProvider as ThemeContainer } from "styled-components";

import { ThemeTypes } from "@constants/styles/theme";
import { useAppSelector } from "@hooks/useAppSelector";
import { themeSelector } from "@store/slices/userSlice/selectors";
import { mergeThemes } from "@styles/theme/config";
import darkTheme from "@styles/theme/dark";
import lightTheme from "@styles/theme/light";

import { ThemeProviderProps } from "./interfaces";

const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ children }) => {
  const theme = useAppSelector(themeSelector);

  const currTheme = useMemo(
    () => mergeThemes(theme === ThemeTypes.DARK ? darkTheme : lightTheme),
    [theme],
  );
  return <ThemeContainer theme={currTheme}>{children}</ThemeContainer>;
};

export default ThemeProvider;
