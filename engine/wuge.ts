// 五格数理算法（从fate/wuge.go移植）

export interface WuGe {
  tianGe: number;
  renGe: number;
  diGe: number;
  waiGe: number;
  zongGe: number;
}

export interface WuGeDetail extends WuGe {
  tianGeInfo: DaYanInfo;
  renGeInfo: DaYanInfo;
  diGeInfo: DaYanInfo;
  waiGeInfo: DaYanInfo;
  zongGeInfo: DaYanInfo;
}

export interface DaYanInfo {
  number: number;
  lucky: string;
  isMax: boolean;
  isNotSuitableForFemale: boolean;
  skyNine: string;
  comment: string;
}

// 大衍之数表（从fate/dayan.go移植）
const daYanList: DaYanInfo[] = [
  { number: 1, lucky: "吉", isMax: false, isNotSuitableForFemale: false, skyNine: "太极之数", comment: "太极之数，万物开泰，生发无穷，利禄亨通。" },
  { number: 2, lucky: "凶", isMax: false, isNotSuitableForFemale: false, skyNine: "两仪之数", comment: "两仪之数，混沌未开，进退保守，志望难达。" },
  { number: 3, lucky: "吉", isMax: false, isNotSuitableForFemale: false, skyNine: "三才之数", comment: "三才之数，天地人和，大事大业，繁荣昌隆。" },
  { number: 4, lucky: "凶", isMax: false, isNotSuitableForFemale: false, skyNine: "四象之数", comment: "四象之数，待于生发，万事慎重，不具营谋。" },
  { number: 5, lucky: "吉", isMax: false, isNotSuitableForFemale: false, skyNine: "五行之数", comment: "五行俱权，循环相生，圆通畅达，福祉无穷。" },
  { number: 6, lucky: "吉", isMax: false, isNotSuitableForFemale: false, skyNine: "六爻之数", comment: "六爻之数，发展变化，天赋美德，吉祥安泰。" },
  { number: 7, lucky: "吉", isMax: false, isNotSuitableForFemale: false, skyNine: "七政之数", comment: "七政之数，精悍严谨，天赋之力，吉星照耀。" },
  { number: 8, lucky: "半吉", isMax: false, isNotSuitableForFemale: false, skyNine: "八卦之数", comment: "八卦之数，乾坎艮震，巽离坤兑，无穷无尽。" },
  { number: 9, lucky: "凶", isMax: false, isNotSuitableForFemale: false, skyNine: "大成之数", comment: "大成之数，蕴涵凶险，或成或败，难以把握。" },
  { number: 10, lucky: "凶", isMax: false, isNotSuitableForFemale: false, skyNine: "终结之数", comment: "终结之数，雪暗飘零，偶或有成，回顾茫然。" },
  { number: 11, lucky: "吉", isMax: false, isNotSuitableForFemale: false, skyNine: "旱苗逢雨", comment: "万物更新，调顺发达，恢弘泽世，繁荣富贵。" },
  { number: 12, lucky: "凶", isMax: false, isNotSuitableForFemale: false, skyNine: "掘井无泉", comment: "无理之数，发展薄弱，虽生不足，难酬志向。" },
  { number: 13, lucky: "吉", isMax: false, isNotSuitableForFemale: false, skyNine: "春日牡丹", comment: "才艺多能，智谋奇略，忍柔当事，鸣奏大功。" },
  { number: 14, lucky: "凶", isMax: false, isNotSuitableForFemale: false, skyNine: "破兆", comment: "家庭缘薄，孤独遭难，谋事不达，悲惨不测。" },
  { number: 15, lucky: "吉", isMax: false, isNotSuitableForFemale: false, skyNine: "福寿", comment: "福寿圆满，富贵荣誉，涵养雅量，德高望重。" },
  { number: 16, lucky: "吉", isMax: false, isNotSuitableForFemale: false, skyNine: "厚重", comment: "厚重载德，安富尊荣，财官双美，功成名就。" },
  { number: 17, lucky: "半吉", isMax: false, isNotSuitableForFemale: false, skyNine: "刚强", comment: "权威刚强，突破万难，如能容忍，必获成功。" },
  { number: 18, lucky: "半吉", isMax: false, isNotSuitableForFemale: false, skyNine: "铁镜重磨", comment: "权威显达，博得名利，且养柔德，功成名就。" },
  { number: 19, lucky: "凶", isMax: false, isNotSuitableForFemale: false, skyNine: "多难", comment: "风云蔽日，辛苦重来，虽有智谋，万事挫折。" },
  { number: 20, lucky: "凶", isMax: false, isNotSuitableForFemale: false, skyNine: "屋下藏金", comment: "非业破运，灾难重重，进退维谷，万事难成。" },
  { number: 21, lucky: "吉", isMax: false, isNotSuitableForFemale: true, skyNine: "明月中天", comment: "光风霁月，万物确立，官运亨通，大搏名利。女性不宜此数。" },
  { number: 22, lucky: "凶", isMax: false, isNotSuitableForFemale: false, skyNine: "秋草逢霜", comment: "秋草逢霜，困难疾弱，虽出豪杰，人生波折。" },
  { number: 23, lucky: "吉", isMax: false, isNotSuitableForFemale: true, skyNine: "壮丽", comment: "旭日东升，壮丽壮观，权威旺盛，功名荣达。女性不宜此数。" },
  { number: 24, lucky: "吉", isMax: false, isNotSuitableForFemale: false, skyNine: "掘藏得金", comment: "家门余庆，金钱丰盈，白手成家，财源广进。" },
  { number: 25, lucky: "半吉", isMax: false, isNotSuitableForFemale: false, skyNine: "荣俊", comment: "资性英敏，才能奇特，克服傲慢，尚可成功。" },
  { number: 26, lucky: "凶", isMax: false, isNotSuitableForFemale: false, skyNine: "变怪", comment: "变怪之谜，英雄豪杰，波澜重叠，而奏大功。" },
  { number: 27, lucky: "凶", isMax: false, isNotSuitableForFemale: false, skyNine: "增长", comment: "欲望无止，自我强烈，多受毁谤，尚可成功。" },
  { number: 28, lucky: "凶", isMax: false, isNotSuitableForFemale: true, skyNine: "阔水浮萍", comment: "遭难之数，豪杰气概，四海漂泊，终世浮躁。女性不宜此数。" },
  { number: 29, lucky: "吉", isMax: false, isNotSuitableForFemale: false, skyNine: "智谋", comment: "智谋优秀，财力归集，名闻海内，成就大业。" },
  { number: 30, lucky: "半吉", isMax: false, isNotSuitableForFemale: false, skyNine: "非运", comment: "沉浮不定，凶吉难变，若明若暗，大成大败。" },
  { number: 31, lucky: "吉", isMax: false, isNotSuitableForFemale: false, skyNine: "春日花开", comment: "智勇得志，博得名利，统领众人，繁荣富贵。" },
  { number: 32, lucky: "吉", isMax: false, isNotSuitableForFemale: false, skyNine: "宝马金鞍", comment: "侥幸多望，贵人得助，财帛如裕，繁荣至上。" },
  { number: 33, lucky: "吉", isMax: false, isNotSuitableForFemale: true, skyNine: "旭日升天", comment: "旭日升天，鸾凤相会，名闻天下，隆昌至极。女性不宜此数。" },
  { number: 34, lucky: "凶", isMax: false, isNotSuitableForFemale: false, skyNine: "破家", comment: "破家之身，见识短小，辛苦遭逢，灾祸至极。" },
  { number: 35, lucky: "吉", isMax: false, isNotSuitableForFemale: false, skyNine: "高楼望月", comment: "温和平静，智达通畅，文昌技艺，奏功洋洋。" },
  { number: 36, lucky: "半吉", isMax: false, isNotSuitableForFemale: false, skyNine: "波澜重叠", comment: "波澜重叠，沉浮万状，侠肝义胆，舍己成仁。" },
  { number: 37, lucky: "吉", isMax: false, isNotSuitableForFemale: false, skyNine: "猛虎出林", comment: "权威显达，热诚忠信，宜着雅量，终身荣富。" },
  { number: 38, lucky: "半吉", isMax: false, isNotSuitableForFemale: false, skyNine: "磨铁成针", comment: "意志薄弱，刻意经营，才识不凡，技艺有成。" },
  { number: 39, lucky: "半吉", isMax: false, isNotSuitableForFemale: false, skyNine: "富贵荣华", comment: "富贵荣华，财帛丰盈，暗藏险象，德泽四方。" },
  { number: 40, lucky: "凶", isMax: false, isNotSuitableForFemale: false, skyNine: "退安", comment: "智谋胆力，冒险投机，沉浮不定，退保平安。" },
  { number: 41, lucky: "吉", isMax: true, isNotSuitableForFemale: false, skyNine: "有德", comment: "纯阳独秀，德高望重，和顺畅达，博得名利。此数为最大好运数。" },
  { number: 42, lucky: "凶", isMax: false, isNotSuitableForFemale: false, skyNine: "寒蝉在柳", comment: "博识多能，精通世情，如能专心，尚可成功。" },
  { number: 43, lucky: "凶", isMax: false, isNotSuitableForFemale: false, skyNine: "散财破产", comment: "散财破产，诸事不遂，虽有智谋，财来财去。" },
  { number: 44, lucky: "凶", isMax: false, isNotSuitableForFemale: false, skyNine: "烦闷", comment: "破家亡身，暗藏惨淡，事不如意，乱世怪杰。" },
  { number: 45, lucky: "吉", isMax: false, isNotSuitableForFemale: false, skyNine: "顺风", comment: "新生泰和，顺风扬帆，智谋经纬，富贵繁荣。" },
  { number: 46, lucky: "凶", isMax: false, isNotSuitableForFemale: false, skyNine: "浪里淘金", comment: "载宝沉舟，浪里淘金，大难尝尽，大功有成。" },
  { number: 47, lucky: "吉", isMax: false, isNotSuitableForFemale: false, skyNine: "点石成金", comment: "花开之象，万事如意，祯祥吉庆，天赋幸福。" },
  { number: 48, lucky: "吉", isMax: false, isNotSuitableForFemale: false, skyNine: "古松立鹤", comment: "智谋兼备，德量荣达，威望成师，洋洋大观。" },
  { number: 49, lucky: "半吉", isMax: false, isNotSuitableForFemale: false, skyNine: "转变", comment: "吉临则吉，凶来则凶，转凶为吉，配好三才。" },
  { number: 50, lucky: "半吉", isMax: false, isNotSuitableForFemale: false, skyNine: "小舟入海", comment: "一成一败，吉凶参半，先得庇荫，后遭凄惨。" },
  { number: 51, lucky: "半吉", isMax: false, isNotSuitableForFemale: false, skyNine: "沉浮", comment: "盛衰交加，波澜重叠，如能慎始，必获成功。" },
  { number: 52, lucky: "吉", isMax: false, isNotSuitableForFemale: false, skyNine: "达眼", comment: "卓识达眼，先见之明，智谋超群，名利双收。" },
  { number: 53, lucky: "凶", isMax: false, isNotSuitableForFemale: false, skyNine: "曲卷难星", comment: "外祥内患，外祸内安，先富后贫，先贫后富。" },
  { number: 54, lucky: "凶", isMax: false, isNotSuitableForFemale: false, skyNine: "石上栽花", comment: "石上栽花，难得有活，忧闷烦来，辛惨不绝。" },
  { number: 55, lucky: "半吉", isMax: false, isNotSuitableForFemale: false, skyNine: "善恶", comment: "善善得恶，恶恶得善，吉到极限，反生凶险。" },
  { number: 56, lucky: "凶", isMax: false, isNotSuitableForFemale: false, skyNine: "浪里行舟", comment: "历尽艰辛，四周障碍，万事龃龌，做事难成。" },
  { number: 57, lucky: "吉", isMax: false, isNotSuitableForFemale: false, skyNine: "日照春松", comment: "寒雪青松，夜莺吟春，必遭一过，繁荣白事。" },
  { number: 58, lucky: "半吉", isMax: false, isNotSuitableForFemale: false, skyNine: "晚行遇月", comment: "沉浮多端，先苦后甜，宽宏扬名，富贵繁荣。" },
  { number: 59, lucky: "凶", isMax: false, isNotSuitableForFemale: false, skyNine: "寒蝉悲风", comment: "寒蝉悲风，意志衰退，缺乏忍耐，苦难不休。" },
  { number: 60, lucky: "凶", isMax: false, isNotSuitableForFemale: false, skyNine: "无谋", comment: "无谋之人，漂泊不定，晦暝暗黑，动摇不安。" },
  { number: 61, lucky: "吉", isMax: false, isNotSuitableForFemale: false, skyNine: "牡丹芙蓉", comment: "牡丹芙蓉，花开富贵，名利双收，定享天赋。" },
  { number: 62, lucky: "凶", isMax: false, isNotSuitableForFemale: false, skyNine: "衰败", comment: "衰败之象，内外不和，志望难达，灾祸频来。" },
  { number: 63, lucky: "吉", isMax: false, isNotSuitableForFemale: false, skyNine: "舟归平海", comment: "富贵荣华，身心安泰，雨露惠泽，万事亨通。" },
  { number: 64, lucky: "凶", isMax: false, isNotSuitableForFemale: false, skyNine: "非命", comment: "骨肉分离，孤独悲愁，难得心安，做事不成。" },
  { number: 65, lucky: "吉", isMax: false, isNotSuitableForFemale: false, skyNine: "巨流归海", comment: "天长地久，家运隆昌，福寿绵长，事事成就。" },
  { number: 66, lucky: "凶", isMax: false, isNotSuitableForFemale: false, skyNine: "岩头步马", comment: "进退维谷，艰难不堪，等待时机，一跃而起。" },
  { number: 67, lucky: "吉", isMax: false, isNotSuitableForFemale: false, skyNine: "顺风通达", comment: "天赋幸运，四通八达，家道繁昌，富贵东来。" },
  { number: 68, lucky: "吉", isMax: false, isNotSuitableForFemale: false, skyNine: "顺风吹帆", comment: "智虑周密，集众信达，发明能智，拓展昂进。" },
  { number: 69, lucky: "凶", isMax: false, isNotSuitableForFemale: false, skyNine: "非业", comment: "非业非力，精神迫滞，灾害交至，遍偿痛苦。" },
  { number: 70, lucky: "凶", isMax: false, isNotSuitableForFemale: false, skyNine: "残菊逢霜", comment: "残菊逢霜，寂寞无碍，惨淡忧愁，晚景凄凉。" },
  { number: 71, lucky: "半吉", isMax: false, isNotSuitableForFemale: false, skyNine: "石上金花", comment: "石上金花，内心劳苦，贯彻始终，定可昌隆。" },
  { number: 72, lucky: "半吉", isMax: false, isNotSuitableForFemale: false, skyNine: "劳苦", comment: "荣苦相伴，阴云覆月，外表吉祥，内实凶祸。" },
  { number: 73, lucky: "半吉", isMax: false, isNotSuitableForFemale: false, skyNine: "无勇", comment: "盛衰交加，徒有高志，天王福祉，终世平安。" },
  { number: 74, lucky: "凶", isMax: false, isNotSuitableForFemale: false, skyNine: "残菊经霜", comment: "残菊经霜，秋叶寂寞，无能无智，辛苦繁多。" },
  { number: 75, lucky: "凶", isMax: false, isNotSuitableForFemale: false, skyNine: "退守", comment: "退守保吉，发迹甚迟，虽有吉象，无谋难成。" },
  { number: 76, lucky: "凶", isMax: false, isNotSuitableForFemale: false, skyNine: "离散", comment: "倾覆离散，骨肉分离，内外不和，虽劳无功。" },
  { number: 77, lucky: "半吉", isMax: false, isNotSuitableForFemale: false, skyNine: "半吉", comment: "家庭有悦，半吉半凶，能获援护，陷落不幸。" },
  { number: 78, lucky: "凶", isMax: false, isNotSuitableForFemale: false, skyNine: "晚苦", comment: "祸福参半，先天智能，中年发达，晚景困苦。" },
  { number: 79, lucky: "凶", isMax: false, isNotSuitableForFemale: false, skyNine: "云头望月", comment: "云头望月，身疲力尽，穷迫不伸，精神不定。" },
  { number: 80, lucky: "凶", isMax: false, isNotSuitableForFemale: false, skyNine: "遁吉", comment: "辛苦不绝，早入隐遁，安心立命，化凶转吉。" },
  { number: 81, lucky: "吉", isMax: false, isNotSuitableForFemale: false, skyNine: "万物回春", comment: "最吉之数，还本归元，吉祥重叠，富贵尊荣。" },
];

