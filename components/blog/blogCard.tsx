import Image from "next/image";
import { DM_Sans } from "next/font/google";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Link from "next/link";
import urlFor from "@/config/sanity.image";


const dmSans = DM_Sans({ subsets: ["latin"] });

export default function BlogCard({blogData}: {blogData: any}) {
  const {slug, excerpt, coverImage, created, title, categories} = blogData;
  const imageUrl = urlFor(coverImage).url();
  return (
    <div className="bg-white dark:bg-background-100 flex flex-col gap-2 rounded-lg shadow-inner">
      <div className="h-64 relative">
        <Image
          src={imageUrl}
          alt={coverImage.alt}
          fill
          className="rounded-t-lg"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex justify-between px-4 py-2 gap-2">
        <div className="flex items-center gap-1 flex-wrap text-accent-500 dark:text-accent-500">
          {categories.map((item: string, index: number) => (
            <div key={'category_'+index} className="bg-accent-50 dark:bg-accent-50 text-[10px] rounded-full px-2 tracking-wider">
              {'#' + item}
            </div>
          ))}
        </div>
        <div className="flex justify-end text-[10px] md:text-xs w-32 text-text-900 dark:text-text-900 font-light tracking-tight leading-4 md:leading-5">
          {new Date(created).toDateString()}
        </div>
      </div>
      <div className="flex flex-col gap-2 px-4 py-0">
        <div
          className={
            "text-base md:text-lg text-text-900 dark:text-text-900 font-semibold mb-2 leading-5 md:leading-5 " +
            dmSans.className
          }
        >
          {title}
        </div>
        <div className="text-sm text-text-950 dark:text-text-950 font-light leading-5 md:leading-5 text-pretty">
          {excerpt}
        </div>
      </div>
      <div className="p-4">
        <Link href={`/blog/${slug.current}`}>
          <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium outline-none focus:outline-none w-max border border-accent-500 rounded-lg text-accent-500 dark:text-accent-500 hover:border-accent-400 dark:hover:border-accent-400 hover:text-accent-400 dark:hover:text-accent-400 gap-2">
              Read full blog
              <FaArrowUpRightFromSquare size={12}/>
          </button>
        </Link>
      </div>
    </div>
  );
}
