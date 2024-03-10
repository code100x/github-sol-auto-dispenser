require('dotenv').config();
const express = require('express');
const { createNodeMiddleware, Webhooks } = require('@octokit/webhooks');
const app = express();
const port = process.env.PORT || 3000;

const webhooks = new Webhooks({
  secret: process.env.GITHUB_WEBHOOK_SECRET,
});

webhooks.on("pull_request", async ({ id, name, payload }) => {
  console.log(name, "event received");
  //check the action and decide whether to dispense funds
  //  if (payload.action === 'closed' && payload.pull_request.merged) {...}
});

app.use(createNodeMiddleware(webhooks, { path: '/github-webhooks' }));

app.listen(port, () => console.log(`Listening on port ${port}`));
