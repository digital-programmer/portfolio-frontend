"use client";

import { SyntheticEvent } from "react";
import { DM_Sans } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { CldImage } from 'next-cloudinary';

const dmSans = DM_Sans({ subsets: ["latin"] });

const fontClass =
  dmSans.className +
  " font-medium p-2 rounded-md";

const logoClass =
  dmSans.className +
  " text-accent-500 dark:text-accent-500 text-sm font-bold w-min leading-[14px]";

export default function SideMenuBar({
  onBackdropClick,
}: {
  onBackdropClick: () => void;
}) {
  const pathname = usePathname();

  const activeclassName = `bg-background-50 dark:bg-background-50 text-accent-500 dark:text-accent-500`;

  function handleNonBackdropClick(e: SyntheticEvent) {
    e.stopPropagation();
  }

  return (
    <>
      <div
        className="fixed right-0 top-0 bottom-0 h-dvh backdrop-blur-md w-full z-40"
        onClick={() => onBackdropClick()}
      >
        <div
          className="w-[60dvw] bg-white dark:bg-background-100 absolute right-0 top-0 bottom-0 h-dvh animate-apppearFromRight z-50"
          onClick={handleNonBackdropClick}
        >
          <div className="px-4 pt-8 pb-4 h-full">
            <div className="flex flex-col gap-8 h-full">
              <div>
                <Link href="/">
                  <div className="flex items-center gap-2">
                    <CldImage
                      src="portfolio/vx8ocbfkxdktxpyuxveu"
                      width="32"
                      height="32"
                      alt="Logo of digital programmer website"
                      unoptimized={false}
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className={logoClass}>Digital Programmer</div>
                  </div>
                </Link>
              </div>
              <ul className="flex flex-col gap-4 text-sm">
                <li className={fontClass + (pathname === '/' ? ` ${activeclassName}` : ' text-text-800 dark:text-text-800')}>
                  <Link
                    href="/"
                    className="flex items-center gap-2"
                    onClick={() => onBackdropClick()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                    Home
                  </Link>
                </li>
                <li className={fontClass + (pathname === '/portfolio' ? ` ${activeclassName}` : ' text-text-800 dark:text-text-800')}>
                  <Link
                    href="/portfolio"
                    className="flex items-center gap-2"
                    onClick={() => onBackdropClick()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                      />
                    </svg>
                    Portfolio
                  </Link>
                </li>
                <li className={fontClass + (pathname === '/blog' ? ` ${activeclassName}` : ' text-text-800 dark:text-text-800')}>
                  <Link
                    href="/blog"
                    className="flex items-center gap-2"
                    onClick={() => onBackdropClick()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                      />
                    </svg>
                    Blog
                  </Link>
                </li>
                <li className={fontClass + (pathname === '/contact' ? ` ${activeclassName}` : ' text-text-800 dark:text-text-800')}>
                  <Link
                    href="/contact"
                    className="flex items-center gap-2"
                    onClick={() => onBackdropClick()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                      />
                    </svg>
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="flex flex-col gap-1 mt-auto">
                <div className="text-text-800 dark:text-text-800 text-xs font-normal">
                  Follow me on -
                </div>
                <div className="w-max flex gap-3 items-center">
                  <Link
                    href={"https://www.linkedin.com/in/dibyamohanacharya/"}
                    target="_blank"
                  >
                    <FaLinkedin
                      className="text-accent-500 dark:text-accent-500 rounded-lg"
                      size={24}
                    />
                  </Link>
                  <Link
                    href={"https://www.instagram.com/dibyamohan_"}
                    target="_blank"
                  >
                    <FaInstagram
                      className="text-accent-500 dark:text-accent-500 rounded-lg"
                      size={24}
                    />
                  </Link>
                  <Link href={"https://twitter.com/dibya_mohan_"} target="_blank">
                    <FaTwitter
                      className="text-accent-500 dark:text-accent-500 rounded-lg"
                      size={24}
                    />
                  </Link>
                  <Link
                    href={"https://github.com/digital-programmer"}
                    target="_blank"
                  >
                    <FaGithub
                      className="text-accent-500 dark:text-accent-500 rounded-lg"
                      size={24}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
