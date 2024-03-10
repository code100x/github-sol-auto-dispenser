
jest.mock('../../src/solana/solanaTx', () => ({
  sendSol: jest.fn().mockResolvedValue('fake_signature'),
}));

const { handlePullRequestEvent } = require('../../src/github/githubService');
const { sendSol } = require('../../src/solana/solanaTx');

describe('GitHub Service', () => {
  beforeEach(() => {
    sendSol.mockClear();
  });

  it('successfully handles a merged pull request', async () => {

    const mergedPayload = {
      action: 'closed',
      pull_request: { merged: true },
    };

    await handlePullRequestEvent(mergedPayload);
    
    expect(sendSol).toHaveBeenCalledWith('RECIPIENT_WALLET_ADDRESS', 0.1);
  });

  it('does nothing for an unmerged pull request', async () => {
    const unmergedPayload = {
      action: 'closed',
      pull_request: { merged: false },
    };

    await handlePullRequestEvent(unmergedPayload);
    expect(sendSol).not.toHaveBeenCalled();
  });
});
