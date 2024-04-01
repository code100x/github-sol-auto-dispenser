import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from '@repo/database/client';
import { DefaultSession, Session } from 'next-auth';
import { Adapter } from 'next-auth/adapters';
import GithubProvider from 'next-auth/providers/github';

interface ISession {
  user: {
    id: string;
    name: string;
    email: string;
    image: string;
  };
}

export const authOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, user }: any) {
      return {
        user: {
          id: user.id,
          ...session.user,
        },
        ...session,
      };
    },
  },
};
