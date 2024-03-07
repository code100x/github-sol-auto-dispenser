const solanaTx = require('../solana/solanaTx');

exports.handlePullRequestEvent = async (payload) => {
  if (payload.action === 'closed' && payload.pull_request.merged) {
    console.log('Pull request merged, dispensing funds...');
    // Here, define the logic to determine the recipient and amount
    const recipientAddress = 'RECIPIENT_WALLET_ADDRESS';
    const amount = 0.1; // Specify the amount to send
    await solanaTx.sendSol(recipientAddress, amount);
  }
};
