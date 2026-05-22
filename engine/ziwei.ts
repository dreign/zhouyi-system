// 紫微斗数算法引擎

import { TIANGAN, DIZHI } from './bazi';

// 地支宫位名称
export const PALACE_NAMES = [
  '命宫', '兄弟', '夫妻', '子女', '财帛', '疾厄',
  '迁移', '交友', '事业', '田宅', '福德', '父母'
];

// 地支对应的宫位索引
const PALACE_INDEX: Record<string, number> = {
  '子': 0, '丑': 1, '寅': 2, '卯': 3, '辰': 4, '巳': 5,
  '午': 6, '未': 7, '申': 8, '酉': 9, '戌': 10, '亥': 11
};

// 主星定义
export interface Star {
  name: string;
  code: string;
  type: 'major' | 'lucky' | 'bad' | 'minor' | 'other';
  description: string;
  characteristics: string[];
}

// 主星列表
export const MAJOR_STARS: Record<string, Star> = {
  '紫微': { name: '紫微', code: 'ziwei', type: 'major', description: '帝王之星，尊贵威严', characteristics: ['尊贵', '权威', '领导', '固执'] },
  '天机': { name: '天机', code: 'tianji', type: 'major', description: '智慧之星，善变机敏', characteristics: ['聪明', '灵活', '善变', '思虑'] },
  '太阳': { name: '太阳', code: 'taiyang', type: 'major', description: '光明之星，热情正直', characteristics: ['热情', '正直', '光明', '博爱'] },
  '武曲': { name: '武曲', code: 'wuqu', type: 'major', description: '财星，刚毅果断', characteristics: ['果断', '刚毅', '理财', '固执'] },
  '天同': { name: '天同', code: 'tiantong', type: 'major', description: '福星，温和安逸', characteristics: ['温和', '乐观', '享受', '懒散'] },
  '廉贞': { name: '廉贞', code: 'lianzhen', type: 'major', description: '次桃花，感情丰富', characteristics: ['热情', '感情', '艺术', '倔强'] },
  '天府': { name: '天府', code: 'tianfu', type: 'major', description: '财库之星，稳重宽厚', characteristics: ['稳重', '宽厚', '财富', '保守'] },
  '太阴': { name: '太阴', code: 'taiyin', type: 'major', description: '月亮之星，阴柔细腻', characteristics: ['温柔', '细腻', '艺术', '敏感'] },
  '贪狼': { name: '贪狼', code: 'tanlang', type: 'major', description: '桃花之星，多才多艺', characteristics: ['多才', '风流', '交际', '欲望'] },
  '巨门': { name: '巨门', code: 'jumen', type: 'major', description: '口舌之星，善辩多疑', characteristics: ['善辩', '多疑', '口才', '是非'] },
  '天相': { name: '天相', code: 'tianxiang', type: 'major', description: '印星，稳重踏实', characteristics: ['稳重', '踏实', '辅佐', '谨慎'] },
  '天梁': { name: '天梁', code: 'tianliang', type: 'major', description: '荫星，慈悲清高', characteristics: ['慈悲', '清高', '智慧', '挑剔'] },
  '七杀': { name: '七杀', code: 'isha', type: 'major', description: '将星，刚强勇猛', characteristics: ['勇猛', '果断', '刚强', '暴躁'] },
  '破军': { name: '破军', code: 'pojun', type: 'major', description: '破耗之星，革新变动', characteristics: ['革新', '变动', '果断', '偏激'] },
  '左辅': { name: '左辅', code: 'zuofu', type: 'major', description: '辅佐之星，助力', characteristics: ['助力', '善良', '辅佐', '温和'] },
  '右弼': { name: '右弼', code: 'youbi', type: 'major', description: '辅佐之星，助力', characteristics: ['助力', '善良', '辅佐', '温和'] },
  '文昌': { name: '文昌', code: 'wenchang', type: 'major', description: '文星，学业才艺', characteristics: ['学业', '才艺', '文雅', '聪明'] },
  '文曲': { name: '文曲', code: 'wenqu', type: 'major', description: '文星，才艺智慧', characteristics: ['才艺', '智慧', '风流', '浪漫'] },
  '天魁': { name: '天魁', code: 'tiankui', type: 'major', description: '贵星，男贵人', characteristics: ['贵人', '助力', '机会', '名望'] },
  '天钺': { name: '天钺', code: 'tianyue', type: 'major', description: '贵星，女贵人', characteristics: ['贵人', '助力', '机会', '名望'] },
};

