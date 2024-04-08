import { z } from 'zod';

const repoSchema = z.object({
  ownerId: z.number(),
  ownerUsername: z.string(),
  repoId: z.number(),
  repoName: z.string(),
});

export const githubSchema = z.object({
  addedRepos: repoSchema.array(),
  removedRepos: repoSchema.array(),
});

export type GithubSchemaType = z.infer<typeof githubSchema>;
export type RepoSchemaType = z.infer<typeof repoSchema>;
