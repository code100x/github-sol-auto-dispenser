import { LoginBtn, LogoutBtn } from '@/components';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { NavBar } from '@/components/nav-bar';

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    return (
      <main className="bg-white text-black">
        <NavBar />
        {JSON.stringify(session.user)}
        <div>
          <LogoutBtn />
        </div>
      </main>
    );
  }

  return (
    <main>
      <NavBar />
      <LoginBtn />
    </main>
  );
}
