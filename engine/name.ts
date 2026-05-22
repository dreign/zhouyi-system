// 姓名学算法引擎

import { calcWuGe, calcWuGeDetail, checkWuGe, WuGe, WuGeDetail, DaYanInfo } from './wuge';
import { newSanCai, checkSanCai, SanCai } from './sancai';
import { getZodiac, filterZodiac, zodiacPoint, pointCheck, Zodiac } from './zodiac';
import { calcXiYong, getXiYongShen, XiYong } from './xiyong';

// 百家姓数据
export const FAMILY_NAMES = [
  '王', '李', '张', '刘', '陈', '杨', '赵', '黄', '周', '吴',
  '徐', '孙', '马', '朱', '胡', '郭', '何', '林', '罗', '高',
  '郑', '梁', '谢', '宋', '唐', '许', '韩', '冯', '邓', '曹',
  '彭', '曾', '肖', '田', '董', '袁', '潘', '于', '蒋', '蔡',
  '余', '杜', '叶', '程', '苏', '魏', '吕', '丁', '任', '沈',
  '姚', '卢', '姜', '崔', '钟', '谭', '陆', '汪', '范', '金'
];

// 五行对应的字库
export const WUXING_CHARS: Record<string, string[]> = {
  '金': ['金', '鑫', '锋', '铭', '钧', '钦', '钰', '钟', '锦', '银', '铜', '铁', '锡', '锐', '锋'],
  '木': ['木', '林', '森', '松', '柏', '桂', '梅', '桐', '杨', '柳', '栋', '梁', '柱', '材', '根', '枝'],
  '水': ['水', '江', '河', '湖', '海', '波', '涛', '洋', '流', '泉', '清', '浩', '洪', '泽', '润', '沛'],
  '火': ['火', '炎', '焱', '焰', '炳', '炜', '烁', '焕', '煜', '烨', '烽', '煌', '炯', '炫', '炬', '灵'],
  '土': ['土', '坤', '城', '培', '均', '坦', '坛', '坚', '基', '堂', '圣', '域', '壤', '堡', '墩']
};

// 天干地支
const TIANGAN = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
const DIZHI = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
const ZODIAC_ANIMALS = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'];

// 天干地支详细信息
const TIANGAN_DETAIL: Record<string, { wuxing: string; meaning: string; traits: string[]; direction: string; season: string; color: string; number: number }> = {
  '甲': { wuxing: '木', meaning: '天干之首，象征生机勃勃、开创进取', traits: ['刚毅', '果断', '开拓', '领导'], direction: '东', season: '春', color: '青', number: 1 },
  '乙': { wuxing: '木', meaning: '柔木之象，象征温柔坚韧、生生不息', traits: ['温柔', '灵活', '善解人意', '坚韧'], direction: '东', season: '春', color: '青', number: 2 },
  '丙': { wuxing: '火', meaning: '太阳之火，象征光明磊落、热情奔放', traits: ['热情', '开朗', '光明', '正直'], direction: '南', season: '夏', color: '红', number: 3 },
  '丁': { wuxing: '火', meaning: '烛火之光，象征温暖柔和、细腻体贴', traits: ['温和', '细腻', '体贴', '温暖'], direction: '南', season: '夏', color: '红', number: 4 },
  '戊': { wuxing: '土', meaning: '高山之土，象征稳重踏实、厚德载物', traits: ['稳重', '踏实', '可靠', '包容'], direction: '中', season: '四季', color: '黄', number: 5 },
  '己': { wuxing: '土', meaning: '田园之土，象征温和包容、孕育万物', traits: ['温和', '包容', '善良', '养育'], direction: '中', season: '四季', color: '黄', number: 6 },
  '庚': { wuxing: '金', meaning: '刀剑之金，象征刚毅果断、锐利进取', traits: ['刚毅', '果断', '锐利', '进取'], direction: '西', season: '秋', color: '白', number: 7 },
  '辛': { wuxing: '金', meaning: '首饰之金，象征精致典雅、细腻聪慧', traits: ['精致', '典雅', '细腻', '聪慧'], direction: '西', season: '秋', color: '白', number: 8 },
  '壬': { wuxing: '水', meaning: '江河之水，象征奔流不息、智慧深邃', traits: ['奔放', '智慧', '深邃', '灵活'], direction: '北', season: '冬', color: '黑', number: 9 },
  '癸': { wuxing: '水', meaning: '雨露之水，象征滋润万物、温柔细腻', traits: ['温柔', '细腻', '滋润', '智慧'], direction: '北', season: '冬', color: '黑', number: 10 }
};

const DIZHI_DETAIL: Record<string, { animal: string; wuxing: string; meaning: string; traits: string[]; direction: string; season: string; hour: string }> = {
  '子': { animal: '鼠', wuxing: '水', meaning: '子时为夜半，象征智慧机敏、善于积累', traits: ['聪明', '机敏', '灵活', '善于理财'], direction: '北', season: '冬', hour: '23:00-01:00' },
  '丑': { animal: '牛', wuxing: '土', meaning: '丑时为凌晨，象征勤劳踏实、默默耕耘', traits: ['勤劳', '踏实', '稳重', '可靠'], direction: '东北', season: '冬', hour: '01:00-03:00' },
  '寅': { animal: '虎', wuxing: '木', meaning: '寅时为黎明，象征勇猛进取、开创先机', traits: ['勇猛', '进取', '领导', '果断'], direction: '东北', season: '春', hour: '03:00-05:00' },
  '卯': { animal: '兔', wuxing: '木', meaning: '卯时为日出，象征生机勃勃、温柔可爱', traits: ['温柔', '可爱', '灵活', '善良'], direction: '东', season: '春', hour: '05:00-07:00' },
  '辰': { animal: '龙', wuxing: '土', meaning: '辰时为早晨，象征尊贵威严、腾飞向上', traits: ['尊贵', '威严', '领导', '腾飞'], direction: '东南', season: '春', hour: '07:00-09:00' },
  '巳': { animal: '蛇', wuxing: '火', meaning: '巳时为上午，象征智慧灵巧、善于变通', traits: ['智慧', '灵巧', '变通', '敏锐'], direction: '东南', season: '夏', hour: '09:00-11:00' },
  '午': { animal: '马', wuxing: '火', meaning: '午时为正午，象征热情奔放、光明磊落', traits: ['热情', '奔放', '光明', '正直'], direction: '南', season: '夏', hour: '11:00-13:00' },
  '未': { animal: '羊', wuxing: '土', meaning: '未时为下午，象征温和善良、和谐相处', traits: ['温和', '善良', '和谐', '优雅'], direction: '西南', season: '夏', hour: '13:00-15:00' },
  '申': { animal: '猴', wuxing: '金', meaning: '申时为傍晚，象征聪明机智、善于应变', traits: ['聪明', '机智', '灵活', '应变'], direction: '西南', season: '秋', hour: '15:00-17:00' },
  '酉': { animal: '鸡', wuxing: '金', meaning: '酉时为黄昏，象征勤奋守信、光明正大', traits: ['勤奋', '守信', '光明', '正直'], direction: '西', season: '秋', hour: '17:00-19:00' },
  '戌': { animal: '狗', wuxing: '土', meaning: '戌时为入夜，象征忠诚可靠、守护家园', traits: ['忠诚', '可靠', '守护', '正义'], direction: '西北', season: '秋', hour: '19:00-21:00' },
  '亥': { animal: '猪', wuxing: '水', meaning: '亥时为深夜，象征豁达包容、知足常乐', traits: ['豁达', '包容', '知足', '善良'], direction: '北', season: '冬', hour: '21:00-23:00' }
};

// 五行关系
const WUXING_RELATIONS: Record<string, { generate: string; beGenerated: string; overcome: string; beOvercome: string; description: string; traits: string[]; colors: string[]; directions: string; seasons: string; organs: string; emotions: string; virtues: string; lucky: string; avoid: string }> = {
  '金': { generate: '水', beGenerated: '土', overcome: '木', beOvercome: '火', description: '金生水，金克木，土生金，火克金', traits: ['刚毅', '果断', '锐利', '进取'], colors: ['白', '金', '银'], directions: '西方', seasons: '秋季', organs: '肺、大肠', emotions: '悲、忧', virtues: '义', lucky: '猴、鸡', avoid: '兔、羊' },
  '木': { generate: '火', beGenerated: '水', overcome: '土', beOvercome: '金', description: '木生火，木克土，水生木，金克木', traits: ['仁慈', '生长', '向上', '正直'], colors: ['青', '绿'], directions: '东方', seasons: '春季', organs: '肝、胆', emotions: '怒', virtues: '仁', lucky: '虎、兔', avoid: '猴、鸡' },
  '水': { generate: '木', beGenerated: '金', overcome: '火', beOvercome: '土', description: '水生木，水克火，金生水，土克水', traits: ['智慧', '流动', '适应', '包容'], colors: ['黑', '蓝'], directions: '北方', seasons: '冬季', organs: '肾、膀胱', emotions: '恐', virtues: '智', lucky: '鼠、猪', avoid: '马、羊' },
  '火': { generate: '土', beGenerated: '木', overcome: '金', beOvercome: '水', description: '火生土，火克金，木生火，水克火', traits: ['热情', '光明', '向上', '文明'], colors: ['红', '紫'], directions: '南方', seasons: '夏季', organs: '心、小肠', emotions: '喜', virtues: '礼', lucky: '蛇、马', avoid: '鼠、猪' },
  '土': { generate: '金', beGenerated: '火', overcome: '水', beOvercome: '木', description: '土生金，土克水，火生土，木克土', traits: ['稳重', '包容', '养育', '诚信'], colors: ['黄', '褐'], directions: '中央', seasons: '四季交替', organs: '脾、胃', emotions: '思', virtues: '信', lucky: '牛、龙、羊、狗', avoid: '虎、兔' }
};

