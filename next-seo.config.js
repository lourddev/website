export const ROOT_URL = "https://www.lourd.dev";
export const SITE_NAME = "Lourd";
export const SITE_DESCRIPTION =
  "Twitch Extensions & Bots • Streaming & Interactivity tools";

export default {
  titleTemplate: `%s - ${SITE_NAME}`,
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "en_US",
    site_name: SITE_NAME,
    images: [
      {
        url: "https://www.lourd.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lourd",
      },
    ],
  },
  twitter: {
    handle: "@lourddev",
    site: "@lourddev",
    cardType: "summary_large_image",
  },
};
