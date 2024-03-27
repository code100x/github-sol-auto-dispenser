import { LoginBtn, LogoutBtn } from "@/components";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import { ConnectButton } from '@rainbow-me/rainbowkit';




export default async function Home() {
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
         <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 12,
      }}
    >
      <ConnectButton />


    </div>
    </main>
  );
}
