import { verify } from "hcaptcha";

const secretKey = process.env.NEXT_HCAPTCHA_ACCOUNT_SECRET;

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

    return { message: "Success", success: true };
  } catch (error) {
    return { message: "Verification failed", success: false };
  }
};
