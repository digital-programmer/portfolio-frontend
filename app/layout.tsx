import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./global_icons.css";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

const Navbar = dynamic(() => import("../components/navbar/navbar"), {
  ssr: false,
  loading: () => <>
    <div className="h-[68px] md:h-[84px]"></div>
  </>,
});

export const metadata: Metadata = {
  title: "Digital Programmer",
  description: "Generated by Dibya Mohan Acharya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          " bg-background-100 dark:bg-background-100"
        }
      >
        <Navbar />
        <main className="lg:max-w-screen-md lg:mx-auto w-full text-text-900 dark:text-text-900 text-sm md:text-base">
          <div className="min-h-screen flex flex-col p-4 md:p-8">{children}</div>
        </main>
      </body>
    </html>
  );
}
