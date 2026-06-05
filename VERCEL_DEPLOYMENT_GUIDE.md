# Vercel 部署指南

## 项目配置已完成 ✅

我已经完成了以下配置修改：

1. **vercel.json** - 优化了构建命令，添加了数据库环境变量引用
2. **Prisma Schema** - 已从 SQLite 迁移到 PostgreSQL
3. **环境变量模板** - 创建了 `.env.production.example` 文件

## 部署步骤

### 步骤 1: 推送代码到 Git

确保你的项目代码已推送到 GitHub/GitLab：

```bash
git add .
git commit -m "配置 Vercel 部署"
git push origin main
```

### 步骤 2: 在 Vercel 导入项目

1. 访问 [vercel.com](https://vercel.com) 并登录
2. 点击 "Add New Project"
3. 选择你的 Git 仓库
4. Vercel 会自动检测 Next.js 项目

### 步骤 3: 配置环境变量

在 Vercel 项目设置中添加以下环境变量：

**必需变量：**
- `DEEPSEEK_API_KEY` - 你的 DeepSeek API 密钥
- `NEXTAUTH_SECRET` - 生成随机密钥（可使用 `openssl rand -base64 32` 生成）
- `NEXTAUTH_URL` - 部署后的 URL（部署后填写）

**数据库变量：**
- `DATABASE_URL` - Vercel Postgres 连接字符串（创建数据库后自动填充）

### 步骤 4: 创建 Vercel Postgres 数据库

1. 在 Vercel 项目中，进入 "Storage" 标签
2. 点击 "Create Database"
3. 选择 **Postgres**
4. 选择区域（建议选择靠近用户的区域）
5. 创建完成后，Vercel 会自动设置 `DATABASE_URL` 环境变量

### 步骤 5: 执行数据库迁移

部署前，需要在 Vercel 中执行数据库迁移：

1. 在 Vercel 项目面板中，进入 "Deployments"
2. 选择最新的部署
3. 点击 "View Build Logs"
4. 或者使用 Vercel CLI：

```bash
npm i -g vercel
vercel login
vercel project add
vercel env pull
npx prisma migrate deploy
```

### 步骤 6: 部署完成

1. 点击 "Deploy"
2. 等待构建完成
3. 部署成功后，更新 `NEXTAUTH_URL` 为实际的部署 URL

## 重要配置说明

### Prisma 配置
- 数据库 provider 已改为 `postgresql`
- 添加了 `directUrl` 配置以支持 Vercel Postgres

### Vercel 配置
- 构建命令: `npx prisma generate && next build`
- 区域: `iad1` (美东，可根据用户群体调整)
- 数据库连接自动从 Vercel Postgres 获取

## 本地开发

如需本地开发，需要：

1. 创建本地 Postgres 数据库（或使用 Docker）
2. 复制 `.env.production.example` 为 `.env.local`
3. 配置 `DATABASE_URL` 为本地数据库连接字符串
4. 运行 `npx prisma db push` 同步数据库结构

## 故障排查

### 构建失败
- 检查环境变量是否正确配置
- 确保 `DEEPSEEK_API_KEY` 已设置
- 查看 Vercel Build Logs 获取详细错误信息

### 数据库连接错误
- 确认 Vercel Postgres 已创建
- 检查 `DATABASE_URL` 是否正确
- 确认数据库区域与部署区域一致

### Prisma 迁移失败
- 运行 `vercel env pull` 拉取最新的环境变量
- 使用 `npx prisma migrate status` 检查迁移状态
- 可使用 `npx prisma db push` 强制同步（会丢失数据）

## 技术支持

如果遇到问题：
1. 查看 Vercel 官方文档：https://vercel.com/docs
2. 查看 Prisma 文档：https://www.prisma.io/docs
3. 检查项目 GitHub Issues
