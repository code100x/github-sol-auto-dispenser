import prisma from '@repo/database/client';

import { NextRequest, NextResponse } from 'next/server';

const handler = async (
  req: NextRequest,
  {
    params,
  }: {
    params: { id: number };
  }
) => {
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

    const repo = await prisma.repo.findFirst({
      where: {
        id: +params.id,
      },
    });

    return NextResponse.json({
      addedById: repo?.ownerId,
    });
  } catch (e) {
    console.log(e);
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

export { handler as GET };
