import { authOptions } from '@/lib/auth';
import prisma from '@repo/database/client';
import { getServerSession } from 'next-auth';

export default async function RepoIdPage(props: {
  params: {
    id: number;
  };
}) {
  const session = await getServerSession(authOptions);
  if (!session) return <NotFound />;
  const username = session.user.name;

  const {
    params: { id },
  } = props;

  if (Number.isNaN(Number(id))) return <NotFound />;

  const repo = await prisma.repo.findUnique({
    where: {
      id: Number(id),
      ownerUsername: username,
    },
  });

  if (!repo) return <NotFound />;

  return <></>;
}

function NotFound() {
  return (
    <>
      <h1 className="lg:text-5xl font-bold text-center text-4xl py-10 sm:p-10">
        The page you searched for doesn't exist
      </h1>
    </>
  );
}
