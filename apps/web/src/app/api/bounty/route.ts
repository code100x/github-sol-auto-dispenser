import { NextResponse } from 'next/server';
import db from '@repo/database/client';
import { bountySchema } from '@repo/schema/index';

export async function POST(request: Request) {
  try {
    const botToken = request.headers.get('x-bot-token');
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
    const rawPayload = await request.json();
    const res = bountySchema.safeParse(rawPayload);
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

    await db.bountyTable.create({
      data: {
        username: payload.username,
        amount: payload.amount,
        repoId: payload.repoId,
      },
    });
    return NextResponse.json({ succcess: true, message: 'New bounty added.' });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ succcess: false, message: error.message });
  }
}