// 四化类型
export type SiHuaType = 'lu' | 'quan' | 'ke' | 'ji';

// 四化描述
export const SIHUA_DESCRIPTION: Record<SiHuaType, { name: string; meaning: string; effect: string }> = {
  'lu': { name: '禄', meaning: '禄存', effect: '主财富、享受、机遇' },
  'quan': { name: '权', meaning: '化权', effect: '主权力、权威、能力' },
  'ke': { name: '科', meaning: '化科', effect: '主学业、名声、贵人' },
  'ji': { name: '忌', meaning: '化忌', effect: '主阻碍、困扰、变动' }
};

// 天干四化表
const TIANGAN_SIHUA: Record<string, { lu: string; quan: string; ke: string; ji: string }> = {
  '甲': { lu: '廉贞', quan: '破军', ke: '武曲', ji: '太阳' },
  '乙': { lu: '天机', quan: '天梁', ke: '紫微', ji: '太阴' },
  '丙': { lu: '天同', quan: '天机', ke: '文昌', ji: '廉贞' },
  '丁': { lu: '太阴', quan: '天同', ke: '天机', ji: '巨门' },
  '戊': { lu: '贪狼', quan: '太阴', ke: '右弼', ji: '天机' },
  '己': { lu: '武曲', quan: '贪狼', ke: '天梁', ji: '文曲' },
  '庚': { lu: '太阳', quan: '武曲', ke: '天府', ji: '天相' },
  '辛': { lu: '巨门', quan: '太阳', ke: '文曲', ji: '文昌' },
  '壬': { lu: '天梁', quan: '紫微', ke: '左辅', ji: '武曲' },
  '癸': { lu: '破军', quan: '巨门', ke: '太阴', ji: '贪狼' }
};

// 亮度等级
export type BrightnessLevel = 'none' | 'xian' | 'bu' | 'ping' | 'li' | 'de' | 'wang' | 'miao';

export const BRIGHTNESS_LABELS: Record<BrightnessLevel, string> = {
  'none': '无',
  'xian': '陷',
  'bu': '不',
  'ping': '平',
  'li': '利',
  'de': '得',
  'wang': '旺',
  'miao': '庙'
};

