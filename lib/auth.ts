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
  const balance = await prisma.tokenBalance.findUnique({
    where: { userId }
  });
  return balance?.balance ?? 0;
}

export async function deductToken(userId: number, amount: number): Promise<boolean> {
  const balance = await getTokenBalance(userId);
  if (balance < amount) {
    return false;
  }

  await prisma.$transaction([
    prisma.tokenBalance.update({
      where: { userId },
      data: { balance: { decrement: amount } }
    }),
    prisma.tokenUsage.create({
      data: {
        userId,
        type: 'deduct',
        tokens: 0,
        cost: amount,
        isPaid: false
      }
    })
  ]);

  return true;
}

export async function addToken(userId: number, amount: number): Promise<void> {
  await prisma.$transaction([
    prisma.tokenBalance.upsert({
      where: { userId },
      create: { userId, balance: amount, totalPurchased: amount },
      update: {
        balance: { increment: amount },
        totalPurchased: { increment: amount }
      }
    })
  ]);
}

export async function recordTokenUsage(
  userId: number,
  type: string,
  tokens: number,
  cost: number,
  isPaid: boolean = false
): Promise<void> {
  await prisma.tokenUsage.create({
    data: { userId, type, tokens, cost, isPaid }
  });
}

export async function checkDailyFreeUsage(userId: number, type: string): Promise<boolean> {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const usage = await prisma.tokenUsage.count({
    where: {
      userId,
      type,
      isPaid: false,
      createdAt: { gte: today }
    }
  });

  const FREE_DAILY_LIMIT = 3;
  return usage < FREE_DAILY_LIMIT;
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
  yi_divine: { tokens: 500, cost: 10 },
  yi_deep: { tokens: 2000, cost: 30 },
  bazi_analysis: { tokens: 1500, cost: 25 },
  name_analyze: { tokens: 800, cost: 15 },
  name_generate: { tokens: 1000, cost: 20 },
  ziwei_analysis: { tokens: 2000, cost: 30 }
} as const;

export type ServiceType = keyof typeof PRICING;
