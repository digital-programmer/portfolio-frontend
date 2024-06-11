import PortFolioCard from "./portfolioCard";

export default function PortFolioList({ projects }: { projects: Array<any> }) {
  if (projects.length === 0) {
    return <div className="text-[12px] md:text-sm">No Projects Available. Coming soon!</div>;
  }
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {projects.map((project, index) => (
        <div key={"project_" + index}>
          <PortFolioCard projectData={project} />
        </div>
      ))}
    </div>
  );
}
