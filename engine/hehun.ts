// 八字合婚算法引擎

import {
  TIANGAN, TIANGAN_WUXING, DIZHI, DIZHI_WUXING, DIZHI_CANGGAN,
  SHISHEN, generateExtendedBazi, ExtendedBaziAnalysis,
  generateBazi, TIANGAN_YINYANG, DIZHI_YINYANG
} from './bazi';

export interface MarriageCompatibility {
  totalScore: number;
  totalLevel: string;
  totalAnalysis: string;
  dimensions: {
    wuxing: { score: number; level: string; maleScore: Record<string, number>; femaleScore: Record<string, number>; analysis: string; suggestions: string[] };
    zodiac: { score: number; level: string; maleZodiac: string; femaleZodiac: string; relation: string; analysis: string; suggestions: string[] };
    rizhu: { score: number; level: string; maleDay: { gan: string; zhi: string }; femaleDay: { gan: string; zhi: string }; matchType: string; analysis: string; suggestions: string[] };
    shishen: { score: number; level: string; analysis: string; suggestions: string[] };
  };
  maleBazi: ExtendedBaziAnalysis;
  femaleBazi: ExtendedBaziAnalysis;
  suggestions: string[];
}

export interface MarriageInput {
  male: { year: number; month: number; day: number; hour: number; name?: string };
  female: { year: number; month: number; day: number; hour: number; name?: string };
}

/**
 * 根据年份获取生肖
 */
export function getZodiac(year: number): string {
  const zodiacs = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'];
  return zodiacs[(year - 4) % 12];
}

/**
 * 获取生肖关系
 */
export function getZodiacRelation(z1: string, z2: string): { score: number; relation: string; analysis: string } {
  // 六合
  const liuheMap: Record<string, string> = {
    '鼠': '牛', '牛': '鼠',
    '虎': '猪', '猪': '虎',
    '兔': '狗', '狗': '兔',
    '龙': '鸡', '鸡': '龙',
    '蛇': '猴', '猴': '蛇',
    '马': '羊', '羊': '马'
  };

  // 三合
  const sanheMap: Record<string, string[]> = {
    '猴': ['鼠', '龙'], '鼠': ['猴', '龙'], '龙': ['猴', '鼠'],
    '蛇': ['鸡', '牛'], '鸡': ['蛇', '牛'], '牛': ['蛇', '鸡'],
    '虎': ['马', '狗'], '马': ['虎', '狗'], '狗': ['虎', '马'],
    '猪': ['兔', '羊'], '兔': ['猪', '羊'], '羊': ['猪', '兔']
  };

  // 六冲
  const liuchongMap: Record<string, string> = {
    '鼠': '马', '马': '鼠',
    '牛': '羊', '羊': '牛',
    '虎': '猴', '猴': '虎',
    '兔': '鸡', '鸡': '兔',
    '龙': '狗', '狗': '龙',
    '蛇': '猪', '猪': '蛇'
  };

  // 六害
  const liuhaiMap: Record<string, string> = {
    '鼠': '羊', '羊': '鼠',
    '牛': '马', '马': '牛',
    '虎': '蛇', '蛇': '虎',
    '兔': '龙', '龙': '兔',
    '猴': '猪', '猪': '猴',
    '鸡': '狗', '狗': '鸡'
  };

  // 相刑（常见组合）
  const xiangxingMap: Record<string, string[]> = {
    '鼠': ['兔'], '兔': ['鼠'],
    '虎': ['蛇'], '蛇': ['虎'],
    '牛': ['羊', '龙'], '羊': ['牛', '龙'], '龙': ['牛', '羊']
  };

  // 按优先级判断：六合 > 三合 > 六冲 > 六害 > 相刑
  if (liuheMap[z1] === z2) {
    return {
      score: 100,
      relation: '六合',
      analysis: `${z1}与${z2}为六合贵人，是生肖中最佳配对。两人性格互补，相处融洽，婚姻美满，是上等婚配。`
    };
  }

  if (sanheMap[z1]?.includes(z2)) {
    return {
      score: 80,
      relation: '三合',
      analysis: `${z1}与${z2}为三合吉配，彼此相得益彰。两人志趣相投，沟通顺畅，能够互相扶持，共创美好未来。`
    };
  }

  if (liuchongMap[z1] === z2) {
    return {
      score: 30,
      relation: '六冲',
      analysis: `${z1}与${z2}为六冲，性格差异较大，容易产生冲突。两人在生活中需要更多的包容和理解，否则难以长久相处。`
    };
  }

  if (liuhaiMap[z1] === z2) {
    return {
      score: 40,
      relation: '六害',
      analysis: `${z1}与${z2}为六害，相处中容易互相拖累，意见不合。双方需要付出更多努力来维系关系，建议多加沟通。`
    };
  }

  if (xiangxingMap[z1]?.includes(z2)) {
    return {
      score: 50,
      relation: '相刑',
      analysis: `${z1}与${z2}为相刑，相处中容易出现矛盾和纷争。彼此需要保持距离和尊重，避免因小事争执不休。`
    };
  }

  // 无特殊关系
  return {
    score: 65,
    relation: '一般',
    analysis: `${z1}与${z2}无特殊生肖关系，属于一般配对。两人的缘分主要看八字整体的配合，性格方面需要相互适应。`
  };
}

