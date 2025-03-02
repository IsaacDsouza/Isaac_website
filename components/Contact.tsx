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
      className="mb-20 min-w-[min(100%,38rem)] text-center sm:mb-28"
    >
      <SectionHeading>Contact Me</SectionHeading>

      <p className="-mt-6 text-gray-700 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:isaacdsouza0809@gmail.com">
          isaacdsouza0809@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
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
          className="borderBlack h-14 rounded-lg px-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
          name="senderEmail"
          type="email"
          required
          maxLength={100}
          placeholder="Your email. e.g. example@email.com"
        />
        <textarea
          className="borderBlack my-3 h-52 rounded-lg p-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
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
