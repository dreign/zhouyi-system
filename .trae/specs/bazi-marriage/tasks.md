# Tasks - 八字合姻缘

## Task 1: 创建合婚算法引擎 (engine/hehun.ts)
- [x] 实现 `getZodiac(name: string): string` — 根据年份获取生肖
- [x] 实现 `getZodiacRelation(z1: string, z2: string): { score: number; relation: string; analysis: string }` — 生肖关系判断
- [x] 实现 `getWuxingScore(bazi: ExtendedBaziAnalysis): Record<string, number>` — 五行得分提取
- [x] 实现 `analyzeWuxingComplement(...)` — 五行互补分析
- [x] 实现 `analyzeRizhuMatch(...)` — 日柱分析（天干五合）
- [x] 实现 `analyzeShishenComplement(...)` — 十神互补分析
- [x] 实现 `calculateMarriageCompatibility(...)` — 综合合婚函数

## Task 2: 创建 API 路由 (app/api/bazi/marriage/route.ts)
- [x] 实现 POST 接口，接收双方生辰信息
- [x] 调用合婚引擎计算
- [x] 返回 MarriageCompatibility 结果

## Task 3: 创建页面组件
- [x] **MarriageHeader.tsx** — 顶部Banner（囍字主题视觉）
- [x] **KnowledgeCards.tsx** — 知识科普卡片（五行、生肖、日柱三张卡片）
- [x] **PersonForm.tsx** — 单个人生辰表单组件
- [x] **DualFormInput.tsx** — 双人并排表单容器
- [x] **ResultScore.tsx** — 综合评分展示（环形进度条）
- [x] **PillarComparison.tsx** — 四柱对照表
- [x] **DimensionDetail.tsx** — 各维度详情
- [x] **ConsultationCTA.tsx** — 专业咨询入口

## Task 4: 创建主页面 (app/bazi/marriage/page.tsx)
- [x] 集成所有子组件
- [x] 页面布局（Banner → 科普 → 表单 → 结果 → 咨询入口）
- [x] 状态管理（加载、结果、错误状态）
- [x] 古风婚恋主题视觉（红色系+囍字装饰）
- [x] 响应式适配

## Task 5: 导航与入口集成
- [x] 更新 `components/Navigation.tsx` 添加"合姻缘"导航项
- [x] 更新 `app/page.tsx` 添加首页入口卡片
- [x] 更新 `messages/zh.json` 添加翻译键
- [x] 更新 `messages/en.json` 添加翻译键

## Task 6: 集成测试与验证
- [x] TypeScript 编译 0 错误
- [x] 页面在移动端响应式正常（Tailwind grid）
- [x] 合婚算法正确性验证
- [x] 整体交互流畅度
