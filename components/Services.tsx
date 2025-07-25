"use client";

import React from "react";
import { motion } from "framer-motion";
import GradientHeading from "./GradientHeading";

interface ServiceCard {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const services: ServiceCard[] = [
  {
    id: 1,
    title: "AI Voice Agents",
    description: "Convert more leads with intelligent AI receptionists.",
    icon: (
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400/10 to-orange-500/10 border border-yellow-400/20 flex items-center justify-center">
        <svg
          className="w-6 h-6 text-yellow-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      </div>
    ),
    features: [
      "Never miss potential customers",
      "Convert 3x more leads into sales",
      "Save 15+ hours per week",
    ],
  },
  {
    id: 2,
    title: "AI Automation",
    description: "Streamline workflows and eliminate repetitive tasks.",
    icon: (
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400/10 to-orange-500/10 border border-yellow-400/20 flex items-center justify-center">
        <svg
          className="w-6 h-6 text-yellow-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      </div>
    ),
    features: [
      "Reduce manual work by 80%",
      "Eliminate costly human errors",
      "Scale without hiring more staff",
    ],
  },
  {
    id: 3,
    title: "Content Generation",
    description: "Create engaging content that converts visitors to customers.",
    icon: (
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400/10 to-orange-500/10 border border-yellow-400/20 flex items-center justify-center">
        <svg
          className="w-6 h-6 text-yellow-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      </div>
    ),
    features: [
      "Create content 10x faster",
      "Maintain consistent brand voice",
      "Boost engagement by 40%",
    ],
  },
  {
    id: 4,
    title: "Custom Solutions",
    description:
      "Tailored AI solutions designed for your specific business needs.",
    icon: (
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400/10 to-orange-500/10 border border-yellow-400/20 flex items-center justify-center">
        <svg
          className="w-6 h-6 text-yellow-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      </div>
    ),
    features: [
      "Perfect fit for your business needs",
      "Gain competitive advantage",
      "Measurable ROI within 60 days",
    ],
  },
];

const Services = () => {
  return (
    <section className="w-full py-12 md:py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col items-center justify-center w-full md:pt-12 pb-12 md:gap-4 gap-2">
          <GradientHeading
            className="md:text-5xl text-3xl text-white text-center"
            highlightWords={["AI", "SERVICES"]}
          >
            OUR AI SERVICES
          </GradientHeading>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:text-lg text-center text-sm text-gray-400 max-w-3xl"
          >
            Stop losing money on manual tasks. We build AI systems that handle
            your boring work so you can focus on making more revenue.
          </motion.p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative bg-gradient-to-br from-neutral-900/50 to-neutral-800/50 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-neutral-700/50 hover:border-yellow-400/30 transition-all duration-500 group hover:shadow-2xl hover:shadow-yellow-400/10"
            >
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-orange-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className="mb-6 relative z-10">{service.icon}</div>

              {/* Content */}
              <div className="space-y-4 relative z-10">
                <h3 className="md:text-xl text-lg font-bold text-white group-hover:text-yellow-50 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-300 text-sm md:text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-3 text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex-shrink-0 shadow-sm shadow-yellow-400/20" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
