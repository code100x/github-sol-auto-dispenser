const logger = require('../utils/logger');
const { transferSol } = require('../solana/solanaTx');

const handlePullRequestEvent = async (pullRequest) => {
  const { user } = pullRequest.user;
  const userName = user.login;


  const userAddress = 'placeholder_solana_address';

  try {
    await transferSol(userAddress, 1);
    logger.info(`Transferred 1 SOL to ${userName} (${userAddress})`);
  } catch (error) {
    logger.error(`Error transferring SOL to ${userName}: ${error.message}`);
  }
};

module.exports = { handlePullRequestEvent };