// 主星庙旺表
const STAR_BRIGHTNESS: Record<string, Record<string, BrightnessLevel>> = {
  '紫微': { '子': 'miao', '丑': 'li', '寅': 'ping', '卯': 'wang', '辰': 'bu', '巳': 'de', '午': 'miao', '未': 'ping', '申': 'xian', '酉': 'li', '戌': 'bu', '亥': 'wang' },
  '天机': { '子': 'wang', '丑': 'xian', '寅': 'miao', '卯': 'de', '辰': 'ping', '巳': 'li', '午': 'bu', '未': 'wang', '申': 'ping', '酉': 'de', '戌': 'li', '亥': 'miao' },
  '太阳': { '子': 'xian', '丑': 'bu', '寅': 'ping', '卯': 'li', '辰': 'de', '巳': 'wang', '午': 'miao', '未': 'wang', '申': 'de', '酉': 'li', '戌': 'ping', '亥': 'bu' },
  '武曲': { '子': 'ping', '丑': 'de', '寅': 'xian', '卯': 'bu', '辰': 'wang', '巳': 'miao', '午': 'li', '未': 'ping', '申': 'de', '酉': 'wang', '戌': 'miao', '亥': 'li' },
  '天同': { '子': 'miao', '丑': 'wang', '寅': 'de', '卯': 'li', '辰': 'ping', '巳': 'bu', '午': 'xian', '未': 'ping', '申': 'li', '酉': 'de', '戌': 'wang', '亥': 'miao' },
  '廉贞': { '子': 'bu', '丑': 'ping', '寅': 'li', '卯': 'de', '辰': 'wang', '巳': 'miao', '午': 'li', '未': 'de', '申': 'ping', '酉': 'bu', '戌': 'xian', '亥': 'ping' },
  '天府': { '子': 'li', '丑': 'miao', '寅': 'wang', '卯': 'de', '辰': 'ping', '巳': 'bu', '午': 'xian', '未': 'bu', '申': 'ping', '酉': 'de', '戌': 'wang', '亥': 'miao' },
  '太阴': { '子': 'miao', '丑': 'wang', '寅': 'de', '卯': 'li', '辰': 'ping', '巳': 'bu', '午': 'xian', '未': 'ping', '申': 'li', '酉': 'de', '戌': 'wang', '亥': 'miao' },
  '贪狼': { '子': 'ping', '丑': 'de', '寅': 'wang', '卯': 'miao', '辰': 'li', '巳': 'ping', '午': 'bu', '未': 'xian', '申': 'bu', '酉': 'ping', '戌': 'li', '亥': 'de' },
  '巨门': { '子': 'de', '丑': 'li', '寅': 'ping', '卯': 'bu', '辰': 'xian', '巳': 'ping', '午': 'li', '未': 'de', '申': 'wang', '酉': 'miao', '戌': 'wang', '亥': 'de' },
  '天相': { '子': 'wang', '丑': 'miao', '寅': 'li', '卯': 'de', '辰': 'ping', '巳': 'bu', '午': 'xian', '未': 'bu', '申': 'ping', '酉': 'de', '戌': 'li', '亥': 'wang' },
  '天梁': { '子': 'de', '丑': 'ping', '寅': 'bu', '卯': 'xian', '辰': 'ping', '巳': 'li', '午': 'de', '未': 'wang', '申': 'miao', '酉': 'wang', '戌': 'li', '亥': 'ping' },
  '七杀': { '子': 'xian', '丑': 'bu', '寅': 'ping', '卯': 'li', '辰': 'de', '巳': 'wang', '午': 'miao', '未': 'wang', '申': 'de', '酉': 'li', '戌': 'ping', '亥': 'bu' },
  '破军': { '子': 'de', '丑': 'ping', '寅': 'xian', '卯': 'bu', '辰': 'ping', '巳': 'li', '午': 'de', '未': 'wang', '申': 'miao', '酉': 'wang', '戌': 'li', '亥': 'ping' },
};

// 辅星列表
export const AUX_STARS: Star[] = [
  { name: '禄存', code: 'lucun', type: 'lucky', description: '财星，主财富', characteristics: ['财富', '积蓄', '稳定'] },
  { name: '天马', code: 'tianma', type: 'lucky', description: '驿马，主变动迁移', characteristics: ['变动', '旅行', '机会'] },
  { name: '地空', code: 'dikong', type: 'bad', description: '空亡，主空虚', characteristics: ['空虚', '破财', '空想'] },
  { name: '地劫', code: 'dijie', type: 'bad', description: '劫煞，主破耗', characteristics: ['破耗', '阻碍', '损失'] },
  { name: '擎羊', code: 'qingyang', type: 'bad', description: '刑星，主刑伤', characteristics: ['刑伤', '冲突', '暴躁'] },
  { name: '陀罗', code: 'tuoluo', type: 'bad', description: '忌星，主拖延', characteristics: ['拖延', '纠缠', '固执'] },
  { name: '火星', code: 'huoxing', type: 'bad', description: '火曜，主急躁', characteristics: ['急躁', '冲动', '是非'] },
  { name: '铃星', code: 'lingxing', type: 'bad', description: '铃曜，主烦恼', characteristics: ['烦恼', '是非', '惊吓'] },
];

// 杂曜列表
export const MINOR_STARS: Star[] = [
  { name: '龙池', code: 'longchi', type: 'minor', description: '贵星，主才艺', characteristics: ['才艺', '贵气', '艺术'] },
  { name: '凤阁', code: 'fengge', type: 'minor', description: '贵星，主美貌', characteristics: ['美貌', '才艺', '贵气'] },
  { name: '红鸾', code: 'hongluan', type: 'minor', description: '桃花，主婚姻', characteristics: ['婚姻', '感情', '喜庆'] },
  { name: '天喜', code: 'tianxi', type: 'minor', description: '喜星，主喜庆', characteristics: ['喜庆', '喜事', '桃花'] },
  { name: '孤辰', code: 'guchen', type: 'minor', description: '孤星，主孤独', characteristics: ['孤独', '寂寞', '寡合'] },
  { name: '寡宿', code: 'guasu', type: 'minor', description: '寡星，主孤独', characteristics: ['孤独', '寂寞', '晚婚'] },
  { name: '天德', code: 'tiande', type: 'minor', description: '德星，主吉祥', characteristics: ['吉祥', '贵人', '逢凶化吉'] },
  { name: '月德', code: 'yuede', type: 'minor', description: '德星，主吉祥', characteristics: ['吉祥', '贵人', '福寿'] },
  { name: '天福', code: 'tianfu', type: 'minor', description: '福星，主福气', characteristics: ['福气', '享受', '安逸'] },
  { name: '天贵', code: 'tiangui', type: 'minor', description: '贵星，主贵气', characteristics: ['贵气', '地位', '名望'] },
];

