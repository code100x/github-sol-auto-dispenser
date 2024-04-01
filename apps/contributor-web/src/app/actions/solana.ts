import { sendSolanaToAnotherAddress } from '@/lib/solana';
import { redirect } from 'next/navigation';
import db from '@repo/database/client';
import { getServerSession } from 'next-auth';
import { options } from '../api/auth/[...nextauth]/options';

export const sendSolana = async (formData: FormData) => {
  'use server';
  const receiverAddress = formData.get('address') as string;
  const userData = await getServerSession(options);

  // dispense bounties
  await sendSolanaToAnotherAddress(receiverAddress);

  return redirect('/profile');
};
