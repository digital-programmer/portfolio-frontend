import Image from "next/image";
import { SanityImage } from "@/components/ui/postBlocks/sanityImage";
import CodeBlock from "@/components/ui/postBlocks/codeBlock";
import { PortableText, type PortableTextReactComponents } from "next-sanity";
import urlFor from "@/config/sanity.image";
import { DM_Sans } from "next/font/google";
import Link from "next/link";
const dmSans = DM_Sans({ subsets: ["latin"] });

const myPortableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }) => {
      return <SanityImage {...value} />;
    },
    code: ({ value }) => {
        return <CodeBlock value={value} />
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl md:text-5xl font-bold my-4 md:my-8">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl md:text-4xl font-semibold my-3 md:my-6">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl md:text-3xl font-semibold my-2 md:my-4">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl md:text-2xl font-semibold my-2 md:my-4">{children}</h4>
    ),
    h5: ({ children }) => (
      <h4 className="text-lg md:text-xl font-semibold my-2 md:my-4">{children}</h4>
    ),
    h6: ({ children }) => (
      <h4 className="text-base md:text-lg font-semibold my-2 md:my-4">{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="text-base md:text-lg font-normal leading-7 my-2 md:my-4">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="text-base md:text-lg pl-4 border-l-4 text-primary-600 dark:text-primary-600 border-primary-300 dark:border-primary-300 my-4 md:my-8 text-pretty">{children}</blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic">{children}</em>
    ),
    link: ({ children, value }) => (
      <Link href={value.href} className="text-accent-500 dark:text-accent-500 underline font-medium">
        {children}
      </Link>
    ),
    code: ({ children }) => <code className="bg-background-100 dark:bg-background-50 rounded px-2 py-1 font-mono">{children}</code>,
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc ml-6 my-2 md:my-4 text-base md:text-lg">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal ml-6 my-2 md:my-4 text-base md:text-lg">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="my-1 md:my-2 text-base md:text-lg">{children}</li>
    ),
    number: ({ children }) => (
      <li className="my-1 md:my-2 text-base md:text-lg">{children}</li>
    ),
  },
};

export default function Post({ blog }: { blog: any }) {
  const { excerpt, coverImage, created, title, categories, content } =
    blog;
  const imageUrl = urlFor(coverImage).url();
  return (
    <div className="flex flex-col gap-8 md:gap-12">
      <div className="relative h-64 md:h-72">
        <Image
          src={imageUrl}
          alt={coverImage.alt}
          fill
          className="rounded-lg"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="md:max-w-screen-sm md:mx-auto w-full bg-white dark:bg-background-100 shadow-inner rounded-md p-4 flex flex-col gap-6 text-wrap">
        <div className="flex flex-col gap-4 md:gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-1 flex-wrap text-accent-500 dark:text-accent-500">
            {categories.map((item: string, index: number) => (
              <div
                key={"category_" + index}
                className="bg-accent-50 dark:bg-accent-50 text-xs rounded-full px-1.5 p-1 tracking-wider"
              >
                {"#" + item}
              </div>
            ))}
          </div>
          <div className="text-sm font-light">{new Date(created).toDateString()}</div>
        </div>
        <div className="flex flex-col gap-4">
          <div
            className={
              dmSans.className +
              " font-bold leading-5 text-2xl md:text-3xl"
            }
          >
            {title}
          </div>
          <div
            className={
              dmSans.className +
              " font-light leading-5 md:leading-5 break-words tracking-wide text-base md:text-lg"
            }
          >
            {excerpt}
          </div>
        </div>
      </div>
      <article className="md:max-w-screen-sm md:mx-auto w-full bg-white dark:bg-background-100 shadow-inner px-4 pt-2 pb-4 rounded-md break-words tracking-normal text-wrap">
        <PortableText value={content} components={myPortableTextComponents} />
      </article>
    </div>
  );
}
