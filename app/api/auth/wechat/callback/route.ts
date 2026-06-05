import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { signToken } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const { openid, nickname, avatar, unionid } = await request.json();

    if (!openid) {
      return NextResponse.json(
        { error: '缺少openid参数' },
        { status: 400 }
      );
    }

    let user = await prisma.user.findUnique({
      where: { wechatOpenId: openid }
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          name: nickname || `微信用户_${openid.slice(-6)}`,
          avatar: avatar,
          wechatOpenId: openid,
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
      message: '微信登录成功',
      token,
      user: {
        id: user.id,
        name: user.name,
        avatar: user.avatar,
        isNewUser: !user.email
      }
    });
  } catch (error) {
    console.error('WeChat login error:', error);
    return NextResponse.json(
      { error: '微信登录失败，请稍后重试' },
      { status: 500 }
    );
  }
}