// 长生十二神
export const CHANGSHENG_12 = ['长生', '沐浴', '冠带', '临官', '帝旺', '衰', '病', '死', '墓', '绝', '胎', '养'];

// 宫位信息
export interface Palace {
  index: number;
  name: string;
  branch: string;
  stem: string;
  stars: Star[];
  siHua: Array<{ star: string; type: SiHuaType }>;
  brightness: Record<string, BrightnessLevel>;
}

// 命盘信息
export interface ZiweiPlate {
  mingGongBranch: string;
  dayGan: string;
  palaces: Palace[];
  tiangan: string;
  dizhi: string;
  fiveElementBureau: string;
  mingZhu: string;
  shenZhu: string;
}

// 获取命宫地支
function getMingGong(month: number, hour: number): string {
  const monthIndex = (month + 11) % 12;
  const hourIndex = Math.floor(hour / 2);
  const mingIndex = (monthIndex + hourIndex + 1) % 12;
  return DIZHI[mingIndex];
}

// 获取身宫地支
function getShenGong(month: number, hour: number): string {
  const mingIndex = DIZHI.indexOf(getMingGong(month, hour));
  const shenIndex = (mingIndex + 3) % 12;
  return DIZHI[shenIndex];
}

// 获取大限起始年龄
function getDaXianStartAge(dayGan: string): number {
  const index = TIANGAN.indexOf(dayGan);
  return index % 2 === 0 ? 3 : 4;
}

// 获取宫位天干（五虎遁）
function getPalaceStem(yearGan: string, branch: string): string {
  const yearIndex = TIANGAN.indexOf(yearGan);
  const branchIndex = DIZHI.indexOf(branch);
  const stemIndex = (yearIndex * 5 + branchIndex) % 10;
  return TIANGAN[stemIndex];
}

// 计算主星落宫
function calculateMajorStars(mingGongBranch: string): Record<string, string[]> {
  const result: Record<string, string[]> = {};
  DIZHI.forEach(branch => {
    result[branch] = [];
  });

  const mingIndex = DIZHI.indexOf(mingGongBranch);

  // 紫微星系
  const ziweiStars = ['紫微', '天机', '太阳', '武曲', '天同', '廉贞', '天府', '太阴'];
  const ziweiPositions = [0, 3, 6, 9, 1, 4, 7, 10];
  
  ziweiStars.forEach((star, i) => {
    const pos = (mingIndex + ziweiPositions[i]) % 12;
    result[DIZHI[pos]].push(star);
  });

  // 天府星系
  const tianfuStars = ['贪狼', '巨门', '天相', '天梁', '七杀', '破军'];
  const tianfuPositions = [5, 8, 11, 2, 5, 8];
  
  tianfuStars.forEach((star, i) => {
    const pos = (mingIndex + tianfuPositions[i]) % 12;
    result[DIZHI[pos]].push(star);
  });

  // 左辅右弼
  const zuofuPos = (mingIndex + 4) % 12;
  const youbiPos = (mingIndex + 8) % 12;
  result[DIZHI[zuofuPos]].push('左辅');
  result[DIZHI[youbiPos]].push('右弼');

  // 文昌文曲
  const wenchangPos = (mingIndex + 6) % 12;
  const wenquPos = (mingIndex + 10) % 12;
  result[DIZHI[wenchangPos]].push('文昌');
  result[DIZHI[wenquPos]].push('文曲');

  // 天魁天钺
  const tiankuiPos = (mingIndex + 2) % 12;
  const tianyuePos = (mingIndex + 6) % 12;
  result[DIZHI[tiankuiPos]].push('天魁');
  result[DIZHI[tianyuePos]].push('天钺');

  return result;
}

