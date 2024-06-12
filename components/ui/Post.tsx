import Image from "next/image";
import { SanityImage } from "@/components/ui/sanityImage";
import { PortableText, type PortableTextReactComponents } from "next-sanity";
import urlFor from "@/config/sanity.image";
import { DM_Sans } from "next/font/google";
const dmSans = DM_Sans({ subsets: ["latin"] });

const myPortableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }) => {
      return <SanityImage {...value} />;
    },
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
        />
      </div>
      <div className="md:max-w-screen-sm md:mx-auto w-full bg-white dark:bg-background-100 shadow-inner rounded-md p-4 flex flex-col gap-6">
        <div className="flex flex-col gap-2 md:gap-4 md:flex-row md:justify-between">
          <div className="flex items-center gap-1 flex-wrap text-accent-500 dark:text-accent-500">
            {categories.map((item: string, index: number) => (
              <div
                key={"category_" + index}
                className="bg-accent-50 dark:bg-accent-50 text-[10px] rounded-full px-2 tracking-wider"
              >
                {"#" + item}
              </div>
            ))}
          </div>
          <div className="text-[12px] font-light">{new Date(created).toDateString()}</div>
        </div>
        <div className="flex flex-col gap-4">
          <div
            className={
              dmSans.className +
              " text-xl md:text-2xl font-semibold leading-5 md:leading-5 break-words tracking-wide"
            }
          >
            {title}
          </div>
          <div
            className={
              dmSans.className +
              " font-light leading-5 md:leading-5 break-words tracking-wide text-sm md:text-base"
            }
          >
            {excerpt}
          </div>
        </div>
      </div>
      <div className="md:max-w-screen-sm md:mx-auto w-full bg-white dark:bg-background-100 shadow-inner px-4 pt-4 pb-8 rounded-md break-words tracking-normal">
        <PortableText value={content} components={myPortableTextComponents} />
      </div>
    </div>
  );
}