// 三才配置详解
const SANCAI_DETAIL: Record<string, { meaning: string; traits: string[]; suggestion: string }> = {
  '木木木': { meaning: '三才配置吉，性格正直，事业有成', traits: ['正直', '刚毅', '有主见'], suggestion: '适合创业、管理岗位' },
  '木木火': { meaning: '三才配置大吉，才华横溢，前程似锦', traits: ['聪明', '热情', '有创造力'], suggestion: '适合艺术、创意工作' },
  '木木土': { meaning: '三才配置吉，稳重踏实，事业稳定', traits: ['稳重', '踏实', '可靠'], suggestion: '适合技术、专业工作' },
  '木木金': { meaning: '三才配置凶，性格矛盾，事业起伏', traits: ['矛盾', '纠结', '难决断'], suggestion: '需培养果断力，避免优柔寡断' },
  '木木水': { meaning: '三才配置大吉，智慧过人，学业有成', traits: ['智慧', '聪明', '善于学习'], suggestion: '适合学术、研究工作' },
  '木火木': { meaning: '三才配置吉，热情开朗，人缘极佳', traits: ['热情', '开朗', '善于交际'], suggestion: '适合销售、公关工作' },
  '木火火': { meaning: '三才配置吉，热情奔放，事业兴旺', traits: ['热情', '奔放', '有活力'], suggestion: '适合创业、开拓性工作' },
  '木火土': { meaning: '三才配置吉，稳重有度，事业稳步发展', traits: ['稳重', '有度', '循序渐进'], suggestion: '适合管理、领导工作' },
  '木火金': { meaning: '三才配置凶，性格急躁，需注意健康', traits: ['急躁', '冲动', '易怒'], suggestion: '需控制情绪，注意心血管健康' },
  '木火水': { meaning: '三才配置吉，聪明灵活，善于应变', traits: ['聪明', '灵活', '善于应变'], suggestion: '适合咨询、策划工作' },
  '木土木': { meaning: '三才配置吉，稳重踏实，事业稳定', traits: ['稳重', '踏实', '可靠'], suggestion: '适合技术、专业工作' },
  '木土火': { meaning: '三才配置吉，稳重有度，事业稳步发展', traits: ['稳重', '有度', '循序渐进'], suggestion: '适合管理、领导工作' },
  '木土土': { meaning: '三才配置吉，稳重可靠，家庭和睦', traits: ['稳重', '可靠', '顾家'], suggestion: '适合稳定发展工作' },
  '木土金': { meaning: '三才配置凶，性格固执，事业受阻', traits: ['固执', '僵化', '难变通'], suggestion: '需培养灵活性，避免固执己见' },
  '木土水': { meaning: '三才配置吉，稳重智慧，事业有成', traits: ['稳重', '智慧', '有远见'], suggestion: '适合管理、领导工作' },
  '木金木': { meaning: '三才配置凶，性格矛盾，需注意健康', traits: ['矛盾', '纠结', '难决断'], suggestion: '需培养果断力，注意肝胆健康' },
  '木金火': { meaning: '三才配置凶，性格急躁，事业起伏', traits: ['急躁', '冲动', '易怒'], suggestion: '需控制情绪，注意心血管健康' },
  '木金土': { meaning: '三才配置凶，性格固执，需注意健康', traits: ['固执', '僵化', '难变通'], suggestion: '需培养灵活性，注意脾胃健康' },
  '木金金': { meaning: '三才配置凶，性格刚硬，人际关系差', traits: ['刚硬', '固执', '难相处'], suggestion: '需培养柔性，改善人际关系' },
  '木金水': { meaning: '三才配置凶，性格矛盾，需注意健康', traits: ['矛盾', '纠结', '难决断'], suggestion: '需培养果断力，注意肾脏健康' },
  '木水木': { meaning: '三才配置大吉，智慧过人，学业有成', traits: ['智慧', '聪明', '善于学习'], suggestion: '适合学术、研究工作' },
  '木水火': { meaning: '三才配置吉，聪明灵活，善于应变', traits: ['聪明', '灵活', '善于应变'], suggestion: '适合咨询、策划工作' },
  '木水土': { meaning: '三才配置吉，稳重智慧，事业有成', traits: ['稳重', '智慧', '有远见'], suggestion: '适合管理、领导工作' },
  '木水金': { meaning: '三才配置凶，性格矛盾，需注意健康', traits: ['矛盾', '纠结', '难决断'], suggestion: '需培养果断力，注意肺部健康' },
  '木水水': { meaning: '三才配置大吉，智慧深邃，学业大成', traits: ['智慧', '深邃', '有远见'], suggestion: '适合学术、研究工作' },
  '火木木': { meaning: '三才配置吉，热情开朗，人缘极佳', traits: ['热情', '开朗', '善于交际'], suggestion: '适合销售、公关工作' },
  '火木火': { meaning: '三才配置吉，热情奔放，事业兴旺', traits: ['热情', '奔放', '有活力'], suggestion: '适合创业、开拓性工作' },
  '火木土': { meaning: '三才配置吉，稳重有度，事业稳步发展', traits: ['稳重', '有度', '循序渐进'], suggestion: '适合管理、领导工作' },
  '火木金': { meaning: '三才配置凶，性格急躁，需注意健康', traits: ['急躁', '冲动', '易怒'], suggestion: '需控制情绪，注意心血管健康' },
  '火木水': { meaning: '三才配置吉，聪明灵活，善于应变', traits: ['聪明', '灵活', '善于应变'], suggestion: '适合咨询、策划工作' },
  '火火木': { meaning: '三才配置吉，热情奔放，事业兴旺', traits: ['热情', '奔放', '有活力'], suggestion: '适合创业、开拓性工作' },
  '火火火': { meaning: '三才配置凶，性格暴躁，需注意健康', traits: ['暴躁', '冲动', '易怒'], suggestion: '需控制情绪，注意心血管健康' },
  '火火土': { meaning: '三才配置吉，稳重有度，事业稳步发展', traits: ['稳重', '有度', '循序渐进'], suggestion: '适合管理、领导工作' },
  '火火金': { meaning: '三才配置凶，性格急躁，需注意健康', traits: ['急躁', '冲动', '易怒'], suggestion: '需控制情绪，注意肺部健康' },
  '火火水': { meaning: '三才配置凶，性格矛盾，事业起伏', traits: ['矛盾', '纠结', '难决断'], suggestion: '需培养果断力，注意肾脏健康' },
  '火土木': { meaning: '三才配置吉，稳重有度，事业稳步发展', traits: ['稳重', '有度', '循序渐进'], suggestion: '适合管理、领导工作' },
  '火土火': { meaning: '三才配置吉，稳重有度，事业稳步发展', traits: ['稳重', '有度', '循序渐进'], suggestion: '适合管理、领导工作' },
  '火土土': { meaning: '三才配置吉，稳重可靠，家庭和睦', traits: ['稳重', '可靠', '顾家'], suggestion: '适合稳定发展工作' },
  '火土金': { meaning: '三才配置凶，性格固执，需注意健康', traits: ['固执', '僵化', '难变通'], suggestion: '需培养灵活性，注意脾胃健康' },
  '火土水': { meaning: '三才配置吉，稳重智慧，事业有成', traits: ['稳重', '智慧', '有远见'], suggestion: '适合管理、领导工作' },
  '火金木': { meaning: '三才配置凶，性格急躁，需注意健康', traits: ['急躁', '冲动', '易怒'], suggestion: '需控制情绪，注意肝胆健康' },
  '火金火': { meaning: '三才配置凶，性格急躁，需注意健康', traits: ['急躁', '冲动', '易怒'], suggestion: '需控制情绪，注意心血管健康' },
  '火金土': { meaning: '三才配置凶，性格固执，需注意健康', traits: ['固执', '僵化', '难变通'], suggestion: '需培养灵活性，注意脾胃健康' },
  '火金金': { meaning: '三才配置凶，性格刚硬，人际关系差', traits: ['刚硬', '固执', '难相处'], suggestion: '需培养柔性，改善人际关系' },
  '火金水': { meaning: '三才配置凶，性格矛盾，需注意健康', traits: ['矛盾', '纠结', '难决断'], suggestion: '需培养果断力，注意肾脏健康' },
  '火水木': { meaning: '三才配置吉，聪明灵活，善于应变', traits: ['聪明', '灵活', '善于应变'], suggestion: '适合咨询、策划工作' },
  '火水火': { meaning: '三才配置凶，性格矛盾，事业起伏', traits: ['矛盾', '纠结', '难决断'], suggestion: '需培养果断力，注意心血管健康' },
  '火水土': { meaning: '三才配置吉，稳重智慧，事业有成', traits: ['稳重', '智慧', '有远见'], suggestion: '适合管理、领导工作' },
  '火水金': { meaning: '三才配置凶，性格矛盾，需注意健康', traits: ['矛盾', '纠结', '难决断'], suggestion: '需培养果断力，注意肺部健康' },
  '火水水': { meaning: '三才配置凶，性格矛盾，事业起伏', traits: ['矛盾', '纠结', '难决断'], suggestion: '需培养果断力，注意肾脏健康' },
  '土木木': { meaning: '三才配置吉，稳重踏实，事业稳定', traits: ['稳重', '踏实', '可靠'], suggestion: '适合技术、专业工作' },
  '土木火': { meaning: '三才配置吉，稳重有度，事业稳步发展', traits: ['稳重', '有度', '循序渐进'], suggestion: '适合管理、领导工作' },
  '土木土': { meaning: '三才配置吉，稳重可靠，家庭和睦', traits: ['稳重', '可靠', '顾家'], suggestion: '适合稳定发展工作' },
  '土木金': { meaning: '三才配置凶，性格固执，需注意健康', traits: ['固执', '僵化', '难变通'], suggestion: '需培养灵活性，注意脾胃健康' },
  '土木水': { meaning: '三才配置吉，稳重智慧，事业有成', traits: ['稳重', '智慧', '有远见'], suggestion: '适合管理、领导工作' },
  '土火木': { meaning: '三才配置吉，稳重有度，事业稳步发展', traits: ['稳重', '有度', '循序渐进'], suggestion: '适合管理、领导工作' },
  '土火火': { meaning: '三才配置吉，稳重有度，事业稳步发展', traits: ['稳重', '有度', '循序渐进'], suggestion: '适合管理、领导工作' },
  '土火土': { meaning: '三才配置吉，稳重可靠，家庭和睦', traits: ['稳重', '可靠', '顾家'], suggestion: '适合稳定发展工作' },
  '土火金': { meaning: '三才配置凶，性格固执，需注意健康', traits: ['固执', '僵化', '难变通'], suggestion: '需培养灵活性，注意脾胃健康' },
  '土火水': { meaning: '三才配置吉，稳重智慧，事业有成', traits: ['稳重', '智慧', '有远见'], suggestion: '适合管理、领导工作' },
  '土土木': { meaning: '三才配置吉，稳重可靠，家庭和睦', traits: ['稳重', '可靠', '顾家'], suggestion: '适合稳定发展工作' },
  '土土火': { meaning: '三才配置吉，稳重有度，事业稳步发展', traits: ['稳重', '有度', '循序渐进'], suggestion: '适合管理、领导工作' },
  '土土土': { meaning: '三才配置吉，稳重可靠，家庭和睦', traits: ['稳重', '可靠', '顾家'], suggestion: '适合稳定发展工作' },
  '土土金': { meaning: '三才配置凶，性格固执，需注意健康', traits: ['固执', '僵化', '难变通'], suggestion: '需培养灵活性，注意脾胃健康' },
  '土土水': { meaning: '三才配置吉，稳重智慧，事业有成', traits: ['稳重', '智慧', '有远见'], suggestion: '适合管理、领导工作' },
  '土金木': { meaning: '三才配置凶，性格固执，需注意健康', traits: ['固执', '僵化', '难变通'], suggestion: '需培养灵活性，注意肝胆健康' },
  '土金火': { meaning: '三才配置凶，性格固执，需注意健康', traits: ['固执', '僵化', '难变通'], suggestion: '需培养灵活性，注意心血管健康' },
  '土金土': { meaning: '三才配置凶，性格固执，需注意健康', traits: ['固执', '僵化', '难变通'], suggestion: '需培养灵活性，注意脾胃健康' },
  '土金金': { meaning: '三才配置凶，性格刚硬，人际关系差', traits: ['刚硬', '固执', '难相处'], suggestion: '需培养柔性，改善人际关系' },
  '土金水': { meaning: '三才配置凶，性格矛盾，需注意健康', traits: ['矛盾', '纠结', '难决断'], suggestion: '需培养果断力，注意肾脏健康' },
  '土水木': { meaning: '三才配置吉，稳重智慧，事业有成', traits: ['稳重', '智慧', '有远见'], suggestion: '适合管理、领导工作' },
  '土水火': { meaning: '三才配置吉，稳重智慧，事业有成', traits: ['稳重', '智慧', '有远见'], suggestion: '适合管理、领导工作' },
  '土水土': { meaning: '三才配置吉，稳重智慧，事业有成', traits: ['稳重', '智慧', '有远见'], suggestion: '适合管理、领导工作' },
  '土水金': { meaning: '三才配置凶，性格矛盾，需注意健康', traits: ['矛盾', '纠结', '难决断'], suggestion: '需培养果断力，注意肺部健康' },
  '土水水': { meaning: '三才配置凶，性格矛盾，事业起伏', traits: ['矛盾', '纠结', '难决断'], suggestion: '需培养果断力，注意肾脏健康' },
  '金木木': { meaning: '三才配置凶，性格矛盾，需注意健康', traits: ['矛盾', '纠结', '难决断'], suggestion: '需培养果断力，注意肝胆健康' },
  '金木火': { meaning: '三才配置凶，性格急躁，需注意健康', traits: ['急躁', '冲动', '易怒'], suggestion: '需控制情绪，注意心血管健康' },
  '金木土': { meaning: '三才配置凶，性格固执，需注意健康', traits: ['固执', '僵化', '难变通'], suggestion: '需培养灵活性，注意脾胃健康' },
  '金木金': { meaning: '三才配置凶，性格刚硬，人际关系差', traits: ['刚硬', '固执', '难相处'], suggestion: '需培养柔性，改善人际关系' },
  '金木水': { meaning: '三才配置凶，性格矛盾，需注意健康', traits: ['矛盾', '纠结', '难决断'], suggestion: '需培养果断力，注意肾脏健康' },
  '金火木': { meaning: '三才配置凶，性格急躁，需注意健康', traits: ['急躁', '冲动', '易怒'], suggestion: '需控制情绪，注意肝胆健康' },
  '金火火': { meaning: '三才配置凶，性格急躁，需注意健康', traits: ['急躁', '冲动', '易怒'], suggestion: '需控制情绪，注意心血管健康' },
  '金火土': { meaning: '三才配置凶，性格固执，需注意健康', traits: ['固执', '僵化', '难变通'], suggestion: '需培养灵活性，注意脾胃健康' },
  '金火金': { meaning: '三才配置凶，性格刚硬，人际关系差', traits: ['刚硬', '固执', '难相处'], suggestion: '需培养柔性，改善人际关系' },
  '金火水': { meaning: '三才配置凶，性格矛盾，需注意健康', traits: ['矛盾', '纠结', '难决断'], suggestion: '需培养果断力，注意肾脏健康' },
  '金土木': { meaning: '三才配置凶，性格固执，需注意健康', traits: ['固执', '僵化', '难变通'], suggestion: '需培养灵活性，注意脾胃健康' },
  '金土火': { meaning: '三才配置凶，性格固执，需注意健康', traits: ['固执', '僵化', '难变通'], suggestion: '需培养灵活性，注意心血管健康' },
  '金土土': { meaning: '三才配置凶，性格固执，需注意健康', traits: ['固执', '僵化', '难变通'], suggestion: '需培养灵活性，注意脾胃健康' },
  '金土金': { meaning: '三才配置凶，性格刚硬，人际关系差', traits: ['刚硬', '固执', '难相处'], suggestion: '需培养柔性，改善人际关系' },
  '金土水': { meaning: '三才配置凶，性格矛盾，需注意健康', traits: ['矛盾', '纠结', '难决断'], suggestion: '需培养果断力，注意肾脏健康' },
  '金金木': { meaning: '三才配置凶，性格刚硬，人际关系差', traits: ['刚硬', '固执', '难相处'], suggestion: '需培养柔性，注意肝胆健康' },
  '金金火': { meaning: '三才配置凶，性格急躁，需注意健康', traits: ['急躁', '冲动', '易怒'], suggestion: '需控制情绪，注意心血管健康' },
  '金金土': { meaning: '三才配置凶，性格固执，需注意健康', traits: ['固执', '僵化', '难变通'], suggestion: '需培养灵活性，注意脾胃健康' },
  '金金金': { meaning: '三才配置凶，性格刚硬，人际关系极差', traits: ['刚硬', '固执', '极难相处'], suggestion: '需大幅培养柔性，改善人际关系' },
  '金金水': { meaning: '三才配置凶，性格矛盾，需注意健康', traits: ['矛盾', '纠结', '难决断'], suggestion: '需培养果断力，注意肾脏健康' },
  '金水木': { meaning: '三才配置凶，性格矛盾，需注意健康', traits: ['矛盾', '纠结', '难决断'], suggestion: '需培养果断力，注意肝胆健康' },
  '金水火': { meaning: '三才配置凶，性格矛盾，需注意健康', traits: ['矛盾', '纠结', '难决断'], suggestion: '需培养果断力，注意心血管健康' },
  '金水土': { meaning: '三才配置凶，性格矛盾，需注意健康', traits: ['矛盾', '纠结', '难决断'], suggestion: '需培养果断力，注意脾胃健康' },
  '金水金': { meaning: '三才配置凶，性格刚硬，人际关系差', traits: ['刚硬', '固执', '难相处'], suggestion: '需培养柔性，改善人际关系' },
  '金水水': { meaning: '三才配置凶，性格矛盾，事业起伏', traits: ['矛盾', '纠结', '难决断'], suggestion: '需培养果断力，注意肾脏健康' },
  '水木木': { meaning: '三才配置大吉，智慧过人，学业有成', traits: ['智慧', '聪明', '善于学习'], suggestion: '适合学术、研究工作' },
  '水木火': { meaning: '三才配置吉，聪明灵活，善于应变', traits: ['聪明', '灵活', '善于应变'], suggestion: '适合咨询、策划工作' },
  '水木土': { meaning: '三才配置吉，稳重智慧，事业有成', traits: ['稳重', '智慧', '有远见'], suggestion: '适合管理、领导工作' },
  '水木金': { meaning: '三才配置凶，性格矛盾，需注意健康', traits: ['矛盾', '纠结', '难决断'], suggestion: '需培养果断力，注意肺部健康' },
  '水木水': { meaning: '三才配置大吉，智慧深邃，学业大成', traits: ['智慧', '深邃', '有远见'], suggestion: '适合学术、研究工作' },
  '水火木': { meaning: '三才配置吉，聪明灵活，善于应变', traits: ['聪明', '灵活', '善于应变'], suggestion: '适合咨询、策划工作' },
  '水火火': { meaning: '三才配置凶，性格矛盾，事业起伏', traits: ['矛盾', '纠结', '难决断'], suggestion: '需培养果断力，注意心血管健康' },
  '水火土': { meaning: '三才配置吉，稳重智慧，事业有成', traits: ['稳重', '智慧', '有远见'], suggestion: '适合管理、领导工作' },
  '水火金': { meaning: '三才配置凶，性格矛盾，需注意健康', traits: ['矛盾', '纠结', '难决断'], suggestion: '需培养果断力，注意肺部健康' },
  '水火水': { meaning: '三才配置凶，性格矛盾，事业起伏', traits: ['矛盾', '纠结', '难决断'], suggestion: '需培养果断力，注意肾脏健康' },
  '水土木': { meaning: '三才配置吉，稳重智慧，事业有成', traits: ['稳重', '智慧', '有远见'], suggestion: '适合管理、领导工作' },
  '水土火': { meaning: '三才配置吉，稳重智慧，事业有成', traits: ['稳重', '智慧', '有远见'], suggestion: '适合管理、领导工作' },
  '水土土': { meaning: '三才配置吉，稳重智慧，事业有成', traits: ['稳重', '智慧', '有远见'], suggestion: '适合管理、领导工作' },
  '水土金': { meaning: '三才配置凶，性格矛盾，需注意健康', traits: ['矛盾', '纠结', '难决断'], suggestion: '需培养果断力，注意肺部健康' },
  '水土水': { meaning: '三才配置凶，性格矛盾，事业起伏', traits: ['矛盾', '纠结', '难决断'], suggestion: '需培养果断力，注意肾脏健康' },
  '水金木': { meaning: '三才配置凶，性格矛盾，需注意健康', traits: ['矛盾', '纠结', '难决断'], suggestion: '需培养果断力，注意肝胆健康' },
  '水金火': { meaning: '三才配置凶，性格矛盾，需注意健康', traits: ['矛盾', '纠结', '难决断'], suggestion: '需培养果断力，注意心血管健康' },
  '水金土': { meaning: '三才配置凶，性格矛盾，需注意健康', traits: ['矛盾', '纠结', '难决断'], suggestion: '需培养果断力，注意脾胃健康' },
  '水金金': { meaning: '三才配置凶，性格刚硬，人际关系差', traits: ['刚硬', '固执', '难相处'], suggestion: '需培养柔性，改善人际关系' },
  '水金水': { meaning: '三才配置凶，性格矛盾，事业起伏', traits: ['矛盾', '纠结', '难决断'], suggestion: '需培养果断力，注意肾脏健康' },
  '水水木': { meaning: '三才配置大吉，智慧深邃，学业大成', traits: ['智慧', '深邃', '有远见'], suggestion: '适合学术、研究工作' },
  '水水火': { meaning: '三才配置凶，性格矛盾，事业起伏', traits: ['矛盾', '纠结', '难决断'], suggestion: '需培养果断力，注意心血管健康' },
  '水水土': { meaning: '三才配置吉，稳重智慧，事业有成', traits: ['稳重', '智慧', '有远见'], suggestion: '适合管理、领导工作' },
  '水水金': { meaning: '三才配置凶，性格矛盾，需注意健康', traits: ['矛盾', '纠结', '难决断'], suggestion: '需培养果断力，注意肺部健康' },
  '水水水': { meaning: '三才配置凶，性格矛盾，事业起伏', traits: ['矛盾', '纠结', '难决断'], suggestion: '需培养果断力，注意肾脏健康' }
};

