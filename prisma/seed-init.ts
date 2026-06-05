import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('========================================');
  console.log('周易占卜系统 - 数据库初始化');
  console.log('========================================\n');

  try {
    console.log('开始初始化数据库...\n');

    console.log('1. 检查数据库连接...');
    await prisma.$connect();
    console.log('✓ 数据库连接成功\n');

    console.log('2. 检查用户表...');
    const userCount = await prisma.user.count();
    console.log(`   当前用户数量: ${userCount}\n`);

    console.log('3. 检查占卜记录表...');
    const recordCount = await prisma.divinationRecord.count();
    console.log(`   当前占卜记录数量: ${recordCount}\n`);

    console.log('4. 检查卦辞数据表...');
    const guaCount = await prisma.guaData.count();
    console.log(`   当前卦辞数据数量: ${guaCount}\n`);

    console.log('5. 检查汉字数据表...');
    const charCount = await prisma.characterData.count();
    console.log(`   当前汉字数据数量: ${charCount}\n`);

    console.log('========================================');
    console.log('数据库状态检查完成！');
    console.log('========================================\n');

    console.log('下一步操作：');
    console.log('1. 导入64卦数据: npm run seed:gua');
    console.log('2. 导入汉字数据: npm run seed:character');
    console.log('3. 或一次性导入所有数据: npm run seed:all\n');

  } catch (error) {
    console.error('数据库初始化失败:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main();
