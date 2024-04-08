import Link from 'next/link';
import { getServerSession } from 'next-auth/next';
import { options } from '@/app/api/auth/[...nextauth]/options';

const Navbar = async () => {
  const session = await getServerSession(options);

  return (
    <nav className="  bg-gradient-to-r  from-[#c0c1ee] to-[#2f10f8] p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-[#352c43] text-2xl font-bold animate-fade-in-up"
        >
          SolidPull
        </Link>
        <ul className="gap-x-6  from-[#c0c1ee] to-[#2f10f8] font-medium animate-fade-in-up hidden md:flex">
          <li>
            <Link
              href="/#demoVideo"
              className="hover:text-[#8e2de2] transition duration-300"
            >
              Demo
            </Link>
          </li>
          <li>
            <Link
              href="/#Features"
              className="hover:text-[#8e2de2] transition duration-300"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="/#Community"
              className="hover:text-[#8e2de2] transition duration-300"
            >
              Community
            </Link>
          </li>
        </ul>
        <div className="flex gap-x-4 animate-fade-in-up">
          {!session ? (
            <button
              type="button"
              className="text-[#f1f1f1] bg-gradient-to-r from-[#8e2de2] to-[#4a00e0] hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-[#8e2de2] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              <Link href="/sign-in">Sign In</Link>
            </button>
          ) : (
            <>
              <button className="bg-gradient-to-r from-[#726ce7] to-[#8f65e4] hover:bg-gradient-to-l text-[#f1f1f1] font-bold py-2 px-4 rounded transition duration-300">
                <Link href="/profile">Profile</Link>
              </button>
              <button className="bg-gradient-to-r from-[#7e74ed] to-[#8f65e4]  hover:bg-gradient-to-l text-[#f1f1f1] font-bold py-2 px-4 rounded transition duration-300">
                <Link href="/sign-out">Sign Out</Link>
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
