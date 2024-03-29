import Image from "next/image";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import SignOutButton from "@/components/SignOutButton";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
  const session = await getServerSession(options);

  if (!session) {
    return redirect("/");
  }

  return (
    <div>
      <h1>ProfilePage</h1>

      <div>
        {session?.user?.name ? <h2>Hello {session.user.name}!</h2> : null}

        {session?.user?.image ? (
          <Image
            src={session.user.image}
            width={200}
            height={200}
            alt={`Profile Pic for ${session.user.name}`}
            priority={true}
          />
        ) : null}
      </div>
      <SignOutButton />
    </div>
  );
};

export default ProfilePage;
