"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GradientHeading from "./GradientHeading";
import { Linkedin } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What is the typical timeline for development?",
    answer:
      "Most AI solutions can be developed within 2-4 weeks. Simple voice agents and chatbots can be live in as little as 7-10 days, while complex automation workflows typically take 2-3 weeks. We provide a detailed timeline in our proposal based on your specific needs.",
  },
  {
    id: 2,
    question: "How do you ensure the AI solution meets my business needs?",
    answer:
      "We start every project with an in-depth consultation to fully understand your business objectives, challenges, and goals. This helps us design a custom AI solution that aligns with your specific needs. Throughout the development process, we maintain close communication, providing regular updates and incorporating your feedback to ensure the final product delivers the desired results.",
  },
  {
    id: 3,
    question: "Who is this service ideally for?",
    answer:
      "We work with companies ranging from small businesses, startups, real estate firms, universities, to law firms. Our services are designed to cater to any business looking to leverage AI to improve efficiency, increase revenue, or create innovative products.",
  },
  {
    id: 4,
    question: "What kind of post-launch support do you provide?",
    answer:
      "After your AI solution or MVP is launched, we provide comprehensive post-launch support to ensure everything runs smoothly. This includes monitoring the performance of the AI models, making necessary adjustments, and offering ongoing optimization based on your evolving business needs. Our support packages are flexible and can be tailored to your specific requirements.",
  },
];

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="w-full py-18 md:py-20 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <GradientHeading
            className="text-3xl md:text-4xl lg:text-5xl text-neutral-900 dark:text-white mb-4"
            highlightWords={["Questions"]}
          >
            Frequently Asked Questions
          </GradientHeading>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto"
          >
            Everything you need to know about AI automation for your business
          </motion.p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-neutral-900/50 to-neutral-800/50 backdrop-blur-sm  rounded-2xl border border-zinc-700 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 md:px-8 py-6 text-left flex items-center justify-between  rounded-2xl transition-colors duration-200 hover:bg-neutral-750"
              >
                <h3 className="text-lg md:text-xl font-semibold text-neutral-900 dark:text-white pr-4 leading-relaxed">
                  {item.question}
                </h3>
                <motion.div
                  animate={{ rotate: openItems.includes(item.id) ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex-shrink-0"
                >
                  <ChevronDownIcon className="w-6 h-6 text-neutral-500 dark:text-neutral-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openItems.includes(item.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-6">
                      <motion.p
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-base md:text-lg"
                      >
                        {item.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center flex flex-col items-center justify-center mt-12 md:mt-16"
        >
          <GradientHeading
            className="text-white mb-6 md:text-4xl text-2xl capitalize"
            highlightWords={["Questions?"]}
            animate={false}
          >
            Still have questions
          </GradientHeading>
          <div className="text-gray-300 text-center space-y-3 md:space-y-0">
            {/* Mobile: Stack vertically, Desktop: Inline */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-2 space-y-2 md:space-y-0">
              <span className="flex items-center justify-center gap-2">
                Email us at{" "}
                <a
                  href="mailto:azaan@creators-mind.com"
                  className="hover:underline bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent font-semibold hover:from-yellow-300 hover:via-orange-400 hover:to-yellow-500 transition-all duration-300"
                >
                  azaan@creators-mind.com
                </a>
              </span>

              <span className="hidden md:inline text-gray-500">or</span>

              <span className="flex items-center justify-center gap-2">
                <span className="md:hidden">or</span>
                reach out via{" "}
                <a
                  href="https://linkedin.com/in/azaan-saifi"
                  className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent font-semibold hover:from-yellow-300 hover:via-orange-400 hover:to-yellow-500 transition-all duration-300 inline-flex items-center gap-1 hover:underline"
                >
                  LinkedIn
                </a>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
