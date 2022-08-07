import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  color: {
    white: "#FFFFFF",
    black: "#000000",
    gray100: "#F6F6F6",
    gray200: "#DFDFDF",
    gray500: "#363636",
    gray800: "#1C1C1C",
    purple: "#3A42FD",
  },
  fontSize: {
    paragraph: "1.6rem",
    heading4: "1.8rem",
    heading3: "2.4rem",
    heading2: "3.2rem",
    heading1: "4.4rem",
    heading0: "7.2rem",
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  boxShadow: {
    small: "0px 1px 2px rgba(0, 0, 0, 0.25);",
    medium: "0px 0px 4px rgba(0, 0, 0, 0.25);",
  },
  screens: {
    sm: "@media screen and (min-width: 640px)",
    md: "@media screen and (min-width: 768px)",
    lg: "@media screen and (min-width: 1024px)",
    xl: "@media screen and (min-width: 1280px)",
    xxl: "@media screen and (min-width: 1556px)",
  },
};
