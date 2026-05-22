import { NextResponse } from 'next/server';
import { generateExtendedBazi } from '../../../../engine/bazi';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { year, month, day, hour } = body;
    
    const bazi = generateExtendedBazi(year, month, day, hour);
    
    return NextResponse.json({
      success: true,
      data: bazi
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: (error as Error).message
    }, { status: 500 });
  }
}