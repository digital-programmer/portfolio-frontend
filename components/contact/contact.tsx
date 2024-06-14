import { DM_Sans } from "next/font/google";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaClock, FaBolt, FaHandSparkles } from "react-icons/fa";
import ContactForm from "./contactForm";
import { Suspense } from "react";
import { SectionLoader } from "../ui/loader";
import ContactPoint from "./contactPoint";

const dmSans = DM_Sans({ subsets: ["latin"] });
export default async function Contact() {
  return (
    <div>
      <div className="mb-2">
        {/* start of customer pitch */}
        <div className="flex flex-col md:items-center md:justify-center mb-8 md:mb-12 bg-white py-4 md:py-12 px-3 md:px-4 rounded-md dark:bg-background-50 dark:border dark:border-primary-200 shadow-inner gap-2">
          <div
            className={
              "text-xl md:text-3xl font-semibold text-text-950 dark:text-text-950 " +
              dmSans.className
            }
          >
            Want to hire me?
          </div>
          <div className="font-light text-text-900 dark:text-text-900 text-xs md:text-sm mt-2 mb-4 md:text-center leading-4">
            Here&apos;s what some of my satisfied clients have to say about my
            work.
          </div>
          <div className="flex items-center md:justify-center gap-2 sm:gap-4">
            <div className="flex items-center gap-1 border border-primary-100 dark:border-primary-200 rounded-md py-1 px-2 justify-center shadow-inner">
              <FaClock
                className="text-accent-500 dark:text-accent-500"
                size={16}
              />
              <div className="text-[9px] md:text-xs leading-[10px] md:leading-3 font-light text-text-950 dark:text-text-950 text-center">
                Dedicated Support
              </div>
            </div>
            <div className="flex items-center gap-1 border border-primary-100 dark:border-primary-200 rounded-md py-1 px-2 justify-center shadow-inner">
              <FaBolt
                className="text-accent-500 dark:text-accent-500"
                size={16}
              />
              <div className="text-[9px] md:text-xs leading-[10px] md:leading-3 font-light text-text-950 dark:text-text-950 text-center">
                Quick Resolutions
              </div>
            </div>
            <div className="flex items-center gap-1 border border-primary-100 dark:border-primary-200 rounded-md py-1 px-2 justify-center shadow-inner">
              <FaHandSparkles
                className="text-accent-500 dark:text-accent-500"
                size={16}
              />
              <div className="text-[9px] md:text-xs leading-[10px] md:leading-3 font-light text-text-950 dark:text-text-950 text-center">
                Code quality
              </div>
            </div>
          </div>
        </div>
        {/* end of customer pitch */}

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
          <div className="col-span-1 md:col-span-2 flex flex-col gap-8 order-2 md:order-1">
            {/* start of contact details */}
            <div className="flex flex-col gap-2 md:gap-3">
              <div className="text-sm md:text-base text-text-900 dark:text-text-900 font-semibold">
                Contact details
              </div>
              <div className="text-sm flex flex-col gap-3 md:gap-4">
                <ContactPoint
                  label={"You can mail me here"}
                  data={"mohandibya.acharya@gmail.com"}
                />
                <ContactPoint
                  label={"Give me a call on"}
                  data={"+91 8328935275"}
                />
                <ContactPoint label={"Location"} data={"Somewhere in India"} />
              </div>
            </div>
            {/* end of contact details */}

            {/* start of social profiles */}
            <div className="flex flex-col gap-2 md:gap-3">
              <div className="text-sm md:text-base text-text-900 dark:text-text-900 font-semibold">
                Social profiles
              </div>
              <div className="w-max flex gap-3 md:gap-4 items-center shadow-inner p-2 rounded-md bg-white dark:bg-background-50 dark:border dark:border-primary-200">
                <Link
                  href={"https://www.linkedin.com/in/dibyamohanacharya/"}
                  target="_blank"
                >
                  <FaLinkedin
                    className="text-accent-500 dark:text-accent-500 rounded-lg"
                    size={24}
                  />
                </Link>
                <Link
                  href={"https://www.instagram.com/dibyamohan_"}
                  target="_blank"
                >
                  <FaInstagram
                    className="text-accent-500 dark:text-accent-500 rounded-lg"
                    size={24}
                  />
                </Link>
                <Link href={"https://twitter.com/dibya_mohan_"} target="_blank">
                  <FaTwitter
                    className="text-accent-500 dark:text-accent-500 rounded-lg"
                    size={24}
                  />
                </Link>
                <Link
                  href={"https://github.com/digital-programmer"}
                  target="_blank"
                >
                  <FaGithub
                    className="text-accent-500 dark:text-accent-500 rounded-lg"
                    size={24}
                  />
                </Link>
              </div>
            </div>
            {/* end of social profiles */}
          </div>
          {/* start of contact form */}
          <div className="col-span-1 md:col-span-3 order-1 md:order-2">
            <div className="flex flex-col gap-2 md:gap-3 h-full">
              <ContactForm />
            </div>
          </div>
          {/* end of contact form */}
        </div>
      </div>
    </div>
  );
}
