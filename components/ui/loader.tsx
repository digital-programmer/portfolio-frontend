export default function PageLoader() {
  return (
    <div>
      <div
        className="h-96 flex flex-col items-center justify-center gap-2.5"
      >
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-accent-600 h-10 w-10 animate-spinner mr-2.5"></div>
        <h2 className="text-center text-text-900 dark:text-text-900 text-base font-semibold">
          Loading...
        </h2>
        <p className="w-1/3 text-center text-text-900 dark:text-text-900 text-xs font-light">
          This may take a few seconds, please don't close this page.
        </p>
      </div>
    </div>
  );
}
