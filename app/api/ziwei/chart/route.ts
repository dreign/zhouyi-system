import { NextRequest, NextResponse } from 'next/server';
import { generateZiweiPlate, analyzePalace, getDaXian, getLiuNian, getComprehensiveAnalysis, ZiweiPlate } from '../../../../engine/ziwei';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    const year = parseInt(searchParams.get('year') || '2000');
    const month = parseInt(searchParams.get('month') || '1');
    const day = parseInt(searchParams.get('day') || '1');
    const hour = parseInt(searchParams.get('hour') || '12');
    const gender = (searchParams.get('gender') || 'male') as 'male' | 'female';
    
    if (isNaN(year) || isNaN(month) || isNaN(day) || isNaN(hour)) {
      return NextResponse.json({ error: 'Invalid parameters' }, { status: 400 });
    }
    
    const plate = generateZiweiPlate(year, month, day, hour, gender);
    
    return NextResponse.json(plate);
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { year, month, day, hour, gender = 'male' } = body;
    
    if (!year || !month || !day || !hour) {
      return NextResponse.json({ error: 'Missing parameters' }, { status: 400 });
    }
    
    const plate = generateZiweiPlate(year, month, day, hour, gender);
    
    return NextResponse.json(plate);
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}