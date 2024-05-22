"use client";

import useDarkMode from "../../custom-hooks/toggleDarkMode";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"] });

export default function Navbar() {
    const [theme, setTheme] = useDarkMode();

    function handleBtnClick() {
        if (theme === "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    }

    const themeIcon =
        theme === "light" ? (
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-6 md:h-6 dark:text-text-200 text-text-200">
                    <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
                </svg>
            </span>
        ) : (
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-6 md:h-6 dark:text-text-200 text-text-200">
                    <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                </svg>
            </span>
        );

    return (
        <nav className="flex md:space-between lg:max-w-screen-lg lg:mx-auto w-full items-center py-4 md:py-6 md:px-4 px-2">
            <Link href="/" scroll={false}>
                <div className="flex items-center gap-2">
                    <Image
                        src={logo}
                        alt="Logo of digital programmer website"
                        width={36}
                        height={36}
                        priority
                    />
                    <div className={dmSans.className + " text-accent-500 dark:text-accent-500 text-sm md:text-base font-bold w-min leading-[14px] md:leading-[16px]"}>
                        Digital Programmer
                    </div>
                </div>
            </Link>

            <div className="flex gap-4 md:gap-6 flex-1 justify-end items-center">
                <ul className="flex items-center gap-4 md:gap-6 md:text-base text-sm">
                    <li>
                        <Link
                            href="/blog"
                            className=
                            {dmSans.className + " text-text-200 dark:text-text-200 hover:text-accent-500 hover:underline font-medium"}
                            scroll={false}
                        >
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className=
                            {dmSans.className + " text-text-200 dark:text-text-200 hover:text-accent-500 hover:underline font-medium"}
                            scroll={false}
                        >
                            About
                        </Link>
                    </li>
                </ul>
                <button
                    onClick={handleBtnClick}
                    className={dmSans.className + " flex items-center border-2 border-text-200 dark:border-text-200 border-dotted rounded-full p-1"}
                >
                    {themeIcon}
                </button>
            </div>
        </nav>
    );
}
