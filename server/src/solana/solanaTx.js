const solanaWeb3 = require('@solana/web3.js');

async function sendSol(receiverAddress, amount) {
  const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('devnet'), 'confirmed');
  const senderSecretKey = new Uint8Array(JSON.parse(process.env.SOLANA_WALLET_SECRET_KEY));
  const senderKeypair = solanaWeb3.Keypair.fromSecretKey(senderSecretKey);
  const receiverPublicKey = new solanaWeb3.PublicKey(receiverAddress);
  const transaction = new solanaWeb3.Transaction().add(
    solanaWeb3.SystemProgram.transfer({
      fromPubkey: senderKeypair.publicKey,
      toPubkey: receiverPublicKey,
      lamports: solanaWeb3.LAMPORTS_PER_SOL * amount,
    }),
  );

  const signature = await solanaWeb3.sendAndConfirmTransaction(connection, transaction, [senderKeypair]);
  console.log('Transaction successful with signature:', signature);
}

// sendSol('receiver_wallet_address', 0.1);
