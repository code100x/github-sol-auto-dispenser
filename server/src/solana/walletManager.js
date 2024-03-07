// walletManager.js

const { Connection, PublicKey, SystemProgram, Transaction, Keypair, LAMPORTS_PER_SOL, clusterApiUrl } = require('@solana/web3.js');

class WalletManager {
    constructor() {
        this.connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
    }

    async sendSol(senderKeypair, recipientPublicKeyStr, amount) {
        const recipientPublicKey = new PublicKey(recipientPublicKeyStr);
        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: senderKeypair.publicKey,
                toPubkey: recipientPublicKey,
                lamports: amount * LAMPORTS_PER_SOL, // Converting SOL to lamports
            }),
        );

        const signature = await this.connection.sendTransaction(transaction, [senderKeypair], {skipPreflight: false, preflightCommitment: 'confirmed'});
        await this.connection.confirmTransaction(signature, 'confirmed');
        return signature;
    }
}

module.exports = WalletManager;
