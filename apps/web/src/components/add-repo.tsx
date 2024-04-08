import { cn } from '@/lib/utils';
import { PlusIcon } from 'lucide-react';
import Link from 'next/link';

export const AddRepo = () => {
  return (
    <Link target="_blank" href={process.env.GITHUB_APP_PUBLIC_URL!}>
      <figure
        className={cn(
          'relative w-48 sm:w-64 cursor-pointer overflow-hidden rounded border-2 border-[#000000a6] dark:border-[#ffffffa6] p-2 shadow-[6px_6px_0px_1px_#000000a6] dark:shadow-[6px_6px_0px_1px_#ffffffa6] flex flex-col justify-center h-20 items-center'
        )}
      >
        <PlusIcon size={40} />
      </figure>
    </Link>
  );
};