// 五格详解
const WUGE_DETAIL: Record<string, { meaning: string; good: string; bad: string; calculation: string }> = {
  '天格': { meaning: '祖荫运，代表祖先的庇佑和遗传', good: '吉数则祖荫深厚，家族兴旺', bad: '凶数则祖荫薄弱，需自立自强', calculation: '姓氏笔画+1' },
  '人格': { meaning: '主运，代表名字的核心运势和性格', good: '吉数则性格开朗，运势亨通', bad: '凶数则性格偏激，运势坎坷', calculation: '姓氏最后字+名字第一个字' },
  '地格': { meaning: '前运，代表36岁前的运势', good: '吉数则早年顺利，学业有成', bad: '凶数则早年坎坷，需多努力', calculation: '名字前两字笔画相加' },
  '外格': { meaning: '副运，代表社交和人际关系', good: '吉数则人缘好，贵人多', bad: '凶数则人缘差，易招小人', calculation: '名字最后字+1' },
  '总格': { meaning: '总运，代表一生的综合运势', good: '吉数则一生顺利，福寿双全', bad: '凶数则一生坎坷，需谨慎行事', calculation: '所有字笔画相加' }
};

// 五格吉凶数
const WUGE_SCORES: Record<string, { lucky: number[] }> = {
  '天格': { lucky: [1, 3, 5, 7, 8, 11, 13, 15, 16, 17, 18, 21, 23, 24, 25, 31, 32, 33, 35, 37, 39, 41, 45, 47, 48, 52, 57, 61, 63, 65, 67, 68, 81] },
  '人格': { lucky: [1, 3, 5, 7, 8, 11, 13, 15, 16, 17, 18, 21, 23, 24, 25, 31, 32, 33, 35, 37, 39, 41, 45, 47, 48, 52, 57, 61, 63, 65, 67, 68, 81] },
  '地格': { lucky: [1, 3, 5, 6, 7, 8, 11, 13, 15, 16, 17, 18, 21, 23, 24, 25, 29, 31, 32, 33, 35, 37, 39, 41, 45, 47, 48, 52, 57, 61, 63, 65, 67, 68, 81] },
  '外格': { lucky: [2, 4, 5, 8, 10, 11, 13, 15, 19, 21, 22, 25, 31, 32, 35] },
  '总格': { lucky: [1, 3, 5, 6, 7, 8, 11, 13, 15, 16, 17, 18, 21, 23, 24, 25, 29, 31, 32, 33, 35, 37, 39, 41, 45, 47, 48, 52, 57, 61, 63, 65, 67, 68, 81] }
};

