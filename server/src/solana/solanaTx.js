const logger = require('../utils/logger');

const transferSol = async (userAddress, amount) => {
  logger.info(`Transferring ${amount} SOL to ${userAddress}`);

};

module.exports = { transferSol };