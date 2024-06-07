import fetchBlogs from "@/actions/blog";
import BlogCard from "@/components/blog/blogCard";

export default async function BlogSlider() {
  const blogs = await fetchBlogs();

  if (blogs.length === 0) {
    return <div>No Blogs Available. Coming soon</div>;
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogs.map((blog, index) => (
          <div key={"blog_" + index}>
            <BlogCard blogData={blog} />
          </div>
        ))}
      </div>
    </div>
  );
}
