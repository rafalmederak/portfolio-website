import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      white: string;
      black: string;
      gray100: string;
      gray200: string;
      gray500: string;
      gray800: string;
      purple: string;
    };
    fontSize: {
      paragraph: string;
      heading4: string;
      heading3: string;
      heading2: string;
      heading1: string;
      heading0: string;
    };
    fontWeight: {
      light: number;
      regular: number;
      medium: number;
      semibold: number;
      bold: number;
    };
    boxShadow: {
      small: string;
      medium: string;
    };
    screens: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
  }
}
