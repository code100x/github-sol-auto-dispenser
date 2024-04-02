import { authOptions } from '@/lib/auth';
import prisma from '@repo/database/client';
import { getServerSession } from 'next-auth';

export const Dashboard = async () => {
  const session = await getServerSession(authOptions);

  console.log(session);
  const repos = await prisma.repo.findMany({
    where: {
      ownerId: session?.user.id,
    },
  });

  if (!repos.length)
    return (
      <h1 className="text-center">
        You haven't installed github app on any repos
      </h1>
    );

  return (
    <section className="flex justify-center flex-col items-center">
      <h1>Which repo do u want to monitor?</h1>
      <div className="grid grid-cols-3">
        {repos.map((repo) => {
          return <h1>{JSON.stringify(repo)}</h1>;
        })}
      </div>
    </section>
  );
};
