const logger = require('../utils/logger');

const transferSol = async (userAddress, amount) => {
  logger.info(`Transferring ${amount} SOL to ${userAddress}`);
  // TODO: Implement Solana transaction logic
};

module.exports = { transferSol };