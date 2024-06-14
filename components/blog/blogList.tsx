import fetchBlogs from "@/actions/blog";
import BlogCard from "./blogCard";
import { Suspense } from "react";
import {SectionLoader} from "../ui/loader";

export default async function BlogList() {
  const blogs = await fetchBlogs();
  if (blogs.length === 0) {
    return <div className="text-xs md:text-sm">No Blogs Available. Coming soon!</div>;
  }
  return (
    <Suspense fallback={<SectionLoader message="Fetching blog posts..."/>}>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {blogs.map((blog, index) => (
          <div key={"blog_" + index}>
            <BlogCard blogData={blog} />
          </div>
        ))}
      </div>
    </Suspense>
  );
}
