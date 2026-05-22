import { NextResponse } from 'next/server';
import { generateNames } from '../../../../engine/name';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { familyName, gender, targetWuxing, count = 10 } = body;
    
    const names = generateNames(familyName, gender as 'male' | 'female', targetWuxing || [], count);
    
    return NextResponse.json({
      success: true,
      data: names
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: (error as Error).message
    }, { status: 500 });
  }
}