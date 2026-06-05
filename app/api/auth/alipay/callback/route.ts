import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { signToken } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const { userId, nickname, avatar } = await request.json();

    if (!userId) {
      return NextResponse.json(
        { error: '缺少userId参数' },
        { status: 400 }
      );
    }

    let user = await prisma.user.findUnique({
      where: { alipayId: userId }
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          name: nickname || `支付宝用户_${userId.slice(-6)}`,
          avatar: avatar,
          alipayId: userId,
          language: 'zh-CN'
        }
      });

      await prisma.tokenBalance.create({
        data: {
          userId: user.id,
          balance: 100,
          totalPurchased: 0
        }
      });
    } else {
      if (avatar && user.avatar !== avatar) {
        user = await prisma.user.update({
          where: { id: user.id },
          data: { avatar }
        });
      }
    }

    const token = await signToken({
      userId: user.id,
      name: user.name
    });

    return NextResponse.json({
      message: '支付宝登录成功',
      token,
      user: {
        id: user.id,
        name: user.name,
        avatar: user.avatar,
        isNewUser: !user.email
      }
    });
  } catch (error) {
    console.error('Alipay login error:', error);
    return NextResponse.json(
      { error: '支付宝登录失败，请稍后重试' },
      { status: 500 }
    );
  }
}
