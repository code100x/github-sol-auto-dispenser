import { Dashboard, Hero, NavBar } from '@/components';
import { authOptions } from '@/lib/auth';
import { LoaderIcon } from 'lucide-react';
import { getServerSession } from 'next-auth';
import { Suspense } from 'react';

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session)
    return (
      <main>
        <NavBar />
        <Hero />
      </main>
    );

  return (
    <main>
      <NavBar />
      <Dashboard />
    </main>
  );
}
