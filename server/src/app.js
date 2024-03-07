const express = require('express');
const { createNodeMiddleware } = require('@octokit/webhooks');
const webhookHandler = require('./github/webhookHandler');

const app = express();
const port = process.env.PORT || 3000;

// Register GitHub webhook middleware
app.use('/github-webhook', createNodeMiddleware(webhookHandler, { path: '/' }));

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

module.exports = app;
