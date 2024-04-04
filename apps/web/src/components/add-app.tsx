import Link from 'next/link';

export const AddApp = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="text-xl">
        Add this github app to your repo to get started
      </h1>
      <Link href="https://github.com/apps/solona-bounty-bot">Here</Link>
    </section>
  );
};
