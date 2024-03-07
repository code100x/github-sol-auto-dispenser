require('dotenv').config();

const config = {
  port: process.env.PORT || 3000,
  githubWebhookSecret: process.env.GITHUB_WEBHOOK_SECRET,
  solanaWalletSecretKey: process.env.SOLANA_WALLET_SECRET_KEY,
  solanaNetwork: process.env.SOLANA_NETWORK || 'devnet', 
};

module.exports = config;
