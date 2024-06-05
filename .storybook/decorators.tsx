import { Global } from "@emotion/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { GlobalStyle } from "../src/styles/globalStyle";

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles: GlobalStyle,
  }),
];
