import { fetchBlogBySlug } from "@/actions/blog";
import { SanityImage } from "@/components/ui/sanityImage";
import { PortableText, type PortableTextReactComponents } from 'next-sanity'

interface Props {
    params: {
        slug: string;
    };
}

const myPortableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }) => {
      return <SanityImage {...value} />
    },
  },
}

export default async function BlogPage({ params }: Props) {
    const blog = await fetchBlogBySlug(params);
    const {slug, excerpt, coverImage, created, title, categories, content} = blog;
    return (
      <div>
        <PortableText value={content} components={myPortableTextComponents}/>
      </div>
    );
  }
  