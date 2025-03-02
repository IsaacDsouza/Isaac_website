"use client";

import React from "react";
import { educationData } from "@/lib/data";
import useSectionInView from "@/lib/hooks";
import { useThemeContext } from "@/contexts/theme-context";
import SectionHeading from "./SectionHeading";
import { MdOutlineSchool } from "react-icons/md"; // Outlined Education Icon
import { motion } from "framer-motion";

export default function Education() {
  const { ref } = useSectionInView("Education", 0.3);
  const { theme } = useThemeContext();

  return (
    <section id="education" ref={ref} className="mb-28 scroll-mt-28 sm:mb-40">
      <SectionHeading>My Education</SectionHeading>

      {/* Timeline Container */}
      <div className="relative mt-10 flex flex-col items-center space-y-20">
        {/* Center Branch Line */}
        <div className="absolute left-1/2 -translate-x-1/2 w-[4px] h-full bg-gray-400 dark:bg-gray-600"></div>

        {/* Timeline Items */}
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`relative flex items-center w-full max-w-4xl ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            {/* Git Graph Node & Branch Connector */}
            <div className="relative w-1 h-full flex justify-center items-center"></div>

            {/* Outlined Education Icon (Matches Experience) */}
            <div
              className={`w-16 h-16 flex items-center justify-center rounded-full text-3xl shadow-lg ${
                theme === "light" ? "bg-gray-100 text-gray-800 border border-gray-400" : "bg-gray-700 text-white border border-gray-500"
              } ${index % 2 === 0 ? "ml-6" : "mr-6"}`}
            >
              <MdOutlineSchool /> {/* Outlined version of the school icon */}
            </div>

            {/* Education Card */}
            <div
              className={`p-6 w-96 md:w-[450px] lg:w-[500px] rounded-lg shadow-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 ${
                index % 2 === 0 ? "ml-6" : "mr-6"
              }`}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
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
