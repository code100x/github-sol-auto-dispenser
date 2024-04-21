import { Probot } from 'probot';
import {
  addNewBounty,
  extractAmount,
  getOwnerId,
  isBountyComment,
  modifyRepos,
} from './utils.js';
import {
  sendBountyMessageToDiscord,
  sendIssueOpenToDiscord,
  sendPrOpenToDiscord,
} from './discord.js';
import { RepoSchemaType } from '@repo/schema';
import dotenv from 'dotenv';

dotenv.config();

export default (app: Probot) => {
  app.log.info('Yay! The app was loaded!');

  app.webhooks.on('installation.created', async (context) => {
    const { repositories, sender } = context.payload;
    if (!repositories) return;

    const addedRepos: RepoSchemaType[] = repositories.map((repo) => ({
      ownerId: sender.id,
      ownerUsername: sender.login,
      repoId: repo.id,
      repoName: repo.full_name,
    }));

    await modifyRepos(addedRepos, []);
    app.log.debug('The app was installed');
  });

  app.webhooks.on('installation.deleted', async (context) => {
    const { repositories, sender } = context.payload;

    if (!repositories) return;

    const removedRepos: RepoSchemaType[] = repositories.map((repo) => ({
      ownerId: sender.id,
      ownerUsername: sender.login,
      repoId: repo.id,
      repoName: repo.full_name,
    }));

    await modifyRepos([], removedRepos);
    app.log.debug('The app was installed');
  });

  app.webhooks.on('installation_repositories.added', async (context) => {
    const { repositories_added, sender } = context.payload;
    const addedRepos: RepoSchemaType[] = repositories_added.map((repo) => ({
      ownerId: sender.id,
      ownerUsername: sender.login,
      repoId: repo.id,
      repoName: repo.full_name,
    }));

    await modifyRepos(addedRepos, []);
  });

  app.webhooks.on('installation_repositories.removed', async (context) => {
    const { repositories_removed, sender } = context.payload;

    const removedRepos: RepoSchemaType[] = repositories_removed.map((repo) => ({
      ownerId: sender.id,
      ownerUsername: sender.login,
      repoId: repo.id,
      repoName: repo.full_name,
    }));

    await modifyRepos([], removedRepos);
  });

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
    const commenter = context.payload.comment.user.login;
    const isRepoOwner = context.payload.repository.owner.login === commenter;
    const id = await getOwnerId({ id: context.payload.repository.id });
    if (!id) return;
    const isBotAddedByUser = context.payload.comment.user.id === id;

    if (
      !isRepoOwner &&
      !process.env.ADMIN_USERNAMES?.split(',').includes(commenter) &&
      !isBotAddedByUser
    )
      return;

    if (!isBountyComment(commentBody)) return;

    const amount = extractAmount(commentBody)?.replace('$', '');

    if (!amount) {
      const issueComment = context.issue({
        body: `Please send a valid bounty amount @${context.payload.sender.login}. Example command to send bounty: "/bounty $300", this will send $300 to contributor. `,
      });
      await context.octokit.issues.createComment(issueComment);
      return;
    }

    await addNewBounty({
      repoId: context.payload.repository.id,
      username: context.payload.sender.login as string,
      amount: +amount,
    });
    const issueComment = context.issue({
      body: `Congratulations!!! @${context.payload.issue.user.login} for winning $${amount}. Visit ${process.env.CONTRIBUTOR_SERVER_URL} to claim bounty.`,
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
