// 八字命理算法引擎

// 天干
export const TIANGAN = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
export const TIANGAN_YINYANG = ['阳', '阴', '阳', '阴', '阳', '阴', '阳', '阴', '阳', '阴'];
export const TIANGAN_WUXING = ['木', '木', '火', '火', '土', '土', '金', '金', '水', '水'];

// 地支
export const DIZHI = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
export const DIZHI_YINYANG = ['阳', '阴', '阳', '阴', '阳', '阴', '阳', '阴', '阳', '阴', '阳', '阴'];
export const DIZHI_WUXING = ['水', '土', '木', '木', '土', '火', '火', '土', '金', '金', '土', '水'];

// 地支藏干
export const DIZHI_CANGGAN: Record<string, string[]> = {
  '子': ['癸'],
  '丑': ['己', '辛', '癸'],
  '寅': ['甲', '丙', '戊'],
  '卯': ['乙'],
  '辰': ['戊', '乙', '癸'],
  '巳': ['丙', '戊', '庚'],
  '午': ['丁', '己'],
  '未': ['己', '丁', '乙'],
  '申': ['庚', '壬', '戊'],
  '酉': ['辛'],
  '戌': ['戊', '辛', '丁'],
  '亥': ['壬', '甲']
};

// 十神
export const SHISHEN = ['比肩', '劫财', '食神', '伤官', '偏财', '正财', '七杀', '正官', '偏印', '正印'];

// 天干相生
const TIANGAN_XIANGSHENG: Record<string, string> = {
  '甲': '丙', '乙': '丁', '丙': '戊', '丁': '己', '戊': '庚', '己': '辛', '庚': '壬', '辛': '癸', '壬': '甲', '癸': '乙'
};

// 天干相克
const TIANGAN_XIANGKE: Record<string, string> = {
  '甲': '戊', '乙': '己', '丙': '庚', '丁': '辛', '戊': '壬', '己': '癸', '庚': '甲', '辛': '乙', '壬': '丙', '癸': '丁'
};

// 节气
const SOLAR_TERMS = [
  { name: '立春', month: 2, day: 4 },
  { name: '惊蛰', month: 3, day: 6 },
  { name: '清明', month: 4, day: 5 },
  { name: '立夏', month: 5, day: 6 },
  { name: '芒种', month: 6, day: 6 },
  { name: '小暑', month: 7, day: 8 },
  { name: '立秋', month: 8, day: 8 },
  { name: '白露', month: 9, day: 8 },
  { name: '寒露', month: 10, day: 9 },
  { name: '立冬', month: 11, day: 8 },
  { name: '大雪', month: 12, day: 7 },
  { name: '小寒', month: 1, day: 6 }
];

// 月柱天干（五虎遁）
const YUEZHU_TIANGAN: Record<string, string[]> = {
  '寅': ['甲', '丙', '戊', '庚', '壬'],
  '卯': ['乙', '丁', '己', '辛', '癸'],
  '辰': ['丙', '戊', '庚', '壬', '甲'],
  '巳': ['丁', '己', '辛', '癸', '乙'],
  '午': ['戊', '庚', '壬', '甲', '丙'],
  '未': ['己', '辛', '癸', '乙', '丁'],
  '申': ['庚', '壬', '甲', '丙', '戊'],
  '酉': ['辛', '癸', '乙', '丁', '己'],
  '戌': ['壬', '甲', '丙', '戊', '庚'],
  '亥': ['癸', '乙', '丁', '己', '辛'],
  '子': ['甲', '丙', '戊', '庚', '壬'],
  '丑': ['乙', '丁', '己', '辛', '癸']
};

// 时柱天干（五鼠遁）
const SHIZHU_TIANGAN: Record<string, string[]> = {
  '子': ['甲', '丙', '戊', '庚', '壬'],
  '丑': ['乙', '丁', '己', '辛', '癸'],
  '寅': ['丙', '戊', '庚', '壬', '甲'],
  '卯': ['丁', '己', '辛', '癸', '乙'],
  '辰': ['戊', '庚', '壬', '甲', '丙'],
  '巳': ['己', '辛', '癸', '乙', '丁'],
  '午': ['庚', '壬', '甲', '丙', '戊'],
  '未': ['辛', '癸', '乙', '丁', '己'],
  '申': ['壬', '甲', '丙', '戊', '庚'],
  '酉': ['癸', '乙', '丁', '己', '辛'],
  '戌': ['甲', '丙', '戊', '庚', '壬'],
  '亥': ['乙', '丁', '己', '辛', '癸']
};

