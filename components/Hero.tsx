"use client";
import Image from "next/image";
import React from "react";
import { CalendarIcon } from "lucide-react";
import GradientHeading from "./GradientHeading";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-col justify-center items-center md:mb-12 mb-8 mt-3">
        <Image src="/agency-logo.png" alt="logo" width={130} height={130} />
        <div className="-mt-2 uppercase text-md font-bold bg-gradient-to-b from-zinc-100 to-zinc-800 bg-clip-text text-transparent">
          Creators mind
        </div>
      </div>

      <div className="flex flex-col justify-center items-center md:gap-4 gap-4 lg:w-2/3 w-full max-md:px-4 px-6">
        <GradientHeading
          as="h1"
          className="text-center md:text-6xl text-3xl text-white"
          highlightWords={["AI That Handles It", "Business"]}
        >
          Describe Your Business Problem or Need. We&apos;ll Build the AI That
          Handles It
        </GradientHeading>
        <p className="text-center md:text-lg text-sm text-gray-400 max-w-3xl">
          Tell us what&apos;s eating your time, losing you money, or holding you
          back. We listen to your specific situation, then build custom AI
          solutions that address your exact needs
        </p>
        <div className="flex justify-center items-center mt-6 relative">
          <button
            onClick={() => {
              const appointmentSection = document.getElementById(
                "appointment-section"
              );
              if (appointmentSection) {
                const yOffset = -80; // Small offset to show the heading nicely
                const y =
                  appointmentSection.getBoundingClientRect().top +
                  window.pageYOffset +
                  yOffset;

                window.scrollTo({
                  top: y,
                  behavior: "smooth",
                });
              }
            }}
            className="group relative overflow-hidden rounded-full bg-white hover:bg-gray-50 px-8 md:px-12 py-4 md:py-5 text-black font-bold text-lg md:text-xl uppercase tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-black/25 flex items-center gap-3 cursor-pointer"
          >
            <CalendarIcon className="w-5 h-5 md:w-6 md:h-6 text-black" />
            <span>book a free call</span>

            {/* Subtle shine effect on hover */}
            <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
