import GitHubProvider from 'next-auth/providers/github';
import type { AuthOptions } from 'next-auth';

export const options: AuthOptions = {
  providers: [
    GitHubProvider({
      name: 'GitHub',
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
};
