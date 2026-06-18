# 紫微斗术Tab功能V2 - 细化需求与设计文档

## Why

当前紫微斗数页面(v1)仅实现了基础命盘展示（12宫格 + 星曜列表 + 简单宫位详解），缺乏交互式探索、关系可视化、深度分析等用户体验功能。基于《紫微斗术一次性讲透》文档的核心理念——**宫、星、化三元素体系**，V2版本旨在打造一个"一看就懂、一玩就会"的沉浸式紫微斗数学习与探索工具，降低用户理解门槛，提升功能深度。

## What Changes

### 核心架构升级

- [x] **重新设计命盘视觉布局**：从"查字典式"展示转向"沉浸式探索"体验
- [x] **引入"三元体系"导航**：宫(V2.1)、星(V2.2)、化(V2.3)三大功能Tab
- [x] **增强分析引擎**：新增AI驱动的深度解读、地支关系计算、立太极递归分析
- [x] **国际化兼容**：所有新增功能同步支持中英文

### 详细功能列表

#### V2.1 宫 - 交互式命盘核心
1. **十二宫3x4网格命盘**（增强现有网格）
   - 恒定地支方位标注（子北午南卯东西酉西）
   - 宫职名称（命宫、兄弟宫等12宫）
   - 天干能量显示（宫位天干）
   - 主星列表 + 庙旺利陷状态
   - 四化标注（禄权科忌）
   - 辅星/煞星精简显示
2. **地支关系可视化**
   - 横线高亮六合（子丑合、寅亥合等）
   - 对角线高亮六冲（子午冲、丑未冲等）
   - 竖线高亮六害（子未害、丑午害等）
   - 悬停/点击时动态绘制关系线
3. **三方四正交互**
   - 点击任一宫位自动高亮其三方（左4宫+右4宫）+ 对宫
   - 标注三方四正的命名（如命宫的三方 = 命宫+财帛+迁移，对宫=福德）
   - 下方信息面板同步展示三方四正综合解读
4. **立太极（宫位重定位）**
   - 双击任一宫位，以该宫为新太极点重新排12宫
   - 显示原始命宫与新太极点的关系
   - 常用于：父母宫立太极看母亲、田宅宫立太极看风水
   - 支持递归操作（在立太极结果上再次立太极）
5. **宫位详解面板**
   - 点击宫位展开底部/侧边详解面板
   - 显示该宫所有星曜详解
   - 显示三方四正信息
   - 显示四化对该宫的影响
   - 显示AI生成的通俗解读（调用/analysis API）

#### V2.2 星 - 故事化星曜百科
1. **十四主星图鉴**
   - 以"紫微皇帝"故事体系组织14主星
   - 每颗星展示：名称、别称、五行属性、核心性格、庙旺亮度表
   - "皇帝与大臣"故事化解读（紫微=皇帝，天机=军师，天府=府库等）
   - 星曜在12宫的特性速查表
2. **星系分组**
   - 紫微星系（紫微、天机、太阳、武曲、天同、廉贞、天府、太阴）
   - 天府星系（天府、贪狼、巨门、天相、天梁、七杀、破军）
   - 辅星/煞星简明列表
3. **星曜在命盘中的角色**
   - 显示当前命盘中各宫主星的分布热度图
   - 点击星名跳转到该星所在宫位并高亮

#### V2.3 化 - 四化能量变化
1. **四化总表**
   - 十天干四化表可视化（甲→癸 各对应 禄权科忌）
   - 当前命盘的四化标注在命盘上
   - 四化含义通俗解释（禄=利益享受、权=权力执行、科=机会名声、忌=代价付出）
2. **流年四化模拟**
   - 年份选择器（可切换不同流年）
   - 显示选定流年的四化分布变化
   - 提示该年能量趋势
3. **大限时间轴**
   - 可视化时间轴展示5步大限（每步10年）
   - 当前所处大限高亮
   - 点击大限显示该大限对应的宫位和星曜详情

#### V2.4 综合看板
1. **命盘摘要**
   - 五行局、命主、身主
   - 命宫主星及亮度
   - 综合性格速写
2. **六亲关系图**
   - 基于立太极算法展示六亲宫位
   - 父母、配偶、子女、兄弟姐妹等关系图谱
3. **流年导航器**
   - 年份左右切换
   - 显示流年命宫位置
   - 流年四化变化
   - 年度趋势简述

## Impact

- **Affected specs**: 无，全新功能规格
- **Affected code**:
  - `app/ziwei/page.tsx` - 全面重写，引入Tab式布局
  - `app/ziwei/` - 新增子组件目录
  - `engine/ziwei.ts` - 增强算法引擎（立太极、地支关系、三方四正计算）
  - `app/api/ziwei/analysis/route.ts` - 增强分析API
  - `messages/zh.json` - 新增i18n翻译键
  - `messages/en.json` - 新增英文翻译键

## ADDED Requirements

### Requirement: 交互式命盘展示

#### Scenario: 用户查看命盘
- **WHEN** 用户完成排盘
- **THEN** 显示3x4十二宫网格，每个宫位包含：宫职名称、地支、天干、主星列表（含亮度）、四化标注
- **AND** 宫位背景色根据主星亮度渐变（庙旺偏暖色、陷落偏冷色）

#### Scenario: 查看地支关系
- **WHEN** 用户点击"地支关系"开关
- **THEN** 在命盘网格上叠加显示六合/六冲/六害连线
- **AND** 悬停关系线时显示关系说明tooltip

