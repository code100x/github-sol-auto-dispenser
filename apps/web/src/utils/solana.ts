import { Connection, PublicKey } from "@solana/web3.js";
const {  Token,  TOKEN_PROGRAM_ID,} = require('@solana/spl-token');


const connection = new Connection("https://api.mainnet-beta.solana.com");
const usdcMintAddress = new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"); // Replace with actual USDC mint here

async function getUSDCBalance(walletAddress: string): Promise<number> {
  const walletPublicKey = new PublicKey(walletAddress);
  const tokenAccount = await Token.getAssociatedTokenAddress(
    TOKEN_PROGRAM_ID,
    usdcMintAddress,
    walletPublicKey,
    false
  );

  const balance = await connection.getTokenAccountBalance(tokenAccount);
  return balance.value.uiAmount || 0;
}

export { getUSDCBalance };