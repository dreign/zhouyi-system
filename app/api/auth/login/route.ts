import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { signToken } from '@/lib/auth';
import bcrypt from 'bcryptjs';

export async function POST(request: NextRequest) {
  try {
    const { email, phone, password } = await request.json();

    if ((!email && !phone) || !password) {
      return NextResponse.json(
        { error: '请提供邮箱/手机和密码' },
        { status: 400 }
      );
    }

    const user = await prisma.user.findFirst({
      where: {
        OR: [
          email ? { email } : {},
          phone ? { phone } : {}
        ].filter(Boolean) as any
      }
    });

    if (!user || !user.password) {
      return NextResponse.json(
        { error: '用户不存在或密码未设置' },
        { status: 401 }
      );
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return NextResponse.json(
        { error: '密码错误' },
        { status: 401 }
      );
    }

    const token = await signToken({
      userId: user.id,
      email: user.email ?? undefined,
      name: user.name
    });

    return NextResponse.json({
      message: '登录成功',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        language: user.language
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: '登录失败，请稍后重试' },
      { status: 500 }
    );
  }
}
