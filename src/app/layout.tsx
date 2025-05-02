import { Work_Sans } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const font = Work_Sans({ subsets: ["latin"] });

const SITE_TITLE = "Lourd.dev";
const SITE_DESCRIPTION =
  "Twitch Extensions & Bots • Streaming & Interactivity tools";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-black text-white mx-auto container antialiased ${font.className}`}
      >
        {children}
      </body>
    </html>
  );
}
