"use client";

import useSectionInView from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import SendEmailButton from "./SendEmailButton";
import sendEmail from "@/actions/sendEmail";
import { toast } from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 w-full max-w-[38rem] text-center sm:mb-28"
    >
      <SectionHeading>Contact Me</SectionHeading>

      <p className="-mt-6 text-sm leading-7 text-gray-700 sm:text-base dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:isaacdsouza0809@gmail.com">
          isaacdsouza0809@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col gap-3 dark:text-black"
        action={async (formData) => {
          const { error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully");
        }}
      >
        <input
          className="borderBlack h-14 rounded-lg px-4 text-sm transition-all placeholder:text-gray-400 dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100 sm:text-base"
          name="senderEmail"
          type="email"
          required
          maxLength={100}
          placeholder="Your email. e.g. example@email.com"
        />
        <textarea
          className="borderBlack h-48 rounded-lg p-4 text-sm transition-all placeholder:text-gray-400 dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100 sm:h-52 sm:text-base"
          name="message"
          required
          maxLength={5000}
          placeholder="Your message. e.g. Hello, I would like to collaborate with you..."
        />
        <SendEmailButton />
      </form>
    </motion.section>
  );
}
