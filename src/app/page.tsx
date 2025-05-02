"use client";

import { useEffect } from "react";
import Image from "next/image";

import { onKonami } from "@/utils/konami";

export default function Home() {
  useEffect(() => {
    onKonami(() => {
      alert("WHAT?");
    });
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <Image
        src="/svg/logo.svg"
        alt="Lourd logo"
        width={230}
        height={230}
        className="inline"
      />

      <div className="text-8xl font-bold ">lourd</div>
      <div>Twitch Extensions & Bots • Streaming & Interactivity tools</div>
      <div className="flex gap-2 mt-4">
        <Image
          src="/svg/discord.svg"
          alt="Discord Logo"
          width={30}
          height={30}
          className="inline"
        />
        <Image
          src="/svg/globe.svg"
          alt="Status logo"
          width={30}
          height={30}
          className="inline"
        />
        <Image
          src="/svg/twitter.svg"
          alt="Twitter logo"
          width={30}
          height={30}
          className="inline"
        />
      </div>
    </div>
  );
}
