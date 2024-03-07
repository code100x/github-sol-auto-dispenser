const dotenv = require('dotenv');

dotenv.config();

const config = {
  port: process.env.PORT || 3000,
  githubWebhookSecret: process.env.GITHUB_WEBHOOK_SECRET,
  solanaRpcEndpoint: process.env.SOLANA_RPC_ENDPOINT,
};

module.exports = config;