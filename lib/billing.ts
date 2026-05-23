import prisma from './prisma';
import { getTokenBalance, recordTokenUsage, checkDailyFreeUsage } from './auth';

export interface BillingResult {
  success: boolean;
  error?: string;
  isFree?: boolean;
  remainingBalance?: number;
}

export interface ServicePricing {
  type: string;
  name: string;
  basicTokens: number;
  basicCost: number;
  deepTokens: number;
  deepCost: number;
}

export const SERVICE_PRICING: Record<string, ServicePricing> = {
  yi_divine: {
    type: 'yi_divine',
    name: '易经占卜-基础解读',
    basicTokens: 500,
    basicCost: 0,
    deepTokens: 2500,
    deepCost: 30
  },
  yi_deep: {
    type: 'yi_deep',
    name: '易经占卜-深度解读',
    basicTokens: 500,
    basicCost: 0,
    deepTokens: 2500,
    deepCost: 30
  },
  bazi_basic: {
    type: 'bazi_basic',
    name: '八字分析-基础解读',
    basicTokens: 500,
    basicCost: 0,
    deepTokens: 3000,
    deepCost: 25
  },
  bazi_deep: {
    type: 'bazi_deep',
    name: '八字分析-深度解读',
    basicTokens: 500,
    basicCost: 0,
    deepTokens: 3000,
    deepCost: 25
  },
  name_analyze: {
    type: 'name_analyze',
    name: '姓名分析-基础解读',
    basicTokens: 400,
    basicCost: 0,
    deepTokens: 2000,
    deepCost: 15
  },
  name_generate: {
    type: 'name_generate',
    name: '智能起名-深度解读',
    basicTokens: 400,
    basicCost: 0,
    deepTokens: 2000,
    deepCost: 20
  },
  ziwei_basic: {
    type: 'ziwei_basic',
    name: '紫微斗数-基础解读',
    basicTokens: 500,
    basicCost: 0,
    deepTokens: 3000,
    deepCost: 30
  },
  ziwei_deep: {
    type: 'ziwei_deep',
    name: '紫微斗数-深度解读',
    basicTokens: 500,
    basicCost: 0,
    deepTokens: 3000,
    deepCost: 30
  }
};

export async function checkBilling(
  userId: number,
  serviceType: string,
  isDeep: boolean
): Promise<BillingResult> {
  const pricing = SERVICE_PRICING[serviceType];
  if (!pricing) {
    return { success: false, error: '未知的服务类型' };
  }

  const cost = isDeep ? pricing.deepCost : pricing.basicCost;

  if (cost === 0) {
    const canUseFree = await checkDailyFreeUsage(userId, serviceType);
    if (!canUseFree) {
      return {
        success: false,
        error: `今日免费额度已用完，请明天再来或购买积分解锁深度解读`
      };
    }

    return { success: true, isFree: true };
  }

  const balance = await getTokenBalance(userId);
  if (balance < cost) {
    return {
      success: false,
      error: `积分不足，需要${cost}积分，当前剩余${balance}积分，请先充值`
    };
  }

  return { success: true, remainingBalance: balance - cost };
}

export async function processBilling(
  userId: number,
  serviceType: string,
  isDeep: boolean,
  tokensUsed: number
): Promise<boolean> {
  const pricing = SERVICE_PRICING[serviceType];
  if (!pricing) return false;

  const cost = isDeep ? pricing.deepCost : pricing.basicCost;

  if (cost === 0) {
    await recordTokenUsage(userId, serviceType, tokensUsed, 0, false);
    return true;
  }

  const balance = await getTokenBalance(userId);
  if (balance < cost) {
    return false;
  }

  await prisma.$transaction([
    prisma.tokenBalance.update({
      where: { userId },
      data: { balance: { decrement: cost } }
    }),
    prisma.tokenUsage.create({
      data: {
        userId,
        type: serviceType,
        tokens: tokensUsed,
        cost,
        isPaid: true
      }
    })
  ]);

  return true;
}

export async function getServicePricing(serviceType: string): Promise<ServicePricing | null> {
  return SERVICE_PRICING[serviceType] || null;
}

export async function getAllPricing(): Promise<ServicePricing[]> {
  return Object.values(SERVICE_PRICING);
}