// 计算四化
function calculateSiHua(dayGan: string, palaces: Palace[]): Palace[] {
  const sihua = TIANGAN_SIHUA[dayGan];
  if (!sihua) return palaces;

  return palaces.map(palace => {
    const siHuaList: Array<{ star: string; type: SiHuaType }> = [];
    
    if (palace.stars.some(s => s.name === sihua.lu)) {
      siHuaList.push({ star: sihua.lu, type: 'lu' });
    }
    if (palace.stars.some(s => s.name === sihua.quan)) {
      siHuaList.push({ star: sihua.quan, type: 'quan' });
    }
    if (palace.stars.some(s => s.name === sihua.ke)) {
      siHuaList.push({ star: sihua.ke, type: 'ke' });
    }
    if (palace.stars.some(s => s.name === sihua.ji)) {
      siHuaList.push({ star: sihua.ji, type: 'ji' });
    }

    return { ...palace, siHua: siHuaList };
  });
}

// 计算五行局
function calculateFiveElementBureau(dayGan: string, mingGongBranch: string): string {
  const wuxingMap: Record<string, string> = {
    '甲': '木', '乙': '木', '丙': '火', '丁': '火',
    '戊': '土', '己': '土', '庚': '金', '辛': '金',
    '壬': '水', '癸': '水'
  };
  
  const branchWuxing: Record<string, string> = {
    '子': '水', '丑': '土', '寅': '木', '卯': '木',
    '辰': '土', '巳': '火', '午': '火', '未': '土',
    '申': '金', '酉': '金', '戌': '土', '亥': '水'
  };

  const ganWuXing = wuxingMap[dayGan];
  const zhiWuXing = branchWuxing[mingGongBranch];

  if (ganWuXing === zhiWuXing) {
    return `${ganWuXing}三局`;
  }
  
  return `${ganWuXing}${zhiWuXing}局`;
}

// 计算命主和身主
function calculateMasters(mingGongBranch: string, shenGongBranch: string): { mingZhu: string; shenZhu: string } {
  const mingZhuMap: Record<string, string> = {
    '子': '贪狼', '丑': '巨门', '寅': '禄存', '卯': '文曲',
    '辰': '廉贞', '巳': '武曲', '午': '破军', '未': '武曲',
    '申': '廉贞', '酉': '文曲', '戌': '禄存', '亥': '巨门'
  };

  const shenZhuMap: Record<string, string> = {
    '子': '火星', '丑': '天相', '寅': '天梁', '卯': '天同',
    '辰': '文昌', '巳': '天机', '午': '太阴', '未': '太阳',
    '申': '巨门', '酉': '天府', '戌': '武曲', '亥': '破军'
  };

  return {
    mingZhu: mingZhuMap[mingGongBranch] || '紫微',
    shenZhu: shenZhuMap[shenGongBranch] || '紫微'
  };
}

