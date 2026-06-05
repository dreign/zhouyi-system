'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { useTranslations } from '@/lib/i18n';

const guaList = [
  { id: 1, name: '乾卦', fullName: '乾为天', symbol: '䷀', url: '/zhouyi-book/01_乾卦.html' },
  { id: 2, name: '坤卦', fullName: '坤为地', symbol: '䷁', url: '/zhouyi-book/02_坤卦.html' },
  { id: 3, name: '屯卦', fullName: '水雷屯', symbol: '䷂', url: '/zhouyi-book/03_屯卦.html' },
  { id: 4, name: '蒙卦', fullName: '山水蒙', symbol: '䷃', url: '/zhouyi-book/04_蒙卦.html' },
  { id: 5, name: '需卦', fullName: '水天需', symbol: '䷄', url: '/zhouyi-book/05_需卦.html' },
  { id: 6, name: '讼卦', fullName: '天水讼', symbol: '䷅', url: '/zhouyi-book/06_讼卦.html' },
  { id: 7, name: '师卦', fullName: '地水师', symbol: '䷆', url: '/zhouyi-book/07_师卦.html' },
  { id: 8, name: '比卦', fullName: '水地比', symbol: '䷇', url: '/zhouyi-book/08_比卦.html' },
  { id: 9, name: '小畜卦', fullName: '风天小畜', symbol: '䷈', url: '/zhouyi-book/09_小畜卦.html' },
  { id: 10, name: '履卦', fullName: '天泽履', symbol: '䷉', url: '/zhouyi-book/10_履卦.html' },
  { id: 11, name: '泰卦', fullName: '地天泰', symbol: '䷊', url: '/zhouyi-book/11_泰卦.html' },
  { id: 12, name: '否卦', fullName: '天地否', symbol: '䷋', url: '/zhouyi-book/12_否卦.html' },
  { id: 13, name: '同人卦', fullName: '天火同人', symbol: '䷌', url: '/zhouyi-book/13_同人卦.html' },
  { id: 14, name: '大有卦', fullName: '火天大有', symbol: '䷍', url: '/zhouyi-book/14_大有卦.html' },
  { id: 15, name: '谦卦', fullName: '地山谦', symbol: '䷎', url: '/zhouyi-book/15_谦卦.html' },
  { id: 16, name: '豫卦', fullName: '雷地豫', symbol: '䷏', url: '/zhouyi-book/16_豫卦.html' },
  { id: 17, name: '随卦', fullName: '泽雷随', symbol: '䷐', url: '/zhouyi-book/17_随卦.html' },
  { id: 18, name: '蛊卦', fullName: '山风蛊', symbol: '䷑', url: '/zhouyi-book/18_蛊卦.html' },
  { id: 19, name: '临卦', fullName: '地泽临', symbol: '䷒', url: '/zhouyi-book/19_临卦.html' },
  { id: 20, name: '观卦', fullName: '风地观', symbol: '䷓', url: '/zhouyi-book/20_观卦.html' },
  { id: 21, name: '噬嗑卦', fullName: '火雷噬嗑', symbol: '䷔', url: '/zhouyi-book/21_噬嗑卦.html' },
  { id: 22, name: '贲卦', fullName: '山火贲', symbol: '䷕', url: '/zhouyi-book/22_贲卦.html' },
  { id: 23, name: '剥卦', fullName: '山地剥', symbol: '䷖', url: '/zhouyi-book/23_剥卦.html' },
  { id: 24, name: '复卦', fullName: '地雷复', symbol: '䷗', url: '/zhouyi-book/24_复卦.html' },
  { id: 25, name: '无妄卦', fullName: '天雷无妄', symbol: '䷘', url: '/zhouyi-book/25_无妄卦.html' },
  { id: 26, name: '大畜卦', fullName: '山天大畜', symbol: '䷙', url: '/zhouyi-book/26_大畜卦.html' },
  { id: 27, name: '颐卦', fullName: '山雷颐', symbol: '䷚', url: '/zhouyi-book/27_颐卦.html' },
  { id: 28, name: '大过卦', fullName: '泽风大过', symbol: '䷛', url: '/zhouyi-book/28_大过卦.html' },
  { id: 29, name: '坎卦', fullName: '坎为水', symbol: '䷜', url: '/zhouyi-book/29_坎卦.html' },
  { id: 30, name: '离卦', fullName: '离为火', symbol: '䷝', url: '/zhouyi-book/30_离卦.html' },
  { id: 31, name: '咸卦', fullName: '泽山咸', symbol: '䷞', url: '/zhouyi-book/31_咸卦.html' },
  { id: 32, name: '恒卦', fullName: '雷风恒', symbol: '䷟', url: '/zhouyi-book/32_恒卦.html' },
  { id: 33, name: '遁卦', fullName: '天山遁', symbol: '䷠', url: '/zhouyi-book/33_遁卦.html' },
  { id: 34, name: '大壮卦', fullName: '雷天大壮', symbol: '䷡', url: '/zhouyi-book/34_大壮卦.html' },
  { id: 35, name: '晋卦', fullName: '火地晋', symbol: '䷢', url: '/zhouyi-book/35_晋卦.html' },
  { id: 36, name: '明夷卦', fullName: '地火明夷', symbol: '䷣', url: '/zhouyi-book/36_明夷卦.html' },
  { id: 37, name: '家人卦', fullName: '风火家人', symbol: '䷤', url: '/zhouyi-book/37_家人卦.html' },
  { id: 38, name: '睽卦', fullName: '火泽睽', symbol: '䷥', url: '/zhouyi-book/38_睽卦.html' },
  { id: 39, name: '蹇卦', fullName: '水山蹇', symbol: '䷦', url: '/zhouyi-book/39_蹇卦.html' },
  { id: 40, name: '解卦', fullName: '雷水解', symbol: '䷧', url: '/zhouyi-book/40_解卦.html' },
  { id: 41, name: '损卦', fullName: '山泽损', symbol: '䷨', url: '/zhouyi-book/41_损卦.html' },
  { id: 42, name: '益卦', fullName: '风雷益', symbol: '䷩', url: '/zhouyi-book/42_益卦.html' },
  { id: 43, name: '夬卦', fullName: '泽天夬', symbol: '䷪', url: '/zhouyi-book/43_夬卦.html' },
  { id: 44, name: '姤卦', fullName: '天风姤', symbol: '䷫', url: '/zhouyi-book/44_姤卦.html' },
  { id: 45, name: '萃卦', fullName: '泽地萃', symbol: '䷬', url: '/zhouyi-book/45_萃卦.html' },
  { id: 46, name: '升卦', fullName: '地风升', symbol: '䷭', url: '/zhouyi-book/46_升卦.html' },
  { id: 47, name: '困卦', fullName: '泽水困', symbol: '䷮', url: '/zhouyi-book/47_困卦.html' },
  { id: 48, name: '井卦', fullName: '水风井', symbol: '䷯', url: '/zhouyi-book/48_井卦.html' },
  { id: 49, name: '革卦', fullName: '泽火革', symbol: '䷰', url: '/zhouyi-book/49_革卦.html' },
  { id: 50, name: '鼎卦', fullName: '火风鼎', symbol: '䷱', url: '/zhouyi-book/50_鼎卦.html' },
  { id: 51, name: '震卦', fullName: '震为雷', symbol: '䷲', url: '/zhouyi-book/51_震卦.html' },
  { id: 52, name: '艮卦', fullName: '艮为山', symbol: '䷳', url: '/zhouyi-book/52_艮卦.html' },
  { id: 53, name: '渐卦', fullName: '风山渐', symbol: '䷴', url: '/zhouyi-book/53_渐卦.html' },
  { id: 54, name: '归妹卦', fullName: '雷泽归妹', symbol: '䷵', url: '/zhouyi-book/54_归妹卦.html' },
  { id: 55, name: '丰卦', fullName: '雷火丰', symbol: '䷶', url: '/zhouyi-book/55_丰卦.html' },
  { id: 56, name: '旅卦', fullName: '火山旅', symbol: '䷷', url: '/zhouyi-book/56_旅卦.html' },
  { id: 57, name: '巽卦', fullName: '巽为风', symbol: '䷸', url: '/zhouyi-book/57_巽卦.html' },
  { id: 58, name: '兑卦', fullName: '兑为泽', symbol: '䷹', url: '/zhouyi-book/58_兑卦.html' },
  { id: 59, name: '涣卦', fullName: '风水涣', symbol: '䷺', url: '/zhouyi-book/59_涣卦.html' },
  { id: 60, name: '节卦', fullName: '水泽节', symbol: '䷻', url: '/zhouyi-book/60_节卦.html' },
  { id: 61, name: '中孚卦', fullName: '风泽中孚', symbol: '䷼', url: '/zhouyi-book/61_中孚卦.html' },
  { id: 62, name: '小过卦', fullName: '雷山小过', symbol: '䷽', url: '/zhouyi-book/62_小过卦.html' },
  { id: 63, name: '既济卦', fullName: '水火既济', symbol: '䷾', url: '/zhouyi-book/63_既济卦.html' },
  { id: 64, name: '未济卦', fullName: '火水未济', symbol: '䷿', url: '/zhouyi-book/64_未济卦.html' },
];

