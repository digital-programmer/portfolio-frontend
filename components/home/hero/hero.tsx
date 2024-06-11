import Link from "next/link";
import AlternatingText from "./alternatingText";
import ProfilePic from "./profilePic";
import { DM_Sans } from "next/font/google";
import DownloadResumeBtn from "./resumeDownloadBtn";
const dmSans = DM_Sans({ subsets: ["latin"] });

export default function Hero() {
  return (
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
        I&apos;m Dibya Mohan Acharya, software engineer. I help teams build and
        launch amazing digital products. Want to hire me?
      </div>

      <div className="flex items-center gap-4 flex-wrap">
        <Link href={"/contact"} className="w-max inline-block">
          <button
            type="button"
            className="text-text-50 dark:text-text-950 bg-gradient-to-br from-accent-400 to-accent-500 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-[12px] md:text-sm px-4 py-2 md:px-6 md:py-2.5 text-center dark:from-accent-500 dark:to-accent-600 flex items-center"
          >
            Get In Touch
          </button>
        </Link>
        <DownloadResumeBtn/>
      </div>
    </div>
  );
}
