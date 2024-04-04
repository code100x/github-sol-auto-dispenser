import { githubSchema } from '@/schemas/github';
import prisma from '@repo/database/client';
import { NextRequest, NextResponse } from 'next/server';

const handler = async (req: NextRequest) => {
  try {
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

    const payload = res.data;
    const newRepo = await prisma.repo.upsert({
      create: {
        id: payload.repoId,
        name: payload.repoName,
        ownerId: payload.ownerId,
        ownerUsername: payload.ownerUsername,
      },
      update: {
        name: payload.repoName,
        ownerId: payload.ownerId,
        ownerUsername: payload.ownerUsername,
      },
      where: {
        id: payload.repoId,
      },
    });

    return NextResponse.json(newRepo);
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
