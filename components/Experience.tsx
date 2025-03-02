"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
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
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#ffffff" : "#1e293b", // Matches Education
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Soft shadow like Education
                borderRadius: "12px", // Rounded corners for consistency
                textAlign: "left",
                padding: "1.5rem 2rem",
                color: theme === "light" ? "#1e293b" : "#f8fafc", // Text color
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid #94a3b8",
              }}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "#f8fafc" : "#334155",
                fontSize: "1.8rem",
                color: theme === "light" ? "#1e293b" : "#f8fafc",
              }}
            >
              {/* Animated Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <h3 className="text-xl font-bold">{item.title}</h3> {/* Matches Education Font */}
                <p className="!mt-0 text-sm text-gray-500 dark:text-gray-300">
                  {item.location}
                </p>
                <p className="!mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
