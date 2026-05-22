// 三才配置算法（从fate/sancai.go移植）

export interface SanCai {
  tianCai: string;
  tianCaiYinYang: string;
  renCai: string;
  renCaiYinYang: string;
  diCai: string;
  diCaiYinYang: string;
  fortune: string;
  comment: string;
}

const sanCaiStr = "水木木火火土土金金水";
const yinYangStr = "阴阳";

// 计算字符的三才属性
// 1-2木：1为阳木，2为阴木   3-4火：3为阳火，4为阴火   5-6土：5为阳土，6为阴土   7-8金：7为阳金，8为阴金   9-10水：9为阳水，10为阴水
function sanCaiAttr(num: number): string {
  return sanCaiStr[(num % 10) - 1] || '';
}

function yinYangAttr(num: number): string {
  return yinYangStr[num % 2];
}

export function newSanCai(tian: number, ren: number, di: number): SanCai {
  const tianCai = sanCaiAttr(tian);
  const renCai = sanCaiAttr(ren);
  const diCai = sanCaiAttr(di);
  
  const key = tianCai + renCai + diCai;
  const detail = getSanCaiDetail(key);
  
  return {
    tianCai,
    tianCaiYinYang: yinYangAttr(tian),
    renCai,
    renCaiYinYang: yinYangAttr(ren),
    diCai,
    diCaiYinYang: yinYangAttr(di),
    fortune: detail.fortune,
    comment: detail.comment
  };
}