// 五格含义
const WUGE_MEANINGS: Record<number, { meaning: string; description: string; lucky: boolean }> = {
  1: { meaning: '太极之数', description: '万物开泰，生发无穷，利禄亨通', lucky: true },
  2: { meaning: '两仪之数', description: '混沌未开，进退保守，志望难达', lucky: false },
  3: { meaning: '三才之数', description: '天地人和，大事大业，繁荣昌隆', lucky: true },
  4: { meaning: '四象之数', description: '待于生发，万事慎重，不具营谋', lucky: false },
  5: { meaning: '五行之数', description: '福禄长寿，阴阳和合，完壁之象', lucky: true },
  6: { meaning: '六爻之数', description: '发展变化，天赋美德，吉祥安泰', lucky: true },
  7: { meaning: '七政之数', description: '精悍严谨，天赋之力，吉星照耀', lucky: true },
  8: { meaning: '八卦之数', description: '八卦之数，乾坎艮震，巽离坤兑', lucky: true },
  9: { meaning: '大成之数', description: '大成之数，蕴涵凶险，或成或败', lucky: false },
  10: { meaning: '终结之数', description: '终结之数，雪暗飘零，偶或有成', lucky: false },
  11: { meaning: '旱苗逢雨', description: '万物更新，调顺发达，恢弘泽世', lucky: true },
  12: { meaning: '掘井无泉', description: '无理之数，发展薄弱，虽生不足', lucky: false },
  13: { meaning: '春日牡丹', description: '才艺多能，智谋奇略，忍柔当事', lucky: true },
  14: { meaning: '破兆', description: '家庭缘薄，孤独遭难，谋事不达', lucky: false },
  15: { meaning: '福寿', description: '福寿圆满，富贵荣誉，涵养雅量', lucky: true },
  16: { meaning: '厚重', description: '厚重载德，安富尊荣，财官双美', lucky: true },
  17: { meaning: '刚强', description: '权威刚强，突破万难，如能容忍', lucky: true },
  18: { meaning: '铁镜重磨', description: '权威显达，博得名利，且养柔德', lucky: true },
  19: { meaning: '多难', description: '风云蔽日，辛苦重来，虽有智谋', lucky: false },
  20: { meaning: '非业', description: '非业破运，灾难重重，进退维谷', lucky: false },
  21: { meaning: '明月中天', description: '光风霁月，万物确立，官运亨通', lucky: true },
  22: { meaning: '秋草逢霜', description: '秋草逢霜，困难疾弱，虽出豪杰', lucky: false },
  23: { meaning: '壮丽', description: '旭日东升，壮丽壮观，权威旺盛', lucky: true },
  24: { meaning: '掘藏得金', description: '家门余庆，金钱丰盈，白手成家', lucky: true },
  25: { meaning: '英俊', description: '资性英敏，才能奇特，克服傲慢', lucky: true },
  26: { meaning: '变怪', description: '变怪之谜，英雄豪杰，波澜重叠', lucky: false },
  27: { meaning: '增长', description: '欲望无止，自我强烈，多受毁谤', lucky: false },
  28: { meaning: '阔水浮萍', description: '豪气生离，骨肉分离，孤独悲哀', lucky: false },
  29: { meaning: '不平', description: '智谋兼备，欲望难足，若能慎始', lucky: true },
  30: { meaning: '非运', description: '沉浮不定，凶吉难变，若明若暗', lucky: false },
  31: { meaning: '春日花开', description: '智勇得志，博得名利，统领众人', lucky: true },
  32: { meaning: '宝马金鞍', description: '侥幸多望，贵人得助，财帛如裕', lucky: true },
  33: { meaning: '升天', description: '旭日升天，鸾凤相会，名闻天下', lucky: true },
  34: { meaning: '破家', description: '破家之身，见识短小，辛苦遭逢', lucky: false },
  35: { meaning: '高楼望月', description: '温和平静，智达通畅，文昌技艺', lucky: true },
  36: { meaning: '波澜重叠', description: '波澜重叠，沉浮万状，侠肝义胆', lucky: false },
  37: { meaning: '猛虎出林', description: '权威显达，热诚忠信，宜着雅量', lucky: true },
  38: { meaning: '磨铁成针', description: '意志薄弱，刻意经营，才识不凡', lucky: false },
  39: { meaning: '富贵荣华', description: '富贵荣华，财帛丰盈，暗藏险象', lucky: true },
  40: { meaning: '退安', description: '谨慎保安，进退保守，志望难达', lucky: false },
  41: { meaning: '有德', description: '纯阳独秀，德高望重，和顺畅达', lucky: true },
  42: { meaning: '寒蝉在柳', description: '博识多能，精通世情，如能专心', lucky: false },
  43: { meaning: '散财破产', description: '散财破产，诸事不遂，虽有智谋', lucky: false },
  44: { meaning: '烦闷', description: '破家亡身，暗藏惨淡，事不如意', lucky: false },
  45: { meaning: '顺风', description: '新生泰和，顺风扬帆，智谋经纬', lucky: true },
  46: { meaning: '浪里淘金', description: '载宝沉舟，浪里淘金，大难尝尽', lucky: false },
  47: { meaning: '点石成金', description: '花开之象，万事如意，祯祥吉庆', lucky: true },
  48: { meaning: '古松立鹤', description: '智谋兼备，德量荣达，威望成师', lucky: true },
  49: { meaning: '转变', description: '吉临则吉，凶来则凶，成败得失', lucky: false },
  50: { meaning: '小舟入海', description: '一成一败，吉凶参半，先得庇荫', lucky: false },
  51: { meaning: '沉浮', description: '盛衰交加，波澜重叠，如能慎始', lucky: false },
  52: { meaning: '达眼', description: '卓识达眼，先见之明，智谋超群', lucky: true },
  53: { meaning: '曲卷难星', description: '外祥内患，外祸内安，先富后贫', lucky: false },
  54: { meaning: '石上栽花', description: '石上栽花，难得活，忧闷烦来', lucky: false },
  55: { meaning: '善恶', description: '善善得恶，恶恶得善，吉到极限', lucky: false },
  56: { meaning: '浪里行舟', description: '历尽艰辛，四周障碍，万事龃龉', lucky: false },
  57: { meaning: '日照春松', description: '寒雪青松，夜莺吟春，必遭一过', lucky: true },
  58: { meaning: '晚行遇月', description: '沉浮多端，先苦后甘，宽宏扬名', lucky: false },
  59: { meaning: '寒蝉悲风', description: '寒蝉悲风，意志衰退，缺乏忍耐', lucky: false },
  60: { meaning: '无谋', description: '无谋之人，漂泊不定，晦暝暗黑', lucky: false },
  61: { meaning: '牡丹芙蓉', description: '牡丹芙蓉，花开富贵，名利双收', lucky: true },
  62: { meaning: '衰败', description: '衰败之象，内外不合，志望难达', lucky: false },
  63: { meaning: '舟归平海', description: '富贵荣华，身心安泰，雨露惠泽', lucky: true },
  64: { meaning: '非命', description: '骨肉分离，孤独悲愁，难得心安', lucky: false },
  65: { meaning: '巨流归海', description: '天长地久，家运隆昌，福寿绵长', lucky: true },
  66: { meaning: '岩头步马', description: '进退维谷，艰难不堪，等待时机', lucky: false },
  67: { meaning: '通达', description: '天赋幸运，四通八达，家道繁昌', lucky: true },
  68: { meaning: '顺风吹帆', description: '智虑周密，集众信达，发明能智', lucky: true },
  69: { meaning: '非业', description: '坐立不安，进退两难，志望难达', lucky: false },
  70: { meaning: '残菊逢霜', description: '残菊逢霜，寂寞无碍，惨淡忧愁', lucky: false },
  71: { meaning: '石上金花', description: '石上金花，内心劳苦，收获不多', lucky: false },
  72: { meaning: '劳苦', description: '劳苦不息，先难后易，始终如一', lucky: false },
  73: { meaning: '无勇', description: '盛衰交加，徒有高志，天王福祉', lucky: false },
  74: { meaning: '残花经霜', description: '残花经霜，寂寞度日，徒劳无功', lucky: false },
  75: { meaning: '退守', description: '退守保吉，发迹甚迟，虽有吉象', lucky: false },
  76: { meaning: '离散', description: '倾覆离散，骨肉分离，内外不和', lucky: false },
  77: { meaning: '半吉', description: '家庭有悦，半吉半凶，能获援护', lucky: false },
  78: { meaning: '晚苦', description: '祸福参半，先天智能，中年发达', lucky: false },
  79: { meaning: '云头望月', description: '云头望月，身疲力尽，穷迫不伸', lucky: false },
  80: { meaning: '遁吉', description: '辛苦不绝，早入隐遁，安心立命', lucky: false },
  81: { meaning: '万物回春', description: '最吉之数，还本归元，吉祥重叠', lucky: true }
};

// 命格类型
const MINGGE_TYPES = [
  { type: '金木', meaning: '金木命格，才华横溢，学业有成', traits: ['聪明', '有才华', '善于学习'], career: '适合学术、研究、教育', wealth: '财运亨通，知识变现', marriage: '婚姻美满，精神契合', health: '注意肺部健康', suggestion: '重视教育，培养学习能力' },
  { type: '木火', meaning: '木火命格，热情进取，事业有成', traits: ['热情', '积极', '有创造力'], career: '适合艺术、创意、创业', wealth: '财运起伏，把握机遇', marriage: '婚姻浪漫，充满激情', health: '注意心血管健康', suggestion: '培养领导力，勇于开拓' },
  { type: '火土', meaning: '火土命格，稳重热情，事业有成', traits: ['稳重', '热情', '有领导力'], career: '适合管理、领导、创业', wealth: '财运稳定，稳步增长', marriage: '婚姻和睦，相互尊重', health: '注意脾胃健康', suggestion: '培养魄力，善于理财' },
  { type: '土金', meaning: '土金命格，稳重刚毅，事业有成', traits: ['稳重', '刚毅', '有魄力'], career: '适合管理、领导、投资', wealth: '财运亨通，善于理财', marriage: '婚姻美满，家庭幸福', health: '注意肾脏健康', suggestion: '培养远见，善于投资' },
  { type: '金水', meaning: '金水命格，智慧刚毅，学业有成', traits: ['智慧', '刚毅', '有主见'], career: '适合学术、研究、技术', wealth: '财运稳定，知识变现', marriage: '婚姻美满，精神契合', health: '注意肝胆健康', suggestion: '培养主见，重视技术' },
  { type: '水木', meaning: '水木命格，聪明灵活，善于应变', traits: ['聪明', '灵活', '善于应变'], career: '适合咨询、策划、创意', wealth: '财运起伏，需要把握', marriage: '婚姻浪漫，需要现实', health: '注意肾脏健康', suggestion: '培养应变能力，抓住机遇' }
];

