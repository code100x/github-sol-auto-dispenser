import Link from 'next/link';

export const LoginBtn = () => {
  return (
    <>
      <Link href={'/api/auth/signin'}>LogIn</Link>
    </>
  );
};
