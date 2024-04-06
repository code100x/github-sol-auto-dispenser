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

dotenv.config();

const connection = new Connection(
  process.env.SOLANA_URL as string,
  'confirmed'
);

const senderPrivateKeyBase58 = process.env.SENDER_PRIVATE_KEY;
const senderPublicKey = process.env.SENDER_PUBLIC_KEY;

// TODO: Use some API to fetch realtime price of Solana token
const currentSolanaPrice = process.env.SOLANA_PRICE_USD as string;

export async function sendSolanaToAnotherAddress(
  receiverWalletAddress: string
) {
  console.log(receiverWalletAddress);
  try {
    if (!senderPrivateKeyBase58 || !senderPublicKey) {
      throw new Error(
        'Please provide sender private key and sender public key in the environment variables.'
      );
    }

    const session = (await getServerSession(options)) as Session;

    const githubUserId = extractUserIdFromAvatarUrl(
      session.user?.image as string
    );

    const username = await getGithubUsernamefromUserId(githubUserId as string);

    const totalBountyOfUser = await db.bountyTable.aggregate({
      _sum: {
        amount: true,
      },
      where: {
        username: username,
      },
    });

    const amount = totalBountyOfUser._sum.amount as number;

    // Convert the base58 private key to a Uint8Array
    const senderPrivateKeyArray = bs58.decode(senderPrivateKeyBase58);
    const senderAccount = Keypair.fromSecretKey(senderPrivateKeyArray);
    const senderPublicKeyObj = new PublicKey(senderPublicKey);
    const receiverWalletAddressObj = new PublicKey(receiverWalletAddress);
    const solAmount = amount / +currentSolanaPrice;
    const lamports = solAmount * Math.pow(10, 9);

    // Fetch sender account information
    const senderAccountInfo =
      await connection.getAccountInfo(senderPublicKeyObj);

    if (!senderAccountInfo) {
      throw new Error('Sender account not found');
    }

    // Construct a transaction
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: senderPublicKeyObj,
        toPubkey: receiverWalletAddressObj,
        lamports, // Amount of SOL to send (1 SOL = 1,000,000,000 lamports)
      })
    );

    // Sign the transaction
    transaction.recentBlockhash = (
      await connection.getRecentBlockhash()
    ).blockhash;
    transaction.sign(senderAccount);

    const signature = await connection.sendRawTransaction(
      transaction.serialize()
    );

    console.log('Transaction sent:', signature);

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
