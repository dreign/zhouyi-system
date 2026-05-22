import { NextResponse } from 'next/server';
import { divine } from '../../../../engine/yi';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { method = 'random', numbers, question } = body;
    
    const result = divine(method as 'coins' | 'number' | 'random', numbers);
    
    return NextResponse.json({
      success: true,
      data: result,
      question
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: (error as Error).message
    }, { status: 500 });
  }
}