import { NextRequest, NextResponse } from 'next/server';
import { generateZiweiPlate, analyzePalace, getDaXian, getLiuNian, getComprehensiveAnalysis } from '../../../../engine/ziwei';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { year, month, day, hour, gender = 'male', type = 'comprehensive' } = body;
    
    if (!year || !month || !day || !hour) {
      return NextResponse.json({ error: 'Missing parameters' }, { status: 400 });
    }
    
    const plate = generateZiweiPlate(year, month, day, hour, gender);
    
    let result;
    switch (type) {
      case 'palace':
        const { palaceIndex } = body;
        result = analyzePalace(plate, palaceIndex || 0);
        break;
      case 'daxian':
        const { age } = body;
        result = getDaXian(plate, age || 30);
        break;
      case 'liunian':
        const { targetYear } = body;
        result = getLiuNian(plate, targetYear || new Date().getFullYear());
        break;
      case 'comprehensive':
      default:
        result = getComprehensiveAnalysis(plate);
        break;
    }
    
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}