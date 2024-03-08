"use client";

import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  const words: string = `Unlock the Melodies Within: Immerse Yourself in the Art of Music with Our Expert Courses. From Harmony to Rhythm, Let Your Musical Journey Begin! `;
  return (
    <section className="h-auto min-h-screen md:h-[40rem] flex flex-col items-center justify-center overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-10 overflow-hidden"
        fill="silver"
      />
      <div className="p-4 z-10 w-full">
        <div className="mt-20 md:mt-30 text-4xl md:text-7xl font-bold bg-gradient-to-b from-white to-[#6b6b6b] bg-clip-text text-transparent">
          Master the art of Music
        </div>

        <TextGenerateEffect
          words={words}
          className="max-w-lg mx-auto my-10 leading-snug"
        />

        <div className="mt-10 text-xl ">
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <Link href={"/courses"}>Explore Courses</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
