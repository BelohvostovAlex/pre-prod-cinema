import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { ThemeProvider } from "styled-components";

import globalStyles from "../src/styles/global";
import { mergeThemes } from "../src/styles/theme/config/index";
import darkTheme from "../src/styles/theme/dark";
import lightTheme from "../src/styles/theme/light";
import { ThemeTypes } from "../src/constants/styles/theme";
import { Decorator } from "./Decorator";
import { i18nDecorator } from "./i18nDecorator";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const lightMode = mergeThemes(lightTheme);
const darkMode = mergeThemes(darkTheme);

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightMode,
      dark: darkMode,
    },
    defaultTheme: ThemeTypes.DARK,
    Provider: ThemeProvider,
    GlobalStyles: globalStyles,
  }),
  Decorator,
  i18nDecorator,
];

export const globalTypes = {
  locale: {
    title: "Locale",
    description: "Internationalization locale",
    toolbar: {
      icon: "globe",
      items: [
        { value: "en", title: "English" },
        { value: "ru", title: "Russian" },
      ],
    },
  },
};
