import { getServerSession as getNextAuthServerSession } from "next-auth";

export const getServerSession = async () => {
  const session = await getNextAuthServerSession();
  return session;
};