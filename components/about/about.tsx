import { DM_Sans } from "next/font/google";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaClock, FaBolt, FaHandSparkles } from "react-icons/fa";

const dmSans = DM_Sans({ subsets: ["latin"] });

export default function About() {
  return (
    <div>
      <div
        className={
          "text-text-900 dark:text-text-900 text-xl md:text-3xl font-bold " +
          dmSans.className
        }
      >
        About
      </div>
      <div className="mt-8 mb-2">
        {/* start of customer pitch */}
        <div className="flex flex-col items-center justify-center mb-12 md:mb-16">
          <div className="text-xl md:text-3xl font-semibold text-text-950 dark:text-text-950">
            I&apos;d love to hear from you
          </div>
          <div className="font-light text-text-900 dark:text-text-900 text-[12px] md:text-sm mt-2 mb-4 text-center leading-4">
            Here&apos;s what some of my satisfied clients have to say about my
            work
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-1 md:gap-2 border border-background-100 dark:border-background-100 rounded-md py-1 px-2 justify-between">
              <FaClock
                className="text-accent-500 dark:text-accent-500"
                size={16}
              />
              <div className="text-[9px] md:text-[12px] leading-[10px] md:leading-3 font-thin text-text-950 dark:text-text-950 text-center">
                Dedicated Support
              </div>
            </div>
            <div className="flex items-center gap-1 md:gap-2 border border-background-100 dark:border-background-100 rounded-md py-1 px-2 justify-between">
              <FaBolt
                className="text-accent-500 dark:text-accent-500"
                size={16}
              />
              <div className="text-[9px] md:text-[12px] leading-[10px] md:leading-3 font-thin text-text-950 dark:text-text-950 text-center">
                Quick Resolutions
              </div>
            </div>
            <div className="flex items-center gap-1 md:gap-2 border border-background-100 dark:border-background-100 rounded-md py-1 px-2 justify-between">
              <FaHandSparkles
                className="text-accent-500 dark:text-accent-500"
                size={16}
              />
              <div className="text-[9px] md:text-[12px] leading-[10px] md:leading-3 font-thin text-text-950 dark:text-text-950 text-center">
                Flexible hours
              </div>
            </div>
          </div>
        </div>
        {/* end of customer pitch */}

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="col-span-1 md:col-span-2 flex flex-col gap-8">
            {/* start of contact details */}
            <div className="flex flex-col gap-2 md:gap-3">
              <div className="text-sm md:text-base text-text-900 dark:text-text-900 font-semibold">
                My contact details
              </div>
              <div className="text-sm flex flex-col gap-4">
                <div className="bg-background-100 dark:bg-background-100 rounded-md px-4 py-2">
                  <div className="font-light text-[12px] text-text-900 dark:text-text-900">
                    You can mail me here
                  </div>
                  <div className="font-semibold text-text-950 dark:text-text-950">
                    mohandibya.acharya@gmail.com
                  </div>
                </div>
                <div className="bg-background-100 dark:bg-background-100 rounded-md px-4 py-2">
                  <div className="font-light text-[12px] text-text-900 dark:text-text-900">
                    Give me a call on
                  </div>
                  <div className="font-semibold text-text-950 dark:text-text-950">
                    +91 8328935275
                  </div>
                </div>
                <div className="bg-background-100 dark:bg-background-100 rounded-md px-4 py-2">
                  <div className="font-light text-[12px] text-text-900 dark:text-text-900">
                    Location
                  </div>
                  <div className="font-semibold text-text-950 dark:text-text-950">
                    Somewhere in India{" "}
                  </div>
                </div>
              </div>
            </div>

            {/* end of contact details */}

            {/* start of social profiles */}
            <div className="flex flex-col gap-2 md:gap-3">
              <div className="text-sm md:text-base text-text-900 dark:text-text-900 font-semibold">
                My social profiles
              </div>
              <div className="w-max flex gap-3 md:gap-4 items-center">
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
          <div className="col-span-1 md:col-span-3">
            
          </div>
        </div>
      </div>
    </div>
  );
}
