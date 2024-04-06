import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { options } from '@/app/api/auth/[...nextauth]/options';

import SignInButton from '@/components/SignInButton';

const SignInPage = async () => {
  const session = await getServerSession(options);
  if (session) {
    redirect('/profile');
  } else {
    return (
      <div>
        <h1>SignInPage</h1>

        <SignInButton />
      </div>
    );
  }
};

export default SignInPage;
