"use client";

import useScrollDirection from "../../custom-hooks/scrollDirection";
import useWindowResize from "../../custom-hooks/resizeWindow";
import Link from "next/link";
import { DM_Sans } from "next/font/google";
import { useContext, useState } from "react";
import SideMenuBar from "./sideMenuBar";
import { usePathname } from "next/navigation";
import { ThemeContext } from "@/utils/themeContext";
import { CldImage } from "next-cloudinary";
const dmSans = DM_Sans({ subsets: ["latin"] });

const logoClass =
  dmSans.className +
  " text-accent-500 dark:text-accent-500 text-sm md:text-base font-bold w-min leading-[14px] md:leading-[16px]";

const fontClass =
  dmSans.className + " hover:text-accent-500 hover:underline font-medium";

const toggleDarkModeBtnClass =
  dmSans.className +
  " flex items-center border-2 border-text-800 dark:border-text-800 border-dotted rounded-full p-1";

const activeclassName = ` text-accent-500 dark:text-accent-500`;

export default function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  const pathname = usePathname();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const scrollDirection = useScrollDirection();
  const isMobile = useWindowResize();

  function handleBtnClick() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  function handleSideMenuBackdropClick() {
    setIsNavOpen(false);
  }

  const themeIcon =
    theme === "dark" ? (
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 md:w-6 md:h-6 text-text-800 dark:text-text-800"
        >
          <path
            fillRule="evenodd"
            d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    ) : (
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 md:w-6 md:h-6 text-text-800 dark:text-text-800"
        >
          <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
        </svg>
      </span>
    );

  let finalPositionClass = scrollDirection === "down" ? "-top-24" : "top-0";
  if (!isMobile) {
    finalPositionClass = "top-0";
  }

  return (
    <>
      <nav
        className={`h-max flex justify-between lg:max-w-screen-lg lg:mx-auto w-full items-center py-4 md:py-6 md:px-4 px-2 bg-background-50 dark:bg-background-50 transition-[top] duration-300 sticky gap-4 md:gap-6 z-30 ${finalPositionClass}`}
      >
        <Link href="/">
          <div className="flex items-center gap-2">
            <CldImage
              src="portfolio/vx8ocbfkxdktxpyuxveu"
              width={36}
              height={36}
              alt="Logo of digital programmer website"
              priority
              className="animate-wiggle"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className={logoClass}>Digital Programmer</div>
          </div>
        </Link>

        <div className="flex gap-2 items-center justify-end">
          <div className="flex gap-4 md:gap-6 flex-1 justify-end items-center order-2 md:order-1">
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-8 h-8 text-sm text-accent-500 rounded-md md:hidden bg-accent-100 focus:outline-none dark:text-accent-500 dark:bg-accent-100"
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="flex items-center gap-4 md:gap-6 md:text-base text-sm">
                <li>
                  <Link
                    href="/"
                    className={
                      fontClass +
                      (pathname === "/"
                        ? ` ${activeclassName}`
                        : " text-text-800 dark:text-text-800")
                    }
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className={
                      fontClass +
                      (pathname === "/blog"
                        ? ` ${activeclassName}`
                        : " text-text-800 dark:text-text-800")
                    }
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className={
                      fontClass +
                      (pathname === "/portfolio"
                        ? ` ${activeclassName}`
                        : " text-text-800 dark:text-text-800")
                    }
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={
                      fontClass +
                      (pathname === "/contact"
                        ? ` ${activeclassName}`
                        : " text-text-800 dark:text-text-800")
                    }
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <button
            onClick={handleBtnClick}
            className={toggleDarkModeBtnClass + " md:ml-3 order-1 md:order-2"}
          >
            {themeIcon}
          </button>
        </div>
      </nav>
      {isNavOpen ? (
        <SideMenuBar onBackdropClick={handleSideMenuBackdropClick} />
      ) : (
        ""
      )}
    </>
  );
}
