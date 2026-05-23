import { NextRequest, NextResponse } from 'next/server';
import { divine } from '../../../../engine/yi';
import prisma from '@/lib/prisma';
import { getUserFromRequest } from '@/lib/auth';
import {
  getYiJingBasicInterpretation,
  getYiJingDeepInterpretation
} from '@/lib/ai';
import { checkBilling, processBilling } from '@/lib/billing';

export async function POST(request: NextRequest) {
  try {
    const userPayload = await getUserFromRequest(request);
    const body = await request.json();
    const { method = 'random', numbers, question, guaCode, dongYao, bianGua, isPaid = false } = body;

    const divResult = divine(method as 'coins' | 'number' | 'random', numbers);
    const guaName = divResult.benGua.name;

    let basicInterpretation = '';
    let deepInterpretation = '';
    let cost = 0;
    let isFree = false;

    if (userPayload) {
      const billing = await checkBilling(userPayload.userId, isPaid ? 'yi_deep' : 'yi_divine', isPaid);

      if (!billing.success) {
        return NextResponse.json({
          success: false,
          error: billing.error,
          code: 'INSUFFICIENT_BALANCE'
        }, { status: 402 });
      }

      isFree = billing.isFree || false;

      const basicResult = await getYiJingBasicInterpretation(guaName, question);
      basicInterpretation = basicResult.content;

      if (isPaid) {
        const deepResult = await getYiJingDeepInterpretation(
          guaName,
          guaCode || divResult.benGua.code,
          question,
          dongYao || divResult.dongYao[0] || 0,
          bianGua
        );
        deepInterpretation = deepResult.content;

        await processBilling(userPayload.userId, 'yi_deep', true, deepResult.tokens);
        cost = 30;
      } else {
        await processBilling(userPayload.userId, 'yi_divine', false, basicResult.tokens);
        cost = 0;
      }

      await prisma.divinationRecord.create({
        data: {
          userId: userPayload.userId,
          type: 'yi_divine',
          inputData: JSON.stringify({ method, numbers, question }),
          result: basicInterpretation,
          detailResult: isPaid ? deepInterpretation : null,
          isPaid,
          cost
        }
      });
    } else {
      basicInterpretation = '请先登录以获取AI解读服务';
    }

    return NextResponse.json({
      success: true,
      data: divResult,
      question,
      interpretation: {
        basic: basicInterpretation,
        deep: deepInterpretation || null,
        isPaid,
        cost,
        isFree
      },
      message: isFree ? '今日免费额度已使用' : (isPaid ? '已扣除深度解读费用' : '基础解读完成')
    });
  } catch (error) {
    console.error('Divine error:', error);
    return NextResponse.json({
      success: false,
      error: (error as Error).message
    }, { status: 500 });
  }
}