// 主排盘函数
export function generateZiweiPlate(
  year: number,
  month: number,
  day: number,
  hour: number,
  gender: 'male' | 'female'
): ZiweiPlate {
  // 获取年干
  const yearGan = TIANGAN[(year - 4) % 10];
  
  // 获取日干（简化计算）
  const startDate = new Date(1900, 0, 1);
  const currentDate = new Date(year, month - 1, day);
  const daysDiff = Math.floor((currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  const dayGan = TIANGAN[(daysDiff + 6) % 10];

  // 计算命宫和身宫
  const mingGongBranch = getMingGong(month, hour);
  const shenGongBranch = getShenGong(month, hour);

  // 获取主星分布
  const majorStarDistribution = calculateMajorStars(mingGongBranch);

  // 构建宫位
  const palaces: Palace[] = [];
  const mingIndex = DIZHI.indexOf(mingGongBranch);

  for (let i = 0; i < 12; i++) {
    const branchIndex = (mingIndex + i) % 12;
    const branch = DIZHI[branchIndex];
    const stem = getPalaceStem(yearGan, branch);
    const starNames = majorStarDistribution[branch] || [];
    const stars = starNames.map(name => MAJOR_STARS[name]).filter(Boolean) as Star[];
    
    // 添加辅星
    AUX_STARS.forEach(auxStar => {
      if (Math.random() > 0.5) {
        stars.push(auxStar);
      }
    });

    // 计算亮度
    const brightness: Record<string, BrightnessLevel> = {};
    stars.forEach(star => {
      brightness[star.name] = STAR_BRIGHTNESS[star.name]?.[branch] || 'ping';
    });

    palaces.push({
      index: i,
      name: PALACE_NAMES[i],
      branch,
      stem,
      stars,
      siHua: [],
      brightness
    });
  }

  // 计算四化
  const palacesWithSiHua = calculateSiHua(dayGan, palaces);

  // 计算五行局
  const fiveElementBureau = calculateFiveElementBureau(dayGan, mingGongBranch);

  // 计算命主身主
  const { mingZhu, shenZhu } = calculateMasters(mingGongBranch, shenGongBranch);

  return {
    mingGongBranch,
    dayGan,
    palaces: palacesWithSiHua,
    tiangan: yearGan,
    dizhi: DIZHI[(year - 4) % 12],
    fiveElementBureau,
    mingZhu,
    shenZhu
  };
}

// 获取宫位详细分析
export function analyzePalace(plate: ZiweiPlate, palaceIndex: number): {
  palace: Palace;
  analysis: string;
  suggestions: string[];
} {
  const palace = plate.palaces[palaceIndex];
  
  let analysis = `${palace.name}在${palace.branch}宫，天干${palace.stem}。`;
  const suggestions: string[] = [];

  if (palace.stars.length > 0) {
    const starNames = palace.stars.map(s => s.name).join('、');
    analysis += `主星有${starNames}。`;
    
    palace.stars.forEach(star => {
      const brightness = palace.brightness[star.name] || 'ping';
      const brightnessLabel = BRIGHTNESS_LABELS[brightness];
      analysis += `${star.name}${brightnessLabel}，${star.description}。`;
    });
  }

  if (palace.siHua.length > 0) {
    const sihuaDesc = palace.siHua.map(sh => `${SIHUA_DESCRIPTION[sh.type].name}(${sh.star})`).join('、');
    analysis += `四化有${sihuaDesc}。`;
    
    palace.siHua.forEach(sh => {
      if (sh.type === 'ji') {
        suggestions.push(`注意${SIHUA_DESCRIPTION[sh.type].effect}`);
      } else {
        suggestions.push(`${SIHUA_DESCRIPTION[sh.type].effect}`);
      }
    });
  }

  // 根据宫位名称添加特定分析
  const palaceAnalysis: Record<string, (p: Palace) => string> = {
    '命宫': (p) => '命宫代表你的性格、天赋和人生格局。',
    '兄弟': (p) => '兄弟宫代表你的兄弟姐妹关系和社交能力。',
    '夫妻': (p) => '夫妻宫代表你的婚姻感情状况和配偶特征。',
    '子女': (p) => '子女宫代表你的子女情况和生育能力。',
    '财帛': (p) => '财帛宫代表你的财运和理财能力。',
    '疾厄': (p) => '疾厄宫代表你的健康状况和潜在疾病。',
    '迁移': (p) => '迁移宫代表你的外出、旅行和人际关系。',
    '交友': (p) => '交友宫代表你的朋友和社交圈子。',
    '事业': (p) => '事业宫代表你的职业发展和工作状况。',
    '田宅': (p) => '田宅宫代表你的房产和家庭环境。',
    '福德': (p) => '福德宫代表你的精神修养和福分。',
    '父母': (p) => '父母宫代表你的父母关系和家庭背景。'
  };

  analysis += palaceAnalysis[palace.name]?.(palace) || '';

  return { palace, analysis, suggestions };
}

// 获取大限信息
export function getDaXian(plate: ZiweiPlate, age: number): {
  period: string;
  palace: Palace;
  stars: Star[];
  analysis: string;
} {
  const startAge = getDaXianStartAge(plate.dayGan);
  const cycleIndex = Math.floor((age - startAge) / 10);
  const palaceIndex = (DIZHI.indexOf(plate.mingGongBranch) + cycleIndex) % 12;
  const palace = plate.palaces[palaceIndex];
  
  const startAgeOfCycle = startAge + cycleIndex * 10;
  const period = `${startAgeOfCycle}-${startAgeOfCycle + 9}岁`;
  
  let analysis = `${period}行${palace.name}(${palace.branch})大限。`;
  if (palace.stars.length > 0) {
    const starNames = palace.stars.map(s => s.name).join('、');
    analysis += `主星有${starNames}。`;
  }

  return {
    period,
    palace,
    stars: palace.stars,
    analysis
  };
}

// 流年计算
export function getLiuNian(plate: ZiweiPlate, targetYear: number): {
  year: number;
  branch: string;
  palace: Palace;
  stars: Star[];
  analysis: string;
} {
  const yearZhi = DIZHI[(targetYear - 4) % 12];
  const palaceIndex = plate.palaces.findIndex(p => p.branch === yearZhi);
  const palace = palaceIndex >= 0 ? plate.palaces[palaceIndex] : plate.palaces[0];
  
  let analysis = `${targetYear}年${yearZhi}，流年进入${palace.name}。`;
  
  // 添加流年四化
  const yearGan = TIANGAN[(targetYear - 4) % 10];
  const sihua = TIANGAN_SIHUA[yearGan];
  if (sihua) {
    analysis += `流年四化：${sihua.lu}化禄、${sihua.quan}化权、${sihua.ke}化科、${sihua.ji}化忌。`;
  }

  return {
    year: targetYear,
    branch: yearZhi,
    palace,
    stars: palace.stars,
    analysis
  };
}

// 获取综合分析
export function getComprehensiveAnalysis(plate: ZiweiPlate): {
  summary: string;
  personality: string;
  career: string;
  wealth: string;
  relationships: string;
  health: string;
  suggestions: string[];
} {
  const mingGong = plate.palaces[0];
  const mingGongStars = mingGong.stars;
  
  let summary = `命宫在${mingGong.branch}，五行${plate.fiveElementBureau}，命主${plate.mingZhu}，身主${plate.shenZhu}。`;
  
  if (mingGongStars.length > 0) {
    const starNames = mingGongStars.map(s => s.name).join('、');
    summary += `命宫主星：${starNames}。`;
  }

  // 性格分析
  let personality = '';
  mingGongStars.forEach(star => {
    personality += `${star.name}坐命：${star.description}。性格特征：${star.characteristics.join('、')}。`;
  });

  // 事业分析
  const careerPalace = plate.palaces[8];
  let career = `事业宫在${careerPalace.branch}，`;
  if (careerPalace.stars.length > 0) {
    career += `主星有${careerPalace.stars.map(s => s.name).join('、')}。`;
  }

  // 财运分析
  const wealthPalace = plate.palaces[4];
  let wealth = `财帛宫在${wealthPalace.branch}，`;
  if (wealthPalace.stars.length > 0) {
    wealth += `主星有${wealthPalace.stars.map(s => s.name).join('、')}。`;
  }

  // 感情分析
  const marriagePalace = plate.palaces[2];
  let relationships = `夫妻宫在${marriagePalace.branch}，`;
  if (marriagePalace.stars.length > 0) {
    relationships += `主星有${marriagePalace.stars.map(s => s.name).join('、')}。`;
  }

  // 健康分析
  const healthPalace = plate.palaces[5];
  let health = `疾厄宫在${healthPalace.branch}，`;
  if (healthPalace.stars.length > 0) {
    const badStars = healthPalace.stars.filter(s => s.type === 'bad').map(s => s.name);
    if (badStars.length > 0) {
      health += `有凶星${badStars.join('、')}，需注意健康。`;
    } else {
      health += '无明显凶星，健康状况良好。';
    }
  }

  // 建议
  const suggestions: string[] = [];
  if (mingGongStars.some(s => s.name === '七杀' || s.name === '破军')) {
    suggestions.push('性格较为刚强，需注意控制情绪，避免冲动。');
  }
  if (mingGongStars.some(s => s.name === '贪狼')) {
    suggestions.push('多才多艺，但需注意节制欲望，专注目标。');
  }
  if (mingGongStars.some(s => s.name === '紫微')) {
    suggestions.push('有领导才能，适合从事管理或独立创业。');
  }

  return {
    summary,
    personality,
    career,
    wealth,
    relationships,
    health,
    suggestions
  };
}