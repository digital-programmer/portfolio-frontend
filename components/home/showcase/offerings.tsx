import {
  SiAwsorganizations,
  SiCarrd,
  SiCilium,
  SiBreaker,
} from "react-icons/si";
import { DM_Sans } from "next/font/google";
const dmSans = DM_Sans({ subsets: ["latin"] });

export default function Offering() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <div className="text-text-900 dark:text-text-900 text-xl md:text-2xl font-semibold">
          {"Why you should hire me?"}
        </div>
      </div>
      <div>
        <div
          className={
            "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 " + dmSans.className
          }
        >
          <div className="bg-white dark:bg-background-100 rounded-lg flex flex-col gap-6 px-4 py-6 md:py-8 text-center shadow-inner">
            <div className="flex justify-center items-center">
              <div className="bg-accent-100 dark:bg-accent-100 p-4 rounded-xl">
                <SiAwsorganizations
                  size={32}
                  className="text-accent-500 dark:text-accent-500 font-bold"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-semibold text-base leading-4 text-text-900 dark:text-text-900">
                Product Ownership
              </div>
              <div className="font-light text-sm leading-5 text-text-950 dark:text-text-950">
                Manage product lifecycles effectively, from ideation to
                deployment, ensuring alignment with business goals and
                delivering high-quality products.
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-background-100 rounded-lg flex flex-col gap-6 px-4 py-6 md:py-8 text-center shadow-inner">
            <div className="flex justify-center items-center">
              <div className="bg-accent-100 dark:bg-accent-100 p-4 rounded-xl">
                <SiCarrd
                  size={32}
                  className="text-accent-500 dark:text-accent-500 font-bold"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-semibold text-base leading-4 text-text-900 dark:text-text-900">
                Responsive Design
              </div>
              <div className="font-light text-sm leading-5 text-text-950 dark:text-text-950">
                Create responsive and visually appealing web designs that look
                great on any device, from mobile phones to desktop computers.
                Your site will be optimized for all screen sizes
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-background-100 rounded-lg flex flex-col gap-6 px-4 py-6 md:py-8 text-center shadow-inner">
            <div className="flex justify-center items-center">
              <div className="bg-accent-100 dark:bg-accent-100 p-4 rounded-xl">
                <SiCilium
                  size={32}
                  className="text-accent-500 dark:text-accent-500 font-bold"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-semibold text-base leading-4 text-text-900 dark:text-text-900">
                Performant Backend
              </div>
              <div className="font-light text-sm leading-5 text-text-950 dark:text-text-950">
                Develop scalable and high-performance backends to support your
                application&apos;s needs, ensuring fast response times and the
                ability to handle increasing loads.
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-background-100 rounded-lg flex flex-col gap-6 px-4 py-6 md:py-8 text-center shadow-inner">
            <div className="flex justify-center items-center">
              <div className="bg-accent-100 dark:bg-accent-100 p-4 rounded-xl">
                <SiBreaker
                  size={32}
                  className="text-accent-500 dark:text-accent-500 font-bold"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-semibold text-base leading-4 text-text-900 dark:text-text-900">
                Quick Learner
              </div>
              <div className="font-light text-sm leading-5 text-text-950 dark:text-text-950">
                Rapidly adapt to new technologies and environments,
                continuously enhancing my skills to stay at the forefront of
                industry advancements.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
