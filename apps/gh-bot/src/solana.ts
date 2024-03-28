import { Connection, Keypair, PublicKey, Transaction } from "@solana/web3.js";
const {  Token,  TOKEN_PROGRAM_ID,} = require('@solana/spl-token');

// Replace with your actual Solana wallet keypair
const senderKeypair = Keypair.fromSecretKey(new Uint8Array([/* your secret key values */]));

async function transferUSDC(recipientAddress: string, amount: number) {
  const connection = new Connection("https://api.mainnet-beta.solana.com");
  const recipientPublicKey = new PublicKey(recipientAddress);
  const senderPublicKey = senderKeypair.publicKey;
  const mintAddress = new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"); // Replace with actual USDC mint address
// Get the associated token accounts for the sender and recipient
const senderTokenAccount = await Token.getAssociatedTokenAddress(
  TOKEN_PROGRAM_ID,
  mintAddress,
  senderPublicKey,
  senderPublicKey // (senderPublicKey)
);
const recipientTokenAccount = await Token.getAssociatedTokenAddress(
  TOKEN_PROGRAM_ID,
  mintAddress,
  recipientPublicKey,
  recipientPublicKey // Add the owner argument (recipientPublicKey)
);
  // Create the instruction for the transfer
  const transferInstruction = Token.createTransferInstruction(
    TOKEN_PROGRAM_ID,
    senderTokenAccount,
    recipientTokenAccount,
    senderPublicKey,
    [],
    amount * 10 ** 6 // Assuming 6 decimal places for USDC
  );

  // Create and sign the transaction
  const transaction = new Transaction().add(transferInstruction);
  transaction.feePayer = senderPublicKey;
  let blockhash = (await connection.getRecentBlockhash()).blockhash;
  transaction.recentBlockhash = blockhash;

  // Sign the transaction with the sender's keypair
  transaction.sign(senderKeypair);

  // Send the transaction
  const signature = await connection.sendRawTransaction(transaction.serialize());

  // Confirm the transaction
  await connection.confirmTransaction(signature);

  console.log(`Transferred ${amount} USDC to ${recipientAddress}. Signature: ${signature}`);
}

export { transferUSDC };