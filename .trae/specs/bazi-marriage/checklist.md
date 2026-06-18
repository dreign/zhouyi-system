# Checklist - 八字合姻缘

## 算法引擎(engine/hehun.ts)
- [x] `getZodiac` 生肖计算正确（支持全部12生肖）
- [x] `getZodiacRelation` 六合/三合/相冲/相害/相刑判断正确
- [x] `analyzeWuxingComplement` 五行互补度评分合理
- [x] `analyzeRizhuMatch` 天干五合判断正确
- [x] `analyzeShishenComplement` 十神互补分析合理
- [x] `calculateMarriageCompatibility` 综合评分和各维度计算正确

## API
- [x] `POST /api/bazi/marriage` 正确接收双方生辰参数
- [x] API 返回数据结构完整（totalScore, dimensions, analysis, suggestions）
- [x] API 错误处理（参数缺失、无效日期）
- [x] API 响应时间 ≤ 2秒

## 前端组件
- [x] **MarriageHeader**: 婚恋主题Banner视觉正确（囍字/红金配色）
- [x] **KnowledgeCards**: 知识科普内容准确，三张卡片（五行/生肖/日柱）完整
- [x] **PersonForm**: 表单字段完整（姓名选填、年月日时），验证逻辑正确
- [x] **DualFormInput**: 左右并排布局，移动端上下排列
- [x] **ResultScore**: 环形进度条评分UI正确，总分和等级展示清晰
- [x] **PillarComparison**: 双方四柱对应关系展示清晰
- [x] **DimensionDetail**: 四维度评分可视化展示
- [x] **ConsultationCTA**: 咨询入口可见

## 页面布局
- [x] 页面整体布局完整（Banner → 科普 → 表单 → 结果 → 咨询入口）
- [x] 红色系婚恋主题与古风系统风格统一
- [x] 移动端(≤768px)响应式正常
- [x] 加载状态显示合理
- [x] 空状态（未提交）引导清晰

## 导航与入口
- [x] 导航栏"合姻缘"项存在且可点击
- [x] 首页入口卡片存在且可跳转
- [x] 导航高亮状态正确

## 国际化
- [x] 所有新增文本在 `zh.json` 中有正确中文翻译
- [x] 所有新增文本在 `en.json` 中有正确英文翻译
