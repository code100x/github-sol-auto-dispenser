import { LoginBtn, LogoutBtn } from '@/components';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export default async function Home() {
  const session = await getServerSession(authOptions);

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
