import { z } from 'zod';

export const githubSchema = z.object({
  ownerId: z.number(),
  ownerUsername: z.string(),
  repoId: z.number(),
  repoName: z.string(),
});

export type GithubSchemaType = z.infer<typeof githubSchema>;
