"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MdCode, MdSchool, MdSecurity } from "react-icons/md";
import useSectionInView from "@/lib/hooks";
import SectionHeading from "./SectionHeading";

const facts = [
  {
    label: "Current Role",
    value: "Cyber Security Intern, Eli Lilly & Company",
    icon: MdSecurity,
  },
  {
    label: "Specialization",
    value: "AI Systems, Security Automation & Backend Engineering",
    icon: MdCode,
  },
  {
    label: "Education",
    value: "B.Tech CSE (AI), Manipal Institute of Technology",
    icon: MdSchool,
  },
] as const;

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 max-w-[70rem] scroll-mt-28 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>

      <div className="grid gap-10 lg:grid-cols-[22rem_minmax(0,1fr)] lg:items-start">
        <figure className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xl dark:border-white/10 dark:bg-white/5">
          <Image
            className="aspect-[4/5] w-full object-cover"
            width={420}
            height={520}
            alt="Isaac Marian Dsouza"
            src="/Isaacportweb.jpg"
            priority
          />

          <figcaption className="border-t border-black/5 px-5 py-4 dark:border-white/10">
            <p className="text-base font-semibold text-gray-900 dark:text-white">
              Isaac Marian Dsouza
            </p>

            <p className="mt-1 text-sm text-gray-600 dark:text-white/70">
              Full Stack Engineer specializing in AI Systems, Security
              Engineering, Cloud Infrastructure, and Enterprise Automation.
            </p>
          </figcaption>
        </figure>

        <div className="space-y-6">
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5 sm:p-8">
            <p className="text-lg leading-8 text-gray-700 dark:text-white/80 sm:text-[1.15rem]">
              I am a Full Stack Engineer with experience building
              AI-powered platforms, cloud-native applications, and
              enterprise security solutions. My work focuses on designing
              scalable backend systems, intelligent automation workflows,
              and software that solves complex operational challenges in
              real-world environments.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700 dark:text-white/80 sm:text-[1.15rem]">
              Currently, I work as a Cyber Security Intern at Eli Lilly,
              where I build compliance intelligence platforms, phishing
              analytics systems, and security automation solutions using
              FastAPI, Kubernetes, Azure, Claude Agents, and modern cloud
              infrastructure. I enjoy working at the intersection of
              software engineering, artificial intelligence, and
              cybersecurity to create systems that are scalable,
              maintainable, and impactful.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700 dark:text-white/80 sm:text-[1.15rem]">
              Beyond development, I am passionate about system design,
              distributed architectures, DevOps practices, and applying
              AI to solve enterprise-scale problems. I value clean
              engineering, strong security foundations, and building
              products that provide measurable business impact.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {facts.map((fact) => {
              const Icon = fact.icon;

              return (
                <div
                  key={fact.label}
                  className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5"
                >
                  <Icon className="text-2xl text-gray-900 dark:text-white" />

                  <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-white/50">
                    {fact.label}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-gray-700 dark:text-white/75">
                    {fact.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}