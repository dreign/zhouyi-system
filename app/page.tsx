'use client';

import Link from 'next/link';
import { useTranslations } from '@/lib/i18n';
import Navigation from '@/components/Navigation';

const TaiChiIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <circle cx="50" cy="50" r="48" fill="none" stroke="#1a140a" strokeWidth="2"/>
    <path d="M50 2 A48 48 0 0 1 50 98 A24 24 0 0 1 50 50 A24 24 0 0 0 50 2" fill="#1a140a"/>
    <path d="M50 2 A48 48 0 0 0 50 98 A24 24 0 0 0 50 50 A24 24 0 0 1 50 2" fill="#faf5e8"/>
    <circle cx="50" cy="26" r="8" fill="#faf5e8"/>
    <circle cx="50" cy="74" r="8" fill="#1a140a"/>
    <circle cx="50" cy="26" r="2" fill="#1a140a"/>
    <circle cx="50" cy="74" r="2" fill="#faf5e8"/>
  </svg>
);

const BaguaSymbol = ({ trigram }: { trigram: string }) => (
  <svg viewBox="0 0 60 60" className="w-full h-full">
    <circle cx="30" cy="30" r="28" fill="none" stroke="#c9a962" strokeWidth="1.5"/>
    <text x="30" y="38" textAnchor="middle" fontSize="24" fill="#3d2914" fontFamily="serif">
      {trigram}
    </text>
  </svg>
);

const CloudDecoration = () => (
  <svg viewBox="0 0 200 100" className="w-full h-full opacity-40">
    <path
      d="M20 60 Q40 20 70 35 Q100 50 130 30 Q160 10 180 40 Q170 70 140 60 Q110 50 80 65 Q50 80 20 60"
      fill="none"
      stroke="#c9a962"
      strokeWidth="1"
    />
    <path
      d="M10 80 Q30 50 60 60 Q90 70 120 55 Q150 40 170 65 Q160 90 130 85 Q100 80 70 90 Q40 100 10 80"
      fill="none"
      stroke="#c9a962"
      strokeWidth="0.8"
    />
  </svg>
);

const DragonDecoration = () => (
  <svg viewBox="0 0 150 80" className="w-full h-full opacity-30">
    <path
      d="M10 40 Q30 20 50 35 Q70 50 90 30 Q110 10 130 25 Q140 35 145 40 Q140 50 120 45 Q100 40 80 55 Q60 70 40 50 Q20 35 10 40"
      fill="none"
      stroke="#8b2500"
      strokeWidth="1.5"
    />
    <circle cx="140" cy="30" r="8" fill="none" stroke="#8b2500" strokeWidth="1"/>
    <path d="M136 26 L144 34 M144 26 L136 34" stroke="#8b2500" strokeWidth="1"/>
  </svg>
);

const TaotieMask = () => (
  <svg viewBox="0 0 80 80" className="w-full h-full opacity-20">
    <circle cx="40" cy="40" r="35" fill="none" stroke="#c9a962" strokeWidth="1"/>
    <circle cx="40" cy="40" r="20" fill="none" stroke="#c9a962" strokeWidth="1"/>
    <circle cx="30" cy="35" r="4" fill="#3d2914"/>
    <circle cx="50" cy="35" r="4" fill="#3d2914"/>
    <path d="M35 50 Q40 55 45 50" fill="none" stroke="#3d2914" strokeWidth="2"/>
    <path d="M25 40 Q20 30 30 25" fill="none" stroke="#c9a962" strokeWidth="1"/>
    <path d="M55 40 Q60 30 50 25" fill="none" stroke="#c9a962" strokeWidth="1"/>
    <path d="M25 50 Q18 55 22 60" fill="none" stroke="#c9a962" strokeWidth="1"/>
    <path d="M55 50 Q62 55 58 60" fill="none" stroke="#c9a962" strokeWidth="1"/>
  </svg>
);