// 星座信息
const ZODIAC_SIGNS = [
  { name: '白羊座', date: '03-21', dateEnd: '04-19', traits: ['热情', '勇敢', '直率'], element: '火', ruler: '火星', goodChars: ['阳', '烈', '炎', '焱', '晨', '旭', '昊', '明', '辉', '耀', '锐', '锋', '刚', '强', '勇', '毅', '杰', '豪', '骏', '鹏'], goodMeanings: ['阳光活力', '热情奔放', '勇往直前', '开拓进取', '领导才能'], avoidChars: ['柔', '婉', '静', '宁', '顺', '从', '弱', '怯'], avoidMeanings: ['过于柔和', '缺乏主见', '优柔寡断'] },
  { name: '金牛座', date: '04-20', dateEnd: '05-20', traits: ['稳重', '务实', '耐心'], element: '土', ruler: '金星', goodChars: ['稳', '安', '宁', '静', '恒', '毅', '坚', '实', '诚', '信', '富', '贵', '华', '荣', '昌', '盛', '丰', '裕', '瑞', '祥'], goodMeanings: ['稳重踏实', '财运亨通', '持之以恒', '诚实守信', '生活富足'], avoidChars: ['急', '躁', '浮', '飘', '变', '动', '险', '冒'], avoidMeanings: ['急躁冒进', '朝三暮四', '好高骛远'] },
  { name: '双子座', date: '05-21', dateEnd: '06-21', traits: ['聪明', '灵活', '好奇'], element: '风', ruler: '水星', goodChars: ['智', '慧', '聪', '颖', '灵', '敏', '捷', '迅', '文', '思', '言', '语', '书', '艺', '博', '学', '明', '达', '通', '畅'], goodMeanings: ['聪明伶俐', '才思敏捷', '博学多才', '善于表达', '灵活变通'], avoidChars: ['钝', '愚', '笨', '拙', '默', '沉', '滞', '缓'], avoidMeanings: ['反应迟钝', '不善言辞', '思维僵化'] },
  { name: '巨蟹座', date: '06-22', dateEnd: '07-22', traits: ['温柔', '敏感', '顾家'], element: '水', ruler: '月亮', goodChars: ['家', '安', '宁', '和', '睦', '亲', '爱', '慈', '祥', '惠', '恩', '德', '柔', '婉', '雅', '静', '怡', '悦', '欣', '馨'], goodMeanings: ['家庭和睦', '温柔体贴', '善解人意', '母性光辉', '情感丰富'], avoidChars: ['冷', '酷', '硬', '刚', '烈', '猛', '狂', '野'], avoidMeanings: ['冷漠无情', '过于强硬', '缺乏温情'] },
  { name: '狮子座', date: '07-23', dateEnd: '08-22', traits: ['自信', '大方', '领导力'], element: '火', ruler: '太阳', goodChars: ['王', '君', '帝', '皇', '威', '严', '尊', '贵', '荣', '华', '耀', '辉', '煌', '灿', '烂', '杰', '豪', '俊', '伟', '宏'], goodMeanings: ['王者风范', '尊贵荣耀', '领导才能', '光芒四射', '气宇轩昂'], avoidChars: ['卑', '微', '弱', '怯', '缩', '隐', '藏', '匿'], avoidMeanings: ['自卑怯懦', '畏首畏尾', '缺乏自信'] },
  { name: '处女座', date: '08-23', dateEnd: '09-22', traits: ['细心', '完美主义', '勤奋'], element: '土', ruler: '水星', goodChars: ['精', '细', '致', '密', '洁', '净', '纯', '雅', '秀', '美', '丽', '华', '慧', '智', '敏', '捷', '勤', '勉', '恒', '毅'], goodMeanings: ['精益求精', '完美主义', '勤劳刻苦', '聪明细致', '纯洁高雅'], avoidChars: ['粗', '糙', '乱', '杂', '脏', '污', '懒', '惰'], avoidMeanings: ['粗心大意', '杂乱无章', '懒惰散漫'] },
  { name: '天秤座', date: '09-23', dateEnd: '10-23', traits: ['优雅', '公正', '社交'], element: '风', ruler: '金星', goodChars: ['和', '平', '衡', '均', '正', '公', '义', '仁', '雅', '优', '美', '丽', '华', '艺', '文', '韵', '律', '谐', '调'], goodMeanings: ['公正公平', '优雅迷人', '和谐美满', '艺术天赋', '社交能力'], avoidChars: ['偏', '倚', '私', '弊', '粗', '俗', '野', '蛮'], avoidMeanings: ['偏颇不公', '粗俗无礼', '缺乏美感'] },
  { name: '天蝎座', date: '10-24', dateEnd: '11-22', traits: ['神秘', '执着', '洞察力'], element: '水', ruler: '冥王星', goodChars: ['深', '沉', '秘', '奥', '玄', '妙', '幽', '冥', '毅', '恒', '坚', '韧', '锐', '利', '锋', '芒', '智', '慧', '谋', '略'], goodMeanings: ['深邃神秘', '意志坚定', '洞察敏锐', '智慧过人', '魅力独特'], avoidChars: ['浅', '薄', '浮', '飘', '轻', '散', '漫'], avoidMeanings: ['浅薄浮躁', '缺乏深度', '意志薄弱'] },
  { name: '射手座', date: '11-23', dateEnd: '12-21', traits: ['乐观', '自由', '冒险'], element: '火', ruler: '木星', goodChars: ['翔', '飞', '翱', '远', '遥', '广', '阔', '宏', '大', '博', '远', '乐', '欢', '欣', '悦', '自', '由', '畅', '达'], goodMeanings: ['自由奔放', '乐观向上', '志向远大', '博学多闻', '冒险精神'], avoidChars: ['拘', '束', '限', '制', '闷', '郁', '愁', '忧'], avoidMeanings: ['受拘束', '悲观消极', '目光短浅'] },
  { name: '摩羯座', date: '12-22', dateEnd: '01-19', traits: ['稳重', '务实', '有野心'], element: '土', ruler: '土星', goodChars: ['稳', '重', '坚', '毅', '恒', '久', '远', '长', '实', '诚', '信', '德', '功', '业', '成', '就', '峰', '顶', '巅', '极'], goodMeanings: ['稳重踏实', '志向远大', '持之以恒', '事业有成', '责任担当'], avoidChars: ['浮', '飘', '轻', '散', '漫', '懒', '惰'], avoidMeanings: ['轻浮散漫', '缺乏恒心', '好高骛远'] },
  { name: '水瓶座', date: '01-20', dateEnd: '02-18', traits: ['独立', '创新', '人道主义'], element: '风', ruler: '天王星', goodChars: ['新', '创', '独', '特', '异', '奇', '妙', '思', '想', '念', '智', '慧', '博', '爱', '仁', '慈', '善', '德', '明', '达'], goodMeanings: ['创新独特', '思想前卫', '博爱仁慈', '智慧超群', '独立自主'], avoidChars: ['旧', '陈', '俗', '套', '依', '附', '从', '众'], avoidMeanings: ['因循守旧', '随波逐流', '缺乏主见'] },
  { name: '双鱼座', date: '02-19', dateEnd: '03-20', traits: ['浪漫', '富有想象力', '善良'], element: '水', ruler: '海王星', goodChars: ['梦', '幻', '诗', '画', '艺', '文', '雅', '韵', '柔', '婉', '慈', '悲', '善', '良', '仁', '爱', '灵', '秀', '慧', '敏'], goodMeanings: ['浪漫多情', '艺术天赋', '善良慈悲', '富有想象', '灵性智慧'], avoidChars: ['硬', '刚', '冷', '酷', '实', '际', '俗', '套'], avoidMeanings: ['过于现实', '缺乏浪漫', '冷漠无情'] }
];

// 属相宜忌
const ZODIAC_RADICALS: Record<string, { good: { radicals: string[]; meanings: string[]; examples: string[] }; avoid: { radicals: string[]; meanings: string[]; examples: string[] } }> = {
  '鼠': { good: { radicals: ['米', '豆', '禾', '麦', '梁', '谷', '艹', '口', '宀', '冖', '门', '户', '广', '钅', '玉', '水', '氵', '木', '月', '田'], meanings: ['粮食丰盛', '安居乐业', '有家有室', '富贵荣华', '聪明智慧'], examples: ['精', '粱', '艺', '容', '富', '铭', '玉', '泉', '林', '朋', '画'] }, avoid: { radicals: ['午', '马', '羊', '未', '日', '火', '灬', '人', '亻', '彳', '辶', '走', '弓', '刀', '力'], meanings: ['子午相冲', '子未相害', '见人危险', '奔波劳碌', '刑伤灾祸'], examples: ['骏', '腾', '翔', '炎', '煜', '仁', '行', '进', '强', '刚'] } },
  '牛': { good: { radicals: ['辶', '酉', '鸟', '丑', '车', '氵', '艹', '禾', '谷', '豆', '米', '麦', '宀', '冖', '门', '户', '田', '土'], meanings: ['三合助力', '粮食丰盛', '安居乐业', '田园生活', '事业有成'], examples: ['道', '遵', '鸣', '鸿', '轩', '泽', '艺', '秀', '稳', '容', '富', '画', '坤'] }, avoid: { radicals: ['羊', '未', '马', '午', '彡', '巾', '衣', '示', '王', '大', '君', '帝', '长', '心', '忄'], meanings: ['丑未相冲', '丑午相害', '披彩衣祭', '劳苦一生', '心事重重'], examples: ['祥', '骏', '腾', '彦', '帆', '衫', '礼', '琪', '天', '君', '怡', '恒'] } },
  '虎': { good: { radicals: ['马', '午', '狗', '犬', '宀', '冖', '门', '户', '山', '林', '木', '君', '王', '大', '帝', '令', '肉', '月', '心', '忄'], meanings: ['三合助力', '山林称王', '威风凛凛', '掌权执政', '衣食无忧'], examples: ['骏', '腾', '威', '安', '峰', '林', '森', '琳', '天', '帝', '胜', '怡', '恒'] }, avoid: { radicals: ['申', '袁', '猴', '巳', '蛇', '虫', '人', '亻', '彳', '门', '口', '日', '光', '草', '艹', '皮'], meanings: ['寅申相冲', '寅巳相害', '被人控制', '受困受制', '虎落平阳'], examples: ['坤', '伸', '虹', '仁', '行', '闲', '明', '辉', '艺', '波'] } },
  '兔': { good: { radicals: ['羊', '未', '猪', '亥', '宀', '冖', '门', '户', '口', '艹', '禾', '木', '月', '彡', '巾', '衣', '糸', '纟', '水', '氵'], meanings: ['三合助力', '安居乐业', '丰衣足食', '温柔美丽', '聪明智慧'], examples: ['祥', '豪', '家', '容', '富', '艺', '秀', '林', '朋', '彦', '帆', '衫', '红', '泉'] }, avoid: { radicals: ['鸡', '酉', '鸟', '鼠', '子', '日', '阳', '光', '人', '亻', '心', '忄', '龙', '辰'], meanings: ['卯酉相冲', '子卯相刑', '日晒危险', '被人控制', '心事重重'], examples: ['鸣', '鸿', '明', '辉', '仁', '怡', '振', '宸'] } },
  '龙': { good: { radicals: ['鼠', '子', '猴', '申', '鸡', '酉', '鸟', '水', '氵', '雨', '云', '王', '大', '君', '帝', '令', '日', '月', '星', '珠', '玉', '钅'], meanings: ['三合助力', '得水得势', '王者风范', '日月同辉', '富贵荣华'], examples: ['子', '申', '铭', '鸿', '泽', '雨', '云', '琳', '天', '帝', '明', '朋', '星', '琪', '铭'] }, avoid: { radicals: ['狗', '犬', '戌', '兔', '卯', '龙', '辰', '虫', '蛇', '巳', '山', '田', '土', '艹', '小', '士', '臣'], meanings: ['辰戌相冲', '辰卯相害', '龙游浅水', '困于山林', '不得志'], examples: ['威', '然', '虹', '峰', '画', '坤', '艺', '小', '仕', '贤'] } },
  '蛇': { good: { radicals: ['牛', '丑', '鸡', '酉', '鸟', '宀', '冖', '门', '户', '口', '木', '田', '艹', '虫', '辶', '走', '弓', '刀', '力', '心', '忄', '肉', '月'], meanings: ['三合助力', '安居乐业', '升格变龙', '衣食无忧', '聪明智慧'], examples: ['特', '铭', '鸿', '安', '容', '富', '林', '画', '艺', '虹', '道', '强', '刚', '怡', '胜'] }, avoid: { radicals: ['猪', '亥', '虎', '寅', '日', '火', '灬', '人', '亻', '水', '氵'], meanings: ['巳亥相冲', '寅巳相害', '日晒危险', '被人控制', '水火不容'], examples: ['豪', '家', '明', '炎', '煜', '仁', '泉'] } },
  '马': { good: { radicals: ['虎', '寅', '狗', '犬', '羊', '未', '宀', '冖', '门', '户', '口', '艹', '禾', '木', '田', '金', '钅', '玉', '月', '龙', '辰', '蛇', '巳'], meanings: ['三合助力', '安居乐业', '丰衣足食', '事业有成', '富贵荣华'], examples: ['彪', '威', '然', '祥', '安', '容', '富', '艺', '秀', '林', '画', '铭', '琪', '朋', '振', '虹'] }, avoid: { radicals: ['鼠', '子', '牛', '丑', '水', '氵', '田', '车', '辶', '走'], meanings: ['子午相冲', '丑午相害', '奔波劳碌', '受人驱使', '劳苦一生'], examples: ['子', '特', '泉', '画', '轩', '道'] } },
  '羊': { good: { radicals: ['兔', '卯', '马', '午', '猪', '亥', '宀', '冖', '门', '户', '口', '艹', '禾', '木', '金', '钅', '玉', '田', '豆', '米', '谷'], meanings: ['三合助力', '安居乐业', '丰衣足食', '事业有成', '富贵荣华'], examples: ['艺', '骏', '豪', '安', '容', '富', '艺', '秀', '林', '铭', '琪', '画', '粱', '精'] }, avoid: { radicals: ['牛', '丑', '狗', '犬', '鼠', '子', '心', '忄', '示', '衣', '巾', '彡', '水', '氵'], meanings: ['丑未相冲', '戌未相刑', '心事重重', '披彩衣祭', '水火不容'], examples: ['特', '然', '子', '怡', '礼', '衫', '彦', '泉'] } },
  '猴': { good: { radicals: ['鼠', '子', '龙', '辰', '蛇', '巳', '宀', '冖', '门', '户', '口', '艹', '木', '田', '山', '水', '氵', '人', '亻', '彳', '言', '讠'], meanings: ['三合助力', '安居乐业', '山林称王', '聪明智慧', '能言善道'], examples: ['子', '振', '虹', '安', '容', '富', '艺', '林', '画', '峰', '泉', '仁', '行', '语'] }, avoid: { radicals: ['虎', '寅', '猪', '亥', '日', '火', '灬', '刀', '力', '弓'], meanings: ['寅申相冲', '申亥相害', '日晒危险', '刑伤灾祸', '奔波劳碌'], examples: ['彪', '豪', '明', '炎', '煜', '刚', '强', '张'] } },
  '鸡': { good: { radicals: ['牛', '丑', '龙', '辰', '蛇', '巳', '宀', '冖', '门', '户', '口', '艹', '禾', '木', '田', '金', '钅', '玉', '豆', '米', '谷', '梁'], meanings: ['三合助力', '安居乐业', '丰衣足食', '事业有成', '富贵荣华'], examples: ['特', '振', '安', '容', '富', '艺', '秀', '林', '画', '铭', '琪', '粱', '精'] }, avoid: { radicals: ['兔', '卯', '狗', '犬', '心', '忄', '肉', '月', '刀', '力', '弓', '辶', '走'], meanings: ['卯酉相冲', '酉戌相害', '心事重重', '刑伤灾祸', '奔波劳碌'], examples: ['艺', '然', '怡', '胜', '刚', '强', '张', '道'] } },
  '狗': { good: { radicals: ['虎', '寅', '马', '午', '兔', '卯', '宀', '冖', '门', '户', '口', '艹', '木', '田', '鱼', '水', '氵', '金', '钅', '玉', '人', '亻', '彳'], meanings: ['三合助力', '安居乐业', '丰衣足食', '忠诚可靠', '贵人相助'], examples: ['彪', '骏', '艺', '安', '容', '富', '艺', '林', '画', '泉', '铭', '琪', '仁', '行'] }, avoid: { radicals: ['龙', '辰', '牛', '丑', '鸡', '酉', '羊', '未', '心', '忄', '肉', '月', '示', '衣', '巾', '彡', '日', '火', '灬'], meanings: ['辰戌相冲', '丑戌相刑', '酉戌相害', '心事重重', '披彩衣祭'], examples: ['振', '特', '铭', '祥', '怡', '胜', '礼', '衫', '彦', '明', '炎'] } },
  '猪': { good: { radicals: ['虎', '寅', '兔', '卯', '羊', '未', '宀', '冖', '门', '户', '口', '艹', '禾', '木', '田', '金', '钅', '玉', '豆', '米', '谷', '梁', '肉', '月', '心', '忄'], meanings: ['三合助力', '安居乐业', '丰衣足食', '富贵荣华', '心地善良'], examples: ['彪', '艺', '祥', '安', '容', '富', '艺', '秀', '林', '画', '铭', '琪', '粱', '精', '胜', '怡'] }, avoid: { radicals: ['蛇', '巳', '猴', '申', '日', '火', '灬', '示', '衣', '巾', '彡', '刀', '力', '弓'], meanings: ['巳亥相冲', '申亥相害', '日晒危险', '披彩衣祭', '刑伤灾祸'], examples: ['虹', '坤', '明', '炎', '煜', '礼', '衫', '彦', '刚', '强', '张'] } }
};

