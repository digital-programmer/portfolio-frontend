import { DM_Sans } from "next/font/google";
import PortFolioList from "./portfolioList";
import fetchProjects from "@/actions/project";
import { PortfolioHeroImage } from "./portfolioHeroImage";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const dmSans = DM_Sans({ subsets: ["latin"] });

export default async function Portfolio() {
  const experienceInYears = new Date().getFullYear() - 2022;
  const blogs = await fetchProjects();
  return (
    <div className="flex flex-col md:pt-4 gap-8 md:gap-16">
      {/* start of portfolio pitch */}
      <div className="md:items-center md:justify-center mb-8 md:mb-12 bg-white rounded-md dark:bg-background-50 dark:border dark:border-primary-200 shadow-inner grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col gap-2 order-2 md:order-1 p-4 md:px-6 md:py-4">
          <div
            className={
              "text-xl md:text-2xl font-semibold text-text-950 dark:text-text-950 " +
              dmSans.className
            }
          >
            Showcase of work
          </div>
          <div className="font-light text-text-900 dark:text-text-900 text-[12px] md:text-sm leading-4">
            With over {experienceInYears} years of experience, showcasing my
            journey as a Full Stack Developer. Discover my projects and skills
            here.
          </div>
          <Link href={"https://www.github.com/digital-programmer"} target="_blank" className="w-max inline-block mt-2">
            <button
              type="button"
              className="text-text-50 dark:text-text-950 bg-gradient-to-br from-accent-400 to-accent-500 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-md text-[12px] md:text-sm text-center dark:from-accent-500 dark:to-accent-600 flex items-center gap-2 px-2 py-1 md:px-4 md:py-2"
            >
              <span>Github</span>
              <FaGithub size={24}/>
            </button>
          </Link>
        </div>
        <div className="order-1 md:order-2 h-48 md:h-72 relative">
          <PortfolioHeroImage />
        </div>
      </div>
      {/* end of portfolio pitch */}
      <div>
        <div
          className={
            "text-text-900 dark:text-text-900 text-xl md:text-3xl font-bold " +
            dmSans.className
          }
        >
          Latest Projects
        </div>
        <div className="mt-8 mb-2">
          <PortFolioList projects={blogs} />
        </div>
      </div>
    </div>
  );
}
