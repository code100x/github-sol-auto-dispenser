// ProfilePage.jsx
import Image from 'next/image';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';
import SignOutButton from '@/components/SignOutButton';
import { redirect } from 'next/navigation';
import { extractUserIdFromAvatarUrl, getGithubUsernamefromUserId } from '@/lib';
import db from '@repo/database/client';
import { BountyTable, TBountyData } from '@/components/BountyTable';
import { sendSolana } from '../actions';

const ProfilePage = async () => {
  const session = await getServerSession(options);
  if (!session) {
    return redirect('/');
  }

  const githubUserId = extractUserIdFromAvatarUrl(session.user?.image as string);
  const username = await getGithubUsernamefromUserId(githubUserId as string);
  const bounties = await db.bountyTable.findMany({
    where: { username: username },
  });
  const totalBountyOfUser = await db.bountyTable.aggregate({
    _sum: { amount: true },
    where: { username: username },
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 bg-gradient-to-br ">
      <div className="max-w-4xl w-full bg-white/95 backdrop-blur-md rounded-xl shadow-xl p-8 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold p-4 text-indigo-600">SOLIDPULL</h1>
          <SignOutButton />
        </div>

        <div className="flex items-center space-x-4">
          {session?.user?.image && (
            <div className="w-24 h-24 relative">
              <Image
                src={session.user.image}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
                alt={`Profile picture of ${session.user.name}`}
              />
            </div>
          )}
          <div>
            {session?.user?.name && (
              <h2 className="text-2xl font-semibold text-gray-800">Hello, {session.user.name}!</h2>
            )}
            <p className="text-gray-600">Explore and claim your bounties with ease.</p>
          </div>
        </div>

        <BountyTable data={bounties as TBountyData[]} />

        {totalBountyOfUser._sum.amount && totalBountyOfUser._sum.amount > 0 && (
          <div className="bg-white shadow rounded-lg p-4 mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Claim Your Bounty</h3>
            <div className="space-y-4">
              <p>Total bounty: <span className="font-bold">${totalBountyOfUser._sum.amount}</span></p>
              <form action={sendSolana} className="space-y-2">
                <div className="mb-6">
                  <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-700">
                    Solana Wallet Address:
                  </label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Your Solana wallet address"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-2 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-current rounded-lg "
                >
                  Claim Bounty
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
