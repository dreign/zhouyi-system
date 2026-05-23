import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getUserFromRequest } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const userPayload = await getUserFromRequest(request);

    if (!userPayload) {
      return NextResponse.json(
        { error: '请先登录' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');
    const skip = (page - 1) * limit;

    const where: any = { userId: userPayload.userId };
    if (type) {
      where.type = type;
    }

    const [records, total] = await Promise.all([
      prisma.divinationRecord.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
        select: {
          id: true,
          type: true,
          inputData: true,
          result: true,
          detailResult: true,
          isPaid: true,
          cost: true,
          createdAt: true
        }
      }),
      prisma.divinationRecord.count({ where })
    ]);

    return NextResponse.json({
      records,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Get history error:', error);
    return NextResponse.json(
      { error: '获取历史记录失败' },
      { status: 500 }
    );
  }
}