#### Scenario: 三方四正分析
- **WHEN** 用户点击某一宫位
- **THEN** 该宫位高亮，其三方四正宫位同时高亮（不同颜色区分三方和对宫）
- **AND** 下方面板显示该宫及三方四正的综合解读

#### Scenario: 立太极分析
- **WHEN** 用户双击某一宫位
- **THEN** 以该宫为新命宫重新排列12宫
- **AND** 显示"以[宫名]立太极"的标识
- **AND** 面板显示重新定位后的解读
- **AND** 提供"返回原盘"按钮

### Requirement: 故事化星曜百科

#### Scenario: 浏览星曜图鉴
- **WHEN** 用户切换到"星"Tab
- **THEN** 展示14主星的"皇帝与大臣"故事化卡片
- **AND** 每张卡片包含：星名、故事角色比喻、核心性格标签、五行属性
- **AND** 点击卡片展开详细说明（含亮度庙旺表）

### Requirement: 四化能量模块

#### Scenario: 查看十干四化表
- **WHEN** 用户切换到"化"Tab
- **THEN** 显示天干四化总表（10天干 x 4化）
- **AND** 当前命盘年干所在行高亮
- **AND** 显示"禄权科忌"的通俗解释

#### Scenario: 模拟流年四化
- **WHEN** 用户在"化"Tab切换年份
- **THEN** 命盘上的四化标注动态更新为该年的四化
- **AND** 显示该年能量趋势简评

### Requirement: 大限时间轴

#### Scenario: 浏览大限
- **WHEN** 用户进入大限时间轴视图
- **THEN** 显示横向时间轴，每10年一大限
- **AND** 当前年龄所在大限高亮
- **AND** 点击任一节点显示该大限对应宫位和星曜详情

### Requirement: 六亲关系图

#### Scenario: 查看六亲关系
- **WHEN** 用户请求查看六亲关系
- **THEN** 以命宫为中心，通过立太极算法计算各六亲宫位
- **AND** 以关系图谱或表格形式展示：命宫(自己)→父母宫(父亲)→夫妻宫(母亲)等

## MODIFIED Requirements

### Requirement: 现有命盘展示升级
**变更**: 现有`ziwei/page.tsx`的简单网格展示升级为带Tab导航的交互式命盘

| 变更项 | V1 | V2 |
|:---|:---|:---|
| 布局 | 单页网格+底部详解 | Tab式（宫/星/化）+ 综合看板 |
| 宫位交互 | 点击高亮+文本详解 | 点击高亮+三方四正+立太极+关系线 |
| 星曜展示 | 列表展示+亮度颜色 | 故事化卡片+图谱+热度图 |
| 四化展示 | 文字标注 | 动态表+流年模拟+能量解读 |
| 大限 | 仅有API | 可视化时间轴 |
| 流年 | 仅有API | 年份导航器+年度趋势 |

## REMOVED Requirements

N/A - 所有V1功能均保留并增强

## 技术设计

### 前端组件架构

```
app/ziwei/page.tsx              # 主页面（Tab式布局）
components/ziwei/
  ├── ZiweiTabs.tsx             # Tab导航（宫/星/化/综合）
  ├── PalaceGrid.tsx            # 十二宫网格（核心命盘）
  ├── PalaceCell.tsx            # 单个宫位组件
  ├── DizhiRelationOverlay.tsx  # 地支关系叠加层（合冲害连线）
  ├── SanfangSizheng.tsx        # 三方四正高亮组件
  ├── LiTaiJiPanel.tsx          # 立太极面板
  ├── PalaceDetail.tsx          # 宫位详解面板
  ├── StarsTab.tsx              # 星曜百科Tab
  ├── StarCard.tsx              # 单星卡片
  ├── TransformationTab.tsx     # 四化Tab
  ├── SiHuaTable.tsx            # 十干四化表
  ├── DaXianTimeline.tsx        # 大限时间轴
  ├── LiuNianNavigator.tsx      # 流年导航器
  ├── Dashboard.tsx             # 综合看板
  └── LiuQinGraph.tsx           # 六亲关系图
```

### 算法增强（engine/ziwei.ts）

```typescript
// 新增函数
function getLiuHe(branch: string): string     // 六合计算
function getLiuChong(branch: string): string  // 六冲计算
function getLiuHai(branch: string): string    // 六害计算
function getSanFang(branch: string): number[] // 三方宫位索引
function getSiZheng(branch: string): number   // 四正（对宫）索引
function reCenterPlate(plate: ZiweiPlate, newMingGongBranch: string): ZiweiPlate  // 立太极
function getLiuQinMap(plate: ZiweiPlate): Record<string, number>  // 六亲关系映射
function getDaXianTimeline(plate: ZiweiPlate): DaXianPeriod[]     // 大限时间轴
```

### AI分析增强（app/api/ziwei/analysis/route.ts）

```typescript
// 新增分析类型
type AnalysisType = 'palace_detail' | 'sifang_detail' | 'li_tai_ji' | 'star_detail' | 'si_hua_trend' | 'liu_yao' | 'comprehensive_v2';
```

### 状态管理

采用React Context + useReducer管理命盘全局状态：
```typescript
interface ZiweiState {
  plate: ZiweiPlate | null;
  activeTab: 'palace' | 'stars' | 'transformation' | 'dashboard';
  activePalace: number;
  showDizhiRelation: boolean;
  liTaiJiMode: boolean;
  liTaiJiOrigin: number | null;
  reCenteredPlate: ZiweiPlate | null;
  selectedYear: number;
  daXianIndex: number;
}
```
