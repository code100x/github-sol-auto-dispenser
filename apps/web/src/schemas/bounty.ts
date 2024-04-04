import { z } from 'zod';

export const bountySchema = z.object({
  username: z.string(),
  amount: z.number(),
  repoId: z.number(),
});

export type TypeBountySchema = z.infer<typeof bountySchema>;
