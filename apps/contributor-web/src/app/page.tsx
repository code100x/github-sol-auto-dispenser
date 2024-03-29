import SignInButton from "@/components/SignInButton";
import db from "@repo/database/client";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

export default async function Home() {
  const contributors = await db.userContributor.findMany();
  console.log(contributors);
  
    return (
      <div>
        Welcome To Github Auto Solana Dispenser.
      </div>
    );
  
}
