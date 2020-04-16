import React from "react";
import { DefaultSeo } from "next-seo";

import SEO from "../next-seo.config";

import "../styles/minima.css";
import "../styles/syntax.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}
