// 地支关系类型
export type DizhiRelation = 'liuhe' | 'liuchong' | 'liuhai';

export interface DizhiRelationMap {
  liuhe: [string, string][];      // 六合配对
  liuchong: [string, string][];   // 六冲配对
  liuhai: [string, string][];     // 六害配对
}

// 三方四正
export interface SanfangSizheng {
  sanfang: number[];     // 三方宫位索引（3个）
  sizheng: number;       // 对宫索引（1个）
  names: {
    sanfang: string[];   // 三方宫位名称
    sizheng: string;     // 对宫名称
  };
}

// 立太极结果
export interface LiTaiJiResult {
  originalMingGongBranch: string;
  newMingGongBranch: string;
  originPalaceName: string;
  // 重新计算后的宫位（复用 ZiweiPlate 中的 palaces 结构）
  recalculatedPalaces: Array<{
    index: number;
    name: string;
    branch: string;
    stars: string[];
  }>;
}

// 六亲关系
export interface LiuQinRelation {
  relation: string;      // 关系名（如：父亲、母亲、配偶）
  palaceIndex: number;   // 对应宫位索引
  palaceName: string;    // 对应宫位名称
  branch: string;        // 地支
  mainStars: string[];   // 主星列表
}

// 大限时段
export interface DaXianPeriod {
  index: number;
  startAge: number;
  endAge: number;
  palaceIndex: number;
  palaceName: string;
  branch: string;
  mainStars: string[];
  isCurrent: boolean;
}

// 流年信息
export interface LiuNianInfo {
  year: number;
  branch: string;
  stem: string;
  mingGongPalaceIndex: number;
  mingGongPalaceName: string;
  siHua: Array<{ star: string; type: 'lu' | 'quan' | 'ke' | 'ji' }>;
  trend: string;  // 年度趋势简述
}

// 十四主星故事化数据
export interface StarStoryData {
  name: string;
  code: string;
  role: string;           // 故事角色（如：皇帝、军师）
  wuxing: string;         // 五行属性
  personality: string[];  // 核心性格标签
  story: string;          // 故事化解读
  description: string;    // 传统描述
}

// Tab类型
export type ZiweiTab = 'palace' | 'stars' | 'transformation' | 'dashboard';

// 全局状态
export interface ZiweiState {
  plate: any;  // ZiweiPlate
  activeTab: ZiweiTab;
  activePalace: number;
  showDizhiRelation: boolean;
  relationMode: 'liuhe' | 'liuchong' | 'liuhai' | null;
  liTaiJiMode: boolean;
  liTaiJiOrigin: number | null;
  reCenteredPlate: any | null;
  reCenterHistory: any[];  // 立太极历史栈
  selectedYear: number;
  daXianIndex: number;
}

export type ZiweiAction =
  | { type: 'SET_PLATE'; payload: any }
  | { type: 'SET_TAB'; payload: ZiweiTab }
  | { type: 'SET_ACTIVE_PALACE'; payload: number }
  | { type: 'TOGGLE_DIZHI_RELATION' }
  | { type: 'SET_RELATION_MODE'; payload: 'liuhe' | 'liuchong' | 'liuhai' | null }
  | { type: 'ENTER_LI_TAI_JI'; payload: { origin: number; reCenteredPlate: any } }
  | { type: 'EXIT_LI_TAI_JI' }
  | { type: 'PUSH_RE_CENTER'; payload: any }
  | { type: 'POP_RE_CENTER' }
  | { type: 'SET_SELECTED_YEAR'; payload: number }
  | { type: 'SET_DA_XIAN_INDEX'; payload: number };
