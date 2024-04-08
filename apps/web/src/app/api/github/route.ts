import prisma from '@repo/database/client';
import { githubSchema } from '@repo/schema/index';

import { NextRequest, NextResponse } from 'next/server';

const handler = async (req: NextRequest) => {
  try {
    const botToken = req.headers.get('x-bot-token');
    if (botToken !== process.env.BOT_SECRET) {
      return NextResponse.json(
        {
          error: 'Unauthorized',
        },
        {
          status: 401,
        }
      );
    }

    const body = await req.json();
    const res = githubSchema.safeParse(body);
    if (!res.success) {
      return NextResponse.json(
        {
          error: 'Invalid Body',
        },
        {
          status: 400,
        }
      );
    }

    const { addedRepos, removedRepos } = res.data;

    const newRepos = await prisma.repo.createMany({
      data: addedRepos.map((repo) => ({
        id: repo.repoId,
        name: repo.repoName,
        ownerId: repo.ownerId,
        ownerUsername: repo.ownerUsername,
      })),
      skipDuplicates: true,
    });

    const removed = await prisma.repo.deleteMany({
      where: {
        id: {
          in: removedRepos.map((repo) => repo.repoId),
        },
      },
    });

    console.log(newRepos);
    console.log(removed);

    // return NextResponse.json(newRepo);
    return NextResponse.json({
      newRepos,
      removedRepos: removed,
    });
  } catch {
    return NextResponse.json(
      {
        error: 'Something Went Wrong',
      },
      {
        status: 500,
      }
    );
  }
};

export { handler as POST };
