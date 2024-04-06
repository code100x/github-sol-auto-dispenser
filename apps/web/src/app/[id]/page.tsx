import { authOptions } from '@/lib/auth';
import prisma from '@repo/database/client';
import { getServerSession } from 'next-auth';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

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

  const bounties = await prisma.bountyTable.findMany({
    where: {
      repoId: Number(id),
    },
  });

  if (!repo) return <NotFound />;
  let total = 0;
  for (const bounty of bounties) {
    total += bounty.amount;
  }

  return (
    <>
      <h1 className="lg:text-5xl font-bold text-center text-4xl py-5">
        List of all bounties
      </h1>

      {!bounties.length ? (
        <div className="px-4 text-xs lg:text-base py-2 rounded-full bg-secondary text-primary max-w-md mx-auto">
          You haven't given out any bounties for this repo
        </div>
      ) : (
        <section className="mx-auto max-w-lg">
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead className="text-right">Created At</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bounties.map((bounty) => (
                <TableRow key={bounty.id}>
                  <TableCell className="font-medium">{bounty.id}</TableCell>
                  <TableCell>{bounty.status}</TableCell>
                  <TableCell className="text-right">{bounty.amount}</TableCell>
                  <TableCell className="text-right">
                    {bounty.createdAt.toDateString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">${total}</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </section>
      )}
    </>
  );
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
