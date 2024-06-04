import { DM_Sans } from "next/font/google";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
const dmSans = DM_Sans({ subsets: ["latin"] });

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div
      className={
        "bg-background-50 dark:bg-background-50 border-t border-t-background-200 dark:border-t-background-200 tracking-wide mt-12 " +
        dmSans.className
      }
    >
      <div className="lg:max-w-screen-lg lg:mx-auto w-full">
        <div>
          {/* start of footer main content */}
          <div className="px-4 py-8 md:p-8 flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-3 text-text-950 dark:text-text-950 font-light text-sm gap-4">
              <div className="flex flex-col md:items-center">
                <div className="text-text-800 dark:text-text-800 font-semibold mb-1">
                  You can mail me at
                </div>
                <div>mohandibya.acharya@gmail.com</div>
              </div>

              <div className="flex flex-col md:items-center">
                <div className="text-text-800 dark:text-text-800 font-semibold mb-1">
                  Call me
                </div>
                <div>+91 8328935275</div>
              </div>

              <div className="flex flex-col md:items-center">
                <div className="text-text-800 dark:text-text-800 font-semibold mb-1">
                  Location
                </div>
                <div>Somewhere in India</div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Start of footer pitch */}
              <div className="col-span-1 text-text-950 dark:text-text-950 flex text-sm md:justify-center">
                <div className="flex flex-col gap-2 w-[240px] lg:w-[200px]">
                  <div className="font-semibold text-text-800 dark:text-text-800">
                    Dedicated to work with passion
                  </div>
                  <div className="font-light">
                    Radiating creativity. I&apos;m a software engineer driven by
                    pasion and innovation.
                  </div>
                </div>
              </div>
              {/* End of footer pitch */}
              {/* Start of Portfolio Links and Social Media Links */}
              <div className="col-span-1 text-text-950 dark:text-text-950 flex gap-12 text-sm md:justify-center">
                <div className="flex flex-col gap-2">
                  <div className="font-semibold text-text-800 dark:text-text-800">
                    Explore
                  </div>
                  <ul className="font-light flex flex-col gap-1">
                    <Link
                      href={"/"}
                      className="hover:text-accent-500 hover:underline flex items-center gap-1"
                    >
                      <li>Home</li>
                      <FaArrowUpRightFromSquare
                        size={10}
                        className="text-accent-500 dark:text-accent-500"
                      />
                    </Link>
                    <Link
                      href={"/blog"}
                      className="hover:text-accent-500 hover:underline flex items-center gap-1"
                    >
                      <li>Blog</li>
                      <FaArrowUpRightFromSquare
                        size={10}
                        className="text-accent-500 dark:text-accent-500"
                      />
                    </Link>
                    <Link
                      href={"/portfolio"}
                      className="hover:text-accent-500 hover:underline flex items-center gap-1"
                    >
                      <li>Portfolio</li>
                      <FaArrowUpRightFromSquare
                        size={10}
                        className="text-accent-500 dark:text-accent-500"
                      />
                    </Link>
                    <Link
                      href={"/contact"}
                      className="hover:text-accent-500 hover:underline flex items-center gap-1"
                    >
                      <li>Contact</li>
                      <FaArrowUpRightFromSquare
                        size={10}
                        className="text-accent-500 dark:text-accent-500"
                      />
                    </Link>
                  </ul>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-semibold text-text-800 dark:text-text-800">
                    Say Hello!
                  </div>
                  <ul className="font-light flex flex-col gap-1">
                    <Link
                      className="hover:text-accent-500 hover:underline flex items-center gap-1"
                      href={"https://www.linkedin.com/in/dibyamohanacharya/"}
                      target="_blank"
                    >
                      <li>LinkedIn</li>
                      <FaArrowUpRightFromSquare
                        size={10}
                        className="text-accent-500 dark:text-accent-500"
                      />
                    </Link>
                    <Link
                      className="hover:text-accent-500 hover:underline flex items-center gap-1"
                      href={"https://www.instagram.com/dibyamohan_"}
                      target="_blank"
                    >
                      <li>Instagram</li>
                      <FaArrowUpRightFromSquare
                        size={10}
                        className="text-accent-500 dark:text-accent-500"
                      />
                    </Link>
                    <Link
                      className="hover:text-accent-500 hover:underline flex items-center gap-1"
                      href={"https://twitter.com/dibya_mohan_"}
                      target="_blank"
                    >
                      <li>Twitter</li>
                      <FaArrowUpRightFromSquare
                        size={10}
                        className="text-accent-500 dark:text-accent-500"
                      />
                    </Link>
                    <Link
                      className="hover:text-accent-500 hover:underline flex items-center gap-1"
                      href={"https://github.com/digital-programmer"}
                      target="_blank"
                    >
                      <li>Github</li>
                      <FaArrowUpRightFromSquare
                        size={10}
                        className="text-accent-500 dark:text-accent-500"
                      />
                    </Link>
                  </ul>
                </div>
              </div>
              {/* End of Portfolio Links and Social Media Links */}
              {/* Start of contact options */}
              <div className="col-span-1 text-text-950 dark:text-text-950 text-sm flex flex-col md:items-center">
                <div>
                  <div className="font-semibold text-text-800 dark:text-text-800">
                    Let&apos;s work together
                  </div>
                  <Link href={"/contact"}>
                    <div className="font-light mt-1.5 flex items-center gap-2 w-max hover:text-accent-500 hover:underline">
                      Have an Idea?
                      <FaArrowUpRightFromSquare
                        size={14}
                        className="text-accent-500 dark:text-accent-500"
                      />
                    </div>
                  </Link>
                </div>
              </div>
              {/* End of contact options */}
            </div>
          </div>
          {/* end of footer main content */}
          <div className="w-full h-[20px] md:h-[26px] overflow-hidden">
            <div className="font-bold text-primary-100 dark:text-primary-100 md:text-4xl text-2xl uppercase text-center w-full md:tracking-widest">
              Digital Programmer
            </div>
          </div>
        </div>

        {/* start of copyright content */}
        <div className="flex flex-col items-center text-[10px] lg:text-[12px] font-light dark:font-thin text-text-800 dark:text-text-800 py-1 md:px-4 px-2">
          <div className="flex gap-1 items-center">
            Copyright &copy; {year} - Digital Programmer
          </div>
          <div className="flex gap-1 items-center">
            <span>Made with</span> <HeartIcon />
          </div>
        </div>
        {/* end of copyright content */}
      </div>
    </div>
  );
}

const HeartIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-3 text-accent-500"
    >
      <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
    </svg>
  );
};
