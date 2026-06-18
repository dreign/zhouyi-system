# Checklist - 紫微斗术Tab功能V2

## 算法引擎(engine)
- [x] `getLiuHe` / `getLiuChong` / `getLiuHai` 计算结果正确（符合地支传统关系）
- [x] `getSanFang` / `getSiZheng` 索引计算正确
- [x] `reCenterPlate` 立太极重排逻辑正确，支持递归
- [x] `getLiuQinMap` 六亲宫位映射正确
- [x] `getDaXianTimeline` 大限时间轴分段正确
- [x] `getLiuNianMingGong` 流年命宫位置计算正确

## 前端组件
- [x] **PalaceGrid**: 3x4网格布局正确，亮度渐变色应用正确，地支恒定方位标注正确
- [x] **PalaceCell**: 宫职名称、地支、天干、主星列表、亮度、四化、辅星信息完整展示
- [x] **DizhiRelationOverlay**: 六合(横线)/六冲(对角线)/六害(竖线)可视化准确，悬停tooltip正常
- [x] **SanfangSizheng**: 点击宫位后三方四正高亮正确，综合解读面板展示完整
- [x] **LiTaiJiPanel**: 双击触发立太极，新命盘显示正确，有返回原盘按钮，递归操作正常
- [x] **PalaceDetail**: 宫位详解面板信息完整
- [x] **StarCard**: 故事化卡片展示完整，14主星均有对应故事角色
- [x] **SiHuaTable**: 十干四化表完整，当前盘年干高亮，含义解释通俗
- [x] **DaXianTimeline**: 横向时间轴显示正确，当前大限高亮，点击展开详情
- [x] **LiuNianNavigator**: 年份切换流畅，四化动态更新正确，趋势简评合理
- [x] **LiuQinGraph**: 六亲关系图谱/表格展示正确

## 页面布局
- [x] Tab导航（宫/星/化/综合）切换流畅
- [x] 所有组件在手机端(≤768px)响应式正常（采用Tailwind响应式grid）
- [x] 页面整体风格与现有系统（古风主题）一致

## API
- [x] `/api/ziwei/analysis` 支持所有新增分析类型
- [x] API返回数据格式正确，前端能正确解析渲染

## 国际化
- [x] 所有新增文本在 `zh.json` 中有正确中文翻译
- [x] 所有新增文本在 `en.json` 中有正确英文翻译
- [x] 语言切换后所有组件正确显示对应语言
