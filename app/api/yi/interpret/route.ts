import { NextRequest, NextResponse } from 'next/server';
import { getYiJingBasicInterpretation } from '../../../../lib/ai';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { guaName, question } = body;

    const result = await getYiJingBasicInterpretation(guaName, question);

    return NextResponse.json({
      success: true,
      interpretation: result.content,
      tokens: result.tokens
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: (error as Error).message
    }, { status: 500 });
  }
}
