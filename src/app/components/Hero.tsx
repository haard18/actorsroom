import React from "react";
import { BackgroundLines } from "./ui/background-lines";

export function Hero() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
    <h2 className="text-center text-2xl md:text-4xl lg:text-7xl py-2 md:py-10 relative z-20 font-bold tracking-wider" style={{ fontFamily: "THEBOLDFONT" }}>
      The Actor&apos;s Room
    </h2>
      <p style={{ fontFamily: "THEBOLDFONT" }} className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        For the Actor Who Thinks, Feels, and Transforms.
      </p>
    </BackgroundLines>
  );
}
