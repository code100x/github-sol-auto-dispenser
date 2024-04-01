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

  const githubUserId = extractUserIdFromAvatarUrl(
    session.user?.image as string
  );
  const username = await getGithubUsernamefromUserId(githubUserId as string);

  const bounties = await db.bountyTable.findMany({
    where: { username: username },
  });

  const totalBountyOfUser = await db.bountyTable.aggregate({
    _sum: {
      amount: true,
    },
    where: {
      username: username,
    },
  });

  return (
    <div>
      <h1>ProfilePage</h1>

      <div className="p-10 m-10 border border-black w-[20%]">
        {session?.user?.name ? <h2>Hello {session.user.name}!</h2> : null}

        {session?.user?.image ? (
          <Image
            src={session.user.image}
            width={200}
            height={200}
            alt={`Profile Pic for ${session.user.name}`}
            priority={true}
          />
        ) : null}
      </div>
      <div>
        <BountyTable data={bounties as TBountyData[]} />
      </div>
      {totalBountyOfUser._sum.amount && totalBountyOfUser._sum.amount > 0 && (
        <div className="m-5">
          Total bounty: $ {totalBountyOfUser._sum.amount}
          <form action={sendSolana} className="flex flex-col gap-y-2 w-[400px]">
            <label htmlFor="text">Solana wallet address:</label>
            <input
              id="address"
              name="address"
              className="border-2 h-[50px]"
              placeholder="Your solana wallet address"
            />
            <button type="submit" className="border-2">
              Claim bounty
            </button>
          </form>
        </div>
      )}
      <SignOutButton />
    </div>
  );
};

export default ProfilePage;
