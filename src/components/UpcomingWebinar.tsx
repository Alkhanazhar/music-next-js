"use client";

import Link from "next/link";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
];
const UpcomingWebinar = () => {
  return (
    <div className="p-12">
      <div>
        <div className="text-center">
          <h2 className="text-4xl text-teal-600 font-semibold tracking-wide uppercase">
            Upcoming Webinar
          </h2>
          <p className="mt-4 text-xl leading-8 font-extrabold tracking-tight text-white sm:text-2xl">
            Learn With the Best
          </p>
        </div>
        <div className="mt-10">
          <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={projects} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingWebinar;
