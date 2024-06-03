import Image from "next/image";
import { DM_Sans } from "next/font/google";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const dmSans = DM_Sans({ subsets: ["latin"] });

export default function BlogCard() {
  return (
    <div className="bg-white dark:bg-background-100 flex flex-col gap-2 rounded-lg shadow-inner">
      <div>
        <Image
          src={
            "https://images.pexels.com/photos/24797332/pexels-photo-24797332/free-photo-of-people-are-like-baggage.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
          }
          alt={"image alts"}
          style={{ objectFit: "contain" }}
          priority
          width={900}
          height={300}
          className="rounded-t-lg"
        />
      </div>
      <div className="flex justify-between px-4 py-2 gap-2">
        <div className="flex items-center gap-1 flex-wrap text-accent-500 dark:text-accent-500">
          <div className="bg-accent-50 dark:bg-accent-50 text-[10px] rounded-full px-2">
            #tag1ddsfdsf
          </div>
          <div className="bg-accent-50 dark:bg-accent-50 text-[10px] rounded-full px-2">
            #tagfsddfdfs1
          </div>
          <div className="bg-accent-50 dark:bg-accent-50 text-[10px] rounded-full px-2">
            #tagfdffvfdsd
          </div>
          <div className="bg-accent-50 dark:bg-accent-50 text-[10px] rounded-full px-2">
            #tag1dddfdfd
          </div>
        </div>
        <div className="flex justify-end text-[10px] md:text-[12px] w-32 text-text-900 dark:text-text-900 font-light tracking-tight leading-4 md:leading-5">
          28 June, 2023
        </div>
      </div>
      <div className="flex flex-col gap-2 px-4 py-0">
        <div
          className={
            "text-base md:text-lg text-text-950 dark:text-text-950 font-semibold mb-2 leading-5 md:leading-5 " +
            dmSans.className
          }
        >
          Become a digital nomad in fjkqnfskj bkf m 2023 afdsf wegareg
        </div>
        <div className="text-sm text-text-900 dark:text-text-900 font-light leading-5 md:leading-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          quas in. Deserunt maiores enim id quod perspiciatis? Ipsum, voluptatem
          id.
        </div>
      </div>
      <div className="p-4">
        <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium outline-none focus:outline-none w-max border border-accent-500 rounded-lg text-accent-500 dark:text-accent-500 hover:border-accent-600 dark:hover:border-accent-600 hover:text-accent-600 dark:hover:text-accent-600 gap-2">
            Read full blog
            <FaArrowUpRightFromSquare size={12}/>
        </button>
      </div>
    </div>
  );
}
