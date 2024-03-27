import { LoginBtn, LogoutBtn } from "@/components";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";

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
    </main>
  );
}
