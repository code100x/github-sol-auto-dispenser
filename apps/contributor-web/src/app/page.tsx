import db from "@repo/database/client";

export default async function Home() {
  const contributors = await db.userContributor.findMany();
  console.log(contributors);

  return <h1 className="bg-red-500">Client Web App</h1>;
}
