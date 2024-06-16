import BlogList from "./blogList";

import { DM_Sans } from "next/font/google";
import { FaBook, FaDatabase } from "react-icons/fa6";
import { MdSettingsSystemDaydream } from "react-icons/md";

const dmSans = DM_Sans({ subsets: ["latin"] });

export default async function Blog() {
  return (
    <div className="flex flex-col md:pt-4 gap-8 md:gap-16">
      {/* start of blog pitch */}
      <div className="flex flex-col md:items-center md:justify-center mb-8 md:mb-12 bg-white py-4 md:py-12 px-3 md:px-8 rounded-md dark:bg-background-50 dark:border dark:border-primary-200 shadow-inner gap-2">
        <div
          className={
            "text-xl md:text-3xl font-semibold text-text-950 dark:text-text-950 " +
            dmSans.className
          }
        >
          Explore tech blog
        </div>
        <div className="font-light text-text-900 dark:text-text-900 text-xs md:text-sm mt-2 mb-4 md:text-center leading-4">
          Dive into my thoughts, tutorials, and insights on software engineering, data science, web development, and technology.
        </div>
        <div className="flex items-center md:justify-center gap-2 sm:gap-4">
          <div className="flex items-center gap-1 md:gap-1.5 border border-primary-100 dark:border-primary-200 rounded-md py-1 px-2 justify-center shadow-inner">
            <FaBook
              className="text-accent-500 dark:text-accent-500"
              size={16}
            />
            <div className="text-[9px] md:text-xs leading-[10px] md:leading-3 font-light text-text-950 dark:text-text-950 text-center">
              CS Concepts
            </div>
          </div>
          <div className="flex items-center gap-1 md:gap-1.5 border border-primary-100 dark:border-primary-200 rounded-md py-1 px-2 justify-center shadow-inner">
            <FaDatabase
              className="text-accent-500 dark:text-accent-500"
              size={16}
            />
            <div className="text-[9px] md:text-xs leading-[10px] md:leading-3 font-light text-text-950 dark:text-text-950 text-center">
              Data Science
            </div>
          </div>
          <div className="flex items-center gap-1 md:gap-1.5 border border-primary-100 dark:border-primary-200 rounded-md py-1 px-2 justify-center shadow-inner">
            <MdSettingsSystemDaydream
              className="text-accent-500 dark:text-accent-500"
              size={16}
            />
            <div className="text-[9px] md:text-xs leading-[10px] md:leading-3 font-light text-text-950 dark:text-text-950 text-center">
              System Design 
            </div>
          </div>
        </div>
      </div>
      {/* end of blog pitch */}
      <div>
        <div
          className={
            "text-text-900 dark:text-text-900 text-xl md:text-3xl font-bold " +
            dmSans.className
          }
        >
          Latest Blogs
        </div>
        <div className="mt-8 mb-2">
          <BlogList />
        </div>
      </div>
    </div>
  );
}
