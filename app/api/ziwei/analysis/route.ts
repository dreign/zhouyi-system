import { NextRequest, NextResponse } from 'next/server';
import { generateZiweiPlate, analyzePalace, getDaXian, getLiuNian, getComprehensiveAnalysis, getSanFangSiZheng, reCenterPlate, PALACE_NAMES } from '../../../../engine/ziwei';

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
      case 'palace': {
        const { palaceIndex } = body;
        result = analyzePalace(plate, palaceIndex || 0);
        break;
      }
      case 'sifang': {
        const pi = body.palaceIndex || 0;
        const sfsz = getSanFangSiZheng(pi);
        const palace = plate.palaces[pi];
        result = {
          palace: { name: palace.name, branch: palace.branch, stars: palace.stars.map((s: any) => s.name) },
          sanfang: sfsz.sanfang.map((idx: number) => ({
            index: idx,
            name: PALACE_NAMES[idx],
            branch: plate.palaces[idx].branch,
            stars: plate.palaces[idx].stars.filter((s: any) => s.type === 'major').map((s: any) => s.name),
          })),
          sizheng: {
            index: sfsz.sizheng,
            name: PALACE_NAMES[sfsz.sizheng],
            branch: plate.palaces[sfsz.sizheng].branch,
            stars: plate.palaces[sfsz.sizheng].stars.filter((s: any) => s.type === 'major').map((s: any) => s.name),
          },
          analysis: `${palace.name}的三方为${sfsz.sanfang.map(i => PALACE_NAMES[i]).join('、')}，四正(对宫)为${PALACE_NAMES[sfsz.sizheng]}。三方代表一个人的多方面才能，对宫则是其互补面。`,
        };
        break;
      }
      case 'li_tai_ji': {
        const newBranch = body.newMingGongBranch;
        if (!newBranch) {
          return NextResponse.json({ error: 'Missing newMingGongBranch' }, { status: 400 });
        }
        const newPlate = reCenterPlate(plate, newBranch);
        result = {
          originalMingGongBranch: plate.mingGongBranch,
          newMingGongBranch: newBranch,
          palaces: newPlate.palaces.map((p: any) => ({
            index: p.index,
            name: p.name,
            branch: p.branch,
            mainStars: p.stars.filter((s: any) => s.type === 'major').map((s: any) => s.name),
          })),
        };
        break;
      }
      case 'daxian': {
        const { age } = body;
        result = getDaXian(plate, age || 30);
        break;
      }
      case 'liunian': {
        const { targetYear } = body;
        result = getLiuNian(plate, targetYear || new Date().getFullYear());
        break;
      }
      case 'comprehensive':
      default:
        result = getComprehensiveAnalysis(plate);
        break;
    }
    
    return NextResponse.json(result);
  } catch (error) {
    console.error('Analysis API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
