import { Probot } from "probot";
import { extractAmount, extractAddress } from "./utils";
import { transferUSDC } from "./solana";
import { saveBounty, getBounty } from "./bounties";
import {
  sendBountyMessageToDiscord,
  sendIssueOpenToDiscord,
  sendPrOpenToDiscord,
} from "./discord";
import { saveBountyPayment } from "./history"
export default (app: Probot) => {
  app.on("issues.opened", async (context) => {
    if (context.isBot) return;
    const issueComment = context.issue({
      body: `@${context.payload.sender.login} Thanks for opening this issue!`,
    });
    await context.octokit.issues.createComment(issueComment);
    sendIssueOpenToDiscord({
      title: "New Issue Opened",
      avatarUrl: context.payload.sender.avatar_url,
      issueLink: context.payload.issue.html_url,
    });
  });

  app.on("pull_request.opened", async (context) => {
    if (context.isBot) return;
    const issueComment = context.issue({
      body: `@${context.payload.sender.login} Thanks for opening this PR!`,
    });
    await context.octokit.issues.createComment(issueComment);
    sendPrOpenToDiscord({
      title: "New PR Opened",
      avatarUrl: context.payload.sender.avatar_url,
      prLink: context.payload.pull_request.html_url,
    });
  });

app.on("issue_comment.created", async (context) => {
  if (context.isBot) return;
  const commentBody = context.payload.comment.body;
  const isRepoOwner =
    context.payload.repository.owner.login === context.payload.comment.user.login;
  if (!isRepoOwner) return;
  const amount = extractAmount(commentBody);
  if (amount) {
    const issueNumber = context.payload.issue.number;
    saveBounty({ issueNumber, amount });
    const issueComment = context.issue({
      body: `Congratulations!!! @${context.payload.issue.user.login} for winning ${amount} USDC. Please provide your Solana address in a comment to claim the bounty.`,
    });
    await context.octokit.issues.createComment(issueComment);
    await sendBountyMessageToDiscord({
      title: "Bounty Dispatch",
      avatarUrl: context.payload.sender.avatar_url,
      description: `Congratulations!!! @${context.payload.issue.user.login} for winning ${amount} USDC`,
      prLink: context.payload.issue.html_url,
    });
  }
});
app.on("pull_request_review_comment.created", async (context) => {
  if (context.isBot) return;
  const commentBody = context.payload.comment.body;
  const pullRequestNumber = context.payload.pull_request.number;
  const bounty = getBounty(pullRequestNumber);
  if (bounty) {
    const address = extractAddress(commentBody);
    if (address) {
      saveBounty({ ...bounty, address });
      const issueComment = context.issue({
        body: `Solana address ${address} has been associated with the bounty for this issue.`,
      });
      await context.octokit.issues.createComment(issueComment);
    }
  }
});

app.on("pull_request.closed", async (context) => {
    if (context.isBot) return;
    const { pull_request } = context.payload;
    if (pull_request.merged) {
      const issueNumber = pull_request.number;
      const bounty = getBounty(issueNumber);
      if (bounty && bounty.address) {
        const { amount, address } = bounty;
        try {
          await transferUSDC(address, amount);
          saveBountyPayment({
            issueNumber,
            amount,
            recipient: address,
            issueUrl: pull_request.html_url,
            timestamp: new Date().getTime(),
            paidAt: undefined,
            paidTo: undefined
          });
        } catch (error: any) {
          console.error(`Error transferring USDC: ${error.message}`);
        }
      }
    }
  });
};