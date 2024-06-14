import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import fetchBlogs from "@/actions/blog";
import BlogCard from "@/components/blog/blogCard";
import { Suspense } from "react";
import { SectionLoader } from "@/components/ui/loader";

export default async function RecentPost() {
  const blogs = await fetchBlogs();
  const blogsExist = blogs.length > 0;
  let template;
  if (blogsExist) {
    template = (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogs.map((blog, index) => (
          <div key={"blog_" + index}>
            <BlogCard blogData={blog} />
          </div>
        ))}
      </div>
    );
  } else {
    template = (
      <div className="text-xs md:text-sm">No Blogs Available. Coming soon!</div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <div className="text-text-900 dark:text-text-900 text-xl md:text-2xl font-semibold">
          {"Recent Posts"}
        </div>
        {blogsExist && (
          <Link
            href={"/blog"}
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
        <Suspense fallback={<SectionLoader message="Fetching blog posts..." />}>
          <div>{template}</div>
        </Suspense>
      </div>
    </div>
  );
}
