"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { Input } from "@/components/ui/input";
import React from "react";

const page = () => {
  const handleSubmit = (e: Event) => {
    e.preventDefault();
  };
  return (
    <div>
      <BackgroundBeams />
      <div className="md:space-x-2 mb-4 z-[800]">
        <div className="p-12 mt-24">
          <h1 className="text-5xl text-center mx-auto mt-10">Contact us </h1>
          <form
            className="flex flex-col w-3/12 space-y-4 mx-auto mt-10"
            onSubmit={(e) => handleSubmit}
          >
            <label htmlFor="name">Name:</label>
            <Input type="text" id="name" name="name" />

            <label htmlFor="email">Email:</label>
            <Input type="email" id="email" name="email" />

            <label htmlFor="message">Message:</label>
            <Input id="message" name="message" />

            <button type="submit" >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