/**
 * 从八字分析结果中提取五行得分
 */
export function getWuxingScore(bazi: ExtendedBaziAnalysis): Record<string, number> {
  return bazi.wuxingScore;
}

/**
 * 分析五行互补性
 */
export function analyzeWuxingComplement(
  maleScore: Record<string, number>,
  femaleScore: Record<string, number>
): { score: number; analysis: string; suggestions: string[] } {
  const elements = ['金', '木', '水', '火', '土'];
  const suggestions: string[] = [];
  const details: string[] = [];

  let totalComplement = 0;
  let maxPossible = 0;

  for (const elem of elements) {
    const m = maleScore[elem] || 0;
    const f = femaleScore[elem] || 0;
    const avg = (m + f) / 2;

    // 阈值判断：高于平均值30%为"旺"，低于平均值30%为"弱"
    const mHigh = m > avg * 1.3;
    const mLow = m < avg * 0.7;
    const fHigh = f > avg * 1.3;
    const fLow = f < avg * 0.7;

    maxPossible += 20;

    if ((mHigh && fLow) || (mLow && fHigh)) {
      // 一方旺、一方弱 → 互补
      totalComplement += 20;
      const strong = mHigh ? '男方' : '女方';
      const weak = mHigh ? '女方' : '男方';
      details.push(`${elem}方面互补良好：${strong}${elem}旺，可补${weak}${elem}之不足`);
      suggestions.push(`利用${strong}${elem}旺的优势，弥补${weak}${elem}方面的不足`);
    } else if (mHigh && fHigh) {
      // 双方都旺
      totalComplement += 8;
      details.push(`${elem}双方皆旺：${elem}气过盛，需注意${elem === '金' ? '克制' : elem === '木' ? '疏泄' : elem === '水' ? '引导' : elem === '火' ? '调控' : '疏通'}`);
    } else if (mLow && fLow) {
      // 双方都弱
      totalComplement += 4;
      details.push(`${elem}双方皆弱：${elem}气不足，建议共同补充${elem}元素`);
      suggestions.push(`双方共同加强对${elem}元素的补充，如通过颜色、方位等方式调节`);
    } else {
      // 中等水平
      totalComplement += 12;
      details.push(`${elem}双方均势：${elem}方面相处和谐`);
    }
  }

  const score = Math.min(100, Math.round((totalComplement / maxPossible) * 100));

  const analysis = `五行分析：${details.join('；')}。`;

  return { score, analysis, suggestions };
}

/**
 * 分析日柱匹配度
 */
