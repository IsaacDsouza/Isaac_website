"use client";

import React from "react";
import { experiencesData } from "@/lib/data";
import useSectionInView from "@/lib/hooks";
import { useThemeContext } from "@/contexts/theme-context";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.3);
  const { theme } = useThemeContext();

  return (
    <section id="experience" ref={ref} className="mb-28 scroll-mt-28 sm:mb-40">
      <SectionHeading>Professional Experience</SectionHeading>

      {/* Timeline Container */}
      <div className="relative mt-10 flex flex-col items-center space-y-20">
        {/* Center Branch Line */}
        <div className="absolute left-1/2 -translate-x-1/2 w-[4px] h-full bg-gray-400 dark:bg-gray-600"></div>

        {/* Timeline Items */}
        {experiencesData.map((item, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`relative flex items-center w-full max-w-4xl ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            {/* Connector Spacer */}
            <div className="relative w-1 h-full flex justify-center items-center"></div>

            {/* Outlined Icon */}
            <div
              className={`w-16 h-16 flex items-center justify-center rounded-full text-3xl shadow-lg z-10 ${
                theme === "light"
                  ? "bg-gray-100 text-gray-800 border border-gray-400"
                  : "bg-gray-700 text-white border border-gray-500"
              } ${index % 2 === 0 ? "ml-6" : "mr-6"}`}
            >
              {item.icon}
            </div>

            {/* Experience Card */}
            <div
              className={`p-6 w-96 md:w-[450px] lg:w-[500px] rounded-lg shadow-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 ${
                index % 2 === 0 ? "ml-6" : "mr-6"
              }`}
            >
              <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <span className="text-xs font-semibold px-2 py-1 rounded-md bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 whitespace-nowrap">
                  {item.date}
                </span>
              </div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {item.location}
              </p>
              <p className="mt-2 text-md text-gray-700 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

