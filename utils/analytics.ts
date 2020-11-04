import ReactGA from "react-ga";

export const initGA = () => {
  ReactGA.initialize(process.env.NEXT_PUBLIC_GA_TRACKING_ID || "");
};

export const logPageView = (pathname: string) => {
  ReactGA.set({ page: pathname });
  ReactGA.pageview(pathname);
};