export function analyzeRizhuMatch(
  maleDayGan: string,
  femaleDayGan: string,
  maleDayZhi?: string,
  femaleDayZhi?: string
): { score: number; matchType: string; analysis: string; suggestions: string[] } {
  const suggestions: string[] = [];

  // 天干五合
  const wuhe: Record<string, string> = {
    '甲': '己', '己': '甲',
    '乙': '庚', '庚': '乙',
    '丙': '辛', '辛': '丙',
    '丁': '壬', '壬': '丁',
    '戊': '癸', '癸': '戊'
  };

  // 地支六合
  const zhiLiuhe: Record<string, string> = {
    '子': '丑', '丑': '子',
    '寅': '亥', '亥': '寅',
    '卯': '戌', '戌': '卯',
    '辰': '酉', '酉': '辰',
    '巳': '申', '申': '巳',
    '午': '未', '未': '午'
  };

  // 地支三合
  const zhiSanhe: Record<string, string[]> = {
    '申': ['子', '辰'], '子': ['申', '辰'], '辰': ['申', '子'],
    '巳': ['酉', '丑'], '酉': ['巳', '丑'], '丑': ['巳', '酉'],
    '寅': ['午', '戌'], '午': ['寅', '戌'], '戌': ['寅', '午'],
    '亥': ['卯', '未'], '卯': ['亥', '未'], '未': ['亥', '卯']
  };

  // 天干五合
  if (wuhe[maleDayGan] === femaleDayGan) {
    const ganName = `${maleDayGan}${femaleDayGan}合`;
    return {
      score: 95,
      matchType: `天干五合（${ganName}）`,
      analysis: `双方日干为${maleDayGan}${femaleDayGan}，构成天干五合，是上等婚配。天干相合代表两人缘分深厚，性格互补，心灵相通，是天作之合。`,
      suggestions: ['天干五合为最佳婚配，宜珍惜缘分', '双方性格互补，可充分发挥各自优势']
    };
  }

  // 同性（天干相同）
  if (maleDayGan === femaleDayGan) {
    return {
      score: 60,
      matchType: '日干相同',
      analysis: `双方日干同为${maleDayGan}，性格相似，容易理解对方，但也容易产生固执己见的情况。需要相互包容，避免因性格相似而互不相让。`,
      suggestions: ['性格相似是优势但也容易固执，需学会换位思考', '多培养共同兴趣爱好，增进感情']
    };
  }

  // 天干相克检查
  const tianganKe: Record<string, string> = {
    '甲': '戊', '乙': '己', '丙': '庚', '丁': '辛', '戊': '壬',
    '己': '癸', '庚': '甲', '辛': '乙', '壬': '丙', '癸': '丁'
  };
  const tianganSheng: Record<string, string> = {
    '甲': '丙', '乙': '丁', '丙': '戊', '丁': '己', '戊': '庚',
    '己': '辛', '庚': '壬', '辛': '癸', '壬': '甲', '癸': '乙'
  };

  // 天干相生
  if (tianganSheng[maleDayGan] === femaleDayGan || tianganSheng[femaleDayGan] === maleDayGan) {
    return {
      score: 80,
      matchType: '天干相生',
      analysis: `双方日干${maleDayGan}与${femaleDayGan}相生，代表两人能够互相滋养、彼此成就。相处和谐，能够共同进步。`,
      suggestions: ['天干相生，相处融洽，宜共同发展事业', '保持良好的沟通，让关系更加稳固']
    };
  }

  // 天干相克
  if (tianganKe[maleDayGan] === femaleDayGan || tianganKe[femaleDayGan] === maleDayGan) {
    // 检查地支是否合
    if (maleDayZhi && femaleDayZhi) {
      if (zhiLiuhe[maleDayZhi] === femaleDayZhi || zhiSanhe[maleDayZhi]?.includes(femaleDayZhi)) {
        return {
          score: 72,
          matchType: '天克地合',
          analysis: `虽然日干${maleDayGan}与${femaleDayGan}相克，但地支${maleDayZhi}与${femaleDayZhi}相合，天克地合，虽有矛盾但能化解。双方需多包容，磨合后感情会更加稳固。`,
          suggestions: ['天克地合虽有波折但终能化解', '遇到分歧时多从对方角度考虑']
        };
      }
    }

    return {
      score: 55,
      matchType: '天干相克',
      analysis: `双方日干${maleDayGan}与${femaleDayGan}相克，代表两人性格中容易产生冲突和对立。需要更多的包容和理解，否则关系容易紧张。建议多培养共同语言。`,
      suggestions: ['天干相克需要更多包容和理解', '遇到分歧时避免争执，冷静沟通']
    };
  }

  // 其他情况 - 检查地支关系
  if (maleDayZhi && femaleDayZhi) {
    if (zhiLiuhe[maleDayZhi] === femaleDayZhi) {
      return {
        score: 82,
        matchType: '地支六合',
        analysis: `双方日支${maleDayZhi}与${femaleDayZhi}为六合，代表两人在生活和感情上非常合拍，相处愉快。`,
        suggestions: ['地支六合，感情融洽，宜共同规划未来']
      };
    }
    if (zhiSanhe[maleDayZhi]?.includes(femaleDayZhi)) {
      return {
        score: 78,
        matchType: '地支三合',
        analysis: `双方日支${maleDayZhi}与${femaleDayZhi}为三合，代表两人志趣相投，能够互相支持。`,
        suggestions: ['地支三合，彼此相合，宜互相鼓励共同进步']
      };
    }
  }

  return {
    score: 65,
    matchType: '一般搭配',
    analysis: `双方日干${maleDayGan}与${femaleDayGan}无特殊合克关系，属于一般搭配。两人的感情发展需要看整体八字的配合，性格方面需要多加磨合。`,
    suggestions: ['多注意培养共同语言和兴趣爱好', '保持开放心态，相互理解包容']
  };
}

