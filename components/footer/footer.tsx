export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="bg-background-100 dark:bg-background-100 border-t border-t-background-200 dark:border-t-background-200">
      <div className="flex justify-between lg:max-w-screen-lg lg:mx-auto w-full items-center py-1 md:px-4 px-2 text-text-800 dark:text-text-800 text-[10px] lg:text-[12px] font-light dark:font-thin">
        <div className="flex gap-1 items-center">
          &copy; Digital Programmer
        </div>
        <div className="flex gap-1 items-center">
          <span>Made with</span> <Heart />
        </div>
      </div>
    </div>
  );
}

const Heart = () => {
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