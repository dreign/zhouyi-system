'use client';

import { ReactNode } from 'react';
import BaguaDerivation from './diagrams/BaguaDerivation';
import WuxingDiagram from './diagrams/WuxingDiagram';
import TianganDizhiTable from './diagrams/TianganDizhiTable';
import GongXingHua from './diagrams/GongXingHua';
import SizhuStructure from './diagrams/SizhuStructure';
import WugeStructure from './diagrams/WugeStructure';
import GuaStructure from './diagrams/GuaStructure';

export interface KnowledgeSection {
  title: string;
  content: string;
  diagram?: ReactNode;
}

export interface KnowledgePageConfig {
  title: string;
  icon: string;
  sections: KnowledgeSection[];
}

// Each page gets its own knowledge config
// The config uses Chinese hardcoded text for now (translations handled via messages files)
// These are the fallback/default values

export const KNOWLEDGE_CONFIGS: Record<string, KnowledgePageConfig> = {
  home: {
    title: '周易基础哲学',
    icon: '☯',
    sections: [
      {
        title: '太极生两仪',
        content: '太极是宇宙最原始的状态，分为阴阳（两仪）。阴（--）代表静、暗、柔；阳（—）代表动、明、刚。阴阳对立统一，是万物变化的总根源。',
      },
      {
        title: '两仪生四象',
        content: '阴阳进一步组合为四象：太阳（老阳）、少阴、少阳、太阴（老阴）。四象代表四季、四方等自然现象。',
      },
      {
        title: '四象生八卦',
        content: '四象再各加一爻，形成八卦：乾（天）、兑（泽）、离（火）、震（雷）、巽（风）、坎（水）、艮（山）、坤（地）。八卦是周易的基石。',
        diagram: undefined, // will be set below after import
      },
    ],
  },
  yi: {
    title: '易经占卜入门',
    icon: '䷀',
    sections: [
      {
        title: '八卦的形成',
        content: '八卦由三个爻（阳爻—或阴爻--）上下叠加而成，每个卦代表一种自然现象和人事状态。八卦两两相重，构成六十四卦。',
      },
      {
        title: '六十四卦结构',
        content: '每卦由上下两个八卦组成（共六爻）。下卦代表内因/现状，上卦代表外因/发展趋势。每卦有卦名、卦辞、爻辞，是占卜解读的依据。',
      },
      {
        title: '起卦方法简介',
        content: '本系统支持三种起卦方式：(1) 随机起卦 — 系统自动生成；(2) 金钱卦 — 输入6个数字模拟六次摇卦；(3) 数字卦 — 输入任意三个数字起卦。',
        diagram: undefined,
      },
    ],
  },
  bazi: {
    title: '八字命理入门',
    icon: '📜',
    sections: [
      {
        title: '天干地支',
        content: '十天干（甲乙丙丁戊己庚辛壬癸）和十二地支（子丑寅卯辰巳午未申酉戌亥）是八字的基础。天干代表天象，地支代表地理，组合起来记录时间。',
        diagram: undefined, // TianganDizhiTable
      },
      {
        title: '五行相生相克',
        content: '五行（金木水火土）是宇宙万物的五种基本属性。相生（相互促进）：木生火→火生土→土生金→金生水→水生木。相克（相互制约）：木克土→土克水→水克火→火克金→金克木。',
        diagram: undefined, // WuxingDiagram
      },
    ],
  },
  // marriage page will use a simpler approach - just a collapsible panel with content
  marriage: {
    title: '生肖合婚知识',
    icon: '🐉',
    sections: [
      {
        title: '六合生肖（上等婚配）',
        content: '鼠牛合、虎猪合、兔狗合、龙鸡合、蛇猴合、马羊合。六合是生肖间最强的良性互动，代表天生一对，性格互补。',
      },
      {
        title: '三合生肖（次等婚配）',
        content: '申子辰（猴鼠龙）、亥卯未（猪兔羊）、寅午戌（虎马狗）、巳酉丑（蛇鸡牛）。三合生肖在一起，互相信任、相互成就。',
      },
      {
        title: '相冲生肖（需磨合）',
        content: '鼠马冲、牛羊冲、虎猴冲、兔鸡冲、龙狗冲、蛇猪冲。相冲不代表不能在一起，而是性格差异大，需要更多理解和包容。',
      },
    ],
  },
  ziwei: {
    title: '紫微斗数三元体系',
    icon: '⭐',
    sections: [
      {
        title: '宫 — 人生十二领域',
        content: '命盘分为十二宫：命宫、兄弟宫、夫妻宫、子女宫、财帛宫、疾厄宫、迁移宫、交友宫、官禄宫、田宅宫、福德宫、父母宫。每宫代表一个人生领域。',
      },
      {
        title: '星 — 十四主星体系',
        content: '紫微斗数有14颗主星，分属四大类型：紫微天府天相（领导型）、天机文昌文曲（智慧型）、七杀破军武曲（行动型）、廉贞贪狼太阴（情感型）。',
      },
      {
        title: '化 — 四化能量变化',
        content: '四化（禄权科忌）是天干能量变化的结果：化禄（得利/机遇）、化权（掌权/能力）、化科（名声/贵人）、化忌（阻碍/代价）。四化所在宫位就是运势变化的关键。',
        diagram: undefined, // GongXingHua
      },
    ],
  },
  name: {
    title: '姓名学基础',
    icon: '📝',
    sections: [
      {
        title: '五格剖象法',
        content: '五格是天格、人格、地格、外格、总格的合称。天格代表先天运势（姓氏笔画+1），人格代表一生运程（姓+名首字），地格代表早年运势（名字笔画和），外格代表外界影响，总格代表一生总运。五格之间生克关系也会影响运势走向。',
      },
      {
        title: '音律分析',
        content: '姓名读音的平仄搭配、声调协调性直接影响名字是否响亮悦耳。好的名字读起来朗朗上口，声调有起伏有节奏。三字名最好平仄搭配，避免全部同音同调。',
      },
      {
        title: '字形结构',
        content: '汉字有独体、左右、上下、包围等结构。姓名字形搭配影响视觉美感和书写流畅度。笔画繁简搭配合理、结构变化有致，写出来才好看。切记笔画数不宜过多过杂。',
      },
      {
        title: '阴阳五行属性',
        content: '每个汉字都有阴阳和五行属性。姓名中阴阳平衡、五行互补，能对运势产生积极影响。缺什么补什么、过什么泄什么，是起名改名的基本原则。',
        diagram: undefined, // WugeStructure
      },
      {
        title: '生肖搭配',
        content: '姓名用字应配合宝宝的生肖喜忌。例如鼠宝宝喜用"口"、"宀"（有窝住）、"米"、"豆"（有吃食）；虎宝宝喜用"山"、"林"、"王"（有地盘），忌用"申"、"辶"等冲克字形。',
      },
      {
        title: '避讳禁忌',
        content: '取名要避免与长辈同名同音，避开不雅谐音（如"杜子腾"谐音肚子疼），避免生僻字（难认难写），避免多音字（易读错），避免贬义字（如"穷""败"），以及注意方言读音差异。',
      },
      {
        title: '三才五格吉凶',
        content: '三才（天格人格地格）的五行生克关系对姓名格局影响很大。三才相生（如木火、火土、土金）为吉，相克（如木土、水火）则需谨慎。总格数理也有吉凶之分，如 1、3、5、6 等为吉数，4、9、10 等为凶数。',
      },
    ],
  },
  book: {
    title: '周易全书导读',
    icon: '📖',
    sections: [
      {
        title: '六十四卦结构',
        content: '《周易》分为上下经：上经30卦（从乾坤到离卦），下经34卦（从咸卦到未济卦）。每卦六爻，共384爻，构成了完整的卦爻体系。',
      },
      {
        title: '十翼 — 理解周易的钥匙',
        content: '"十翼"是孔子及其弟子为周易作的十篇传文，包括彖传上下、象传上下、系辞传上下、文言传、说卦传、序卦传、杂卦传。它们是理解周易卦辞爻辞的重要辅助。',
        diagram: undefined, // GuaStructure
      },
    ],
  },
};

// Inject diagram components after config definition
// (This avoids circular reference issues with JSX in static objects)
KNOWLEDGE_CONFIGS.home.sections[2].diagram = <BaguaDerivation />;
KNOWLEDGE_CONFIGS.yi.sections[2].diagram = <BaguaDerivation />;
KNOWLEDGE_CONFIGS.bazi.sections[0].diagram = <TianganDizhiTable />;
KNOWLEDGE_CONFIGS.bazi.sections[1].diagram = <WuxingDiagram />;
KNOWLEDGE_CONFIGS.ziwei.sections[2].diagram = <GongXingHua />;
KNOWLEDGE_CONFIGS.name.sections[1].diagram = <WugeStructure />;
KNOWLEDGE_CONFIGS.book.sections[1].diagram = <GuaStructure />;
