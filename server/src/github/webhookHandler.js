const crypto = require('crypto');
const logger = require('../utils/logger');
const { handlePullRequestEvent } = require('./githubService');

const WEBHOOK_SECRET = process.env.GITHUB_WEBHOOK_SECRET;

const webhookHandler = (req, res) => {
  const signature = req.headers['x-hub-signature'];
  const payload = JSON.stringify(req.body);

  // Verify the webhook signature
  const hmac = crypto.createHmac('sha1', WEBHOOK_SECRET);
  const digest = 'sha1=' + hmac.update(payload).digest('hex');

  if (!signature || !crypto.timingSafeEqual(Buffer.from(digest), Buffer.from(signature))) {
    logger.error('Invalid webhook signature');
    return res.status(403).send('Invalid signature');
  }

  // Handle the pull request event
  const { action, pull_request } = req.body;
  if (action === 'opened' || action === 'reopened') {
    handlePullRequestEvent(pull_request);
  }

  res.status(200).send('Webhook received');
};

module.exports = webhookHandler;