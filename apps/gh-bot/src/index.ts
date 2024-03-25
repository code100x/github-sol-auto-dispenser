import { Probot } from "probot";
import { extractAmount } from "./utils.js";
import { sendBountyMessageToDiscord, sendIssueOpenToDiscord, sendPrOpenToDiscord } from "./discord.js";

export default (app: Probot) => {
  app.log.info("Yay! The app was loaded!");

  app.on("issues.opened", async (context) => {
    if (context.isBot) return;
    const issueComment = context.issue({
      body: `@${context.payload.sender.login} Thanks for opening this issue!`,
    });
    await context.octokit.issues.createComment(issueComment);
    // TODO: Send this to discord
    sendIssueOpenToDiscord({
      title: "New Issue Opened",
      avatarUrl: context.payload.sender.avatar_url,
      issueLink: context.payload.issue.url,
    })
  });

  app.on("pull_request.opened", async (context) => {
    if (context.isBot) return;
    // TODO: Handle case when pr is opened
    const issueComment = context.issue({
      body: `@${context.payload.sender.login} Thanks for opening this PR!`,
    });
    await context.octokit.issues.createComment(issueComment);
    // TODO: Send this to discord
    sendPrOpenToDiscord({
      title: "New Pr Opened",
      avatarUrl: context.payload.sender.avatar_url,
      prLink: context.payload.pull_request.url,
    })
  })

  app.on("issue_comment.created", async (context) => {
    if (context.isBot) return;
    // TODO: Handle case when comment is created
    app.log.debug(context.payload.comment.body)
    const commentBody = context.payload.comment.body
    const isRepoOwner = context.payload.repository.owner.login === context.payload.comment.user.login;
    if (!isRepoOwner) return;

    const amount = extractAmount(commentBody);
    const issueComment = context.issue({
      body: `Congratulations!!! @${context.payload.issue.user.login} for winning ${amount}
             DM ankur or Rookie on discord to claim!!!
            `,
    });
    await context.octokit.issues.createComment(issueComment);
    await sendBountyMessageToDiscord({
      title: 'Bounty Dispatch',
      avatarUrl: context.payload.sender.avatar_url,
      description: `Congratulations!!! @${context.payload.issue.user.login} for winning ${amount}`,
      prLink: context.payload.issue.url,
    })
    // TODO: Send this to discord
  })
};
