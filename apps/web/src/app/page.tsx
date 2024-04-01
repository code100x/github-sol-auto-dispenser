import db from '@repo/database/client';
import { LoginBtn, LogoutBtn } from '@/components';
import { getServerSession } from 'next-auth';

export default async function Home() {
  const contributors = await db.userContributor.findMany();
  console.log(contributors);

  const session = await getServerSession();

  if (session?.user) {
    return (
      <main>
        {JSON.stringify(session.user)}
        <div>
          <LogoutBtn />
        </div>
      </main>
    );
  }

  return (
    <main>
      <LoginBtn />
    </main>
  );
}
