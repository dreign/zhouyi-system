import { NextRequest, NextResponse } from 'next/server';
import { getUserFromRequest } from '@/lib/auth';

// 下线支付模块，充值接口已停用
export async function POST(request: NextRequest) {
  return NextResponse.json(
    { error: '支付模块已下线，充值功能不可用' },
    { status: 403 }
  );
}

// 下线支付模块，返回固定余额
export async function GET(request: NextRequest) {
  try {
    const userPayload = await getUserFromRequest(request);

    if (!userPayload) {
      return NextResponse.json(
        { error: '请先登录' },
        { status: 401 }
      );
    }

    return NextResponse.json({
      balance: 999999,
      totalPurchased: 0,
      usage: []
    });
  } catch (error) {
    console.error('Get balance error:', error);
    return NextResponse.json(
      { error: '获取余额失败' },
      { status: 500 }
    );
  }
}