// 获取年份天干
function getYearGan(year: number): string {
  const ganIndex = (year - 4) % 10;
  return TIANGAN[ganIndex];
}

// 获取年份地支
function getYearZhi(year: number): string {
  const zhiIndex = (year - 4) % 12;
  return DIZHI[zhiIndex];
}

// 获取月份地支
function getMonthZhi(month: number): string {
  return DIZHI[(month + 10) % 12];
}

// 获取月份天干（五虎遁）
function getMonthGan(yearGan: string, monthZhi: string): string {
  const tianganIndex = TIANGAN.indexOf(yearGan);
  const ganList = YUEZHU_TIANGAN[monthZhi];
  return ganList[tianganIndex % 5];
}

// 获取时辰地支
function getHourZhi(hour: number): string {
  const hourIndex = Math.floor(hour / 2);
  return DIZHI[hourIndex];
}

// 获取时辰天干（五鼠遁）
function getHourGan(dayGan: string, hourZhi: string): string {
  const tianganIndex = TIANGAN.indexOf(dayGan);
  const ganList = SHIZHU_TIANGAN[hourZhi];
  return ganList[tianganIndex % 5];
}

// 获取日柱天干地支（简化版本，实际需要更复杂的算法）
function getDayGanZhi(year: number, month: number, day: number): { gan: string; zhi: string } {
  // 简化计算：基于1900年1月1日为庚子日
  const startDate = new Date(1900, 0, 1);
  const currentDate = new Date(year, month - 1, day);
  const daysDiff = Math.floor((currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  
  const ganIndex = (daysDiff + 6) % 10;
  const zhiIndex = (daysDiff + 0) % 12;
  
  return {
    gan: TIANGAN[ganIndex],
    zhi: DIZHI[zhiIndex]
  };
}

// 计算十神
function calculateShiShen(dayGan: string, otherGan: string): string {
  const dayIndex = TIANGAN.indexOf(dayGan);
  const otherIndex = TIANGAN.indexOf(otherGan);
  const diff = (otherIndex - dayIndex + 10) % 10;
  return SHISHEN[diff];
}

// 计算五行得分
function calculateWuXingScore(bazi: BaziChart): Record<string, number> {
  const scores: Record<string, number> = { '金': 0, '木': 0, '水': 0, '火': 0, '土': 0 };
  
  // 天干五行
  [bazi.year.gan, bazi.month.gan, bazi.day.gan, bazi.hour.gan].forEach(gan => {
    const wuxing = TIANGAN_WUXING[TIANGAN.indexOf(gan)];
    scores[wuxing] += 10;
  });
  
  // 地支五行
  [bazi.year.zhi, bazi.month.zhi, bazi.day.zhi, bazi.hour.zhi].forEach(zhi => {
    const wuxing = DIZHI_WUXING[DIZHI.indexOf(zhi)];
    scores[wuxing] += 8;
    
    // 地支藏干五行
    DIZHI_CANGGAN[zhi].forEach(cangGan => {
      const cangWuxing = TIANGAN_WUXING[TIANGAN.indexOf(cangGan)];
      scores[cangWuxing] += 2;
    });
  });
  
  return scores;
}

// 判断日主强弱
function judgeDayMainStrength(wuxingScore: Record<string, number>, dayGan: string): '强' | '弱' | '中和' {
  const dayWuxing = TIANGAN_WUXING[TIANGAN.indexOf(dayGan)];
  const dayScore = wuxingScore[dayWuxing];
  const total = Object.values(wuxingScore).reduce((a, b) => a + b, 0);
  const percentage = (dayScore / total) * 100;
  
  if (percentage > 30) return '强';
  if (percentage < 20) return '弱';
  return '中和';
}

// 计算用神
function calculateYongshen(wuxingScore: Record<string, number>, dayGan: string): string[] {
  const dayWuxing = TIANGAN_WUXING[TIANGAN.indexOf(dayGan)];
  const dayScore = wuxingScore[dayWuxing];
  const strength = judgeDayMainStrength(wuxingScore, dayGan);
  
  const sorted = Object.entries(wuxingScore).sort((a, b) => a[1] - b[1]);
  const weakest = sorted[0][0];
  const strongest = sorted[4][0];
  
  const yongshen: string[] = [];
  
  if (strength === '强') {
    // 日主强，需克泄耗
    // 克我者为官杀，我生者为食伤，我克者为财星
    yongshen.push(weakest);
    if (TIANGAN_XIANGKE[dayGan] && wuxingScore[TIANGAN_WUXING[TIANGAN.indexOf(TIANGAN_XIANGKE[dayGan])]] < dayScore) {
      yongshen.push(TIANGAN_WUXING[TIANGAN.indexOf(TIANGAN_XIANGKE[dayGan])]);
    }
  } else if (strength === '弱') {
    // 日主弱，需生扶
    // 生我者为印星，同我者为比劫
    yongshen.push(dayWuxing);
    if (TIANGAN_XIANGSHENG[dayGan] && wuxingScore[TIANGAN_WUXING[TIANGAN.indexOf(TIANGAN_XIANGSHENG[dayGan])]] < dayScore) {
      yongshen.push(TIANGAN_WUXING[TIANGAN.indexOf(TIANGAN_XIANGSHENG[dayGan])]);
    }
  } else {
    // 中和，取调和之神
    yongshen.push(weakest);
  }
  
  return Array.from(new Set(yongshen));
}

// 八字结构
export interface BaziPillar {
  gan: string;
  zhi: string;
  ganYinyang: string;
  ganWuxing: string;
  zhiYinyang: string;
  zhiWuxing: string;
  shiShen?: string;
  cangGan: string[];
}

export interface BaziChart {
  year: BaziPillar;
  month: BaziPillar;
  day: BaziPillar;
  hour: BaziPillar;
}

export interface BaziAnalysis {
  bazi: BaziChart;
  baziString: string;
  wuxingScore: Record<string, number>;
  dayMain: string;
  dayMainStrength: '强' | '弱' | '中和';
  yongshen: string[];
  nianYun?: string;
  yueYun?: string;
  riYun?: string;
  shiYun?: string;
}

// 排盘主函数
export function generateBazi(year: number, month: number, day: number, hour: number): BaziAnalysis {
  // 获取年柱
  const yearGan = getYearGan(year);
  const yearZhi = getYearZhi(year);
  
  // 获取月柱
  const monthZhi = getMonthZhi(month);
  const monthGan = getMonthGan(yearGan, monthZhi);
  
  // 获取日柱
  const dayGanZhi = getDayGanZhi(year, month, day);
  const dayGan = dayGanZhi.gan;
  const dayZhi = dayGanZhi.zhi;
  
  // 获取时柱
  const hourZhi = getHourZhi(hour);
  const hourGan = getHourGan(dayGan, hourZhi);
  
  // 构建四柱
  const createPillar = (gan: string, zhi: string, isDay: boolean = false): BaziPillar => {
    return {
      gan,
      zhi,
      ganYinyang: TIANGAN_YINYANG[TIANGAN.indexOf(gan)],
      ganWuxing: TIANGAN_WUXING[TIANGAN.indexOf(gan)],
      zhiYinyang: DIZHI_YINYANG[DIZHI.indexOf(zhi)],
      zhiWuxing: DIZHI_WUXING[DIZHI.indexOf(zhi)],
      shiShen: !isDay ? calculateShiShen(dayGan, gan) : undefined,
      cangGan: DIZHI_CANGGAN[zhi]
    };
  };
  
  const bazi: BaziChart = {
    year: createPillar(yearGan, yearZhi),
    month: createPillar(monthGan, monthZhi),
    day: createPillar(dayGan, dayZhi, true),
    hour: createPillar(hourGan, hourZhi)
  };
  
  // 计算五行得分
  const wuxingScore = calculateWuXingScore(bazi);
  
  // 判断日主强弱
  const dayMainStrength = judgeDayMainStrength(wuxingScore, dayGan);
  
  // 计算用神
  const yongshen = calculateYongshen(wuxingScore, dayGan);
  
  return {
    bazi,
    baziString: `${yearGan}${yearZhi} ${monthGan}${monthZhi} ${dayGan}${dayZhi} ${hourGan}${hourZhi}`,
    wuxingScore,
    dayMain: dayGan,
    dayMainStrength,
    yongshen
  };
}

// 流年运势计算
export function calculateYearlyFortune(bazi: BaziAnalysis, targetYear: number): string {
  const yearGan = getYearGan(targetYear);
  const yearZhi = getYearZhi(targetYear);
  const shiShen = calculateShiShen(bazi.dayMain, yearGan);
  
  const wuxing = TIANGAN_WUXING[TIANGAN.indexOf(yearGan)];
  const isYongshen = bazi.yongshen.includes(wuxing);
  
  let result = `${targetYear}年${yearGan}${yearZhi}，`;
  
  if (isYongshen) {
    result += `流年${wuxing}为用神，${shiShen}得地，整体运势较好，利于发展事业、求财、交友。`;
  } else {
    result += `流年${wuxing}为忌神，${shiShen}主事，需注意人际关系、健康和财务方面的问题。`;
  }
  
  return result;
}

// 获取十神详解
export function getShiShenDetail(shiShen: string): { description: string; characteristics: string[] } {
  const details: Record<string, { description: string; characteristics: string[] }> = {
    '比肩': {
      description: '与日主同类，代表朋友、同辈、竞争',
      characteristics: ['性格开朗', '乐于助人', '竞争意识强', '易有朋友相助']
    },
    '劫财': {
      description: '与日主同类但阴阳相反，代表竞争、争夺',
      characteristics: ['性格冲动', '善于交际', '易与人争执', '需防破财']
    },
    '食神': {
      description: '日主所生且阴阳相同，代表智慧、才华',
      characteristics: ['聪明伶俐', '多才多艺', '口才好', '适合艺术创作']
    },
    '伤官': {
      description: '日主所生且阴阳相反，代表创造力、反叛',
      characteristics: ['思维敏捷', '创新能力强', '性格叛逆', '易得罪人']
    },
    '偏财': {
      description: '日主所克且阴阳相反，代表意外之财',
      characteristics: ['财运较好', '善于理财', '异性缘佳', '易有投机机会']
    },
    '正财': {
      description: '日主所克且阴阳相同，代表稳定收入',
      characteristics: ['勤俭持家', '踏实稳重', '收入稳定', '适合固定工作']
    },
    '七杀': {
      description: '克制日主且阴阳相反，代表压力、挑战',
      characteristics: ['能力强', '事业心重', '易遇挑战', '需防小人']
    },
    '正官': {
      description: '克制日主且阴阳相同，代表官职、约束',
      characteristics: ['责任心强', '循规蹈矩', '适合公职', '易有贵人相助']
    },
    '偏印': {
      description: '生扶日主且阴阳相反，代表智慧、孤独',
      characteristics: ['悟性高', '思维独特', '性格内向', '适合研究工作']
    },
    '正印': {
      description: '生扶日主且阴阳相同，代表学业、贵人',
      characteristics: ['学识渊博', '性格温和', '易得贵人帮助', '适合学术研究']
    }
  };
  
  return details[shiShen] || {
    description: '未知十神',
    characteristics: []
  };
}

// 命宫计算
function calculateMingGong(monthZhi: string, hourZhi: string): string {
  const monthIndex = DIZHI.indexOf(monthZhi);
  const hourIndex = DIZHI.indexOf(hourZhi);
  const mingGongIndex = (monthIndex + hourIndex + 1) % 12;
  return DIZHI[mingGongIndex];
}

// 胎元计算
function calculateTaiYuan(monthGan: string, monthZhi: string): { gan: string; zhi: string } {
  const monthIndex = DIZHI.indexOf(monthZhi);
  const taiYuanIndex = (monthIndex + 3) % 12;
  const taiYuanZhi = DIZHI[taiYuanIndex];
  
  const ganIndex = TIANGAN.indexOf(monthGan);
  const taiYuanGanIndex = (ganIndex + 3) % 10;
  const taiYuanGan = TIANGAN[taiYuanGanIndex];
  
  return { gan: taiYuanGan, zhi: taiYuanZhi };
}

// 神煞列表
const SHENSHA: Record<string, { name: string; meaning: string; effect: string }> = {
  '天德': { name: '天德', meaning: '天德贵人', effect: '吉祥之神，主贵人相助，逢凶化吉' },
  '月德': { name: '月德', meaning: '月德贵人', effect: '吉祥之神，主福寿康宁，诸事顺遂' },
  '天乙': { name: '天乙', meaning: '天乙贵人', effect: '最尊贵之神，主一生得贵人相助' },
  '文昌': { name: '文昌', meaning: '文昌星', effect: '主学业优异，文思敏捷' },
  '华盖': { name: '华盖', meaning: '华盖星', effect: '主艺术天赋，玄学有缘' },
  '驿马': { name: '驿马', meaning: '驿马星', effect: '主变动、迁移、旅行' },
  '桃花': { name: '桃花', meaning: '桃花煞', effect: '主异性缘佳，感情丰富' },
  '将星': { name: '将星', meaning: '将星', effect: '主权威，适合武职或领导职位' },
  '劫煞': { name: '劫煞', meaning: '劫煞', effect: '主是非纷争，需防意外' },
  '亡神': { name: '亡神', meaning: '亡神', effect: '主性格孤傲，易招是非' },
  '羊刃': { name: '羊刃', meaning: '羊刃', effect: '主刚强好胜，易招血光' },
  '灾煞': { name: '灾煞', meaning: '灾煞', effect: '主意外灾害，需谨慎行事' }
};

// 计算神煞
function calculateShensha(bazi: BaziChart): Array<{ name: string; meaning: string; effect: string }> {
  const shenshaList: Array<{ name: string; meaning: string; effect: string }> = [];
  const pillars = [bazi.year, bazi.month, bazi.day, bazi.hour];
  const allGanZhi = pillars.flatMap(p => [p.gan, p.zhi]);
  
  if (allGanZhi.includes('甲') && allGanZhi.includes('寅')) {
    shenshaList.push(SHENSHA['天德']);
  }
  if (allGanZhi.includes('丙') && allGanZhi.includes('午')) {
    shenshaList.push(SHENSHA['月德']);
  }
  if (allGanZhi.includes('戊') && allGanZhi.includes('辰')) {
    shenshaList.push(SHENSHA['天乙']);
  }
  if (allGanZhi.includes('壬') && allGanZhi.includes('亥')) {
    shenshaList.push(SHENSHA['文昌']);
  }
  if (allGanZhi.includes('酉')) {
    shenshaList.push(SHENSHA['华盖']);
  }
  if (allGanZhi.includes('寅') || allGanZhi.includes('申') || allGanZhi.includes('巳') || allGanZhi.includes('亥')) {
    shenshaList.push(SHENSHA['驿马']);
  }
  if (allGanZhi.includes('子') || allGanZhi.includes('午') || allGanZhi.includes('卯') || allGanZhi.includes('酉')) {
    shenshaList.push(SHENSHA['桃花']);
  }
  
  return shenshaList;
}

// 计算十神分布
function calculateShiShenDistribution(bazi: BaziChart, dayGan: string) {
  const distribution: Record<string, number> = {
    '比肩': 0, '劫财': 0, '食神': 0, '伤官': 0,
    '偏财': 0, '正财': 0, '七杀': 0, '正官': 0,
    '偏印': 0, '正印': 0
  };
  
  [bazi.year.gan, bazi.month.gan, bazi.hour.gan].forEach(gan => {
    const shiShen = calculateShiShen(dayGan, gan);
    distribution[shiShen]++;
  });
  
  // 地支藏干十神
  [bazi.year.cangGan, bazi.month.cangGan, bazi.day.cangGan, bazi.hour.cangGan].forEach(cangGans => {
    cangGans.forEach(gan => {
      const shiShen = calculateShiShen(dayGan, gan);
      distribution[shiShen]++;
    });
  });
  
  return distribution;
}

// 大运计算
function calculateDayun(bazi: BaziAnalysis, startAge: number = 0) {
  const dayGan = bazi.dayMain;
  const monthZhi = bazi.bazi.month.zhi;
  
  const dayunZhiOrder = ['卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥', '子', '丑', '寅'];
  const reverseDayunZhiOrder = ['丑', '子', '亥', '戌', '酉', '申', '未', '午', '巳', '辰', '卯', '寅'];
  
  const dayGanIndex = TIANGAN.indexOf(dayGan);
  const isYang = dayGanIndex % 2 === 0;
  const monthIndex = DIZHI.indexOf(monthZhi);
  
  const dayunOrder = isYang ? dayunZhiOrder : reverseDayunZhiOrder;
  const startIndex = (monthIndex + (isYang ? 1 : 11)) % 12;
  
  const dayunList = [];
  let currentAge = startAge;
  
  for (let i = 0; i < 8; i++) {
    const zhiIndex = (startIndex + i) % 12;
    const dayunZhi = dayunOrder[zhiIndex];
    
    const ganIndex = (dayGanIndex + i) % 10;
    const dayunGan = TIANGAN[ganIndex];
    
    const shiShen = calculateShiShen(dayGan, dayunGan);
    const wuxing = TIANGAN_WUXING[ganIndex];
    const isYongshen = bazi.yongshen.includes(wuxing);
    
    dayunList.push({
      gan: dayunGan,
      zhi: dayunZhi,
      period: `${currentAge}-${currentAge + 9}岁`,
      startAge: currentAge,
      endAge: currentAge + 9,
      shiShen,
      wuxing,
      isYongshen,
      direction: isYongshen ? '吉' : '凶'
    });
    
    currentAge += 10;
  }
  
  return dayunList;
}

// 流年计算
function calculateLiunian(bazi: BaziAnalysis, startYear: number, count: number = 10) {
  const dayGan = bazi.dayMain;
  const liunianList = [];
  
  for (let i = 0; i < count; i++) {
    const year = startYear + i;
    const yearGan = getYearGan(year);
    const yearZhi = getYearZhi(year);
    const shiShen = calculateShiShen(dayGan, yearGan);
    const wuxing = TIANGAN_WUXING[TIANGAN.indexOf(yearGan)];
    const isYongshen = bazi.yongshen.includes(wuxing);
    
    liunianList.push({
      year,
      gan: yearGan,
      zhi: yearZhi,
      shiShen,
      wuxing,
      isYongshen,
      direction: isYongshen ? '吉' : '凶'
    });
  }
  
  return liunianList;
}

// 旺衰分析
function analyzeWangshuai(bazi: BaziAnalysis) {
  const dayGan = bazi.dayMain;
  const dayWuxing = TIANGAN_WUXING[TIANGAN.indexOf(dayGan)];
  const wuxingScore = bazi.wuxingScore;
  
  const relations: Record<string, { generate: string; beGenerated: string; overcome: string; beOvercome: string }> = {
    '金': { generate: '水', beGenerated: '土', overcome: '木', beOvercome: '火' },
    '木': { generate: '火', beGenerated: '水', overcome: '土', beOvercome: '金' },
    '水': { generate: '木', beGenerated: '金', overcome: '火', beOvercome: '土' },
    '火': { generate: '土', beGenerated: '木', overcome: '金', beOvercome: '水' },
    '土': { generate: '金', beGenerated: '火', overcome: '水', beOvercome: '木' }
  };
  
  const relation = relations[dayWuxing];
  
  let score = 0;
  score += wuxingScore[relation.beGenerated] * 2;
  score += wuxingScore[dayWuxing] * 1.5;
  score -= wuxingScore[relation.generate] * 1;
  score -= wuxingScore[relation.overcome] * 1;
  score -= wuxingScore[relation.beOvercome] * 1.5;
  
  let level = '';
  let description = '';
  let suggestion = '';
  
  if (score >= 5) {
    level = '极旺';
    description = '日主极旺，气势强盛，需要泄耗或克制';
    suggestion = '宜用伤官、食神、财星、官杀来平衡';
  } else if (score >= 2) {
    level = '偏旺';
    description = '日主偏旺，气势较强，需要适度平衡';
    suggestion = '宜用伤官、食神、财星来泄耗';
  } else if (score >= -2) {
    level = '中和';
    description = '日主中和，五行平衡，最为理想';
    suggestion = '保持平衡，不宜过度调整';
  } else if (score >= -5) {
    level = '偏弱';
    description = '日主偏弱，气势不足，需要生助';
    suggestion = '宜用印绶、比劫来生助';
  } else {
    level = '极弱';
    description = '日主极弱，气势衰微，需要强力生助';
    suggestion = '宜用印绶、比劫来生助，避免再受克制';
  }
  
  return { level, description, suggestion, score };
}

// 十神分析详情
function analyzeShiShenDetail(bazi: BaziAnalysis) {
  const dayGan = bazi.dayMain;
  const distribution = calculateShiShenDistribution(bazi.bazi, dayGan);
  
  const shiShenDetails = SHISHEN.map(name => {
    const count = distribution[name];
    const detail = getShiShenDetail(name);
    let status = '适中';
    if (count >= 3) status = '偏旺';
    if (count === 0) status = '缺失';
    
    return {
      name,
      count,
      status,
      ...detail
    };
  });
  
  return shiShenDetails;
}

// 扩展的八字分析结果
export interface ExtendedBaziAnalysis extends BaziAnalysis {
  mingGong?: string;
  taiYuan?: { gan: string; zhi: string };
  shensha?: Array<{ name: string; meaning: string; effect: string }>;
  shiShenDistribution?: Record<string, number>;
  shiShenDetails?: Array<{ name: string; count: number; status: string; description: string; characteristics: string[] }>;
  wangshuai?: { level: string; description: string; suggestion: string; score: number };
  dayun?: Array<{ gan: string; zhi: string; period: string; startAge: number; endAge: number; shiShen: string; wuxing: string; isYongshen: boolean; direction: string }>;
  liunian?: Array<{ year: number; gan: string; zhi: string; shiShen: string; wuxing: string; isYongshen: boolean; direction: string }>;
  analysis?: {
    destiny: string;
    academic: string;
    wealth: string;
    marriage: string;
    career: string;
    friendship: string;
    personality: string;
    health: string;
    constellation: string;
  };
}

// 综合分析
function generateComprehensiveAnalysis(bazi: ExtendedBaziAnalysis): {
  destiny: string;
  academic: string;
  wealth: string;
  marriage: string;
  career: string;
  friendship: string;
  personality: string;
  health: string;
  constellation: string;
} {
  const dayGan = bazi.dayMain;
  const dayWuxing = TIANGAN_WUXING[TIANGAN.indexOf(dayGan)];
  const strength = bazi.dayMainStrength;
  const yongshen = bazi.yongshen;
  
  const wuxingTraits: Record<string, { destiny: string; academic: string; wealth: string; marriage: string; career: string; friendship: string; personality: string; health: string }> = {
    '木': {
      destiny: '木主仁，性格仁慈善良，一生运势起伏较大但总体向好',
      academic: '木主生发，学习能力强，尤其擅长文科',
      wealth: '财运一般，需靠努力积累，但贵人相助较多',
      marriage: '感情丰富，异性缘较好，但需注意桃花过旺',
      career: '适合教育、文化、艺术、医药等行业',
      friendship: '朋友众多，乐于助人，但需防小人嫉妒',
      personality: '性格开朗，积极向上，有时过于理想化',
      health: '需注意肝胆、眼睛方面的健康问题'
    },
    '火': {
      destiny: '火主礼，性格热情开朗，一生充满活力',
      academic: '思维敏捷，反应快，适合创意类学习',
      wealth: '财运较好，但起伏较大，需谨慎投资',
      marriage: '感情热烈，但有时过于急躁',
      career: '适合演艺、销售、创业、管理等行业',
      friendship: '社交能力强，朋友广泛，但需防口舌是非',
      personality: '热情大方，乐观积极，有时过于冲动',
      health: '需注意心脏、血压方面的健康问题'
    },
    '土': {
      destiny: '土主信，性格稳重踏实，一生运势平稳',
      academic: '学习踏实，善于积累，适合长期研究',
      wealth: '财运稳定，善于理财，适合稳健投资',
      marriage: '感情稳定，家庭观念强',
      career: '适合房地产、金融、建筑、农业等行业',
      friendship: '朋友不多但都是真心朋友',
      personality: '稳重可靠，诚实守信，有时过于固执',
      health: '需注意脾胃、消化系统方面的健康问题'
    },
    '金': {
      destiny: '金主义，性格刚毅果断，一生事业有成',
      academic: '逻辑思维强，适合理工科学习',
      wealth: '财运较好，善于赚钱，但需防破财',
      marriage: '感情专一，但有时过于严肃',
      career: '适合金融、法律、军警、技术等行业',
      friendship: '交友谨慎，重情重义',
      personality: '刚毅果断，追求完美，有时过于苛刻',
      health: '需注意肺部、呼吸系统方面的健康问题'
    },
    '水': {
      destiny: '水主智，性格聪明智慧，一生变化较多',
      academic: '悟性高，学习能力强，适合多元化学习',
      wealth: '财运起伏较大，有机会获得意外之财',
      marriage: '感情细腻，但有时过于情绪化',
      career: '适合商业、贸易、旅游、传媒等行业',
      friendship: '善于交际，人脉广',
      personality: '聪明灵活，适应力强，有时过于多变',
      health: '需注意肾脏、泌尿系统方面的健康问题'
    }
  };
  
  const base = wuxingTraits[dayWuxing];
  const strengthAdjustment = strength === '强' ? '需注意克制欲望，保持谦虚' : strength === '弱' ? '需增强自信，勇于进取' : '运势均衡，宜稳中求进';
  
  return {
    destiny: `${base.destiny}。${strengthAdjustment}。`,
    academic: `${base.academic}。用神${yongshen.join('、')}有利学业发展。`,
    wealth: `${base.wealth}。流年逢${yongshen.join('、')}之年财运较好。`,
    marriage: `${base.marriage}。需注意${strength === '强' ? '克制冲动' : '主动沟通'}。`,
    career: `${base.career}。适合向${yongshen.join('、')}方向发展。`,
    friendship: `${base.friendship}。${strength === '强' ? '防小人' : '多交友'}。`,
    personality: `${base.personality}。${strengthAdjustment}。`,
    health: `${base.health}。平时注意养生调理。`,
    constellation: '星座分析需结合阳历出生日期'
  };
}

// 增强版排盘函数
export function generateExtendedBazi(year: number, month: number, day: number, hour: number): ExtendedBaziAnalysis {
  const basicAnalysis = generateBazi(year, month, day, hour);
  
  const monthZhi = basicAnalysis.bazi.month.zhi;
  const monthGan = basicAnalysis.bazi.month.gan;
  const hourZhi = basicAnalysis.bazi.hour.zhi;
  
  const mingGong = calculateMingGong(monthZhi, hourZhi);
  const taiYuan = calculateTaiYuan(monthGan, monthZhi);
  const shensha = calculateShensha(basicAnalysis.bazi);
  const shiShenDistribution = calculateShiShenDistribution(basicAnalysis.bazi, basicAnalysis.dayMain);
  const shiShenDetails = analyzeShiShenDetail(basicAnalysis);
  const wangshuai = analyzeWangshuai(basicAnalysis);
  const dayun = calculateDayun(basicAnalysis);
  const liunian = calculateLiunian(basicAnalysis, new Date().getFullYear());
  
  const analysis = generateComprehensiveAnalysis({
    ...basicAnalysis,
    mingGong,
    taiYuan,
    shensha,
    shiShenDistribution,
    shiShenDetails,
    wangshuai,
    dayun,
    liunian
  });
  
  return {
    ...basicAnalysis,
    mingGong,
    taiYuan,
    shensha,
    shiShenDistribution,
    shiShenDetails,
    wangshuai,
    dayun,
    liunian,
    analysis
  };
}