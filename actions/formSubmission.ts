"use server";

import { verify } from "hcaptcha";

const secretKey = process.env.HCAPTCHA_ACCOUNT_SECRET;
const staticFormKey = process.env.STATIC_FORM_API_KEY;

export type ContactformPayloadType = {
  name: string;
  email: string;
  message: string;
  captchaToken: string;
};

export const onContactFormSubmit = async (payLoad: ContactformPayloadType) => {
  try {
    const { captchaToken } = payLoad;

    if (!captchaToken) {
      return { message: "Invalid captcha", success: false };
    }

    const { success } = await verify(secretKey as string, captchaToken);

    if (!success) {
      return { message: "Invalid captcha", success: false };
    }

    const response = await submitFormData(payLoad);
    return response;
  } catch (error) {
    return { message: "Verification failed", success: false };
  }
};

export const submitFormData = async (payLoad: ContactformPayloadType) => {
  const contact = {
    name: payLoad.name,
    email: payLoad.email,
    subject: "StaticForms - Contact Form | New entry",
    message: payLoad.message,
    replyTo: payLoad.email,
    accessKey: staticFormKey,
  };
  const res = await fetch("https://api.staticforms.xyz/submit", {
    method: "POST",
    body: JSON.stringify(contact),
    headers: { "Content-Type": "application/json" },
  });

  const json = await res.json();
  if (json.success) {
    return {
      success: true,
      message: "Thank you for reaching out to us.",
    };
  } else {
    return {
      success: false,
      message: "An error occured while submitting the form.",
    };
  }
};
