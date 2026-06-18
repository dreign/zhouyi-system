# Tasks

- [x] Task 1: 创建 KnowledgePanel 通用折叠容器组件
  - Props: `title`, `icon`, `sections[]`, `defaultOpen?`
  - 展开/收起带 CSS transition 动画
  - 支持渲染文本段落和 SVG 图例
  - 组件位置：`components/knowledge/KnowledgePanel.tsx`

- [x] Task 2: 创建 SVG 知识图例组件集合
  - 五行相生相克图 `WuxingDiagram.tsx`：五角星环状布局，箭头标注相生（顺时针）和相克（对角）
  - 天干地支表 `TianganDizhiTable.tsx`：10天干 + 12地支表格，标注阴阳五行
  - 八卦衍生图 `BaguaDerivation.tsx`：太极→两仪→四象→八卦 树状图
  - 宫星化关系图 `GongXingHua.tsx`：三角关系图
  - 四柱结构图 `SizhuStructure.tsx`：年月日时四柱示意
  - 五格结构图 `WugeStructure.tsx`：姓名五格结构示意
  - 卦象结构图 `GuaStructure.tsx`：卦象上下经结构示意
  - 所有组件位于 `components/knowledge/diagrams/`

- [x] Task 3: 创建 knowledge-data.tsx 知识数据配置文件
  - 配置各页面知识面板的标题、图标、内容段、图例映射
  - 支持中英双语数据切换（基于当前语言环境）
  - 组件位置：`components/knowledge/knowledge-data.tsx`

- [x] Task 4: 创建 index.ts 统一导出
  - 导出 KnowledgePanel 和所有图例组件
  - 组件位置：`components/knowledge/index.ts`

- [x] Task 5: 首页集成知识面板
  - 在 `app/page.tsx` 首页合适位置插入 KnowledgePanel
  - 知识主题：周易基础哲学（太极→两仪→四象→八卦）
  - 图例：八卦衍生图

- [x] Task 6: 易经占卜页集成知识面板
  - 在 `app/yi/page.tsx` 插入 KnowledgePanel
  - 知识主题：占卜入门（八卦形成、64卦结构、起卦方法）
  - 图例：八卦衍生图

- [x] Task 7: 八字命理页集成知识面板
  - 在 `app/bazi/page.tsx` 插入 KnowledgePanel
  - 知识主题：八字入门（天干地支、五行生克）
  - 图例：天干地支表 + 五行相生相克图

- [x] Task 8: 合姻缘页集成知识面板
  - 在 `app/bazi/marriage/page.tsx` 增强现有 KnowledgeCards
  - 追加生肖关系知识：六合、三合、相冲、相害
  - 图例：无独立图例，纯文本说明

- [x] Task 9: 紫微斗数页集成知识面板
  - 在 `app/ziwei/page.tsx` 插入 KnowledgePanel
  - 知识主题：紫微三元体系（宫、星、化）
  - 图例：宫星化关系图

- [x] Task 10: 姓名分析页集成知识面板
  - 在 `app/name/page.tsx` 插入 KnowledgePanel
  - 知识主题：姓名学基础（五格剖象、五行属性）
  - 图例：五格结构图

- [x] Task 11: 周易全书页集成知识面板
  - 在 `app/book/page.tsx` 插入 KnowledgePanel
  - 知识主题：周易全书导读（64卦结构、十翼）
  - 图例：卦象结构图

- [x] Task 12: 国际化 - 追加中英文翻译
  - 在 `messages/zh.json` 追加 `knowledge.*` 翻译 key
  - 在 `messages/en.json` 追加 `knowledge.*` 翻译 key
  - 覆盖所有页面的知识面板文本内容
