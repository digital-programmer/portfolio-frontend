import Link from "next/link";
import AlternatingText from "./heroComponents/alternatingText";
import ProfilePic from "./heroComponents/profilePic";

import { DM_Sans } from "next/font/google";
import BlogSlider from "./slider/blogSlider";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import SkillSlider from "./slider/skillSlider";
const dmSans = DM_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="text-text-900 dark:text-text-900 md:pt-4 flex flex-col gap-24 md:gap-32">
      <div className="flex flex-col gap-[32px] justify-center">
        <div>
            <ProfilePic />
        </div>

        <div
          className={
            dmSans.className + " text-2xl md:text-3xl font-medium min-h-[72px]"
          }
        >
          Creating premium digital products that are&nbsp;
          <AlternatingText />
        </div>

        <div
          className={
            dmSans.className +
            " text-base md:text-lg font-light text-text-950 dark:text-text-950"
          }
        >
          I&apos;m Dibya Mohan Acharya, software engineer. I help teams build
          and launch amazing digital products. Want to hire me?
        </div>

        <div className="flex items-center gap-4 flex-wrap">
          <Link href={"/contact"} className="w-max inline-block">
            <button
              type="button"
              className="text-text-50 dark:text-text-950 bg-gradient-to-br from-accent-400 to-accent-500 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-2xl text-[12px] md:text-sm px-4 py-2 md:px-6 md:py-2.5 text-center dark:from-accent-500 dark:to-accent-600 flex items-center"
            >
              Get In Touch
            </button>
          </Link>

          <Link href={"/"} className="w-max inline-block">
            <button className="relative inline-flex overflow-hidden rounded-2xl p-[2px] focus:outline-none outline-none">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f6baa2_0%,#f29773_50%,#fbdcd0_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-white dark:bg-background-100 px-4 py-2 md:px-6 md:py-2.5 font-medium backdrop-blur-3xl text-text-950 dark:text-text-950 text-[12px] md:text-sm">
                Download Resume
              </span>
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <div className="text-text-900 dark:text-text-900 text-xl md:text-2xl font-semibold">
            {"Why you should hire me?"}
          </div>
        </div>
        <div>
          <SkillSlider/>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <div className="text-text-900 dark:text-text-900 text-xl md:text-2xl font-semibold">
            {"Recent Posts"}
          </div>
          <Link
            href={"/blog"}
            className="text-accent-500 dark:text-accent-500 font-medium hover:underline flex items-center gap-1.5 text-sm md:text-base"
          >
            View all
            <FaArrowUpRightFromSquare
              size={13}
              className="text-accent-500 dark:text-accent-500"
            />
          </Link>
        </div>
        <div>
          <BlogSlider />
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <div className="text-text-900 dark:text-text-900 text-xl md:text-2xl font-semibold">
            {"Recent Projects"}
          </div>
          <Link
            href={"/blog"}
            className="text-accent-500 dark:text-accent-500 font-medium hover:underline flex items-center gap-1.5 text-sm md:text-base"
          >
            View all
            <FaArrowUpRightFromSquare
              size={13}
              className="text-accent-500 dark:text-accent-500"
            />
          </Link>
        </div>
        <div>
          <BlogSlider />
        </div>
      </div>
    </div>
  );
}
