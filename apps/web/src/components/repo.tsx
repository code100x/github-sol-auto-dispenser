import { cn } from '@/lib/utils';
import Link from 'next/link';

export const Repo = ({
  title,
  owner,
  id,
}: {
  title: string;
  owner: string;
  id: number;
}) => {
  return (
    <Link href={`/${id}`}>
      <figure
        className={cn(
          'relative w-48 sm:w-64 cursor-pointer overflow-hidden rounded border-2 border-[#000000a6] dark:border-[#ffffffa6] p-2 shadow-[6px_6px_0px_1px_#000000a6] dark:shadow-[6px_6px_0px_1px_#ffffffa6] flex flex-col justify-between h-20'
        )}
      >
        <p className="font-semibold">{title}</p>
        <div className="flex justify-between text-xs text-slate-500 dark:text-slate-300">
          <span>{owner}</span>
        </div>
      </figure>
    </Link>
  );
};
