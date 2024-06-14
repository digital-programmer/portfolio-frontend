export default function ContactPoint({label, data}: {label: string, data: string}) {
  return (
    <div className="dark:bg-background-50 dark:border dark:border-primary-200 shadow-inner rounded-md px-4 py-3 text-xs md:text-sm bg-white">
      <div className="font-light text-text-900 dark:text-text-900">
        {label}
      </div>
      <div className="font-medium text-text-950 dark:text-text-950">
        {data}
      </div>
    </div>
  );
}
