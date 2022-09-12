import type { AppProps } from "next/app";
import GlobalStyle from "@styles/globalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "@styles/theme";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "src/common/utils/createEmotionCache";
import Head from "next/head";

const clientSideEmotionCache = createEmotionCache();

interface IAppProps extends AppProps {
  emotionCache: EmotionCache;
}

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: IAppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <GlobalStyle theme={theme} />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default MyApp;
