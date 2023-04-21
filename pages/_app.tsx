import theme from "@styles/theme";
import GlobalStyle from "@styles/globalStyle";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import React, { Suspense } from "react";
import { ThemeProvider } from "styled-components";

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  // Component는 index.tsx 여기에 Recoil같은거 감싸기 I18Provider, styledComponent
  return (
    <Suspense fallback={<div>Suspense Fallback</div>}>
      <ThemeProvider
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        theme={theme}
      >
        <GlobalStyle />
        <SessionProvider
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          session={session}
        >
          <Component {...pageProps} />
        </SessionProvider>
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
