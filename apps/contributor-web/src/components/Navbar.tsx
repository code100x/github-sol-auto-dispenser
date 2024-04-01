import Link from 'next/link';
import { getServerSession } from 'next-auth/next';
import { options } from '@/app/api/auth/[...nextauth]/options';

const Navbar = async () => {
  const session = await getServerSession(options);

  return (
    <nav className="bg-indigo-600 p-4">
      <ul className="flex gap-x-4">
        <li>
          <Link href="/" className="text-white hover:underline">
            Home
          </Link>
        </li>

        {!session ? (
          <li>
            <Link href="/sign-in" className="text-white hover:underline">
              Sign In
            </Link>
          </li>
        ) : (
          <>
            <li>
              <Link href="/profile" className="text-white hover:underline">
                Profile
              </Link>
            </li>

            <li>
              <Link href="/sign-out" className="text-white hover:underline">
                Sign Out
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
