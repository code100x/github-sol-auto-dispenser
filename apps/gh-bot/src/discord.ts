import { EmbedBuilder, WebhookClient } from 'discord.js';

export const webhookClient = new WebhookClient({
  url: process.env.DISCORD_WEBHOOK_URL!,
});

type sendBountyTypes = {
  title: string;
  description: string;
  avatarUrl: string;
  prLink: string;
};
export const sendBountyMessageToDiscord = async ({
  title,
  description,
  avatarUrl,
  prLink,
}: sendBountyTypes) => {
  const embed = new EmbedBuilder()
    .setTitle(title)
    .setDescription(description)
    .setThumbnail(avatarUrl)
    .addFields({
      name: 'PR',
      value: prLink,
    });

  await webhookClient.send({
    username: 'Github',
    avatarURL:
      'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',
    embeds: [embed],
  });
};

type sendPrTypes = {
  title: string;
  avatarUrl: string;
  prLink: string;
};
export const sendPrOpenToDiscord = async ({
  title,
  avatarUrl,
  prLink,
}: sendPrTypes) => {
  const embed = new EmbedBuilder()
    .setTitle(title)
    .setDescription(prLink)
    .setThumbnail(avatarUrl);

  await webhookClient.send({
    username: 'Github',
    avatarURL:
      'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',
    embeds: [embed],
  });
};

type SendIssueType = {
  title: string;
  avatarUrl: string;
  issueLink: string;
};
export const sendIssueOpenToDiscord = async ({
  title,
  avatarUrl,
  issueLink,
}: SendIssueType) => {
  const embed = new EmbedBuilder()
    .setTitle(title)
    .setDescription(issueLink)
    .setThumbnail(avatarUrl);

  await webhookClient.send({
    username: 'Github',
    avatarURL:
      'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',
    embeds: [embed],
  });
};
