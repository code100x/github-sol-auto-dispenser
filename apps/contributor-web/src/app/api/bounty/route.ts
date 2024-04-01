import { NextResponse } from 'next/server';
import db from '@repo/database/client';

export async function GET() {
  return NextResponse.json({ data: 'hi' });
}

export async function POST(request: Request) {
  try {
    // TODO: Add logic to check the request is initiated from our bot server.

    const { username, amount } = await request.json();

    await db.bountyTable.create({ data: { username, amount: +amount } });
    return NextResponse.json({ succcess: true, message: 'New bounty added.' });
  } catch (error: any) {
    return NextResponse.json({ succcess: false, message: error.message });
  }
}
