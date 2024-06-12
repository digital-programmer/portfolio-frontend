import { fetchBlogBySlug } from "@/actions/blog";
import Post from "@/components/ui/Post";

interface Props {
  params: {
      slug: string;
  };
}

export default async function BlogPage({ params }: Props) {
    const blog = await fetchBlogBySlug(params);
    
    return (
      <div>
        <Post blog={blog}/>
      </div>
    );
  }
  