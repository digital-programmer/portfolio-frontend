import { SiAwsorganizations } from "react-icons/si";
import { DM_Sans } from "next/font/google";
const dmSans = DM_Sans({ subsets: ["latin"] });

export default function SkillSlider() {
  return (
    <div className={"grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 " + dmSans.className}>
      <div className="bg-white dark:bg-background-100 rounded-lg flex flex-col gap-6 px-4 py-6 md:py-8 text-center">
        <div className="flex justify-center items-center">
            <div className="bg-accent-100 dark:bg-accent-100 p-4 rounded-xl">
                <SiAwsorganizations 
                    size={32} 
                    className="text-accent-500 dark:text-accent-500 font-bold"
                />
            </div>
        </div>
        <div className="flex flex-col gap-4">
            <div className="font-semibold text-base leading-4 text-text-900 dark:text-text-900">Responsive Design</div>
            <div className="font-light text-sm leading-5 text-text-950 dark:text-text-950">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, odio iusto. Reprehenderit porro, natus deserunt laborum optio placeat odio consectetur, sit dolore velit quaerat id harum praesentium reiciendis tempore explicabo!
            </div>
        </div>
      </div>
      <div className="bg-white dark:bg-background-100 rounded-lg flex flex-col gap-6 px-4 py-6 md:py-8 text-center">
        <div className="flex justify-center items-center">
            <div className="bg-accent-100 dark:bg-accent-100 p-4 rounded-xl">
                <SiAwsorganizations 
                    size={32} 
                    className="text-accent-500 dark:text-accent-500 font-bold"
                />
            </div>
        </div>
        <div className="flex flex-col gap-4">
            <div className="font-semibold text-base leading-4 text-text-900 dark:text-text-900">Responsive Design</div>
            <div className="font-light text-sm leading-5 text-text-950 dark:text-text-950">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, odio iusto. Reprehenderit porro, natus deserunt laborum optio placeat odio consectetur, sit dolore velit quaerat id harum praesentium reiciendis tempore explicabo!
            </div>
        </div>
      </div>
      <div className="bg-white dark:bg-background-100 rounded-lg flex flex-col gap-6 px-4 py-6 md:py-8 text-center">
        <div className="flex justify-center items-center">
            <div className="bg-accent-100 dark:bg-accent-100 p-4 rounded-xl">
                <SiAwsorganizations 
                    size={32} 
                    className="text-accent-500 dark:text-accent-500 font-bold"
                />
            </div>
        </div>
        <div className="flex flex-col gap-4">
            <div className="font-semibold text-base leading-4 text-text-900 dark:text-text-900">Responsive Design</div>
            <div className="font-light text-sm leading-5 text-text-950 dark:text-text-950">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, odio iusto. Reprehenderit porro, natus deserunt laborum optio placeat odio consectetur, sit dolore velit quaerat id harum praesentium reiciendis tempore explicabo!
            </div>
        </div>
      </div>
      <div className="bg-white dark:bg-background-100 rounded-lg flex flex-col gap-6 px-4 py-6 md:py-8 text-center">
        <div className="flex justify-center items-center">
            <div className="bg-accent-100 dark:bg-accent-100 p-4 rounded-xl">
                <SiAwsorganizations 
                    size={32} 
                    className="text-accent-500 dark:text-accent-500 font-bold"
                />
            </div>
        </div>
        <div className="flex flex-col gap-4">
            <div className="font-semibold text-base leading-4 text-text-900 dark:text-text-900">Responsive Design</div>
            <div className="font-light text-sm leading-5 text-text-950 dark:text-text-950">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, odio iusto. Reprehenderit porro, natus deserunt laborum optio placeat odio consectetur, sit dolore velit quaerat id harum praesentium reiciendis tempore explicabo!
            </div>
        </div>
      </div>
    </div>
  );
}
