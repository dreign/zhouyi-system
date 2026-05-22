import { NextResponse } from 'next/server';
import { getYiJingInterpretation } from '../../../../lib/ai';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { guaName, question } = body;
    
    const interpretation = await getYiJingInterpretation(guaName, question);
    
    return NextResponse.json({
      success: true,
      interpretation
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: (error as Error).message
    }, { status: 500 });
  }
}