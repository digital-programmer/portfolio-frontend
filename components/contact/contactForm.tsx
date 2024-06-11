"use client";

import Link from "next/link";
import { SyntheticEvent, useState, useRef, useContext, useEffect } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { ContactformPayloadType, onContactFormSubmit } from "@/actions/formSubmission";
import { ThemeContext } from "@/utils/themeContext";
import { ToastOptions, ToastTransition, toast } from "react-toastify";

const sitekey = process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY;

interface ExecuteResponse {
  response: string;
  key: string;
}

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef<HTMLFormElement>(null);
  const captchaRef = useRef<HCaptcha | null>(null);
  const {theme} = useContext(ThemeContext);

  function notify({success, message}: {success:boolean, message: string}) {
    const options: ToastOptions<any> = {
      position: "bottom-right",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme,
    }
    if (success) {
      toast.success(message, options);
    } else {
      toast.error(message, options);
    }
  };

  async function handleFormSubmit(e: SyntheticEvent) {
    e.preventDefault();
    if (loading) {
      return;
    }
    try {
      setLoading(true);
      const {response} = await captchaRef.current?.execute({ async: true }) as ExecuteResponse;
      const payLoad: ContactformPayloadType = {
        captchaToken: response,
        name,
        email,
        message
      };
      const formResponse = await onContactFormSubmit(payLoad);
      if (formResponse.success) {
        setSubmitted(true);
      }
      notify(formResponse);
    } catch(err) {
      notify({success: false, message: `Something went wrong. Please try again!`})
      console.log(err);
    } finally {
      setLoading(false);
    }    
  }


  if (submitted) {
    return (
      <div className="dark:bg-background-100 dark:border dark:border-primary-200 shadow-inner rounded-md h-max p-4 md:p-6 bg-white gap-4 flex lg:mt-[36px]">
        <div className="text-text-900 dark:text-text-900 flex flex-col gap-4">
          <div className="text-[12px] md:text-sm text-text-900 dark:text-text-900 font-semibold">
            Thanks for contacting me.
            <br />I will reach back to you shortly.
          </div>
          <div className="text-[12px] md:text-sm text-text-900 dark:text-text-900 flex flex-col gap-1">
            <div className="font-light">Meanwhile, you can check out -</div>
            <div className="flex gap-4 items-center font-light">
              <Link
                href={"/blog"}
                className="flex gap-[4px] items-center text-accent-500 dark:text-accent-500 underline underline-offset-2"
              >
                Blog
                <FaArrowUpRightFromSquare size={12} />
              </Link>
              <Link
                href={"/portfolio"}
                className="flex gap-[4px] items-center text-accent-500 dark:text-accent-500 underline underline-offset-2"
              >
                Portfolio
                <FaArrowUpRightFromSquare size={12} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="text-sm md:text-base text-text-900 dark:text-text-900 font-semibold">
        Let&apos;s connect
      </div>
      <form onSubmit={handleFormSubmit} ref={ref}>
        <div className="dark:bg-background-50 dark:border dark:border-primary-200 shadow-inner rounded-md h-max p-4 md:p-6 bg-white flex flex-col gap-4">
          <div className="text-[12px] md:text-sm flex flex-col gap-1">
            <label
              htmlFor="name"
              className="block leading-6 text-text-900 font-normal"
            >
              Name
            </label>
            <div>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="off"
                placeholder="Naruto Uzumaki"
                className="block w-full rounded-md border-0 px-3 md:px-3.5 py-2 md:py-2.5 text-text-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent-300 sm:text-sm sm:leading-6 dark:bg-background-100 dark:ring-background-200 dark:placeholder:text-primary-300 outline-none dark:focus:ring-accent-400"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={loading}
              />
            </div>
          </div>
          <div className="text-[12px] md:text-sm flex flex-col gap-1">
            <label
              htmlFor="email"
              className="block leading-6 text-text-900 font-normal"
            >
              Email
            </label>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                placeholder="example@hokage.com"
                className="block w-full rounded-md border-0 px-3 md:px-3.5 py-2 md:py-2.5 text-text-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent-300 sm:text-sm sm:leading-6 dark:bg-background-100 dark:ring-background-200 dark:placeholder:text-primary-300 outline-none dark:focus:ring-accent-400"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
            </div>
          </div>
          <div className="text-[12px] md:text-sm flex flex-col gap-1">
            <label
              htmlFor="about"
              className="block leading-6 text-text-900 font-normal"
            >
              Message
            </label>
            <div>
              <textarea
                id="about"
                name="about"
                rows={4}
                placeholder="What are you looking for?"
                className="block w-full rounded-md border-0 px-3 md:px-3.5 py-2 md:py-2.5 text-text-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent-300 sm:text-sm sm:leading-6 dark:bg-background-100 dark:ring-background-200 dark:placeholder:text-primary-300 outline-none dark:focus:ring-accent-400"
                maxLength={500}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={loading}
              />
            </div>
          </div>
          <HCaptcha
            sitekey={sitekey as string}
            ref={captchaRef}
            theme={theme}
            size="invisible"
          />
          <div className="flex justify-start">
            <button
              type="submit"
              className="text-text-100 dark:text-text-900 bg-gradient-to-br from-accent-400 to-accent-500 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-[12px] md:text-sm px-4 py-2 md:px-5 md:py-2.5 text-center dark:from-accent-500 dark:to-accent-600 flex items-center gap-2"
              disabled={loading}
            >
              Submit
              {loading ? <ButtonLoader /> : ""}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

const ButtonLoader = () => {
  return (
    <svg
      aria-hidden="true"
      role="status"
      className="inline w-4 h-4 text-white animate-spin"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="#E5E7EB"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentColor"
      />
    </svg>
  );
};
