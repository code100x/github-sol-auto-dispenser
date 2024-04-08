// Required imports
import { options } from '@/app/api/auth/[...nextauth]/options';
import {
  Connection,
  Keypair,
  PublicKey,
  Transaction,
  SystemProgram,
} from '@solana/web3.js';
import * as bs58 from 'bs58';
import { Session, getServerSession } from 'next-auth';
import { extractUserIdFromAvatarUrl, getGithubUsernamefromUserId } from '.';
import db from '@repo/database/client';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const connection = new Connection(
  process.env.SOLANA_URL as string,
  'confirmed'
);
const senderPrivateKeyBase58 = process.env.SENDER_PRIVATE_KEY;
const senderPublicKey = process.env.SENDER_PUBLIC_KEY;

// Function to fetch the real-time price of Solana
const fetchSolanaPrice = async () => {
  try {
    const response = await axios.get(
      'https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd'
    );
    const solanaPrice = response.data.solana.usd;
    console.log(`Current Solana Price: ${solanaPrice} USD`);
    return solanaPrice;
  } catch (error) {
    console.error('Error fetching Solana price:', error);
    throw error;
  }
};

export async function sendSolanaToAnotherAddress(
  receiverWalletAddress: string
) {
  try {
    console.log('context here 1');
    const currentSolanaPrice = await fetchSolanaPrice();

    console.log('context here 2');
    if (!senderPrivateKeyBase58 || !senderPublicKey) {
      throw new Error(
        'Please provide sender private key and sender public key in the environment variables.'
      );
    }
    console.log('context here 3');

    const session = (await getServerSession(options)) as Session;
    const githubUserId = extractUserIdFromAvatarUrl(
      session.user?.image as string
    );
    const username = await getGithubUsernamefromUserId(githubUserId as string);
    console.log('contentxt here 4');

    const totalBountyOfUser = await db.bountyTable.aggregate({
      _sum: { amount: true },
      where: { username: username },
    });

    const amount = totalBountyOfUser._sum.amount as number;

    const senderPrivateKeyArray = bs58.decode(senderPrivateKeyBase58);
    const senderAccount = Keypair.fromSecretKey(senderPrivateKeyArray);
    const senderPublicKeyObj = new PublicKey(senderPublicKey);
    const receiverWalletAddressObj = new PublicKey(receiverWalletAddress);

    const solAmount = amount / +currentSolanaPrice;
    const lamports = Math.floor(solAmount * Math.pow(10, 9));

    console.log('contentxt here 4');

    const senderAccountInfo =
      await connection.getAccountInfo(senderPublicKeyObj);
    if (!senderAccountInfo) {
      throw new Error('Sender account not found');
    }

    console.log('contentxt here 4');

    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: senderPublicKeyObj,
        toPubkey: receiverWalletAddressObj,
        lamports,
      })
    );

    console.log('contentxt here 4');

    transaction.recentBlockhash = (
      await connection.getRecentBlockhash()
    ).blockhash;
    transaction.sign(senderAccount);

    const signature = await connection.sendRawTransaction(
      transaction.serialize()
    );

    console.log('contentxt here 4');

    console.log('Transaction sent:', signature);
    console.log('contentxt here 5');

    await db.bountyTable.updateMany({
      data: {
        status: 'PAID',
      },
      where: { username },
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
}
