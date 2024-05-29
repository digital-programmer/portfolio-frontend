import { DM_Sans } from "next/font/google";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaClock, FaBolt, FaHandSparkles } from "react-icons/fa";

const dmSans = DM_Sans({ subsets: ["latin"] });

export default function About() {
  return (
    <div>
      <div className="mb-2">
        {/* start of customer pitch */}
        <div className="flex flex-col md:items-center md:justify-center mb-8 md:mb-12 bg-white py-4 md:py-12 px-3 rounded-md dark:bg-background-50 dark:border dark:border-primary-200 shdaow-inner">
          <div
            className={
              "text-xl md:text-3xl font-semibold text-text-950 dark:text-text-950 " +
              dmSans.className
            }
          >
            Want to hire me?
          </div>
          <div className="font-light text-text-900 dark:text-text-900 text-[12px] md:text-sm mt-2 mb-4 md:text-center leading-4">
            Here&apos;s what some of my satisfied clients have to say about my
            work.
          </div>
          <div className="flex items-center md:justify-center gap-4">
            <div className="flex items-center gap-1 border border-primary-100 dark:border-primary-200 rounded-md py-1 px-2 justify-center shadow-inner">
              <FaClock
                className="text-accent-500 dark:text-accent-500"
                size={16}
              />
              <div className="text-[9px] md:text-[12px] leading-[10px] md:leading-3 font-light text-text-950 dark:text-text-950 text-center">
                Dedicated Support
              </div>
            </div>
            <div className="flex items-center gap-1 border border-primary-100 dark:border-primary-200 rounded-md py-1 px-2 justify-center shadow-inner">
              <FaBolt
                className="text-accent-500 dark:text-accent-500"
                size={16}
              />
              <div className="text-[9px] md:text-[12px] leading-[10px] md:leading-3 font-light text-text-950 dark:text-text-950 text-center">
                Quick Resolutions
              </div>
            </div>
            <div className="flex items-center gap-1 border border-primary-100 dark:border-primary-200 rounded-md py-1 px-2 justify-center shadow-inner">
              <FaHandSparkles
                className="text-accent-500 dark:text-accent-500"
                size={16}
              />
              <div className="text-[9px] md:text-[12px] leading-[10px] md:leading-3 font-light text-text-950 dark:text-text-950 text-center">
                Code quality
              </div>
            </div>
          </div>
        </div>
        {/* end of customer pitch */}

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
          <div className="col-span-1 md:col-span-2 flex flex-col gap-8">
            {/* start of contact details */}
            <div className="flex flex-col gap-2 md:gap-3">
              <div className="text-sm md:text-base text-text-900 dark:text-text-900 font-semibold">
                Contact details
              </div>
              <div className="text-sm flex flex-col gap-3 md:gap-4">
                <div className="dark:bg-background-50 dark:border dark:border-primary-200 shadow-inner rounded-md px-4 py-3 text-[12px] md:text-sm bg-white">
                  <div className="font-light text-text-900 dark:text-text-900">
                    You can mail me here
                  </div>
                  <div className="font-medium text-text-950 dark:text-text-950">
                    mohandibya.acharya@gmail.com
                  </div>
                </div>
                <div className="dark:bg-background-50 dark:border dark:border-primary-200 shadow-inner rounded-md px-4 py-3 text-[12px] md:text-sm bg-white">
                  <div className="font-light text-text-900 dark:text-text-900">
                    Give me a call on
                  </div>
                  <div className="font-medium text-text-950 dark:text-text-950">
                    +91 8328935275
                  </div>
                </div>
                <div className="dark:bg-background-50 dark:border dark:border-primary-200 shadow-inner rounded-md px-4 py-3 text-[12px] md:text-sm bg-white">
                  <div className="font-light text-[12px] md:text-sm text-text-900 dark:text-text-900">
                    Location
                  </div>
                  <div className="font-medium text-text-950 dark:text-text-950">
                    Somewhere in India
                  </div>
                </div>
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
          <div className="col-span-1 md:col-span-3">
            <div className="flex flex-col gap-2 md:gap-3 h-full">
              <div className="text-sm md:text-base text-text-900 dark:text-text-900 font-semibold">
                Contact form
              </div>
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
                      className="block w-full rounded-md border-0 px-3 md:px-3.5 py-2 md:py-2.5 text-text-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent-500 sm:text-sm sm:leading-6 dark:bg-background-100 dark:ring-background-200 dark:placeholder:text-primary-300"
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
                      className="block w-full rounded-md border-0 px-3 md:px-3.5 py-2 md:py-2.5 text-text-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent-500 sm:text-sm sm:leading-6 dark:bg-background-100 dark:ring-background-200 dark:placeholder:text-primary-300"
                    />
                  </div>
                </div>
                <div className="text-[12px] md:text-sm flex flex-col gap-1">
                  <label
                    htmlFor="about"
                    className="block leading-6 text-text-900 font-normal"
                  >
                    About
                  </label>
                  <div>
                    <textarea
                      id="about"
                      name="about"
                      rows={4}
                      placeholder="What are you looking for?"
                      className="block w-full rounded-md border-0 px-3 md:px-3.5 py-2 md:py-2.5 text-text-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent-500 sm:text-sm sm:leading-6 dark:bg-background-100 dark:ring-background-200 dark:placeholder:text-primary-300"
                      defaultValue={""}
                      maxLength={500}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end of contact form */}
        </div>
      </div>
    </div>
  );
}
