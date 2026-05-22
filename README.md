# 周易智慧系统

> 传承千年智慧 · 探索人生奥秘

一个基于 Next.js 构建的古风周易命理系统，融合太极八卦、易经占卜、八字命理、紫微斗数等中国传统玄学文化。

## ✨ 功能特性

### 🔮 易经占卜
- 支持三种起卦方式：随机起卦、金钱卦、数字卦
- 完整六十四卦解析，含卦辞原文与白话翻译
- 动爻分析与变卦解读
- 通俗易懂的卦象解释
- 个性化问题针对性建议

### 📊 八字命理
- 四柱八字排盘
- 五行分析与喜用神判断
- 十神分析
- 大运流年推演
- 命宫、身宫解析

### 🌟 紫微斗数
- 十二宫位命盘绘制
- 星曜分析
- 四化飞星解读
- 宫位关系分析

### 📝 姓名分析
- 五格数理分析
- 三才配置
- 八字喜用神匹配
- 智能起名建议

### 📚 周易全书
- 完整六十四卦详解
- 卦象符号展示
- 卦辞、爻辞原文
- 白话译文

## 🎨 设计风格

- **古风配色**：古金色、古红色、古棕色、纸张底色
- **装饰元素**：太极图、八卦符号、祥云图案、龙纹装饰、饕餮纹样
- **动效设计**：太极旋转、祥云浮动、卡片悬停效果

## 🛠️ 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| Next.js | 14.1.0 | 前端框架 |
| React | 18 | UI框架 |
| TypeScript | 5 | 类型安全 |
| Tailwind CSS | 3 | 样式框架 |
| Prisma | 5 | ORM |
| SQLite | 3 | 数据库 |

## 🚀 快速开始

### 环境要求

- Node.js >= 18
- npm >= 9

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:3000 查看应用

### 生产构建

```bash
npm run build
npm run start
```

### 代码检查

```bash
npm run lint
```

## 📁 项目结构

```
zhouyi-system/
├── app/                    # Next.js 应用目录
│   ├── api/               # API 路由
│   │   ├── bazi/          # 八字命理 API
│   │   ├── name/          # 姓名分析 API
│   │   ├── yi/            # 易经占卜 API
│   │   └── ziwei/         # 紫微斗数 API
│   ├── bazi/              # 八字命理页面
│   ├── book/              # 周易全书页面
│   ├── name/              # 姓名分析页面
│   ├── yi/                # 易经占卜页面
│   ├── ziwei/             # 紫微斗数页面
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 首页
├── engine/                # 核心算法引擎
│   ├── bazi.ts           # 八字算法
│   ├── name.ts           # 姓名算法
│   ├── sancai.ts         # 三才配置
│   ├── wuge.ts           # 五格数理
│   ├── xiyong.ts         # 喜用神
│   ├── yi.ts             # 易经算法
│   ├── ziwei.ts          # 紫微斗数算法
│   └── zodiac.ts         # 生肖算法
├── lib/                   # 工具库
│   ├── ai.ts             # AI 集成
│   └── prisma.ts         # Prisma 配置
├── prisma/               # Prisma 配置
├── zhouyi-book/          # 周易全书文档
├── .env                  # 环境变量
├── next.config.mjs       # Next.js 配置
├── tailwind.config.ts    # Tailwind 配置
└── tsconfig.json         # TypeScript 配置
```

## 🔌 API 接口

### 易经占卜

```
POST /api/yi/divine
Content-Type: application/json

{
  "method": "random | coins | number",
  "numbers": [6, 7, 8, 9, 6, 7],
  "question": "我的事业发展如何？"
}
```

### 八字排盘

```
POST /api/bazi/chart
Content-Type: application/json

{
  "year": 1990,
  "month": 5,
  "day": 15,
  "hour": 8,
  "gender": "male | female"
}
```

### 紫微斗数

```
POST /api/ziwei/chart
Content-Type: application/json

{
  "year": 1990,
  "month": 5,
  "day": 15,
  "hour": 8,
  "gender": "male | female"
}
```

### 姓名分析

```
POST /api/name/analyze
Content-Type: application/json

{
  "name": "张三",
  "gender": "male | female",
  "bazi": "庚午 壬午 丁未 甲辰"
}
```

### 智能起名

```
POST /api/name/generate
Content-Type: application/json

{
  "surname": "张",
  "gender": "male | female",
  "bazi": "庚午 壬午 丁未 甲辰",
  "count": 10
}
```

## 📖 周易卦象编码

六十四卦 Unicode 符号：

```
䷀ ䷁ ䷂ ䷃ ䷄ ䷅ ䷆ ䷇ ䷈ ䷉ ䷊ ䷋ ䷌ ䷍ ䷎ ䷏
䷐ ䷑ ䷒ ䷓ ䷔ ䷕ ䷖ ䷗ ䷘ ䷙ ䷚ ䷛ ䷜ ䷝ ䷞ ䷟
䷠ ䷡ ䷢ ䷣ ䷤ ䷥ ䷦ ䷧ ䷨ ䷩ ䷪ ䷫ ䷬ ䷭ ䷮ ䷯
䷰ ䷱ ䷲ ䷳ ䷴ ䷵ ䷶ ䷷ ䷸ ䷹ ䷺ ䷻ ䷼ ䷽ ䷾ ䷿
```

八卦符号：☰ ☱ ☲ ☳ ☴ ☵ ☶ ☷

## 🤝 贡献指南

欢迎贡献代码！请遵循以下步骤：

1. Fork 本仓库
2. 创建特性分支：`git checkout -b feature/xxx`
3. 提交更改：`git commit -m "feat: xxx"`
4. 推送到分支：`git push origin feature/xxx`
5. 创建 Pull Request

## 📄 许可证

MIT License

## 🙏 致谢

- 《周易》传统经典
- 先贤智慧传承

---

⭐ 如果这个项目对你有帮助，请给个 Star！

---

*太极生两仪，两仪生四象，四象生八卦* 🔮