const express = require('express');
const webhookHandler = require('./github/webhookHandler');

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Webhook endpoint
app.post('/webhook', webhookHandler);

module.exports = app;