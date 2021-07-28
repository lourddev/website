import { useEffect } from "react";
import { DefaultSeo } from "next-seo";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";

import { initGA, logPageView } from "../utils/analytics";
import { initCrisp } from "../utils/crisp";
import SEO from "../next-seo.config";
import { onKonami } from "../utils/konami";

import "../styles/minima.css";
import "../styles/syntax.css";

const App = ({ Component, pageProps }: AppProps) => {
  const { pathname } = useRouter();

  useEffect(() => {
    onKonami(() => {
      alert("WHAT?");
    });
    if (process.env.NODE_ENV == "production") {
      initCrisp();
    }

    if (!(window as any).GA_INITIALIZED) {
      initGA();
      (window as any).GA_INITIALIZED = true;
    }
    logPageView(pathname);
  }, []);

  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
};

export default App;
