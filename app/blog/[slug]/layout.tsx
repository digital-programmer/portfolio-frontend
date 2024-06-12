import Link from "next/link";
import { MdArrowBackIosNew } from "react-icons/md";

export default function BlogRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="mb-4 md:mb-8">
        <Link
          href={"/blog"}
          className="text-sm text-accent-500 dark:text-accent-500 font-medium hover:underline flex items-center gap-1.5"
        >
          <MdArrowBackIosNew size={12} />
          Back to blogs
        </Link>
      </div>
      <div className="text-base text-text-950 dark:text-text-950">{children}</div>
    </div>
  );
}
