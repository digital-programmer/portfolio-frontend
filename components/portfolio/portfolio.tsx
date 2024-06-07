import { DM_Sans } from "next/font/google";
import PortFolioList from "./portfolioList";
import fetchProjects from "@/actions/project";

const dmSans = DM_Sans({ subsets: ["latin"] });

export default async function Portfolio() {
  const blogs = await fetchProjects();
  return (
    <div>
      <div className={"text-text-900 dark:text-text-900 text-xl md:text-3xl font-bold " + dmSans.className}>Latest Projects</div>
      <div className="mt-8 mb-2">
        <PortFolioList projects={blogs}/>
      </div>
    </div>
  );
}