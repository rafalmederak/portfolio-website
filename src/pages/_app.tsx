import type { AppProps } from "next/app";
import GlobalStyle from "@styles/globalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "@styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
