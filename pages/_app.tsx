import type { AppProps } from "next/app";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div>App1</div>
      {/* Component는 index.tsx 여기에 Recoil같은거 감싸기 I18Provider, styledComponent */}
      <Component {...pageProps} />
      <div>App2</div>
    </>
  );
}
