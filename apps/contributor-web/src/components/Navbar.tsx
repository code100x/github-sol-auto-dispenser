import Link from 'next/link';
import { getServerSession } from 'next-auth/next';
import { options } from '@/app/api/auth/[...nextauth]/options';
import {Button} from "@repo/ui/primitives/button"
import {Profile} from "@repo/ui/primitives/profileIcon"

const Navbar = async () => {
  const session = await getServerSession(options);

  return (
    <nav className="py-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-3xl font-bold tracking-tight bg-gradient-to-br from-yellow-500 to-orange-500 bg-clip-text text-transparent drop-shadow-xl"
        >
          SolidPull
        </Link>
        <ul className="gap-6 bg-gradient-to-r from-amber-500/25 to-white/10 hidden md:flex rounded-full border border-zinc-400 text-zinc-50 text-base px-5 shadow-[0_0_0.5rem_0_#fff2] hover:shadow-[0_0_5rem_0_#fff4]">
          <li>
            <Link
              href="/#demoVideo"
              className="hover:text-amber-500 transition duration-300 p-2 block"
            >
              Demo
            </Link>
          </li>
          <li>
            <Link
              href="/#Features"
              className="hover:text-amber-500 transition duration-300 p-2 block"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="/#Community"
              className="hover:text-amber-500 transition duration-300 p-2 block"
            >
              Community
            </Link>
          </li>
        </ul>
        <div className="flex gap-x-4 animate-fade-in-up">
          {!session ? (
              <div className='bg-gradient-to-br from-yellow-500 to-orange-500 p-0.5 rounded-[6px] duration-500 shadow-[-30_0_1rem_-1rem,0_0_1rem_-1rem] hover:shadow-[-1rem_0_2rem_-0.5rem,1rem_0_2rem_-0.5rem] hover:shadow-orange-400'>
                <Button className="bg-black rounded-[5px] px-4 duration-300 transition-colors hover:bg-black/80 font-medium text-base h-auto">
                  <Link href="/sign-in">Sign In</Link>
                </Button>
              </div>
          ) : (
            <>
            <div className='bg-gradient-to-br from-yellow-500 to-orange-500 p-0.5 rounded-full duration-500 shadow-[-30_0_1rem_-1rem,0_0_1rem_-1rem] hover:shadow-[-1rem_0_2rem_-0.5rem,1rem_0_2rem_-0.5rem] hover:shadow-orange-400'>
              <Button className="bg-black rounded-full p-2.5 duration-300 transition-colors hover:bg-black/80 font-medium text-base h-auto">
                <Link href="/profile"><Profile/></Link>
              </Button>
              </div>
              <Button className="bg-neutral-700 rounded-[6px] px-5 py-2.5 h-auto hover:bg-neutral-600 duration-300 font-medium text-base">
                <Link href="/sign-out">Sign Out</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
