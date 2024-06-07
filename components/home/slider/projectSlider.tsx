import fetchProjects from "@/actions/project";
import BlogCard from "@/components/blog/blogCard";

export default async function ProjectSlider() {
  const projects = await fetchProjects();

  if (projects.length === 0) {
    return <div>No Projects Available. Coming soon</div>;
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((blog, index) => (
          <div key={"project_" + index}>
            <BlogCard blogData={blog} />
          </div>
        ))}
      </div>
    </div>
  );
}
