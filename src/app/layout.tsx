import { Work_Sans } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const font = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lourd.dev",
  description: "Twitch Extensions & Bots • Streaming & Interactivity tools",
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
