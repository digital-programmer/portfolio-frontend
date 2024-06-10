import { fetchBlogBySlug } from "@/actions/blog";

interface Props {
    params: {
        slug: string;
    };
}

export default async function BlogPage({ params }: Props) {
    const blog = await fetchBlogBySlug(params);
    console.log(blog);
    return (
      <div>
        Hello new blog
      </div>
    );
  }
  