import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import prisma from '@repo/database/client';
import { AddApp } from './add-app';

export const Dashboard = async () => {
  const session = await getServerSession(authOptions);
  const username = session.user.name;

  const res = await prisma.repo.findMany({
    where: {
      ownerUsername: username,
    },
  });

  if (!res.length)
    return (
      <>
        <h1 className="text-center">
          You don't have any associated github repos yet
        </h1>
        <AddApp />
      </>
    );

  return (
    <section className="flex justify-center flex-col items-center">
      <h1>Which repo do u want to monitor?</h1>
      <div className="grid md:grid-cols-3 gap-5 sm:grid-cols-2 grid-cols-1">
        {res.map((repo: any) => {
          return <>{JSON.stringify(repo)}</>;
        })}
      </div>
      <div>Add more + </div>
      <AddApp />
    </section>
  );
};
