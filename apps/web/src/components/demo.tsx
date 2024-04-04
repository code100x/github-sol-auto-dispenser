import Image from 'next/image';

export const Demo = () => {
  return (
    <section className="flex flex-col items-center justify-center m-10 gap-5">
      <h1 className="text-3xl font-medium underline">How does it work?</h1>
      <Image
        src={'/demo.gif'}
        width={1000}
        height={600}
        alt="Demo gif"
        className="rounded-md"
      />
    </section>
  );
};
