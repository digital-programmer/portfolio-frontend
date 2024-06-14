import { fetchBlogBySlug } from "@/actions/blog";
import Post from "@/components/ui/Post";
import SharePostIcons from "@/components/ui/sharePostIcon";

interface Props {
  params: {
    slug: string;
  };
}

export default async function BlogPage({ params }: Props) {
  const blog = await fetchBlogBySlug(params);

  return (
    <div className="flex flex-col gap-12">
      <Post blog={blog} />
      <div className="md:max-w-screen-sm md:mx-auto w-full bg-white dark:bg-background-100 p-4 rounded-md">
        <SharePostIcons title={blog.title} />
      </div>
    </div>
  );
}
