import { css } from "@emotion/react";

const colors = {
  white: "#fff",
  black: "#222",

  // accent
  primary: "#EA3A36",
  secondary: "#F27D2C",

  ivory100: "#e8e7d5",
};

const maxWidth = css`
  max-width: 1024px;
`;

const theme = { colors, maxWidth };

export default theme;

type ColorType = keyof typeof theme.colors;

export type { ColorType };
