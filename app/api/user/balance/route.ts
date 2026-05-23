import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getUserFromRequest, addToken } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const userPayload = await getUserFromRequest(request);

    if (!userPayload) {
      return NextResponse.json(
        { error: '请先登录' },
        { status: 401 }
      );
    }

    const { amount, orderId } = await request.json();

    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: '请提供有效的充值数量' },
        { status: 400 }
      );
    }

    await addToken(userPayload.userId, amount);

    await prisma.tokenUsage.create({
      data: {
        userId: userPayload.userId,
        type: 'recharge',
        tokens: 0,
        cost: -amount,
        isPaid: true
      }
    });

    return NextResponse.json({
      message: '充值成功',
      amount,
      balance: await prisma.tokenBalance.findUnique({
        where: { userId: userPayload.userId }
      })
    });
  } catch (error) {
    console.error('Recharge error:', error);
    return NextResponse.json(
      { error: '充值失败' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const userPayload = await getUserFromRequest(request);

    if (!userPayload) {
      return NextResponse.json(
        { error: '请先登录' },
        { status: 401 }
      );
    }

    const balance = await prisma.tokenBalance.findUnique({
      where: { userId: userPayload.userId }
    });

    const usage = await prisma.tokenUsage.findMany({
      where: { userId: userPayload.userId },
      orderBy: { createdAt: 'desc' },
      take: 50
    });

    return NextResponse.json({
      balance: balance?.balance ?? 0,
      totalPurchased: balance?.totalPurchased ?? 0,
      usage
    });
  } catch (error) {
    console.error('Get balance error:', error);
    return NextResponse.json(
      { error: '获取余额失败' },
      { status: 500 }
    );
  }
}
