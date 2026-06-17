"use client";

import useSectionInView from "@/lib/hooks";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 w-full max-w-[53rem] scroll-mt-28 text-center"
    >
      <SectionHeading>My Skills</SectionHeading>

      <ul className="flex flex-wrap justify-center gap-2 text-base text-gray-800 sm:text-lg">
        {skillsData.map((skill, index) => (
          <motion.li
            key={skill.name}
            className="borderBlack flex items-center gap-2 rounded-xl bg-white px-3 py-2 dark:bg-white/10 dark:text-white/80 sm:px-5 sm:py-3"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            <span className="!text-xl">{skill.icon}</span>
            <span>{skill.name}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
