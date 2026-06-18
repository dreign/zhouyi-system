# 八字合姻缘 - 需求与设计文档

## Why

当前系统已具备八字命理分析功能，但缺少专注于"姻缘/婚恋"场景的功能模块。八字合婚是命理咨询中最常见的需求之一，用户希望了解双方八字的五行匹配度、生肖契合度、日柱关系等，以判断姻缘的和谐程度。此功能填补了系统在情感婚恋领域的空白，为用户提供从"单人命理分析"到"双人缘分解读"的升级体验。

## What Changes

- [x] 新增 `/bazi/marriage` 页面：八字合姻缘专属页面
- [x] 新增 `engine/hehun.ts`：合婚算法引擎（五行互补、生肖关系、日柱分析、十神互补等）
- [x] 新增 API `app/api/bazi/marriage/route.ts`：合婚分析接口
- [x] 首页增加"八字合姻缘"入口卡片
- [x] 导航栏增加"合姻缘"入口
- [x] i18n 国际化支持中英文

## Impact

- **Affected specs**: 无，全新功能模块
- **Affected code**:
  - `app/bazi/marriage/page.tsx` - 新建，合姻缘页面
  - `engine/hehun.ts` - 新建，合婚算法引擎
  - `app/api/bazi/marriage/route.ts` - 新建，合婚API
  - `components/Navigation.tsx` - 新增导航项
  - `app/page.tsx` - 新增首页入口卡片
  - `messages/zh.json` - 新增翻译键
  - `messages/en.json` - 新增翻译键

## ADDED Requirements

### Requirement: 合婚算法引擎

#### 算法维度

1. **五行互补分析** (40%)
   - 计算双方八字五行得分
   - 判断五行是否互补（一方缺某五行，另一方该五行强）
   - 五行过旺相冲则扣分
   - 返回五行互补度评分（0-100）

2. **生肖关系分析** (15%)
   - 判断双方生肖是否相合（六合/三合）
   - 判断是否相冲/相害/相刑
   - 返回生肖匹配度评分（0-100）

3. **日柱关系分析** (25%)
   - 天干相合：甲己合、乙庚合、丙辛合、丁壬合、戊癸合
   - 地支六合/三合
   - 日柱纳音相生/相克
   - 返回日柱匹配度评分（0-100）

4. **十神互补分析** (20%)
   - 双方十神分布对比
   - 男命财星（妻星）与女命对比
   - 女命官星（夫星）与男命对比
   - 返回十神互补度评分（0-100）

#### 综合评分
- 总分 = 各维度加权求和
- 等级划分：90+ "天作之合"、80-89 "上等姻缘"、70-79 "良缘佳配"、60-69 "中等缘分"、60以下 "需多磨合"

#### Scenario: 用户输入双方八字进行合婚
- **WHEN** 用户分别输入男方和女方的出生年月日时
- **THEN** 系统计算双方八字，生成四柱对照展示
- **AND** 计算五行互补、生肖关系、日柱关系、十神互补四个维度的评分
- **AND** 展示综合评分和等级
- **AND** 生成详细的合婚解读文字

#### Scenario: 查看合婚详情
- **WHEN** 用户滚动到某一维度详情区
- **THEN** 显示该维度的具体分析：评分、详细说明、注意事项
- **AND** 显示双方在该维度的数据对比

### Requirement: 合姻缘UI页面

#### 页面结构
1. **顶部Banner区** — 传统婚恋主题视觉（双喜、龙凤、红绳等元素），标题"八字合姻缘"
2. **知识科普区** — 八字合婚的基本逻辑科普（五行、生肖、日柱等），以卡片形式展示
3. **表单输入区** — 左右并排两个表单（男方/女方），各含：姓名(选填)、出生年份、月份、日期、时辰、性别
4. **结果展示区** — 综合评分环形图/进度条、各维度评分雷达图、四柱对照表、详细解读
5. **服务升级区** — "联系专业命理师"入口，获取深度合婚报告

#### 视觉设计
- 主题色：红色系（#8b2500、#d44a4a）搭配金色（#c9a962）
- 装饰元素：双喜(囍)字、龙凤纹、红绳/红线、鸳鸯等婚恋符号
- 字体：保持现有系统 serif 字体
- 响应式：完美适配移动端

### Requirement: 服务升级入口

#### Scenario: 用户联系专业命理师
- **WHEN** 用户点击"联系专业命理师"按钮
- **THEN** 弹窗/跳转显示联系方式或表单
- **AND** 附带当前合婚结果数据，方便命理师参考

## REMOVED Requirements

N/A

## 技术设计

### 前端组件架构

```
app/bazi/marriage/page.tsx           # 合姻缘主页面
components/bazi-marriage/
  ├── MarriageHeader.tsx             # 顶部Banner（婚恋主题视觉）
  ├── KnowledgeCards.tsx             # 知识科普卡片区
  ├── DualFormInput.tsx             # 双人表单输入区
  ├── PersonForm.tsx                # 单个人表单（姓名/生辰）
  ├── ResultScore.tsx               # 综合评分展示（环形图/进度条）
  ├── DimensionsRadar.tsx           # 四维度雷达图
  ├── PillarComparison.tsx          # 四柱对照表
  ├── DimensionDetail.tsx           # 各维度详情
  └── ConsultationCTA.tsx           # 专业咨询入口
```

### 算法设计 (engine/hehun.ts)

```typescript
export interface MarriageCompatibility {
  // 综合
  totalScore: number;
  totalLevel: string;
  totalAnalysis: string;
  
  // 各维度
  dimensions: {
    wuxing: { score: number; level: string; maleScore: Record<string,number>; femaleScore: Record<string,number>; analysis: string };
    zodiac: { score: number; level: string; maleZodiac: string; femaleZodiac: string; relation: string; analysis: string };
    rizhu: { score: number; level: string; maleDay: string; femaleDay: string; matchType: string; analysis: string };
    shishen: { score: number; level: string; analysis: string };
  };
  
  // 双方八字
  maleBazi: { ... };
  femaleBazi: { ... };
  
  // 建议
  suggestions: string[];
}
```

### API设计

```
POST /api/bazi/marriage
Body: {
  male: { year, month, day, hour, name? },
  female: { year, month, day, hour, name? }
}
Response: MarriageCompatibility
```

### 路由与导航

- 页面路径：`/bazi/marriage`
- 导航栏新增项：`合姻缘` (放在 `bazi` 之后)
- 首页入口卡片：`八字合姻缘` (放在 `bazi` 卡片下方或附近)
