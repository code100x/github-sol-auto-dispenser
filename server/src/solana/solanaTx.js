// solanaTx.js
const solanaWeb3 = require('@solana/web3.js');

async function sendSol(receiverAddress, amount) {
  // make sure ur  Solana  is environment setup correctly
  const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('devnet'), 'confirmed');
  const senderSecretKey = Uint8Array.from(Object.values(JSON.parse(process.env.SOLANA_WALLET_SECRET_KEY)));
  const senderKeypair = solanaWeb3.Keypair.fromSecretKey(senderSecretKey);
  const receiverPublicKey = new solanaWeb3.PublicKey(receiverAddress);
  
  const transaction = new solanaWeb3.Transaction().add(
    solanaWeb3.SystemProgram.transfer({
      fromPubkey: senderKeypair.publicKey,
      toPubkey: receiverPublicKey,
      lamports: amount * solanaWeb3.LAMPORTS_PER_SOL, 
    }),
  );

  const signature = await solanaWeb3.sendAndConfirmTransaction(connection, transaction, [senderKeypair]);
  return signature;
}

module.exports = { sendSol };
