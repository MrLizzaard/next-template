import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div>Doc1</div>
        {/* MAIN 은 _app.tsx */}
        <Main />
        <div>Doc2</div>
        <NextScript />
      </body>
    </Html>
  );
}