// 笔画数字典
const STROKE_COUNT: Record<string, number> = {
  '一': 1, '二': 2, '三': 3, '十': 2, '人': 2, '大': 3, '小': 3, '口': 3, '手': 4, '山': 3,
  '木': 4, '水': 4, '火': 4, '土': 3, '金': 8, '天': 4, '地': 6, '日': 4, '月': 4, '风': 4,
  '雨': 8, '雷': 13, '电': 5, '云': 4, '江': 6, '河': 8, '海': 10, '湖': 12, '波': 8,
  '涛': 10, '林': 8, '森': 12, '松': 8, '柏': 9, '桂': 10, '梅': 11, '华': 6, '花': 7,
  '草': 9, '叶': 5, '竹': 6, '兰': 5, '菊': 11, '红': 6, '黄': 11, '白': 5, '黑': 12,
  '青': 8, '绿': 11, '蓝': 13, '紫': 12, '银': 11, '铜': 11, '铁': 10,
  '锋': 12, '铭': 14, '钧': 12, '钰': 10, '锦': 16,
  '炎': 8, '焱': 12, '炳': 9, '炜': 8, '烁': 11, '焕': 11, '煜': 13, '烨': 14,
  '炯': 9, '煌': 13, '灵': 7, '炬': 8, '烽': 11, '炫': 9, '坤': 8, '城': 9,
  '培': 11, '均': 7, '坦': 8, '坛': 7, '坚': 7, '基': 11, '圣': 5, '域': 11,
  '堂': 11, '壤': 18, '堡': 12, '王': 4, '李': 7, '张': 7, '刘': 6, '陈': 7,
  '杨': 7, '赵': 9, '周': 8, '吴': 7, '徐': 10, '孙': 6, '马': 3,
  '朱': 6, '胡': 9, '郭': 10, '何': 7, '罗': 8, '高': 10, '郑': 8,
  '梁': 11, '谢': 17, '宋': 7, '唐': 10, '许': 6, '韩': 12, '冯': 5, '邓': 4,
  '曹': 11, '彭': 12, '曾': 12, '肖': 7, '田': 5, '董': 15, '袁': 10, '潘': 15,
  '于': 3, '蒋': 12, '蔡': 14, '余': 7, '杜': 7, '程': 12, '苏': 7,
  '魏': 17, '吕': 6, '丁': 2, '任': 6, '沈': 7, '姚': 9, '卢': 5, '姜': 9,
  '崔': 11, '谭': 19, '陆': 7, '汪': 7, '范': 8, '伟': 6, '强': 12, '勇': 9,
  '军': 6, '豪': 14, '杰': 12, '鹏': 19, '磊': 15, '鑫': 24, '峰': 10, '超': 12,
  '亮': 9, '洋': 9, '刚': 6, '婷': 12, '娜': 9, '静': 16, '丽': 7, '敏': 11,
  '燕': 16, '芳': 7, '雪': 11, '琳': 12, '艳': 10, '玲': 9, '霞': 17,
  '萍': 11, '轩': 7, '涵': 12, '晨': 11, '宇': 6, '泽': 16, '欣': 8,
  '怡': 8, '然': 12, '诺': 10, '熙': 14, '桐': 10, '萱': 12, '琪': 12
};

// 好名字库
const GOOD_CHARACTERS: Record<string, Array<{ char: string; meaning: string; wuxing: string; score: number; sound: string; structure: string }>> = {
  male: [
    { char: '伟', meaning: '伟大、宏伟', wuxing: '土', score: 90, sound: '上声', structure: '左右结构' },
    { char: '强', meaning: '坚强、强大', wuxing: '木', score: 88, sound: '阳平', structure: '左右结构' },
    { char: '磊', meaning: '光明磊落', wuxing: '土', score: 87, sound: '上声', structure: '品字形' },
    { char: '军', meaning: '军队、勇武', wuxing: '木', score: 85, sound: '阴平', structure: '上下结构' },
    { char: '勇', meaning: '勇敢、勇猛', wuxing: '土', score: 86, sound: '上声', structure: '上下结构' },
    { char: '杰', meaning: '杰出、优秀', wuxing: '木', score: 89, sound: '阳平', structure: '上下结构' },
    { char: '涛', meaning: '波涛、宏大', wuxing: '水', score: 84, sound: '阴平', structure: '左右结构' },
    { char: '明', meaning: '光明、明亮', wuxing: '火', score: 88, sound: '阳平', structure: '左右结构' },
    { char: '超', meaning: '超越、卓越', wuxing: '金', score: 87, sound: '阴平', structure: '半包围结构' },
    { char: '浩', meaning: '浩大、广阔', wuxing: '水', score: 86, sound: '去声', structure: '左右结构' },
    { char: '宇', meaning: '宇宙、广阔', wuxing: '土', score: 85, sound: '上声', structure: '上下结构' },
    { char: '轩', meaning: '高远、气宇轩昂', wuxing: '土', score: 88, sound: '阴平', structure: '半包围结构' },
    { char: '睿', meaning: '睿智、聪明', wuxing: '金', score: 90, sound: '去声', structure: '上下结构' }
  ],
  female: [
    { char: '婷', meaning: '亭亭玉立', wuxing: '火', score: 90, sound: '阳平', structure: '左右结构' },
    { char: '娜', meaning: '婀娜多姿', wuxing: '火', score: 88, sound: '去声', structure: '左右结构' },
    { char: '静', meaning: '文静优雅', wuxing: '金', score: 87, sound: '去声', structure: '左右结构' },
    { char: '丽', meaning: '美丽动人', wuxing: '火', score: 85, sound: '去声', structure: '上下结构' },
    { char: '敏', meaning: '聪明伶俐', wuxing: '水', score: 86, sound: '上声', structure: '左右结构' },
    { char: '芳', meaning: '芬芳馥郁', wuxing: '木', score: 85, sound: '阴平', structure: '上下结构' },
    { char: '雪', meaning: '纯洁如雪', wuxing: '水', score: 87, sound: '上声', structure: '上下结构' },
    { char: '琳', meaning: '美玉无瑕', wuxing: '木', score: 88, sound: '阳平', structure: '左中右结构' },
    { char: '欣', meaning: '欣欣向荣', wuxing: '木', score: 86, sound: '阴平', structure: '左右结构' },
    { char: '怡', meaning: '怡然自得', wuxing: '土', score: 85, sound: '阳平', structure: '左右结构' },
    { char: '涵', meaning: '涵养深厚', wuxing: '水', score: 88, sound: '阳平', structure: '左右结构' },
    { char: '萱', meaning: '萱草忘忧', wuxing: '木', score: 87, sound: '阴平', structure: '上下结构' },
    { char: '琪', meaning: '琪花瑶草', wuxing: '木', score: 89, sound: '阳平', structure: '左右结构' }
  ]
};

// 获取汉字笔画数
function getStrokeCount(char: string): number {
  return STROKE_COUNT[char] || char.length * 5;
}

// 计算名字总笔画数
function calculateTotalStrokes(name: string): number {
  return name.split('').reduce((sum, char) => sum + getStrokeCount(char), 0);
}

// 笔画数吉凶判断
function judgeStrokeLuck(totalStrokes: number): '吉' | '中' | '凶' {
  const luckyNumbers = [1, 3, 5, 6, 7, 8, 11, 13, 15, 16, 17, 18, 21, 23, 24, 25, 29, 31, 32, 33, 35, 37, 39, 41, 45, 47, 48, 52, 57, 61, 63, 65, 67, 68, 81];
  
  if (luckyNumbers.includes(totalStrokes)) {
    return '吉';
  }
  
  const neutralNumbers = [2, 4, 9, 10, 12, 14, 19, 20, 22, 26, 27, 28, 30, 34, 36, 40, 42, 43, 44, 46, 49, 50, 51, 53, 54, 55, 56, 58, 59, 60, 62, 64, 66, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80];
  
  if (neutralNumbers.includes(totalStrokes)) {
    return '中';
  }
  
  return '凶';
}

// 判断五行相生相克
function checkWuxingRelation(nameWuxing: string[], targetWuxing: string[]): { match: boolean; explanation: string } {
  const sheng: Record<string, string> = { '金': '水', '水': '木', '木': '火', '火': '土', '土': '金' };
  const ke: Record<string, string> = { '金': '木', '木': '土', '土': '水', '水': '火', '火': '金' };
  
  let explanation = '';
  let match = true;
  
  for (let i = 0; i < nameWuxing.length; i++) {
    const charWuxing = nameWuxing[i];
    const prevWuxing = i > 0 ? nameWuxing[i - 1] : null;
    
    if (prevWuxing && sheng[prevWuxing] !== charWuxing) {
      explanation += `${prevWuxing}不生${charWuxing}，`;
      match = false;
    }
  }
  
  if (targetWuxing.length > 0) {
    const hasYongshen = nameWuxing.some(w => targetWuxing.includes(w));
    if (!hasYongshen) {
      explanation += `名字中未包含用神${targetWuxing.join('、')}，`;
      match = false;
    }
  }
  
  if (explanation === '') {
    explanation = '五行相生有序，格局良好。';
  }
  
  return { match, explanation: explanation.slice(0, -1) };
}

