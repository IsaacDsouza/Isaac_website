"use server";
import { Resend } from "resend";
import { getErrorMessage, validateString } from "@/lib/utils";
import { createElement } from "react";
import ContactFormEmail from "@/email/ContactFormEmail";

// Ensure the API key is defined
if (!process.env.RESEND_API_KEY) {
  throw new Error("Missing RESEND_API_KEY in environment variables.");
}

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function sendEmail(formData: FormData) {
  const senderEmail = formData.get("senderEmail") as string;
  const message = formData.get("message") as string;

  if (!validateString(senderEmail, 100)) {
    return { error: "Invalid sender email" };
  }
  if (!validateString(message, 5000)) {
    return { error: "Invalid message" };
  }

  try {
    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "isaacdsouza0809@gmail.com",
      subject: "Message from Portfolio Contact Form",
      reply_to: senderEmail, // Fix key to camelCase
      react: createElement(ContactFormEmail, {
        senderEmail,
        message,
      }),
    });

    return { data };
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }
}
