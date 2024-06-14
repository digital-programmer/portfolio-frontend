export function SectionLoader({message}: {message: string}) {
  return (
    <div>
      <div
        className="h-96 flex flex-col items-center justify-center gap-2.5 bg-white dark:bg-background-100 rounded-md shadow-inner p-4"
      >
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-accent-500 h-10 w-10 animate-spinner mr-2.5"></div>
        <h2 className="text-center text-text-900 dark:text-text-900 text-base font-semibold">
          {message}
        </h2>
        <p className="text-center text-text-900 dark:text-text-900 text-xs font-light">
          This may take a few seconds, <br/>please don't close this page.
        </p>
      </div>
    </div>
  );
}