// 三才配置详解
const sanCaiDetails: Record<string, { fortune: string; comment: string }> = {
  '木木木': { fortune: '吉', comment: '三才配置吉，性格正直，事业有成。' },
  '木木火': { fortune: '大吉', comment: '三才配置大吉，才华横溢，前程似锦。' },
  '木木土': { fortune: '吉', comment: '三才配置吉，稳重踏实，事业稳定。' },
  '木木金': { fortune: '凶', comment: '三才配置凶，性格矛盾，事业起伏。' },
  '木木水': { fortune: '大吉', comment: '三才配置大吉，智慧过人，学业有成。' },
  '木火木': { fortune: '吉', comment: '三才配置吉，热情开朗，人缘极佳。' },
  '木火火': { fortune: '吉', comment: '三才配置吉，热情奔放，事业兴旺。' },
  '木火土': { fortune: '吉', comment: '三才配置吉，稳重有度，事业稳步发展。' },
  '木火金': { fortune: '凶', comment: '三才配置凶，性格急躁，需注意健康。' },
  '木火水': { fortune: '吉', comment: '三才配置吉，聪明灵活，善于应变。' },
  '木土木': { fortune: '吉', comment: '三才配置吉，稳重踏实，事业稳定。' },
  '木土火': { fortune: '吉', comment: '三才配置吉，稳重有度，事业稳步发展。' },
  '木土土': { fortune: '吉', comment: '三才配置吉，稳重可靠，家庭和睦。' },
  '木土金': { fortune: '凶', comment: '三才配置凶，性格固执，事业受阻。' },
  '木土水': { fortune: '吉', comment: '三才配置吉，稳重智慧，事业有成。' },
  '木金木': { fortune: '凶', comment: '三才配置凶，性格矛盾，需注意健康。' },
  '木金火': { fortune: '凶', comment: '三才配置凶，性格急躁，事业起伏。' },
  '木金土': { fortune: '凶', comment: '三才配置凶，性格固执，需注意健康。' },
  '木金金': { fortune: '凶', comment: '三才配置凶，性格刚硬，人际关系差。' },
  '木金水': { fortune: '凶', comment: '三才配置凶，性格矛盾，需注意健康。' },
  '木水木': { fortune: '大吉', comment: '三才配置大吉，智慧过人，学业有成。' },
  '木水火': { fortune: '吉', comment: '三才配置吉，聪明灵活，善于应变。' },
  '木水土': { fortune: '吉', comment: '三才配置吉，稳重智慧，事业有成。' },
  '木水金': { fortune: '凶', comment: '三才配置凶，性格矛盾，需注意健康。' },
  '木水水': { fortune: '大吉', comment: '三才配置大吉，智慧深邃，学业大成。' },
  '火木木': { fortune: '吉', comment: '三才配置吉，热情开朗，人缘极佳。' },
  '火木火': { fortune: '吉', comment: '三才配置吉，热情奔放，事业兴旺。' },
  '火木土': { fortune: '吉', comment: '三才配置吉，稳重有度，事业稳步发展。' },
  '火木金': { fortune: '凶', comment: '三才配置凶，性格急躁，需注意健康。' },
  '火木水': { fortune: '吉', comment: '三才配置吉，聪明灵活，善于应变。' },
  '火火木': { fortune: '吉', comment: '三才配置吉，热情奔放，事业兴旺。' },
  '火火火': { fortune: '凶', comment: '三才配置凶，性格暴躁，需注意健康。' },
  '火火土': { fortune: '吉', comment: '三才配置吉，稳重有度，事业稳步发展。' },
  '火火金': { fortune: '凶', comment: '三才配置凶，性格急躁，需注意健康。' },
  '火火水': { fortune: '凶', comment: '三才配置凶，性格矛盾，事业起伏。' },
  '火土木': { fortune: '吉', comment: '三才配置吉，稳重有度，事业稳步发展。' },
  '火土火': { fortune: '吉', comment: '三才配置吉，稳重有度，事业稳步发展。' },
  '火土土': { fortune: '吉', comment: '三才配置吉，稳重可靠，家庭和睦。' },
  '火土金': { fortune: '凶', comment: '三才配置凶，性格固执，需注意健康。' },
  '火土水': { fortune: '吉', comment: '三才配置吉，稳重智慧，事业有成。' },
  '火金木': { fortune: '凶', comment: '三才配置凶，性格急躁，需注意健康。' },
  '火金火': { fortune: '凶', comment: '三才配置凶，性格急躁，需注意健康。' },
  '火金土': { fortune: '凶', comment: '三才配置凶，性格固执，需注意健康。' },
  '火金金': { fortune: '凶', comment: '三才配置凶，性格刚硬，人际关系差。' },
  '火金水': { fortune: '凶', comment: '三才配置凶，性格矛盾，需注意健康。' },
  '火水木': { fortune: '吉', comment: '三才配置吉，聪明灵活，善于应变。' },
  '火水火': { fortune: '凶', comment: '三才配置凶，性格矛盾，事业起伏。' },
  '火水土': { fortune: '吉', comment: '三才配置吉，稳重智慧，事业有成。' },
  '火水金': { fortune: '凶', comment: '三才配置凶，性格矛盾，需注意健康。' },
  '火水水': { fortune: '凶', comment: '三才配置凶，性格矛盾，事业起伏。' },
  '土木木': { fortune: '吉', comment: '三才配置吉，稳重踏实，事业稳定。' },
  '土木火': { fortune: '吉', comment: '三才配置吉，稳重有度，事业稳步发展。' },
  '土木土': { fortune: '吉', comment: '三才配置吉，稳重可靠，家庭和睦。' },
  '土木金': { fortune: '凶', comment: '三才配置凶，性格固执，需注意健康。' },
  '土木水': { fortune: '吉', comment: '三才配置吉，稳重智慧，事业有成。' },
  '土火木': { fortune: '吉', comment: '三才配置吉，稳重有度，事业稳步发展。' },
  '土火火': { fortune: '吉', comment: '三才配置吉，稳重有度，事业稳步发展。' },
  '土火土': { fortune: '吉', comment: '三才配置吉，稳重可靠，家庭和睦。' },
  '土火金': { fortune: '凶', comment: '三才配置凶，性格固执，需注意健康。' },
  '土火水': { fortune: '吉', comment: '三才配置吉，稳重智慧，事业有成。' },
  '土土木': { fortune: '吉', comment: '三才配置吉，稳重可靠，家庭和睦。' },
  '土土火': { fortune: '吉', comment: '三才配置吉，稳重有度，事业稳步发展。' },
  '土土土': { fortune: '吉', comment: '三才配置吉，稳重可靠，家庭和睦。' },
  '土土金': { fortune: '凶', comment: '三才配置凶，性格固执，需注意健康。' },
  '土土水': { fortune: '吉', comment: '三才配置吉，稳重智慧，事业有成。' },
  '土金木': { fortune: '凶', comment: '三才配置凶，性格固执，需注意健康。' },
  '土金火': { fortune: '凶', comment: '三才配置凶，性格固执，需注意健康。' },
  '土金土': { fortune: '凶', comment: '三才配置凶，性格固执，需注意健康。' },
  '土金金': { fortune: '凶', comment: '三才配置凶，性格刚硬，人际关系差。' },
  '土金水': { fortune: '凶', comment: '三才配置凶，性格矛盾，需注意健康。' },
  '土水木': { fortune: '吉', comment: '三才配置吉，稳重智慧，事业有成。' },
  '土水火': { fortune: '吉', comment: '三才配置吉，稳重智慧，事业有成。' },
  '土水土': { fortune: '吉', comment: '三才配置吉，稳重智慧，事业有成。' },
  '土水金': { fortune: '凶', comment: '三才配置凶，性格矛盾，需注意健康。' },
  '土水水': { fortune: '凶', comment: '三才配置凶，性格矛盾，事业起伏。' },
  '金木木': { fortune: '凶', comment: '三才配置凶，性格矛盾，需注意健康。' },
  '金木火': { fortune: '凶', comment: '三才配置凶，性格急躁，需注意健康。' },
  '金木土': { fortune: '凶', comment: '三才配置凶，性格固执，需注意健康。' },
  '金木金': { fortune: '凶', comment: '三才配置凶，性格刚硬，人际关系差。' },
  '金木水': { fortune: '凶', comment: '三才配置凶，性格矛盾，需注意健康。' },
  '金火木': { fortune: '凶', comment: '三才配置凶，性格急躁，需注意健康。' },
  '金火火': { fortune: '凶', comment: '三才配置凶，性格急躁，需注意健康。' },
  '金火土': { fortune: '凶', comment: '三才配置凶，性格固执，需注意健康。' },
  '金火金': { fortune: '凶', comment: '三才配置凶，性格刚硬，人际关系差。' },
  '金火水': { fortune: '凶', comment: '三才配置凶，性格矛盾，需注意健康。' },
  '金土木': { fortune: '凶', comment: '三才配置凶，性格固执，需注意健康。' },
  '金土火': { fortune: '凶', comment: '三才配置凶，性格固执，需注意健康。' },
  '金土土': { fortune: '凶', comment: '三才配置凶，性格固执，需注意健康。' },
  '金土金': { fortune: '凶', comment: '三才配置凶，性格刚硬，人际关系差。' },
  '金土水': { fortune: '凶', comment: '三才配置凶，性格矛盾，需注意健康。' },
  '金金木': { fortune: '凶', comment: '三才配置凶，性格刚硬，人际关系差。' },
  '金金火': { fortune: '凶', comment: '三才配置凶，性格急躁，需注意健康。' },
  '金金土': { fortune: '凶', comment: '三才配置凶，性格固执，需注意健康。' },
  '金金金': { fortune: '凶', comment: '三才配置凶，性格刚硬，人际关系极差。' },
  '金金水': { fortune: '凶', comment: '三才配置凶，性格矛盾，需注意健康。' },
  '金水木': { fortune: '凶', comment: '三才配置凶，性格矛盾，需注意健康。' },
  '金水火': { fortune: '凶', comment: '三才配置凶，性格矛盾，需注意健康。' },
  '金水土': { fortune: '凶', comment: '三才配置凶，性格矛盾，需注意健康。' },
  '金水金': { fortune: '凶', comment: '三才配置凶，性格刚硬，人际关系差。' },
  '金水水': { fortune: '凶', comment: '三才配置凶，性格矛盾，事业起伏。' },
  '水木木': { fortune: '大吉', comment: '三才配置大吉，智慧过人，学业有成。' },
  '水木火': { fortune: '吉', comment: '三才配置吉，聪明灵活，善于应变。' },
  '水木土': { fortune: '吉', comment: '三才配置吉，稳重智慧，事业有成。' },
  '水木金': { fortune: '凶', comment: '三才配置凶，性格矛盾，需注意健康。' },
  '水木水': { fortune: '大吉', comment: '三才配置大吉，智慧深邃，学业大成。' },
  '水火木': { fortune: '吉', comment: '三才配置吉，聪明灵活，善于应变。' },
  '水火火': { fortune: '凶', comment: '三才配置凶，性格矛盾，事业起伏。' },
  '水火土': { fortune: '吉', comment: '三才配置吉，稳重智慧，事业有成。' },
  '水火金': { fortune: '凶', comment: '三才配置凶，性格矛盾，需注意健康。' },
  '水火水': { fortune: '凶', comment: '三才配置凶，性格矛盾，事业起伏。' },
  '水土木': { fortune: '吉', comment: '三才配置吉，稳重智慧，事业有成。' },
  '水土火': { fortune: '吉', comment: '三才配置吉，稳重智慧，事业有成。' },
  '水土土': { fortune: '吉', comment: '三才配置吉，稳重智慧，事业有成。' },
  '水土金': { fortune: '凶', comment: '三才配置凶，性格矛盾，需注意健康。' },
  '水土水': { fortune: '凶', comment: '三才配置凶，性格矛盾，事业起伏。' },
  '水金木': { fortune: '凶', comment: '三才配置凶，性格矛盾，需注意健康。' },
  '水金火': { fortune: '凶', comment: '三才配置凶，性格矛盾，需注意健康。' },
  '水金土': { fortune: '凶', comment: '三才配置凶，性格矛盾，需注意健康。' },
  '水金金': { fortune: '凶', comment: '三才配置凶，性格刚硬，人际关系差。' },
  '水金水': { fortune: '凶', comment: '三才配置凶，性格矛盾，事业起伏。' },
  '水水木': { fortune: '大吉', comment: '三才配置大吉，智慧深邃，学业大成。' },
  '水水火': { fortune: '凶', comment: '三才配置凶，性格矛盾，事业起伏。' },
  '水水土': { fortune: '吉', comment: '三才配置吉，稳重智慧，事业有成。' },
  '水水金': { fortune: '凶', comment: '三才配置凶，性格矛盾，需注意健康。' },
  '水水水': { fortune: '凶', comment: '三才配置凶，性格矛盾，事业起伏。' },
};

export function getSanCaiDetail(key: string): { fortune: string; comment: string } {
  return sanCaiDetails[key] || { fortune: '未知', comment: '无法判断三才配置' };
}

export function checkSanCai(sancai: SanCai, minScore: number = 5): boolean {
  const scoreMap: Record<string, number> = {
    '大吉': 10,
    '吉': 7,
    '半吉': 5,
    '凶': 2
  };
  return (scoreMap[sancai.fortune] || 0) >= minScore;
}