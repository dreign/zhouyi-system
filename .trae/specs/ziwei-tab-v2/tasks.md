# Tasks - 紫微斗术Tab功能V2

## Task 1: 创建组件目录结构与基础类型定义
- [x] 创建 `components/ziwei/` 目录
- [x] 定义 ZiweiState 全局状态类型和Context
- [x] 定义新增的数据接口类型（三方四正、地支关系、立太极等）
- [x] 提取现有 page.tsx 中的 PalaceCell 和 ZiweiChart 到独立组件

## Task 2: 增强算法引擎 (engine/ziwei.ts)
- [x] 实现地支六合计算 `getLiuHe(branch)`
- [x] 实现地支六冲计算 `getLiuChong(branch)`
- [x] 实现地支六害计算 `getLiuHai(branch)`
- [x] 实现三方四正计算 `getSanFang(branch)` 和 `getSiZheng(branch)`
- [x] 实现立太极重排 `reCenterPlate(plate, newMingGongBranch)`
- [x] 实现六亲关系映射 `getLiuQinMap(plate)`
- [x] 实现大限时间轴 `getDaXianTimeline(plate)`
- [x] 实现流年命宫计算 `getLiuNianMingGong(year)`
- [x] 增强星曜亮度计算，补充缺失的星曜亮度数据

## Task 3: 重写主页面为Tab式布局 (app/ziwei/page.tsx)
- [x] 引入 Tab 导航组件（宫/星/化/综合）
- [x] 整合 V2.1 宫模块组件
- [x] 整合 V2.2 星模块组件
- [x] 整合 V2.3 化模块组件
- [x] 整合 V2.4 综合看板组件

## Task 4: 实现 V2.1 宫模块组件
- [x] **PalaceGrid.tsx** - 增强型十二宫网格（含亮度渐变色、地支标注）
- [x] **PalaceCell.tsx** - 单宫位组件（星曜列表、四化标注、亮度指示）
- [x] **DizhiRelationOverlay.tsx** - 地支关系可视化（六合横线、六冲对角线、六害竖线）
- [x] **SanfangSizheng.tsx** - 三方四正高亮和综合分析
- [x] **LiTaiJiPanel.tsx** - 立太极面板（重定位宫位、递归支持）
- [x] **PalaceDetail.tsx** - 宫位详解面板（星曜详解、三方四正、四化影响）

## Task 5: 实现 V2.2 星模块组件
- [x] **StarsTab.tsx** - 星曜百科Tab主容器
- [x] **StarCard.tsx** - 单星故事化卡片（皇帝与大臣叙事体系）
- [x] 十四主星故事化数据配置文件 (STAR_STORIES in engine/ziwei.ts)
- [x] 当前命盘主星分布热度图

## Task 6: 实现 V2.3 化模块组件
- [x] **TransformationTab.tsx** - 四化Tab主容器
- [x] **SiHuaTable.tsx** - 十干四化表（可视化网格）
- [x] **DaXianTimeline.tsx** - 大限时间轴（可视化横向时间轴）
- [x] **LiuNianNavigator.tsx** - 流年导航器（年份切换、四化动态更新）

## Task 7: 实现 V2.4 综合看板组件
- [x] **Dashboard.tsx** - 综合看板主容器
- [x] **LiuQinGraph.tsx** - 六亲关系图（基于立太极的关系图谱）
- [x] 命盘摘要卡片（五行局、命主、身主、性格速写）
- [x] AI增强综合分析展示

## Task 8: 增强分析API (app/api/ziwei/)
- [x] 扩展 `/analysis` API 支持新的分析类型（sifang、li_tai_ji等）
- [x] 新增立太极分析接口
- [x] 新增流年趋势分析接口

## Task 9: i18n国际化支持
- [x] 添加所有新增组件的英文翻译到 `messages/en.json`
- [x] 更新 `messages/zh.json` 的中文翻译

## Task 10: 集成测试与体验优化
- [x] 验证十二宫格布局在不同屏幕尺寸下的响应式表现
- [x] 验证地支关系可视化线段的准确性和可用性
- [x] 验证立太极递归计算的正确性
- [x] 验证流年切换时四化更新的正确性
- [x] 整体交互流畅度优化（TypeScript 0 errors）

# Task Dependencies
- [Task 2] 必须在 [Task 4]、[Task 6]、[Task 7] 之前完成
- [Task 3] 依赖 [Task 1]
- [Task 4]~[Task 7] 可以并行开发
- [Task 9] 可在所有UI组件就绪后并行完成
