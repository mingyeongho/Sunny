const colors = {
  white: "#fff",
  black: "#222",

  // accent
  primary: "#EA3A36",
  secondary: "#F27D2C",
};

const theme = { colors };

export default theme;

type ColorType = keyof typeof theme.colors;

export type { ColorType };
