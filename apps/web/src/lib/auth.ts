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
      console.log({ session, user });
      return {
        user: {
          id: user.id,
          ...session.user,
        },
        ...session,
      };
    },

    async signIn({ user, account, profile }: any) {
      try {
        
         await prisma.user.upsert({
      
        create: {
          id: profile.id.toString(),
          email: profile.email ?? '',
          image: profile.avatar_url ?? profile.gravatar_id,
          name: profile.login,
        },
        update: {
          name: profile.login,
          image: profile.avatar_url ?? profile.gravatar_id,
        },
        where: {
          id: profile.id.toString(),
          email: profile.email,
        },
        
      });
        return true;
      } catch (error) {
      console.log(error)
        
      }
     
    
    },
  },
};