export default function BookPage() {
  const { t } = useTranslations();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGua = guaList.filter(gua => 
    gua.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    gua.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#faf5e8]">
      <Navigation activePath="/book" />

      <main className="pt-20 pb-12 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#3d2914] mb-4 tracking-wider">
            📖 {t('book.title')}
          </h1>
          <p className="text-[#5a4520] text-lg">
            {t('book.subtitle')} · 原文与译文
          </p>
        </div>

        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder={t('book.searchGua')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-lg border border-[#c9a962]/30 bg-white/80 text-[#3d2914] placeholder-[#8b7355] focus:outline-none focus:border-[#c9a962] focus:ring-2 focus:ring-[#c9a962]/20 transition-all"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8b7355]">🔍</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredGua.map((gua) => (
            <a
              key={gua.id}
              href={gua.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl p-6 border border-[#c9a962]/20 hover:border-[#c9a962]/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg bg-[#1a140a] flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl text-[#c9a962]">{gua.symbol}</span>
                </div>
                <div className="text-left">
                  <div className="text-lg font-bold text-[#3d2914]">{gua.name}</div>
                  <div className="text-sm text-[#5a4520]">{gua.fullName}</div>
                </div>
              </div>
              <div className="mt-4 text-xs text-[#8b7355] opacity-0 group-hover:opacity-100 transition-opacity">
                {t('book.clickForDetail')}
              </div>
            </a>
          ))}
        </div>

        {filteredGua.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔮</div>
            <p className="text-[#5a4520]">{t('book.noMatch')}</p>
          </div>
        )}

        <div className="mt-12 p-6 bg-[#c9a962]/10 rounded-xl border border-[#c9a962]/30">
          <h3 className="text-xl font-bold text-[#3d2914] mb-4">📚 {t('book.aboutZhouyi')}</h3>
          <p className="text-[#5a4520] leading-relaxed">
            {t('book.aboutZhouyiContent')}
          </p>
        </div>
      </main>


    </div>
  );
}