export function getDaYan(num: number): DaYanInfo {
  if (num <= 0) {
    throw new Error("Invalid number");
  }
  const index = (num - 1) % 81;
  return daYanList[index];
}

// 天格（复姓）姓的笔画相加；天格（单姓）姓的笔画上加一
function tianGe(l1: number, l2: number): number {
  if (l2 === 0) {
    return l1 + 1;
  }
  return l1 + l2;
}

// 人格（复姓）姓氏的第二字的笔画加名的第一字；人格（单姓）姓加名的第一字
function renGe(l1: number, l2: number, f1: number): number {
  if (l2 !== 0) {
    return l2 + f1;
  }
  return l1 + f1;
}

// 地格（复姓复名，单姓复名）名字相加；地格（复姓单名，单姓单名）名字+1
function diGe(f1: number, f2: number): number {
  if (f2 === 0) {
    return f1 + 1;
  }
  return f1 + f2;
}

// 外格计算
function waiGe(l1: number, l2: number, f2: number): number {
  if (l2 === 0 && f2 === 0) {
    return 1 + 1;
  }
  if (l2 === 0 && f2 !== 0) {
    return 1 + f2;
  }
  if (l2 !== 0 && f2 === 0) {
    return l1 + 1;
  }
  return l1 + f2;
}

