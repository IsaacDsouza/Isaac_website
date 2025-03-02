"use server";
import { Resend } from "resend";
import { getErrorMessage, validateString } from "@/lib/utils";
import { createElement } from "react";
import ContactFormEmail from "@/email/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function sendEmail(formData: FormData) {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 100)) {
    return {
      message: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      message: "Invalid message",
    };
  }

  let data;

  try {
    data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "isaacdsouza0809@gmail.com",
      subject: "Message from Portfolio Contact Form",
      reply_to: senderEmail,
      react: createElement(ContactFormEmail, {
        senderEmail: senderEmail,
        message: message,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
}