/**
 * 分析十神互补性
 */
export function analyzeShishenComplement(
  male: ExtendedBaziAnalysis,
  female: ExtendedBaziAnalysis
): { score: number; analysis: string; suggestions: string[] } {
  const suggestions: string[] = [];
  const details: string[] = [];

  const maleDist = male.shiShenDistribution || {};
  const femaleDist = female.shiShenDistribution || {};

  // 获取各十神数量
  const getCount = (dist: Record<string, number>, keys: string[]): number => {
    return keys.reduce((sum, k) => sum + (dist[k] || 0), 0);
  };

  // 男方财星（偏财、正财）代表男方的妻星
  const maleCaiCount = getCount(maleDist, ['偏财', '正财']);
  // 女方官星（正官、七杀）代表女方的夫星
  const femaleGuanCount = getCount(femaleDist, ['正官', '七杀']);

  // 男方的比劫（比肩、劫财） - 比劫过多克财星
  const maleBijieCount = getCount(maleDist, ['比肩', '劫财']);
  // 女方的食伤（食神、伤官） - 食伤过旺克官星
  const femaleShishangCount = getCount(femaleDist, ['食神', '伤官']);

  let score = 60; // 基础分

  // 财星分析 - 男方财星旺说明妻缘好
  if (maleCaiCount >= 2) {
    score += 15;
    details.push('男方财星旺盛，妻缘良好，对婚姻有利');
  } else if (maleCaiCount === 1) {
    score += 8;
    details.push('男方财星适中，婚姻运势平稳');
  } else {
    score -= 5;
    details.push('男方财星偏弱，需注意感情表达和沟通');
    suggestions.push('男方需多关注女方的情感需求');
  }

  // 官星分析 - 女方官星旺说明夫缘好
  if (femaleGuanCount >= 2) {
    score += 15;
    details.push('女方官星旺盛，夫缘良好，婚姻幸福指数高');
  } else if (femaleGuanCount === 1) {
    score += 8;
    details.push('女方官星适中，婚姻运势平稳');
  } else {
    score -= 5;
    details.push('女方官星偏弱，需注意经营感情关系');
    suggestions.push('女方需多关心男方，增进感情交流');
  }

  // 比劫分析 - 男方比劫过旺克财星，不利婚姻
  if (maleBijieCount >= 3) {
    score -= 10;
    details.push('男方比劫过旺，需注意控制脾气和占有欲');
    suggestions.push('男方应学会控制情绪，多体谅伴侣');
  } else if (maleBijieCount <= 1) {
    score += 5;
    details.push('男方比劫适中，性格温和，利于婚姻');
  }

  // 食伤分析 - 女方食伤过旺克官星，不利婚姻
  if (femaleShishangCount >= 3) {
    score -= 10;
    details.push('女方食伤过旺，需注意言辞和情绪管理');
    suggestions.push('女方应多加包容，避免因小事争执');
  } else if (femaleShishangCount <= 1) {
    score += 5;
    details.push('女方食伤适中，性格温顺，利于相处');
  }

  // 印星互补（偏印、正印）
  const maleYinCount = getCount(maleDist, ['偏印', '正印']);
  const femaleYinCount = getCount(femaleDist, ['偏印', '正印']);
  if (maleYinCount >= 2 && femaleYinCount >= 2) {
    score += 5;
    details.push('双方印星均旺，重视家庭和精神生活，价值观契合');
  }

  // 官星与财星互补
  if (maleCaiCount >= 1 && femaleGuanCount >= 1) {
    score += 10;
    details.push('男方有财星、女方有官星，财官相生，是理想的婚配格局');
    suggestions.push('双方各有所长，宜互相支持、共同成长');
  }

  const finalScore = Math.min(100, Math.max(0, score));
  const analysis = `十神分析：${details.join('；')}。`;

  return { score: finalScore, analysis, suggestions };
}

/**
 * 根据分数获取等级描述
 */
export function getLevel(score: number): string {
  if (score >= 90) return '天作之合';
  if (score >= 80) return '上等姻缘';
  if (score >= 70) return '良缘佳配';
  if (score >= 60) return '中等缘分';
  return '需多磨合';
}

/**
 * 计算合婚结果
 */
