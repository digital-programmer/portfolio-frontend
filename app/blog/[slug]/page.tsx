import { fetchBlogBySlug } from "@/actions/blog";
import Post from "@/components/ui/Post";
import { SectionLoader } from "@/components/ui/loader";
import NotFound from "@/components/ui/nonFound";
import SharePostIcons from "@/components/ui/sharePostIcon";
import { Suspense } from "react";

interface Props {
  params: {
    slug: string;
  };
}

export default async function BlogPage({ params }: Props) {
  const blog = await fetchBlogBySlug(params);

  return (
    <Suspense fallback={<SectionLoader message="Fetching blog content..." />}>
      <div className="flex flex-col gap-12">
        {blog ? (
          <>
            <Post blog={blog} />
            <div className="md:max-w-screen-sm md:mx-auto w-full bg-white dark:bg-background-100 p-4 rounded-md">
              <SharePostIcons title={blog.title} />
            </div>
          </>
        ) : (
          <div className="h-[50dvh]">
            <NotFound message="Blog content not found. Try again!"/>
          </div>
        )}
      </div>
    </Suspense>
  );
}
