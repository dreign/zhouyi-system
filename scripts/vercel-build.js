
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

try {
  if (process.env.DATABASE_URL) {
    console.log('DATABASE_URL 存在，执行 prisma generate...');
    execSync('npx prisma generate', { stdio: 'inherit' });
  } else {
    console.log('DATABASE_URL 不存在，跳过 prisma generate');
    // 创建空的 Prisma 客户端
    const prismaClientDir = path.join(__dirname, '../node_modules/.prisma/client');
    if (!fs.existsSync(prismaClientDir)) {
      fs.mkdirSync(prismaClientDir, { recursive: true });
    }
    fs.writeFileSync(
      path.join(prismaClientDir, 'index.js'),
      'module.exports = { PrismaClient: class { constructor() {} } };'
    );
    fs.writeFileSync(
      path.join(prismaClientDir, 'index.d.ts'),
      'export class PrismaClient { constructor(); }'
    );
  }
  console.log('执行 next build...');
  execSync('npx next build', { stdio: 'inherit' });
} catch (error) {
  console.error('构建失败:', error);
  process.exit(1);
}
