"use client";

import React from "react";
import { motion } from "framer-motion";

interface GradientHeadingProps {
  children: React.ReactNode;
  className?: string;
  highlightWords?: string[];
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  animate?: boolean;
}

export default function GradientHeading({
  children,
  className = "",
  highlightWords = [],
  as: Component = "h2",
  animate = true,
}: GradientHeadingProps) {
  const processText = (text: string) => {
    if (highlightWords.length === 0) return text;

    let processedText = text;
    highlightWords.forEach((word) => {
      const regex = new RegExp(`\\b${word}\\b`, "gi");
      processedText = processedText.replace(
        regex,
        `<span class="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent font-bold">${word}</span>`
      );
    });

    return processedText;
  };

  const renderContent = () => {
    if (typeof children === "string") {
      return (
        <span
          dangerouslySetInnerHTML={{
            __html: processText(children),
          }}
        />
      );
    }
    return children;
  };

  const baseClasses = `font-bold leading-tight ${className}`;

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Component className={baseClasses}>{renderContent()}</Component>
      </motion.div>
    );
  }

  return <Component className={baseClasses}>{renderContent()}</Component>;
}
