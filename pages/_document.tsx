import React from "react";
import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* MAIN 은 _app.tsx */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
