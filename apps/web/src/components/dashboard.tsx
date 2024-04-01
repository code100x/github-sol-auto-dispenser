import { getServerSession } from 'next-auth';

export const Dashboard = async () => {
  const session = await getServerSession();

  return <>Dashboard Component</>;
};
