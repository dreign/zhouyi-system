import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getUserFromRequest, getTokenBalance, checkDailyFreeUsage } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const userPayload = await getUserFromRequest(request);

    if (!userPayload) {
      return NextResponse.json(
        { error: '请先登录' },
        { status: 401 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { id: userPayload.userId },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        language: true,
        createdAt: true
      }
    });

    if (!user) {
      return NextResponse.json(
        { error: '用户不存在' },
        { status: 404 }
      );
    }

    const balance = await getTokenBalance(user.id);

    const todayFreeUsage = {
      yi_divine: await checkDailyFreeUsage(user.id, 'yi_divine'),
      bazi_analysis: await checkDailyFreeUsage(user.id, 'bazi_analysis'),
      name_analyze: await checkDailyFreeUsage(user.id, 'name_analyze'),
      name_generate: await checkDailyFreeUsage(user.id, 'name_generate'),
      ziwei_analysis: await checkDailyFreeUsage(user.id, 'ziwei_analysis')
    };

    return NextResponse.json({
      user,
      balance,
      todayFreeUsage
    });
  } catch (error) {
    console.error('Get user error:', error);
    return NextResponse.json(
      { error: '获取用户信息失败' },
      { status: 500 }
    );
  }
}
