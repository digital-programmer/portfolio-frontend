import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import fetchProjects from "@/actions/project";
import PortFolioCard from "@/components/portfolio/portfolioCard";

export default async function RecentProject() {
  const projects = await fetchProjects();
  const projectsExist = projects.length > 0;
  let template;
  if (projectsExist) {
    template = (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={"project_" + index}>
            <PortFolioCard projectData={project} />
          </div>
        ))}
      </div>
    );
  } else {
    template = <div className="text-xs md:text-sm">No Projects Available. Coming soon!</div>;
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <div className="text-text-900 dark:text-text-900 text-xl md:text-2xl font-semibold">
          {"Recent Projects"}
        </div>
        {projectsExist && (
          <Link
            href={"/portfolio"}
            className="text-accent-500 dark:text-accent-500 font-medium hover:underline flex items-center gap-1.5 text-sm md:text-base"
          >
            View all
            <FaArrowUpRightFromSquare
              size={13}
              className="text-accent-500 dark:text-accent-500"
            />
          </Link>
        )}
      </div>
      <div>
        <div>{template}</div>
      </div>
    </div>
  );
}
