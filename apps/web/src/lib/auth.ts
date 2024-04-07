import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from '@repo/database/client';
import { Adapter } from 'next-auth/adapters';
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      allowDangerousEmailAccountLinking: true,
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

    async signIn({ user, account, profile }: any) {
      await prisma.user.upsert({
        create: {
          id: profile.id.toString(),
          email: user.email ?? '',
          image: profile.avatar_url ?? profile.gravatar_id,
          name: profile.login,
        },
        update: {
          name: profile.login,
          image: profile.avatar_url ?? profile.gravatar_id,
          email: user.email,
        },
        where: {
          id: profile.id.toString(),
          email: user.email,
        },
      });
      return true;
    },
  },
};