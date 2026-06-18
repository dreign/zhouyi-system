import { NextRequest, NextResponse } from 'next/server';
import { calculateMarriageCompatibility } from '../../../../engine/hehun';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { male, female } = body;
    
    if (!male || !female) {
      return NextResponse.json({ error: 'Missing parameters: male and female birth info required' }, { status: 400 });
    }
    
    if (!male.year || !male.month || !male.day || male.hour === undefined) {
      return NextResponse.json({ error: 'Missing male birth parameters' }, { status: 400 });
    }
    
    if (!female.year || !female.month || !female.day || female.hour === undefined) {
      return NextResponse.json({ error: 'Missing female birth parameters' }, { status: 400 });
    }
    
    const result = calculateMarriageCompatibility({
      male: {
        year: male.year,
        month: male.month,
        day: male.day,
        hour: male.hour,
        name: male.name || '',
      },
      female: {
        year: female.year,
        month: female.month,
        day: female.day,
        hour: female.hour,
        name: female.name || '',
      },
    });
    
    return NextResponse.json(result);
  } catch (error) {
    console.error('Marriage compatibility API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