export function calculateMarriageCompatibility(input: MarriageInput): MarriageCompatibility {
  const { male, female } = input;

  // 1. 生成双方八字
  const maleBazi = generateExtendedBazi(male.year, male.month, male.day, male.hour);
  const femaleBazi = generateExtendedBazi(female.year, female.month, female.day, female.hour);

  // 2. 获取生肖
  const maleZodiac = getZodiac(male.year);
  const femaleZodiac = getZodiac(female.year);

  // 3. 生肖分析
  const zodiacResult = getZodiacRelation(maleZodiac, femaleZodiac);

  // 4. 五行分析
  const maleWuxingScore = getWuxingScore(maleBazi);
  const femaleWuxingScore = getWuxingScore(femaleBazi);
  const wuxingResult = analyzeWuxingComplement(maleWuxingScore, femaleWuxingScore);

  // 5. 日柱分析
  const rizhuResult = analyzeRizhuMatch(
    maleBazi.dayMain,
    femaleBazi.dayMain,
    maleBazi.bazi.day.zhi,
    femaleBazi.bazi.day.zhi
  );

  // 6. 十神分析
  const shishenResult = analyzeShishenComplement(maleBazi, femaleBazi);

  // 7. 加权总分（五行40% + 生肖15% + 日柱25% + 十神20%）
  const totalScore = Math.round(
    wuxingResult.score * 0.4 +
    zodiacResult.score * 0.15 +
    rizhuResult.score * 0.25 +
    shishenResult.score * 0.2
  );

  const totalLevel = getLevel(totalScore);

  // 8. 生成综合分析
  let totalAnalysis = '';
  const maleName = male.name || '男方';
  const femaleName = female.name || '女方';

  if (totalScore >= 80) {
    totalAnalysis = `${maleName}与${femaleName}的八字非常相合，属于${totalLevel}。双方在五行、性格、运势等方面互补性较强，婚姻基础稳固，是难得的好姻缘。`;
  } else if (totalScore >= 60) {
    totalAnalysis = `${maleName}与${femaleName}的八字较为相合，属于${totalLevel}。双方在多个方面有较好的配合，虽有小的不合之处，但通过努力经营，可以收获美满的婚姻。`;
  } else {
    totalAnalysis = `${maleName}与${femaleName}的八字存在一定的冲克，属于${totalLevel}。双方在性格和价值观上差异较大，需要更多的包容和努力来维系关系。建议多了解对方的想法，培养共同的生活目标。`;
  }

  // 9. 收集所有建议
  const allSuggestions = [
    ...wuxingResult.suggestions,
    ...zodiacResult.analysis.includes('一般') ? [] : [`生肖${zodiacResult.relation}配对，相处中注意发挥各自优势`],
    ...rizhuResult.suggestions,
    ...shishenResult.suggestions
  ];

  // 通用建议
  if (totalScore < 60) {
    allSuggestions.push('建议婚前多相处，充分了解彼此的性格和习惯');
    allSuggestions.push('婚姻需要双方共同经营，多包容、多沟通');
  } else if (totalScore >= 80) {
    allSuggestions.push('双方缘分深厚，宜珍惜彼此，共创美好未来');
  } else {
    allSuggestions.push('保持良好沟通，互相尊重，婚姻幸福长久');
  }

  // 去重
  const uniqueSuggestions = Array.from(new Set(allSuggestions));

  return {
    totalScore,
    totalLevel,
    totalAnalysis,
    dimensions: {
      wuxing: {
        score: wuxingResult.score,
        level: getLevel(wuxingResult.score),
        maleScore: maleWuxingScore,
        femaleScore: femaleWuxingScore,
        analysis: wuxingResult.analysis,
        suggestions: wuxingResult.suggestions
      },
      zodiac: {
        score: zodiacResult.score,
        level: getLevel(zodiacResult.score),
        maleZodiac,
        femaleZodiac,
        relation: zodiacResult.relation,
        analysis: zodiacResult.analysis,
        suggestions: zodiacResult.relation === '一般'
          ? ['无特殊生肖关系，主要看整体八字配合']
          : [`生肖${zodiacResult.relation}，属有利配对`]
      },
      rizhu: {
        score: rizhuResult.score,
        level: getLevel(rizhuResult.score),
        maleDay: { gan: maleBazi.dayMain, zhi: maleBazi.bazi.day.zhi },
        femaleDay: { gan: femaleBazi.dayMain, zhi: femaleBazi.bazi.day.zhi },
        matchType: rizhuResult.matchType,
        analysis: rizhuResult.analysis,
        suggestions: rizhuResult.suggestions
      },
      shishen: {
        score: shishenResult.score,
        level: getLevel(shishenResult.score),
        analysis: shishenResult.analysis,
        suggestions: shishenResult.suggestions
      }
    },
    maleBazi,
    femaleBazi,
    suggestions: uniqueSuggestions
  };
}
