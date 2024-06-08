import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { GlobalStyle } from "../src/styles/globalStyle";
import { Global } from "@emotion/react";
import React from "react";

const GlobalStyles = () => {
  return <Global styles={GlobalStyle} />;
};

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles,
  }),
];
