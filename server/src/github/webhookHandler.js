const { Webhooks } = require('@octokit/webhooks');
const githubService = require('./githubService');

const webhooks = new Webhooks({
  secret: process.env.GITHUB_WEBHOOK_SECRET,
});

webhooks.on('pull_request', async ({ id, name, payload }) => {
  console.log(`Received a pull_request event: ${name}`);
  githubService.handlePullRequestEvent(payload);
});

module.exports = webhooks;
