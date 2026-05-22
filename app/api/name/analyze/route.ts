import { NextResponse } from 'next/server';
import { analyzeName, getNameMeaning } from '../../../../engine/name';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, targetWuxing, birthYear, birthMonth, birthDay, gender } = body;
    
    const birthday = birthYear && birthMonth && birthDay ? { year: birthYear, month: birthMonth, day: birthDay } : undefined;
    const analysis = analyzeName(name, targetWuxing, birthday, gender as 'male' | 'female');
    const meaning = getNameMeaning(name);
    
    return NextResponse.json({
      success: true,
      data: {
        ...analysis,
        meaning
      }
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: (error as Error).message
    }, { status: 500 });
  }
}
