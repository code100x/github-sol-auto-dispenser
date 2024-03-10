// githubService.js
const solanaTx = require('../solana/solanaTx');

function isPRMerged(action, merged) {
  return action === 'closed' && merged === true;
}

async function handlePullRequestEvent(payload) {
  if (isPRMerged(payload.action, payload.pull_request.merged)) {
    console.log('Pull request merged, dispensing funds...');
    const recipientAddress = 'RECIPIENT_WALLET_ADDRESS'; // Define the actual recipient address here
    const amount = 0.1; // Define the amount to send
    try {
      const signature = await solanaTx.sendSol(recipientAddress, amount);
      console.log(`Transaction successful with signature: ${signature}`);
    } catch (error) {
      console.error('Transaction failed:', error);
    }
  }
}

module.exports = { isPRMerged, handlePullRequestEvent };

