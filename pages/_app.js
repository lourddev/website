import React from "react";
import Head from "next/head";

import "../styles/minima.css";
import "../styles/syntax.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Lourd</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