// 从姓名中提取五行
function extractWuxingFromName(name: string): string[] {
  const wuxingList: string[] = [];
  
  for (const char of name) {
    let found = false;
    for (const [wuxing, chars] of Object.entries(WUXING_CHARS)) {
      if (chars.includes(char)) {
        wuxingList.push(wuxing);
        found = true;
        break;
      }
    }
    if (!found) {
      wuxingList.push('土');
    }
  }
  
  return wuxingList;
}

// 计算三才五格
function calculateSancai(surname: string, givenName: string) {
  const surnameCount = surname.length;
  const givenNameCount = givenName.length;
  const totalCount = surnameCount + givenNameCount;
  
  const tianGe = surnameCount + 1;
  const renGe = surnameCount + givenNameCount;
  const diGe = givenNameCount + 1;
  const waiGe = totalCount + 1;
  const zongGe = totalCount;
  
  return {
    tianGe,
    renGe,
    diGe,
    waiGe,
    zongGe,
    scores: calculateWugeScores(tianGe, renGe, diGe, waiGe, zongGe)
  };
}

function calculateWugeScores(tianGe: number, renGe: number, diGe: number, waiGe: number, zongGe: number) {
  const isLucky = (value: number, luckyArray: number[]) => luckyArray.includes(value);
  const getMeaning = (value: number) => {
    const meaning = WUGE_MEANINGS[value];
    const result = meaning || { meaning: '未知', description: '暂无解释', lucky: false };
    const { lucky: _, ...rest } = result;
    return rest;
  };
  
  return {
    tianGe: {
      value: tianGe,
      lucky: isLucky(tianGe, WUGE_SCORES['天格'].lucky) ? '吉' : '凶',
      ...getMeaning(tianGe)
    },
    renGe: {
      value: renGe,
      lucky: isLucky(renGe, WUGE_SCORES['人格'].lucky) ? '吉' : '凶',
      ...getMeaning(renGe)
    },
    diGe: {
      value: diGe,
      lucky: isLucky(diGe, WUGE_SCORES['地格'].lucky) ? '吉' : '凶',
      ...getMeaning(diGe)
    },
    waiGe: {
      value: waiGe,
      lucky: isLucky(waiGe, WUGE_SCORES['外格'].lucky) ? '吉' : '凶',
      ...getMeaning(waiGe)
    },
    zongGe: {
      value: zongGe,
      lucky: isLucky(zongGe, WUGE_SCORES['总格'].lucky) ? '吉' : '凶',
      ...getMeaning(zongGe)
    }
  };
}

// 计算命格
function calculateMingge(wuxingCount: Record<string, number>) {
  const sortedWuxing = Object.entries(wuxingCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2)
    .map(entry => entry[0]);
  
  const minggeType = sortedWuxing.join('');
  const minggeInfo = MINGGE_TYPES.find(m => m.type === minggeType) || MINGGE_TYPES[0];
  
  return minggeInfo;
}

// 获取属相
function getZodiacAnimal(year: number): string {
  if (!year || isNaN(year)) {
    return '鼠';
  }
  return ZODIAC_ANIMALS[(year - 4) % 12];
}

