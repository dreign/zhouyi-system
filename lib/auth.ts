import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';
import prisma from './prisma';

const JWT_SECRET = process.env.NEXTAUTH_SECRET || 'your-secret-key';
const TOKEN_EXPIRES_IN = '7d';

export interface JWTPayload {
  userId: number;
  email?: string;
  name: string;
}

export async function signToken(payload: JWTPayload): Promise<string> {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: TOKEN_EXPIRES_IN });
}

export async function verifyToken(token: string): Promise<JWTPayload | null> {
  try {
    return jwt.verify(token, JWT_SECRET) as JWTPayload;
  } catch {
    return null;
  }
}

export async function getTokenBalance(userId: number): Promise<number> {
  return 999999; // 下线支付模块，模拟无限余额
}

export async function deductToken(userId: number, amount: number): Promise<boolean> {
  return true; // 下线支付模块，总是成功
}

export async function addToken(userId: number, amount: number): Promise<void> {
  // 下线支付模块，不做任何操作
}

export async function recordTokenUsage(
  userId: number,
  type: string,
  tokens: number,
  cost: number,
  isPaid: boolean = false
): Promise<void> {
  // 下线支付模块，不做任何操作
}

export async function checkDailyFreeUsage(userId: number, type: string): Promise<boolean> {
  return true; // 下线支付模块，总是有免费额度
}

export async function getUserFromRequest(request: NextRequest): Promise<JWTPayload | null> {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }

  const token = authHeader.substring(7);
  return await verifyToken(token);
}

export const PRICING = {
  basic: 0,
  yi_divine: { tokens: 500, cost: 0 },
  yi_deep: { tokens: 2000, cost: 0 },
  bazi_analysis: { tokens: 1500, cost: 0 },
  name_analyze: { tokens: 800, cost: 0 },
  name_generate: { tokens: 1000, cost: 0 },
  ziwei_analysis: { tokens: 2000, cost: 0 }
} as const;

export type ServiceType = keyof typeof PRICING;
