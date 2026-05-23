import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { signToken } from '@/lib/auth';
import bcrypt from 'bcryptjs';
import { Prisma } from '@prisma/client';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, password } = await request.json();

    if (!name || (!email && !phone) || !password) {
      return NextResponse.json(
        { error: '请提供完整的注册信息（用户名、邮箱/手机、密码）' },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          email ? { email } : {},
          phone ? { phone } : {}
        ].filter(Boolean) as any
      }
    });

    if (existingUser) {
      return NextResponse.json(
        { error: '用户已存在' },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      const newUser = await tx.user.create({
        data: {
          name,
          email,
          phone,
          password: hashedPassword
        }
      });

      await tx.tokenBalance.create({
        data: {
          userId: newUser.id,
          balance: 0,
          totalPurchased: 0
        }
      });

      return newUser;
    });

    const token = await signToken({
      userId: user.id,
      email: user.email ?? undefined,
      name: user.name
    });

    return NextResponse.json({
      message: '注册成功',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone
      }
    });
  } catch (error) {
    console.error('Register error:', error);
    return NextResponse.json(
      { error: '注册失败，请稍后重试' },
      { status: 500 }
    );
  }
}