// 获取星座
function getZodiacSign(month: number, day: number) {
  const dateStr = `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  
  for (const sign of ZODIAC_SIGNS) {
    if (dateStr >= sign.date && dateStr <= sign.dateEnd) {
      return sign;
    }
  }
  
  return ZODIAC_SIGNS[0];
}

// 计算属相评分
function calculateZodiacScore(name: string, zodiacAnimal: string) {
  let score = 75;
  let analysis = { goodChars: [] as string[], avoidChars: [] as string[], goodMeanings: [] as string[], avoidMeanings: [] as string[] };
  
  const zodiacRadicals = ZODIAC_RADICALS[zodiacAnimal];
  const nameChars = name.split('');
  
  if (zodiacRadicals) {
    nameChars.forEach(char => {
      if (zodiacRadicals.good.examples.includes(char)) {
        score += 5;
        analysis.goodChars.push(char);
      }
      if (zodiacRadicals.avoid.examples.includes(char)) {
        score -= 5;
        analysis.avoidChars.push(char);
      }
    });
    analysis.goodMeanings = zodiacRadicals.good.meanings;
    analysis.avoidMeanings = zodiacRadicals.avoid.meanings;
  }
  
  return { score: Math.min(100, Math.max(0, score)), analysis };
}

// 计算星座评分
function calculateZodiacSignScore(name: string, zodiacSign: typeof ZODIAC_SIGNS[0]) {
  let score = 80;
  let analysis = { goodChars: [] as string[], avoidChars: [] as string[], goodMeanings: [] as string[], avoidMeanings: [] as string[], traits: '', element: '', ruler: '' };
  
  const nameChars = name.split('');
  
  if (zodiacSign) {
    analysis.traits = zodiacSign.traits.join('、');
    analysis.element = zodiacSign.element;
    analysis.ruler = zodiacSign.ruler;
    
    nameChars.forEach(char => {
      if (zodiacSign.goodChars && zodiacSign.goodChars.includes(char)) {
        score += 3;
        analysis.goodChars.push(char);
      }
      if (zodiacSign.avoidChars && zodiacSign.avoidChars.includes(char)) {
        score -= 2;
        analysis.avoidChars.push(char);
      }
    });
    
    analysis.goodMeanings = zodiacSign.goodMeanings || [];
    analysis.avoidMeanings = zodiacSign.avoidMeanings || [];
  }
  
  return { score: Math.min(100, Math.max(0, score)), analysis };
}

// 计算三才评分
function calculateSancaiScore(sancai: ReturnType<typeof calculateSancai>) {
  let score = 0;
  const scores = sancai.scores;
  
  Object.values(scores).forEach(value => {
    score += value.lucky === '吉' ? 20 : 10;
  });
  
  return score;
}

// 音律分析
function calculateToneScore(name: string) {
  let score = 80;
  let analysis = { tones: [] as string[], combination: '', effect: '', recommendation: '' };
  
  const toneTypes = ['阴平', '阳平', '上声', '去声'];
  const nameChars = name.split('');
  const tones = nameChars.map(() => toneTypes[Math.floor(Math.random() * 4)]);
  
  analysis.tones = tones;
  
  const toneKey = tones.length === 2 ? 
    (tones[0] === '阴平' && tones[1] === '阴平' ? '平声组合' :
     tones[0] === '阴平' && tones[1] === '阳平' ? '平仄组合' :
     tones[0] === '上声' && tones[1] === '阴平' ? '仄平组合' : '仄仄组合') :
    (tones[0] === '阴平' && tones[1] === '阳平' && tones[2] === '阴平' ? '三字平仄平' :
     tones[0] === '上声' && tones[1] === '阴平' && tones[2] === '去声' ? '三字仄平仄' :
     tones[0] === '阴平' && tones[1] === '阳平' && tones[2] === '去声' ? '三字平仄仄' : '三字仄仄平');
  
  const toneCombinations: Record<string, { effect: string; score: number }> = {
    '平声组合': { effect: '平稳和谐，朗朗上口', score: 85 },
    '平仄组合': { effect: '抑扬顿挫，富有韵律', score: 90 },
    '仄平组合': { effect: '先抑后扬，富有变化', score: 85 },
    '仄仄组合': { effect: '略显沉重，缺乏变化', score: 75 },
    '三字平仄平': { effect: '平仄相间，韵律优美', score: 95 },
    '三字仄平仄': { effect: '节奏变化，富有韵味', score: 90 },
    '三字平仄仄': { effect: '前轻后重，气势稍弱', score: 80 },
    '三字仄仄平': { effect: '先重后轻，平稳收尾', score: 85 }
  };
  
  const combinationInfo = toneCombinations[toneKey];
  if (combinationInfo) {
    analysis.combination = toneKey;
    analysis.effect = combinationInfo.effect;
    score = combinationInfo.score;
  }
  
  const hasVariety = new Set(tones).size > 1;
  if (hasVariety) {
    score += 5;
    analysis.recommendation = '声调搭配合理，朗朗上口';
  } else {
    analysis.recommendation = '建议增加声调变化，使名字更有韵律感';
  }
  
  return { score: Math.min(100, score), analysis };
}

// 字形分析
function calculateStructureScore(name: string) {
  let score = 80;
  let analysis = { structures: [] as Array<{ char: string; structure: string }>, characteristics: [] as string[], suitable: [] as string[] };
  
  const nameChars = name.split('');
  const structureMap: Record<string, { characteristic: string; suitable: string; examples: string[] }> = {
    '左右结构': { characteristic: '结构均衡，美观大方', suitable: '适合各种场合', examples: ['伟', '强', '明', '婷'] },
    '上下结构': { characteristic: '稳重端庄，层次分明', suitable: '适合正式场合', examples: ['军', '勇', '杰', '芳'] },
    '半包围结构': { characteristic: '外柔内刚，富有内涵', suitable: '适合文化场合', examples: ['超', '庆', '同', '延'] },
    '全包围结构': { characteristic: '完整圆满，包容性强', suitable: '适合家庭场合', examples: ['国', '园', '圆', '回'] },
    '品字形': { characteristic: '稳重厚实，气势宏伟', suitable: '适合重要场合', examples: ['森', '晶', '磊', '鑫'] },
    '独体字': { characteristic: '简洁明快，一目了然', suitable: '适合简洁风格', examples: ['大', '小', '人', '山'] },
    '左中右结构': { characteristic: '层次丰富，结构复杂', suitable: '适合艺术场合', examples: ['琳', '树', '街', '脚'] },
    '上中下结构': { characteristic: '层次分明，结构严谨', suitable: '适合正式场合', examples: ['莫', '掌', '竟', '意'] }
  };
  
  const defaultStructure = '左右结构';
  
  nameChars.forEach(char => {
    let found = false;
    for (const [structureName, structureInfo] of Object.entries(structureMap)) {
      if (structureInfo.examples.includes(char)) {
        analysis.structures.push({ char, structure: structureName });
        analysis.characteristics.push(structureInfo.characteristic);
        analysis.suitable.push(structureInfo.suitable);
        found = true;
        break;
      }
    }
    if (!found) {
      analysis.structures.push({ char, structure: defaultStructure });
    }
  });
  
  const uniqueStructures = new Set(analysis.structures.map(s => s.structure));
  if (uniqueStructures.size > 1) {
    score += 5;
  }
  
  if (analysis.structures.length > 0) {
    score += 5;
  }
  
  return { score: Math.min(100, score), analysis };
}

// 国学分析
function analyzeGuoxue(name: string, gender: string) {
  const characters = [...GOOD_CHARACTERS.male, ...GOOD_CHARACTERS.female];
  const nameChars = name.split('');
  const analysis = {
    shijing: [] as string[],
    tangPoems: [] as string[],
    idioms: [] as string[],
    famousPeople: [] as string[],
    meanings: [] as string[],
    sounds: [] as string[],
    structures: [] as string[]
  };
  
  nameChars.forEach(char => {
    const charInfo = characters.find(c => c.char === char);
    if (charInfo) {
      if (charInfo.meaning) {
        analysis.meanings.push(`${char}：${charInfo.meaning}`);
      }
      if (charInfo.sound) {
        analysis.sounds.push(`${char}：${charInfo.sound}`);
      }
      if (charInfo.structure) {
        analysis.structures.push(`${char}：${charInfo.structure}`);
      }
    }
  });
  
  return analysis;
}

// 计算国学评分
function calculateGuoxueScore(analysis: ReturnType<typeof analyzeGuoxue>) {
  let score = 80;
  
  if (analysis.meanings.length > 0) score += 10;
  if (analysis.sounds.length > 0) score += 5;
  if (analysis.structures.length > 0) score += 5;
  
  return Math.min(100, Math.max(0, score));
}

// 阴阳平衡分析
function analyzeYinYangBalance(name: string) {
  const nameChars = name.split('');
  const analysis = {
    characters: [] as Array<{ char: string; yinYang: string }>,
    yinCount: 0,
    yangCount: 0,
    balance: '',
    suggestion: ''
  };
  
  const yinChars = ['阴', '柔', '静', '宁', '淑', '婉', '娴', '雅', '芳', '芬', '蓉', '芸', '莉', '萍', '婷', '娜', '妮', '妍', '妹', '姗'];
  const yangChars = ['阳', '刚', '强', '勇', '伟', '豪', '杰', '鹏', '锋', '锋', '锐', '雄', '飞', '翔', '骏', '龙', '虎', '彪', '磊', '鑫'];
  
  nameChars.forEach(char => {
    let yinYang = '中';
    if (yinChars.includes(char)) {
      yinYang = '阴';
      analysis.yinCount++;
    } else if (yangChars.includes(char)) {
      yinYang = '阳';
      analysis.yangCount++;
    }
    analysis.characters.push({ char, yinYang });
  });
  
  const ratio = analysis.yangCount / (analysis.yinCount + analysis.yangCount || 1);
  
  if (ratio >= 0.4 && ratio <= 0.6) {
    analysis.balance = '阴阳平衡';
    analysis.suggestion = '名字阴阳搭配和谐，有利于性格平衡发展';
  } else if (ratio > 0.6) {
    analysis.balance = '阳盛阴衰';
    analysis.suggestion = '阳气较重，性格可能偏刚强，建议搭配阴柔之字';
  } else {
    analysis.balance = '阴盛阳衰';
    analysis.suggestion = '阴气较重，性格可能偏柔弱，建议搭配阳刚之字';
  }
  
  return analysis;
}

// 禁忌部首检查
function checkTabooRadicals(name: string) {
  const nameChars = name.split('');
  const analysis = {
    hasTaboo: false,
    tabooChars: [] as Array<{ char: string; radical: string; severity: string }>,
    warnings: [] as string[]
  };
  
  const severeTaboos = ['刀', '刂', '血', '亡', '鬼', '死', '凶', '杀'];
  const moderateTaboos = ['病', '疒', '尸', '骨', '丧', '墓', '哀', '哭'];
  
  nameChars.forEach(char => {
    if (severeTaboos.includes(char)) {
      analysis.hasTaboo = true;
      analysis.tabooChars.push({ char, radical: char, severity: '严重' });
      analysis.warnings.push(`"${char}"字为传统忌用字，建议慎重考虑`);
    } else if (moderateTaboos.includes(char)) {
      analysis.tabooChars.push({ char, radical: char, severity: '中等' });
      analysis.warnings.push(`"${char}"字含义较消极，建议谨慎使用`);
    }
  });
  
  return analysis;
}

// 名字评分
function calculateNameScore(name: string, targetWuxing?: string[], zodiacAnimal?: string, zodiacSign?: typeof ZODIAC_SIGNS[0]): number {
  const strokes = calculateTotalStrokes(name);
  const luck = judgeStrokeLuck(strokes);
  const wuxing = extractWuxingFromName(name);
  const wuxingRelation = checkWuxingRelation(wuxing, targetWuxing || []);
  
  let score = 60;
  
  if (luck === '吉') score += 25;
  else if (luck === '中') score += 10;
  
  if (wuxingRelation.match) score += 15;
  else score += 5;
  
  if (zodiacAnimal) {
    const zodiacResult = calculateZodiacScore(name, zodiacAnimal);
    score += zodiacResult.score * 0.1;
  }
  
  return Math.min(100, Math.max(0, score));
}

// 生成名字建议
function generateNameSuggestions(familyName: string, gender: 'male' | 'female', targetWuxing: string[], count: number): string[] {
  const suggestions: string[] = [];
  const usedNames = new Set<string>();
  
  const maleNames = ['伟', '强', '勇', '军', '豪', '杰', '鹏', '涛', '磊', '鑫', '峰', '超', '亮', '洋', '刚', '轩', '涵', '晨', '宇', '泽'];
  const femaleNames = ['婷', '娜', '静', '丽', '敏', '燕', '芳', '雪', '梅', '琳', '艳', '玲', '华', '霞', '萍', '欣', '怡', '涵', '萱', '琪'];
  const neutralNames = ['轩', '涵', '晨', '宇', '泽', '雨', '欣', '怡', '然', '诺', '熙', '钰', '桐', '萱', '琪'];
  
  const givenNames = gender === 'male' ? [...maleNames, ...neutralNames] : [...femaleNames, ...neutralNames];
  
  const wuxingChars: string[] = [];
  for (const w of targetWuxing) {
    wuxingChars.push(...WUXING_CHARS[w] || []);
  }
  
  const availableChars = wuxingChars.length > 0 ? [...wuxingChars, ...givenNames] : givenNames;
  
  while (suggestions.length < count && availableChars.length >= 2) {
    const char1 = availableChars[Math.floor(Math.random() * availableChars.length)];
    const char2 = availableChars[Math.floor(Math.random() * availableChars.length)];
    const name = familyName + char1 + char2;
    
    if (!usedNames.has(name)) {
      usedNames.add(name);
      suggestions.push(name);
    }
  }
  
  while (suggestions.length < count) {
    const char1 = availableChars[Math.floor(Math.random() * availableChars.length)];
    const char2 = availableChars[Math.floor(Math.random() * availableChars.length)];
    const char3 = availableChars[Math.floor(Math.random() * availableChars.length)];
    const name = familyName + char1 + char2 + char3;
    
    if (!usedNames.has(name)) {
      usedNames.add(name);
      suggestions.push(name);
    }
  }
  
  return suggestions;
}

export interface NameAnalysis {
  name: string;
  strokes: number;
  strokeLuck: '吉' | '中' | '凶';
  wuxing: string[];
  wuxingMatch: boolean;
  wuxingExplanation: string;
  score: number;
  suggestions: Array<{ name: string; score: number; wuxing: string[] }>;
  sancai?: ReturnType<typeof calculateSancai>;
  mingge?: ReturnType<typeof calculateMingge>;
  zodiacAnalysis?: ReturnType<typeof calculateZodiacScore>;
  zodiacSignAnalysis?: ReturnType<typeof calculateZodiacSignScore>;
  toneAnalysis?: ReturnType<typeof calculateToneScore>;
  structureAnalysis?: ReturnType<typeof calculateStructureScore>;
  guoxueAnalysis?: ReturnType<typeof analyzeGuoxue>;
  yinYangAnalysis?: ReturnType<typeof analyzeYinYangBalance>;
  tabooAnalysis?: ReturnType<typeof checkTabooRadicals>;
  wuge?: WuGe;
  wugeDetail?: WuGeDetail;
  sanCai?: SanCai;
  zodiac?: Zodiac;
  xiYong?: XiYong;
  xiYongShen?: string;
}

export interface NameGenerationResult {
  name: string;
  score: number;
  wuxing: string[];
  meaning: string;
}

export function analyzeName(name: string, targetWuxing?: string[], birthday?: { year: number; month: number; day: number }, gender?: 'male' | 'female'): NameAnalysis {
  const strokes = calculateTotalStrokes(name);
  const strokeLuck = judgeStrokeLuck(strokes);
  const wuxing = extractWuxingFromName(name);
  const wuxingRelation = checkWuxingRelation(wuxing, targetWuxing || []);
  
  const familyName = FAMILY_NAMES.find(fn => name.startsWith(fn)) || name.charAt(0);
  const givenName = name.slice(familyName.length);
  
  const familyNameLen = familyName.length;
  const givenNameLen = givenName.length;
  
  const l1 = familyNameLen >= 1 ? getStrokeCount(familyName.charAt(0)) : 0;
  const l2 = familyNameLen >= 2 ? getStrokeCount(familyName.charAt(1)) : 0;
  const f1 = givenNameLen >= 1 ? getStrokeCount(givenName.charAt(0)) : 0;
  const f2 = givenNameLen >= 2 ? getStrokeCount(givenName.charAt(1)) : 0;
  
  const wuge = calcWuGe(l1, l2, f1, f2);
  const wugeDetail = calcWuGeDetail(l1, l2, f1, f2);
  const sanCai = newSanCai(wuge.tianGe, wuge.renGe, wuge.diGe);
  
  const sancai = calculateSancai(familyName, givenName);
  
  const wuxingCount: Record<string, number> = { '金': 0, '木': 0, '水': 0, '火': 0, '土': 0 };
  wuxing.forEach(w => wuxingCount[w]++);
  const mingge = calculateMingge(wuxingCount);
  
  let zodiacAnalysis: ReturnType<typeof calculateZodiacScore> | undefined;
  let zodiacSignAnalysis: ReturnType<typeof calculateZodiacSignScore> | undefined;
  let zodiac: Zodiac | undefined;
  
  if (birthday) {
    const zodiacAnimal = getZodiacAnimal(birthday.year);
    zodiacAnalysis = calculateZodiacScore(name, zodiacAnimal);
    zodiacSignAnalysis = calculateZodiacSignScore(name, getZodiacSign(birthday.month, birthday.day));
    zodiac = getZodiac(birthday.year);
  }
  
  const xiYong = calcXiYong(wuxing, wuxing[0] || '土');
  const xiYongShen = getXiYongShen(xiYong);
  
  const toneAnalysis = calculateToneScore(name);
  const structureAnalysis = calculateStructureScore(name);
  const guoxueAnalysis = analyzeGuoxue(name, gender || 'male');
  const yinYangAnalysis = analyzeYinYangBalance(name);
  const tabooAnalysis = checkTabooRadicals(name);
  
  const score = Math.round(
    calculateNameScore(name, targetWuxing) * 0.3 +
    calculateSancaiScore(sancai) * 0.2 +
    toneAnalysis.score * 0.2 +
    structureAnalysis.score * 0.15 +
    calculateGuoxueScore(guoxueAnalysis) * 0.15
  );
  
  return {
    name,
    strokes,
    strokeLuck,
    wuxing,
    wuxingMatch: wuxingRelation.match,
    wuxingExplanation: wuxingRelation.explanation,
    score,
    suggestions: [],
    sancai,
    mingge,
    zodiacAnalysis,
    zodiacSignAnalysis,
    toneAnalysis,
    structureAnalysis,
    guoxueAnalysis,
    yinYangAnalysis,
    tabooAnalysis,
    wuge,
    wugeDetail,
    sanCai,
    zodiac,
    xiYong,
    xiYongShen
  };
}

export function generateNames(familyName: string, gender: 'male' | 'female', targetWuxing: string[], count: number = 10): NameGenerationResult[] {
  const suggestions = generateNameSuggestions(familyName, gender, targetWuxing, count);
  
  return suggestions.map(name => ({
    name,
    score: calculateNameScore(name, targetWuxing),
    wuxing: extractWuxingFromName(name),
    meaning: getNameMeaning(name)
  })).sort((a, b) => b.score - a.score);
}

export function getNameMeaning(name: string): string {
  const meanings: Record<string, string> = {
    '伟': '伟大、卓越', '强': '坚强、有力', '勇': '勇敢、无畏', '军': '军人、刚强', '豪': '豪爽、大气',
    '杰': '杰出、优秀', '鹏': '大鹏展翅', '涛': '波涛汹涌', '磊': '光明磊落', '鑫': '财富兴盛',
    '峰': '山峰之巅', '超': '超越非凡', '亮': '光明照耀', '洋': '广阔海洋', '刚': '刚正不阿',
    '婷': '亭亭玉立', '娜': '婀娜多姿', '静': '文静优雅', '丽': '美丽动人', '敏': '聪明伶俐',
    '燕': '燕子归来', '芳': '芬芳馥郁', '雪': '纯洁如雪', '梅': '梅花傲雪', '琳': '美玉无瑕',
    '艳': '艳丽多姿', '玲': '玲珑剔透', '华': '华丽多彩', '霞': '云霞满天', '萍': '萍水相逢',
    '轩': '高雅轩昂', '涵': '涵养深厚', '晨': '清晨阳光', '宇': '气宇轩昂', '泽': '恩泽深厚',
    '雨': '雨露滋润', '欣': '欣欣向荣', '怡': '怡然自得', '然': '自然纯真', '诺': '信守承诺',
    '熙': '光明兴盛', '钰': '金玉良缘', '桐': '梧桐引凤', '萱': '萱草忘忧', '琪': '琪花瑶草'
  };
  
  let result = '';
  for (let i = 0; i < name.length; i++) {
    const char = name[i];
    if (meanings[char]) {
      result += `${char}：${meanings[char]}，`;
    }
  }
  
  return result.slice(0, -1) || '名字寓意美好，内涵丰富。';
}