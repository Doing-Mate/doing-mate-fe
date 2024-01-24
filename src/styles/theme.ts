export type Colors = typeof colors;
export type Fonts = typeof fonts;

export type Theme = {
  colors: Colors;
  fonts: Fonts;
};

const palette = {
  BLACK: "#14142B",
  WHITE: "#FFFFFF",
  YELLOW: "#F7CB2D",
  BLUE: {
    100: "#BDD3F6",
    200: "#8FA5C6",
    300: "#647999",
    400: "#3A506E",
    500: "#102B45",
  },
  PINK: {
    100: "#EBBAC7",
    500: "#B28491",
  },
  GREY: {
    100: "#A2ACBD",
    500: "#3E4756",
  },
};

const colors = {
  primary: palette.BLUE[100],
  primary_dark: palette.BLUE[500],
  secondary: palette.PINK[100],
  secondary_dark: palette.PINK[500],
  warning: palette.YELLOW,
  neutral: palette.GREY[100],
  neutral_dark: palette.GREY[500],
  black: palette.BLACK,
  white: palette.WHITE,
};

const fonts = {
  size: {
    xxSmall: "1rem",
    xSmall: "1.2rem",
    small: "1.4rem",
    base: "1.6rem",
    medium: "1.8rem",
    large: "2rem",
    xLarge: "2.2rem",
    xxLarge: "3.0rem",
  },
};

const theme: Theme = {
  colors,
  fonts,
};

export default theme;
