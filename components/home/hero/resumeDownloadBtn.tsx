import { fetchResumeLink } from "@/actions/dynamicLinks";
import Link from "next/link";

export default async function DownloadResumeBtn() {
  const resumeLink = await fetchResumeLink();

  return (
    <Link href={resumeLink as string} target="_blank" className="w-max inline-block">
      <button className="relative inline-flex overflow-hidden rounded-lg p-[2px] focus:outline-none outline-none">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f6baa2_0%,#f29773_50%,#fbdcd0_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-white dark:bg-background-100 px-4 py-2 md:px-6 md:py-2.5 font-medium backdrop-blur-3xl text-text-950 dark:text-text-950 text-[12px] md:text-sm">
          Download Resume
        </span>
      </button>
    </Link>
  );
}
