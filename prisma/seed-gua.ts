import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';
import * as cheerio from 'cheerio';

const prisma = new PrismaClient();

interface GuaInfo {
  code: string;
  name: string;
  fullName: string;
  summary: string;
  guaci: string;
  yaoci: string;
  interpretation: string;
}

const guaNames = [
  { num: 1, name: '乾', fullName: '乾为天', code: '111111' },
  { num: 2, name: '坤', fullName: '坤为地', code: '000000' },
  { num: 3, name: '屯', fullName: '水雷屯', code: '010001' },
  { num: 4, name: '蒙', fullName: '山水蒙', code: '100010' },
  { num: 5, name: '需', fullName: '水天需', code: '001011' },
  { num: 6, name: '讼', fullName: '天水讼', code: '110100' },
  { num: 7, name: '师', fullName: '地水师', code: '000001' },
  { num: 8, name: '比', fullName: '水地比', code: '100000' },
  { num: 9, name: '小畜', fullName: '风天小畜', code: '011011' },
  { num: 10, name: '履', fullName: '天泽履', code: '110110' },
  { num: 11, name: '泰', fullName: '地天泰', code: '000011' },
  { num: 12, name: '否', fullName: '天地否', code: '111100' },
  { num: 13, name: '同人', fullName: '天火同人', code: '110101' },
  { num: 14, name: '大有', fullName: '火天大有', code: '101011' },
  { num: 15, name: '谦', fullName: '地山谦', code: '001000' },
  { num: 16, name: '豫', fullName: '雷地豫', code: '010000' },
  { num: 17, name: '随', fullName: '泽雷随', code: '110010' },
  { num: 18, name: '蛊', fullName: '山风蛊', code: '100011' },
  { num: 19, name: '临', fullName: '地泽临', code: '000110' },
  { num: 20, name: '观', fullName: '风地观', code: '011100' },
  { num: 21, name: '噬嗑', fullName: '火雷噬嗑', code: '101010' },
  { num: 22, name: '贲', fullName: '山火贲', code: '100101' },
  { num: 23, name: '剥', fullName: '山地剥', code: '100000' },
  { num: 24, name: '复', fullName: '地雷复', code: '000010' },
  { num: 25, name: '无妄', fullName: '天雷无妄', code: '111010' },
  { num: 26, name: '大畜', fullName: '山天大畜', code: '100011' },
  { num: 27, name: '颐', fullName: '山雷颐', code: '100010' },
  { num: 28, name: '大过', fullName: '泽风大过', code: '110001' },
  { num: 29, name: '坎', fullName: '坎为水', code: '010010' },
  { num: 30, name: '离', fullName: '离为火', code: '101101' },
  { num: 31, name: '咸', fullName: '泽山咸', code: '110001' },
  { num: 32, name: '恒', fullName: '雷风恒', code: '010011' },
  { num: 33, name: '遁', fullName: '天山遁', code: '111001' },
  { num: 34, name: '大壮', fullName: '雷天大壮', code: '010111' },
  { num: 35, name: '晋', fullName: '火地晋', code: '101000' },
  { num: 36, name: '明夷', fullName: '地火明夷', code: '000101' },
  { num: 37, name: '家人', fullName: '风火家人', code: '011101' },
  { num: 38, name: '睽', fullName: '火泽睽', code: '101110' },
  { num: 39, name: '蹇', fullName: '水山蹇', code: '010001' },
  { num: 40, name: '解', fullName: '雷水解', code: '010100' },
  { num: 41, name: '损', fullName: '山泽损', code: '100110' },
  { num: 42, name: '益', fullName: '风雷益', code: '011010' },
  { num: 43, name: '夬', fullName: '泽天夬', code: '110111' },
  { num: 44, name: '姤', fullName: '天风姤', code: '111011' },
  { num: 45, name: '萃', fullName: '泽地萃', code: '110000' },
  { num: 46, name: '升', fullName: '地风升', code: '000011' },
  { num: 47, name: '困', fullName: '泽水困', code: '110010' },
  { num: 48, name: '井', fullName: '水风井', code: '010011' },
  { num: 49, name: '革', fullName: '泽火革', code: '110101' },
  { num: 50, name: '鼎', fullName: '火风鼎', code: '101011' },
  { num: 51, name: '震', fullName: '震为雷', code: '010010' },
  { num: 52, name: '艮', fullName: '艮为山', code: '001001' },
  { num: 53, name: '渐', fullName: '风山渐', code: '011001' },
  { num: 54, name: '归妹', fullName: '雷泽归妹', code: '010110' },
  { num: 55, name: '丰', fullName: '雷火丰', code: '010101' },
  { num: 56, name: '旅', fullName: '火山旅', code: '101001' },
  { num: 57, name: '巽', fullName: '巽为风', code: '011011' },
  { num: 58, name: '兑', fullName: '兑为泽', code: '110110' },
  { num: 59, name: '涣', fullName: '风水涣', code: '011100' },
  { num: 60, name: '节', fullName: '水泽节', code: '010110' },
  { num: 61, name: '中孚', fullName: '风泽中孚', code: '011110' },
  { num: 62, name: '小过', fullName: '雷山小过', code: '010001' },
  { num: 63, name: '既济', fullName: '水火既济', code: '010101' },
  { num: 64, name: '未济', fullName: '火水未济', code: '101010' },
];

function parseHtmlFile(filePath: string, guaInfo: typeof guaNames[0]): GuaInfo {
  const html = fs.readFileSync(filePath, 'utf-8');
  const $ = cheerio.load(html);

  const content = $('.lacontent').text();
  
  const guaciMatch = content.match(/卦辞[：:]\s*([^《]+)/);
  const yaociMatch = content.match(/爻辞[：:]\s*([\s\S]+?)(?=象曰|$)/);
  const interpretationMatch = content.match(/解释翻译[：:]\s*([\s\S]+?)(?=注释出处|$)/);

  return {
    code: guaInfo.code,
    name: guaInfo.name,
    fullName: guaInfo.fullName,
    summary: `第${guaInfo.num}卦 ${guaInfo.name}卦 ${guaInfo.fullName}`,
    guaci: guaciMatch ? guaciMatch[1].trim() : '',
    yaoci: yaociMatch ? yaociMatch[1].trim() : '',
    interpretation: interpretationMatch ? interpretationMatch[1].trim() : '',
  };
}

async function seedGuaData() {
  console.log('开始导入64卦数据...\n');

  const bookDir = path.join(process.cwd(), 'zhouyi-book');

  for (const gua of guaNames) {
    const fileName = `${String(gua.num).padStart(2, '0')}_${gua.name}卦.html`;
    const filePath = path.join(bookDir, fileName);

    if (fs.existsSync(filePath)) {
      try {
        const guaInfo = parseHtmlFile(filePath, gua);
        
        await prisma.guaData.upsert({
          where: { code: guaInfo.code },
          update: guaInfo,
          create: guaInfo,
        });

        console.log(`✓ 导入成功: ${guaInfo.name}卦 (${guaInfo.fullName})`);
      } catch (error) {
        console.error(`✗ 导入失败: ${gua.name}卦 -`, error);
      }
    } else {
      console.warn(`⚠ 文件不存在: ${fileName}`);
    }
  }

  console.log('\n64卦数据导入完成！');
}

async function main() {
  try {
    await seedGuaData();
  } catch (error) {
    console.error('导入过程中发生错误:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main();
