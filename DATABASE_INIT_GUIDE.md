# 数据库初始化指南

## 📋 数据导入脚本说明

本项目已创建完整的数据导入脚本，用于初始化数据库中的卦辞和汉字数据。

### ✅ 已创建的文件

1. **prisma/seed-gua.ts** - 64卦数据导入脚本
2. **prisma/seed-character.ts** - 常用汉字数据导入脚本
3. **prisma/seed-init.ts** - 数据库状态检查脚本

### 🚀 使用方法

#### 1. 检查数据库状态

```bash
npm run seed:init
```

这将显示数据库中各表的数据量。

#### 2. 导入64卦数据

```bash
npm run seed:gua
```

将导入64卦的完整信息，包括：
- 卦码（二进制代码）
- 卦名
- 全称
- 卦辞
- 爻辞
- 解读

**数据来源**：从 `zhouyi-book/` 目录下的HTML文件解析提取

#### 3. 导入常用汉字数据

```bash
npm run seed:character
```

将导入 **600+个常用汉字**，包含：
- 汉字本身
- 简体笔画数
- 拼音
- 五行属性
- 康熙笔画（部分）

**数据特点**：
- 包含常用姓名用字
- 覆盖各种五行属性
- 适合起名和测字功能

#### 4. 一键导入所有数据

```bash
npm run seed:all
```

同时导入卦辞数据和汉字数据。

### 📊 数据统计

#### 64卦数据
- **数量**：64条记录
- **覆盖**：周易全部64卦
- **内容**：卦象、卦辞、爻辞、详细解读

#### 汉字数据
- **数量**：600+个汉字
- **覆盖**：
  - 基础数字和天干地支
  - 五行相关字（木、火、土、金、水）
  - 常见姓名用字
  - 方位和季节相关字
  - 品德和吉祥字
  - 动物和自然字
- **用途**：姓名学八字起名

### 🔧 在 Vercel 上执行

部署到 Vercel 后，需要在 Vercel 上执行数据库迁移和数据导入：

```bash
# 1. 安装 Vercel CLI
npm i -g vercel

# 2. 登录
vercel login

# 3. 链接项目
vercel link

# 4. 拉取环境变量
vercel env pull .env.local

# 5. 执行 Prisma 迁移
npx prisma migrate deploy

# 6. 生成 Prisma Client
npx prisma generate

# 7. 导入数据
npx tsx prisma/seed-gua.ts
npx tsx prisma/seed-character.ts
```

### ⚠️ 注意事项

1. **执行顺序**：先执行 `prisma migrate deploy`，再执行 seed 脚本
2. **数据覆盖**：使用 `upsert` 模式，已存在的数据会更新，不会重复创建
3. **错误处理**：脚本包含错误捕获，失败不会中断其他数据导入
4. **数据验证**：导入前会检查文件是否存在，避免导入失败

### 🎯 预期效果

导入完成后：
- ✅ 64卦占卜功能可直接使用
- ✅ 姓名八字起名功能可正常使用
- ✅ 五行分析有完整数据支持
- ✅ 数据库结构完整，ready for production

### 💡 扩展建议

如果需要更多数据，可以：

1. **扩充汉字库**：在 `seed-character.ts` 中添加更多汉字
2. **添加卦象图片**：在 `gua_data` 表添加 `image_url` 字段
3. **添加爻象数据**：创建 `yao_data` 表存储每个爻的详细信息
4. **历史数据导入**：编写脚本导入历史占卜记录

### 📝 示例数据

#### 64卦示例
```json
{
  "code": "111111",
  "name": "乾",
  "fullName": "乾为天",
  "guaci": "元亨利贞",
  "yaoci": "初九：潜龙勿用...",
  "interpretation": "乾卦象征天，代表刚健..."
}
```

#### 汉字示例
```json
{
  "char": "天",
  "stroke": 4,
  "pinyin": "tiān",
  "wuxing": "火"
}
```

---

**准备好部署了吗？**
请按照以下步骤操作：
1. 本地测试：`npm run seed:all`
2. 推送到 Git
3. 在 Vercel 上部署
4. 在 Vercel 上执行数据导入
5. 完成！🎉
