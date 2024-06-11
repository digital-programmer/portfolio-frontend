import BlogCard from "./blogCard";

export default function BlogList({ blogs }: { blogs: Array<any> }) {
  if (blogs.length === 0) {
    return <div className="text-[12px] md:text-sm">No Blogs Available. Coming soon!</div>;
  }
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {blogs.map((blog, index) => (
        <div key={"blog_" + index}>
          <BlogCard blogData={blog} />
        </div>
      ))}
    </div>
  );
}
