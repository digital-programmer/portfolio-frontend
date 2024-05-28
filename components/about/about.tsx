import { DM_Sans } from "next/font/google";

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
      <div className="mt-8 mb-2"></div>
    </div>
  );
}
