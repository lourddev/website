export const ROOT_URL = "https://lourd.dev";
export const SITE_NAME = "Lourd";

export default {
  titleTemplate: `%s - ${SITE_NAME}`,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: ROOT_URL,
    site_name: SITE_NAME,
  },
  twitter: {
    handle: "@lourddev",
    site: "@lourddev",
    cardType: "summary_large_image",
  },
};
