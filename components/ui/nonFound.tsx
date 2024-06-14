export default function NotFound({ message }: { message: string }) {
  return (
    <div className="h-full flex flex-col items-center justify-center bg-white dark:bg-background-100 rounded-md shadow-inner">
      <div className="flex flex-col gap-2.5 p-4">
        <div className="text-center text-text-900 dark:text-text-900 text-base font-light">
          {message}
        </div>
      </div>
    </div>
  );
}
