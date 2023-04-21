import GlobalStyle from "@styles/globalStyle";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import React from "react";

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      {/* Component는 index.tsx 여기에 Recoil같은거 감싸기 I18Provider, styledComponent */}
      <SessionProvider
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        session={session}
      >
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
};

export default App;
