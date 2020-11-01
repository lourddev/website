import { useEffect } from "react";
import { DefaultSeo } from "next-seo";
import { useRouter } from "next/router";
import { initGA, logPageView } from "../utils/analytics";
import SEO from "../next-seo.config";

import "../styles/minima.css";
import "../styles/syntax.css";

const App = ({ Component, pageProps }) => {
  const { pathname } = useRouter();
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
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
