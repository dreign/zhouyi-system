# 知识讲解模块 - 全功能页面通用知识科普系统

## Why

当前各功能页面（易经占卜、八字命理、紫微斗数、姓名分析、周易全书、合姻缘）均缺乏对核心术数概念的系统性科普讲解。用户打开页面后直接面对专业术语（天干地支、五行生克、星曜、四化等），缺少入门引导，学习成本高、理解门槛大。基于现有已存在的 `KnowledgeCards`（合姻缘）和 `PalaceExplanation`（紫微斗数）组件模式，本模块旨在为**每个功能页面**追加适合该页面的知识讲解面板，配合 SVG 图例，让用户"一眼看懂"页面在做什么。

## What Changes

- **新增通用 `KnowledgePanel` 组件**：可复用的折叠式知识卡片容器，支持自定义标题、图标、内容段、SVG 图例
- **新增 6+ 个 SVG 知识图例组件**：五行相生相克图、天干地支表、八卦衍生图、宫星化关系图、四柱结构图、五格剖象图
- **各页面集成**：在首页 + 6 个功能页面各追加一个可折叠的知识讲解区域
- **国际化**：所有知识文本和标签同步中英文（`zh.json` / `en.json` 分别追加 key）

### 详细知识模块列表

| 页面 | 知识主题 | 图例 |
|------|----------|------|
| 首页 `/` | 周易基础哲学：太极→两仪→四象→八卦 | 太极八卦 SVG |
| 易经占卜 `/yi` | 八卦形成、64卦结构、起卦方法简介 | 八卦衍生图 SVG |
| 八字命理 `/bazi` | 天干地支（10天干+12地支）、五行生克 | 天干地支表 + 五行相生相克图 SVG |
| 合姻缘 `/bazi/marriage` | 增强现有 KnowledgeCards：五行互补、生肖六合三合六冲 | 生肖关系图 SVG |
| 紫微斗数 `/ziwei` | 三元体系：宫（12宫职）、星（14主星）、化（四化） | 宫星化关系图 SVG |
| 姓名分析 `/name` | 五格剖象法、五行属性、音形义 | 五格结构图 SVG |
| 周易全书 `/book` | 64卦构成、上下经、十翼 | 卦象结构图 SVG |

### 组件架构

```
components/knowledge/
├── KnowledgePanel.tsx        # 通用折叠容器
├── knowledge-data.ts         # 各页面知识数据（含中英双语）
├── diagrams/
│   ├── WuxingDiagram.tsx     # 五行相生相克图
│   ├── TianganDizhiTable.tsx # 天干地支表
│   ├── BaguaDerivation.tsx   # 八卦衍生图
│   ├── GongXingHua.tsx       # 宫星化关系图
│   ├── SizhuStructure.tsx    # 四柱结构图
│   ├── WugeStructure.tsx     # 五格剖象图
│   └── GuaStructure.tsx      # 卦象结构图
├── index.ts
```

### 交互行为

- **默认收起**：进入页面时不占用主内容区域
- **一键展开/收起**：点击标题栏切换，展开时平滑动画
- **展开后展示**：标题 + 简短文字说明 + SVG 图例（1~2 个）
- **多处调用**：KnowledgePanel 可在页面任意位置嵌套（推荐放在主功能区域上方或侧边）

### 视觉规范

- 延续现有暖色调（`#3d2914` / `#5a4520` / `#c9a962` / `#faf5e8`）
- 卡片背景：`bg-gradient-to-b from-[#faf5e8] to-[#f5edd6]`
- 边框：`border-[#c9a962]/30`
- SVG 图例配色：与页面整体风格一致，线条使用 `#c9a962`，文字 `#3d2914`

## Impact

- Affected specs: 首页、易经占卜、八字命理、合姻缘、紫微斗数、姓名分析、周易全书
- Affected code: `components/knowledge/`（新目录）、`app/*/page.tsx`（各页面追加引用）、`messages/zh.json`、`messages/en.json`

## ADDED Requirements

### Requirement: KnowledgePanel 组件
The system SHALL provide a reusable `KnowledgePanel` component that:

- Accepts `title`, `icon`, `sections[]`（每个 section 含标题+正文+可选 SVG 图例）、`defaultOpen?` props
- 默认折叠，点击标题展开/收起
- 展开/收起带平滑高度过渡动画（CSS transition）
- 内容区支持渲染文本段落和 SVG 图例组件

### Requirement: SVG 图例组件
The system SHALL provide SVG-based diagram components for:

- **五行相生相克图**：五角星环状布局，箭头标注相生（顺时针）和相克（对角），每个角标注五行名和颜色（金白、木绿、水蓝、火红、土黄）
- **天干地支表**：表格排列 10 天干和 12 地支，标注阴阳和五行属性
- **八卦衍生图**：太极→两仪→四象→八卦 的树状图
- **宫星化关系图**：三角关系图展示宫位、星曜、四化之间的相互作用

### Requirement: 各页面集成

#### Scenario: 首页集成
- **WHEN** 用户打开首页
- **THEN** 知识面板展示"周易基础哲学"：太极生两仪、两仪生四象、四象生八卦，配合八卦衍生图

#### Scenario: 易经占卜页集成
- **WHEN** 用户打开易经占卜页
- **THEN** 知识面板展示"占卜入门"：八卦如何形成、64卦如何构成、三种起卦方式简介，配合八卦衍生图

#### Scenario: 八字命理页集成
- **WHEN** 用户打开八字命理页
- **THEN** 知识面板展示"八字入门"：天干地支解说、五行相生相克关系，配合天干地支表和五行相生相克图

#### Scenario: 合姻缘页集成
- **WHEN** 用户打开合姻缘页
- **THEN** 知识面板在现有 KnowledgeCards 基础上追加"生肖关系"：六合、三合、相冲、相害的生肖配对关系图

#### Scenario: 紫微斗数页集成
- **WHEN** 用户打开紫微斗数页
- **THEN** 知识面板展示"紫微三元体系"：宫（12宫职）、星（14主星分类）、化（四化能量），配合宫星化关系图

#### Scenario: 姓名分析页集成
- **WHEN** 用户打开姓名分析页
- **THEN** 知识面板展示"姓名学基础"：五格剖象法结构、五行属性判断，配合五格结构图

#### Scenario: 周易全书页集成
- **WHEN** 用户打开周易全书页
- **THEN** 知识面板展示"周易全书导读"：64卦上下经结构、十翼内容简介，配合卦象结构图

### Requirement: 国际化
- The system SHALL provide Chinese (`zh.json`) and English (`en.json`) translations for all knowledge module texts
- Each page's knowledge content SHALL have a corresponding translation key group under `knowledge.<pageId>`
