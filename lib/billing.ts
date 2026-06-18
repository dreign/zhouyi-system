// 下线支付模块 - 所有功能免费使用
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
    deepCost: 0
  },
  yi_deep: {
    type: 'yi_deep',
    name: '易经占卜-深度解读',
    basicTokens: 500,
    basicCost: 0,
    deepTokens: 2500,
    deepCost: 0
  },
  bazi_basic: {
    type: 'bazi_basic',
    name: '八字分析-基础解读',
    basicTokens: 500,
    basicCost: 0,
    deepTokens: 3000,
    deepCost: 0
  },
  bazi_deep: {
    type: 'bazi_deep',
    name: '八字分析-深度解读',
    basicTokens: 500,
    basicCost: 0,
    deepTokens: 3000,
    deepCost: 0
  },
  name_analyze: {
    type: 'name_analyze',
    name: '姓名分析-基础解读',
    basicTokens: 400,
    basicCost: 0,
    deepTokens: 2000,
    deepCost: 0
  },
  name_generate: {
    type: 'name_generate',
    name: '智能起名-深度解读',
    basicTokens: 400,
    basicCost: 0,
    deepTokens: 2000,
    deepCost: 0
  },
  ziwei_basic: {
    type: 'ziwei_basic',
    name: '紫微斗数-基础解读',
    basicTokens: 500,
    basicCost: 0,
    deepTokens: 3000,
    deepCost: 0
  },
  ziwei_deep: {
    type: 'ziwei_deep',
    name: '紫微斗数-深度解读',
    basicTokens: 500,
    basicCost: 0,
    deepTokens: 3000,
    deepCost: 0
  }
};

export async function checkBilling(
  userId: number,
  serviceType: string,
  isDeep: boolean
): Promise<BillingResult> {
  return { success: true, isFree: true };
}

export async function processBilling(
  userId: number,
  serviceType: string,
  isDeep: boolean,
  tokensUsed: number
): Promise<boolean> {
  return true;
}

export async function getServicePricing(serviceType: string): Promise<ServicePricing | null> {
  return SERVICE_PRICING[serviceType] || null;
}

export async function getAllPricing(): Promise<ServicePricing[]> {
  return Object.values(SERVICE_PRICING);
}
