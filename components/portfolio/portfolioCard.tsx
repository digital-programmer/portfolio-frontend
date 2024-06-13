import Image from "next/image";
import { DM_Sans } from "next/font/google";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import Link from "next/link";
import urlFor from "@/config/sanity.image";

const dmSans = DM_Sans({ subsets: ["latin"] });

export default function PortFolioCard({ projectData }: { projectData: any }) {
  const {
    githubLink,
    techStacks,
    coverImage,
    demoLink,
    description,
    title,
    created,
  } = projectData;
  const imageUrl = urlFor(coverImage).url();
  return (
    <div className="bg-white dark:bg-background-100 flex flex-col gap-2 rounded-lg shadow-inner">
      <div className="h-64 relative">
        <Image
          src={imageUrl}
          alt={coverImage.alt}
          priority
          fill
          className="rounded-t-lg"
        />
      </div>
      <div className="flex justify-between px-4 py-2 gap-2">
        <div className="flex items-center gap-1 flex-wrap text-accent-500 dark:text-accent-500">
          {techStacks &&
            techStacks.map((item: string, index: number) => {
              return (
                <div
                  key={"tech_" + index}
                  className="bg-accent-50 dark:bg-accent-50 text-[10px] rounded-full px-2"
                >
                  {"#" + item}
                </div>
              );
            })}
        </div>
        <div className="flex justify-end text-[10px] md:text-xs w-32 text-text-900 dark:text-text-900 font-light tracking-tight leading-4 md:leading-5">
          {new Date(created).toDateString()}
        </div>
      </div>
      <div className="flex flex-col gap-2 px-4 py-0">
        <div
          className={
            "text-base md:text-lg text-text-900 dark:text-text-900 font-semibold mb-2 leading-5 md:leading-5 " +
            dmSans.className
          }
        >
          {title}
        </div>
        <div className="text-sm text-text-950 dark:text-text-950 font-light leading-5 md:leading-5">
          {description}
        </div>
      </div>
      <div className="p-4 flex gap-2.5 items-center">
        <Link href={githubLink}>
          <button
            type="button"
            className="text-text-50 dark:text-text-950 bg-gradient-to-br from-accent-400 to-accent-500 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-xs md:text-sm text-center dark:from-accent-500 dark:to-accent-600 flex items-center gap-2 px-2 py-1 md:px-4 md:py-2"
          >
            Code
            <FaArrowUpRightFromSquare size={16} />
          </button>
        </Link>
        {demoLink && (
          <Link href={demoLink}>
            <button className="inline-flex items-center justify-center px-2.5 py-1 md:px-4 md:py-2 text-xs md:text-sm font-medium outline-none focus:outline-none w-max border border-accent-500 rounded-lg text-accent-500 dark:text-accent-500 hover:border-accent-400 dark:hover:border-accent-400 hover:text-accent-400 dark:hover:text-accent-400 gap-2">
              Demo
              <FaArrowUpRightFromSquare size={16} />
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