function HomeContent() {
  const { t } = useTranslations();

  return (
    <div className="min-h-screen bg-paper taiji-bg relative overflow-hidden">
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 float-animation">
          <CloudDecoration />
        </div>
        <div className="absolute top-20 right-20 w-40 h-20 float-animation" style={{ animationDelay: '2s' }}>
          <CloudDecoration />
        </div>
        <div className="absolute bottom-20 left-20 w-36 h-18 float-animation" style={{ animationDelay: '1s' }}>
          <DragonDecoration />
        </div>
        <div className="absolute bottom-40 right-32 w-24 h-24 opacity-20">
          <TaotieMask />
        </div>
        <div className="absolute top-1/3 right-10 w-16 h-16 opacity-15">
          <TaotieMask />
        </div>
      </div>

      <header className="relative z-10 bg-ancient-dark pt-20 pb-12 border-b-4 border-[#c9a962]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-6 mb-4">
            <div className="w-16 h-16 rotate-slow">
              <TaiChiIcon />
            </div>
            <h1 className="text-5xl font-bold text-[#c9a962] text-shadow-ancient tracking-widest">
              {t('home.title')}
            </h1>
            <div className="w-16 h-16 rotate-slow" style={{ animationDirection: 'reverse' }}>
              <TaiChiIcon />
            </div>
          </div>
          <p className="text-[#d4c8a0] text-lg tracking-wider">
            {t('home.subtitle')}
          </p>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#c9a962] to-transparent"></div>
            <span className="text-[#c9a962] text-sm tracking-widest">{t('home.tao')}</span>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#c9a962] to-transparent"></div>
          </div>
        </div>
      </header>

      <Navigation />

      <main className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#3d2914] tracking-wider mb-2">
              <span className="text-[#c9a962]">☯</span> {t('home.sections.fortune')} <span className="text-[#c9a962]">☯</span>
            </h2>
            <p className="text-[#5a4520] text-lg">{t('home.philosophy')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/yi" className="ancient-card rounded-xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 relative">
                  <div className="absolute inset-0 rotate-slow group-hover:rotate-[360deg] transition-transform duration-[30s]">
                    <TaiChiIcon />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#3d2914] mb-3 tracking-wider">{t('home.yi.title')}</h3>
                <p className="text-[#5a4520] leading-relaxed">{t('home.yi.description')}</p>
                <div className="mt-4 flex justify-center gap-2">
                  <div className="w-8 h-8"><BaguaSymbol trigram="☰" /></div>
                  <div className="w-8 h-8"><BaguaSymbol trigram="☷" /></div>
                </div>
              </div>
            </Link>

            <Link href="/bazi" className="ancient-card rounded-xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-[#3d2914] rounded-full flex items-center justify-center border-2 border-[#c9a962]">
                  <span className="text-3xl text-[#c9a962] font-bold">四柱</span>
                </div>
                <h3 className="text-2xl font-bold text-[#3d2914] mb-3 tracking-wider">{t('home.bazi.title')}</h3>
                <p className="text-[#5a4520] leading-relaxed">{t('home.bazi.description')}</p>
                <div className="mt-4 flex justify-center gap-2">
                  <div className="w-8 h-8"><BaguaSymbol trigram="☲" /></div>
                  <div className="w-8 h-8"><BaguaSymbol trigram="☵" /></div>
                </div>
              </div>
            </Link>

            <Link href="/ziwei" className="ancient-card rounded-xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-[#1a140a] rounded-full flex items-center justify-center border-2 border-[#c9a962] pulse-gentle">
                  <span className="text-3xl text-[#c9a962] font-bold">紫微</span>
                </div>
                <h3 className="text-2xl font-bold text-[#3d2914] mb-3 tracking-wider">{t('home.ziwei.title')}</h3>
                <p className="text-[#5a4520] leading-relaxed">{t('home.ziwei.description')}</p>
                <div className="mt-4 flex justify-center gap-2">
                  <div className="w-8 h-8"><BaguaSymbol trigram="☱" /></div>
                  <div className="w-8 h-8"><BaguaSymbol trigram="☶" /></div>
                </div>
              </div>
            </Link>

            <Link href="/name" className="ancient-card rounded-xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-[#8b2500] rounded-full flex items-center justify-center border-2 border-[#c9a962]">
                  <span className="text-3xl text-[#faf5e8] font-bold">姓名</span>
                </div>
                <h3 className="text-2xl font-bold text-[#3d2914] mb-3 tracking-wider">{t('home.name.title')}</h3>
                <p className="text-[#5a4520] leading-relaxed">{t('home.name.description')}</p>
                <div className="mt-4 flex justify-center gap-2">
                  <div className="w-8 h-8"><BaguaSymbol trigram="☴" /></div>
                  <div className="w-8 h-8"><BaguaSymbol trigram="☳" /></div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-[#2a1f10]/80 rounded-xl p-8 border border-[#c9a962]/30">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-[#c9a962] tracking-wider mb-2">{t('home.bagua.title')}</h2>
              <p className="text-[#d4c8a0]/70">{t('home.bagua.subtitle')}</p>
            </div>
            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
              <div></div>
              <div className="aspect-square bg-[#1a140a] rounded-lg border border-[#c9a962]/50 flex items-center justify-center">
                <BaguaSymbol trigram="☰" />
              </div>
              <div></div>
              <div className="aspect-square bg-[#1a140a] rounded-lg border border-[#c9a962]/50 flex items-center justify-center">
                <BaguaSymbol trigram="☳" />
              </div>
              <div className="aspect-square bg-[#faf5e8] rounded-lg border-2 border-[#c9a962] flex items-center justify-center rotate-slow" style={{ animationDuration: '60s' }}>
                <TaiChiIcon />
              </div>
              <div className="aspect-square bg-[#1a140a] rounded-lg border border-[#c9a962]/50 flex items-center justify-center">
                <BaguaSymbol trigram="☴" />
              </div>
              <div className="aspect-square bg-[#1a140a] rounded-lg border border-[#c9a962]/50 flex items-center justify-center">
                <BaguaSymbol trigram="☵" />
              </div>
              <div className="aspect-square bg-[#1a140a] rounded-lg border border-[#c9a962]/50 flex items-center justify-center">
                <BaguaSymbol trigram="☲" />
              </div>
              <div className="aspect-square bg-[#1a140a] rounded-lg border border-[#c9a962]/50 flex items-center justify-center">
                <BaguaSymbol trigram="☶" />
              </div>
              <div></div>
              <div className="aspect-square bg-[#1a140a] rounded-lg border border-[#c9a962]/50 flex items-center justify-center">
                <BaguaSymbol trigram="☷" />
              </div>
              <div></div>
              <div className="aspect-square bg-[#1a140a] rounded-lg border border-[#c9a962]/50 flex items-center justify-center">
                <BaguaSymbol trigram="☱" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mt-2 text-center text-xs text-[#c9a962]/60">
              <div></div>
              <div>{t('home.bagua.positions.qian')}</div>
              <div></div>
              <div>{t('home.bagua.positions.zhen')}</div>
              <div>太极</div>
              <div>{t('home.bagua.positions.xun')}</div>
              <div>{t('home.bagua.positions.kan')}</div>
              <div>{t('home.bagua.positions.li')}</div>
              <div>{t('home.bagua.positions.gen')}</div>
              <div></div>
              <div>{t('home.bagua.positions.kun')}</div>
              <div></div>
              <div>{t('home.bagua.positions.dui')}</div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#3d2914] tracking-wider mb-2">
              <span className="text-[#c9a962]">✦</span> {t('home.sections.features')} <span className="text-[#c9a962]">✦</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="ancient-card rounded-xl p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#3d2914] rounded-full flex items-center justify-center border border-[#c9a962]">
                <span className="text-3xl text-[#c9a962]">☯</span>
              </div>
              <h4 className="font-bold text-[#3d2914] text-lg mb-2">{t('home.yi.title')}</h4>
              <p className="text-[#5a4520] text-sm leading-relaxed">《周易》群经之首，通过六十四卦揭示宇宙变化规律，推演吉凶祸福</p>
            </div>
            <div className="ancient-card rounded-xl p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#3d2914] rounded-full flex items-center justify-center border border-[#c9a962]">
                <span className="text-3xl text-[#c9a962]">⭐</span>
              </div>
              <h4 className="font-bold text-[#3d2914] text-lg mb-2">{t('home.ziwei.title')}</h4>
              <p className="text-[#5a4520] text-sm leading-relaxed">五星四余十二宫，星曜排布定人生，洞察命运起伏与格局走向</p>
            </div>
            <div className="ancient-card rounded-xl p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#3d2914] rounded-full flex items-center justify-center border border-[#c9a962]">
                <span className="text-3xl text-[#c9a962]">📊</span>
              </div>
              <h4 className="font-bold text-[#3d2914] text-lg mb-2">{t('home.bazi.title')}</h4>
              <p className="text-[#5a4520] text-sm leading-relaxed">年月日时四柱八字，天干地支定乾坤，解读人生轨迹与发展方向</p>
            </div>
          </div>
        </section>

        <section className="ancient-card rounded-xl p-8">
          <h3 className="text-2xl font-bold text-[#3d2914] text-center mb-6 tracking-wider">
            <span className="text-[#c9a962]">◇</span> {t('home.sections.advantages')} <span className="text-[#c9a962]">◇</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="w-14 h-14 mx-auto mb-3 bg-[#3d2914] rounded-full flex items-center justify-center border border-[#c9a962]">
                <span className="text-xl text-[#c9a962]">🧮</span>
              </div>
              <h4 className="font-medium text-[#3d2914] mb-1">{t('home.advantages.charting')}</h4>
              <p className="text-[#5a4520] text-sm">{t('home.advantages.chartingDesc')}</p>
            </div>
            <div className="text-center p-4">
              <div className="w-14 h-14 mx-auto mb-3 bg-[#3d2914] rounded-full flex items-center justify-center border border-[#c9a962]">
                <span className="text-xl text-[#c9a962]">💾</span>
              </div>
              <h4 className="font-medium text-[#3d2914] mb-1">{t('home.advantages.storage')}</h4>
              <p className="text-[#5a4520] text-sm">{t('home.advantages.storageDesc')}</p>
            </div>
            <div className="text-center p-4">
              <div className="w-14 h-14 mx-auto mb-3 bg-[#3d2914] rounded-full flex items-center justify-center border border-[#c9a962]">
                <span className="text-xl text-[#c9a962]">🤖</span>
              </div>
              <h4 className="font-medium text-[#3d2914] mb-1">{t('home.advantages.ai')}</h4>
              <p className="text-[#5a4520] text-sm">{t('home.advantages.aiDesc')}</p>
            </div>
            <div className="text-center p-4">
              <div className="w-14 h-14 mx-auto mb-3 bg-[#3d2914] rounded-full flex items-center justify-center border border-[#c9a962]">
                <span className="text-xl text-[#c9a962]">📱</span>
              </div>
              <h4 className="font-medium text-[#3d2914] mb-1">{t('home.advantages.responsive')}</h4>
              <p className="text-[#5a4520] text-sm">{t('home.advantages.responsiveDesc')}</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 bg-ancient-dark py-10 border-t-4 border-[#c9a962] mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-12 rotate-slow opacity-60">
              <TaiChiIcon />
            </div>
            <h3 className="text-xl text-[#c9a962] tracking-widest">{t('common.systemName')}</h3>
            <div className="w-12 h-12 rotate-slow opacity-60" style={{ animationDirection: 'reverse' }}>
              <TaiChiIcon />
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}

export default function Home() {
  return <HomeContent />;
}
