"use client";
import React from "react";
import Cal from "@calcom/embed-react";
import GradientHeading from "./GradientHeading";

const Appointment = () => {
  return (
    <div
      id="appointment-section"
      className="flex flex-col items-center justify-center w-full"
    >
      <div className="flex flex-col items-center justify-center w-full md:pt-24 p-6 md:p-10 md:gap-4 gap-3">
        <GradientHeading
          className="md:text-5xl text-2xl sm:text-3xl text-white uppercase text-center leading-tight"
          highlightWords={["consultation"]}
        >
          Book your consultation
        </GradientHeading>
        <p className="md:text-lg text-center text-sm text-gray-400 max-w-2xl px-4 leading-relaxed">
          Book a free consultation to discuss your needs and explore how we can
          help you achieve your goals.
        </p>
      </div>
      <div
        id="book-appointment"
        className="w-full mt-6 rounded-lg overflow-hidden"
        style={{ height: "600px" }}
      >
        {/* Cal.com Integration */}
        <Cal
          namespace="onboarding"
          calLink="azaan-saifi/onboarding"
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{
            layout: "month_view",
            theme: "dark",
          }}
        />
      </div>
    </div>
  );
};

export default Appointment;