// 总格，姓加名的笔画总数
function zongGe(l1: number, l2: number, f1: number, f2: number): number {
  let zg = (l1 + l2 + f1 + f2) - 1;
  if (zg < 0) {
    zg = zg + 81;
  }
  return (zg % 81) + 1;
}

export function calcWuGe(l1: number, l2: number, f1: number, f2: number): WuGe {
  return {
    tianGe: tianGe(l1, l2),
    renGe: renGe(l1, l2, f1),
    diGe: diGe(f1, f2),
    waiGe: waiGe(l1, l2, f2),
    zongGe: zongGe(l1, l2, f1, f2),
  };
}

export function calcWuGeDetail(l1: number, l2: number, f1: number, f2: number): WuGeDetail {
  const wuge = calcWuGe(l1, l2, f1, f2);
  return {
    ...wuge,
    tianGeInfo: getDaYan(wuge.tianGe),
    renGeInfo: getDaYan(wuge.renGe),
    diGeInfo: getDaYan(wuge.diGe),
    waiGeInfo: getDaYan(wuge.waiGe),
    zongGeInfo: getDaYan(wuge.zongGe),
  };
}

export function checkWuGe(wuge: WuGe, luckyValues: string[] = ["吉", "半吉"]): boolean {
  const tian = getDaYan(wuge.tianGe);
  const ren = getDaYan(wuge.renGe);
  const di = getDaYan(wuge.diGe);
  const wai = getDaYan(wuge.waiGe);
  const zong = getDaYan(wuge.zongGe);
  
  return luckyValues.includes(tian.lucky) &&
         luckyValues.includes(ren.lucky) &&
         luckyValues.includes(di.lucky) &&
         luckyValues.includes(wai.lucky) &&
         luckyValues.includes(zong.lucky);
}