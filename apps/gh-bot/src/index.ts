import { Probot } from 'probot';
import { addNewBounty, extractAmount, isBountyComment } from './utils.js';
import {
  sendBountyMessageToDiscord,
  sendIssueOpenToDiscord,
  sendPrOpenToDiscord,
} from './discord.js';
import dotenv from 'dotenv';

dotenv.config();

export default (app: Probot) => {
  app.log.info('Yay! The app was loaded!');

  app.webhooks.on('issues.opened', async (context) => {
    if (context.isBot) return;
    console.log(context.payload as any);
    const issueComment = context.issue({
      body: `@${context.payload.sender.login} Thanks for opening this issue!`,
    });
    await context.octokit.issues.createComment(issueComment);
    sendIssueOpenToDiscord({
      title: 'New Issue Opened',
      avatarUrl: context.payload.sender.avatar_url,
      issueLink: context.payload.issue.url,
    });
  });

  app.on('pull_request.opened', async (context: any) => {
    console.log(context);
    if (context.isBot) return;
    // TODO: Handle case when pr is opened
    const issueComment = context.issue({
      body: `@${context.payload.sender.login} Thanks for opening this PR!`,
    });
    await context.octokit.issues.createComment(issueComment);
    // TODO: Send this to discord
    sendPrOpenToDiscord({
      title: 'New Pr Opened',
      avatarUrl: context.payload.sender.avatar_url,
      prLink: context.payload.pull_request.url,
    });
  });

  app.on('issue_comment.created', async (context) => {
    if (context.isBot) return;
    app.log.debug(context.payload.comment.body);
    const commentBody = context.payload.comment.body;
    const isRepoOwner =
      context.payload.repository.owner.login ===
      context.payload.comment.user.login;
    if (!isRepoOwner) return;

    if (!isBountyComment(commentBody)) return;

    const amount = extractAmount(commentBody) as string;

    if (amount === null) {
      await sendBountyMessageToDiscord({
        title: 'Bounty dispatch error',
        avatarUrl: context.payload.sender.avatar_url,
        description: `Please send a valid bounty amount @${context.payload.sender.login}. Example command to send bounty: "/bounty 300", this will send $300 to contributor. `,
        prLink: context.payload.issue.url,
      });
      return;
    }

    await addNewBounty({
      username: context.payload.sender.login as string,
      amount: +amount,
    });
    const issueComment = context.issue({
      body: `Congratulations!!! @${context.payload.issue.user.login} for winning ${amount}. Visit ${process.env.SERVER_URL} to claim bounty.`,
    });
    await context.octokit.issues.createComment(issueComment);
    await sendBountyMessageToDiscord({
      title: 'Bounty Dispatch',
      avatarUrl: context.payload.sender.avatar_url,
      description: `Congratulations!!! @${context.payload.issue.user.login} for winning ${amount}`,
      prLink: context.payload.issue.url,
    });
  });
};
