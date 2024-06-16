import { Inter } from "next/font/google";
import "./globals.css";
import "./global_icons.css";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import ThemeProvider from "@/utils/themeContext";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

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
        className={inter.className + " bg-background-50 dark:bg-background-50"}
      >
        <ThemeProvider>
          <Navbar />
          <main className="lg:max-w-screen-md lg:mx-auto w-full text-text-900 dark:text-text-900 text-sm md:text-base">
            <div className="h-max flex flex-col p-4 md:p-8">
              {children}
              <ToastContainer className="text-sm" />
            </div>
          </main>
          <Footer />
        </ThemeProvider>

        {/* start of page insights */}
        <SpeedInsights />
        {/* end of page insights */}

        {/* start of vercel analytics */}
        <Analytics />
        {/* end of vercel analytics */}
      </body>
    </html>
  );
}
