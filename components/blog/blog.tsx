import fetchBlogs from "@/actions/blog";
import BlogList from "./blogList";

import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"] });

export default async function Blog() {
  const blogs = await fetchBlogs();
  return (
    <div>
      <div className={"text-text-900 dark:text-text-900 text-xl md:text-3xl font-bold " + dmSans.className}>Latest Blogs</div>
      <div className="mt-8 mb-2">
        <BlogList blogs={blogs}/>
      </div>
    </div>
  );
}
