'use client';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { useTranslations } from '@/lib/i18n';

interface BaziPillar {
  gan: string;
  zhi: string;
  ganWuxing: string;
  zhiWuxing: string;
  shiShen?: string;
  cangGan: string[];
}

interface BaziChart {
  year: BaziPillar;
  month: BaziPillar;
  day: BaziPillar;
  hour: BaziPillar;
}

interface ExtendedBaziAnalysis {
  bazi: BaziChart;
  baziString: string;
  wuxingScore: Record<string, number>;
  dayMain: string;
  dayMainStrength: '强' | '弱' | '中和';
  yongshen: string[];
  mingGong?: string;
  taiYuan?: { gan: string; zhi: string };
  shensha?: Array<{ name: string; meaning: string; effect: string }>;
  shiShenDistribution?: Record<string, number>;
  shiShenDetails?: Array<{ name: string; count: number; status: string; description: string; characteristics: string[] }>;
  wangshuai?: { level: string; description: string; suggestion: string; score: number };
  dayun?: Array<{ gan: string; zhi: string; period: string; startAge: number; endAge: number; shiShen: string; wuxing: string; isYongshen: boolean; direction: string }>;
  liunian?: Array<{ year: number; gan: string; zhi: string; shiShen: string; wuxing: string; isYongshen: boolean; direction: string }>;
  analysis?: {
    destiny: string;
    academic: string;
    wealth: string;
    marriage: string;
    career: string;
    friendship: string;
    personality: string;
    health: string;
    constellation: string;
  };
}

export default function BaziPage() {
  const { t } = useTranslations();
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [hour, setHour] = useState('');
  const [result, setResult] = useState<ExtendedBaziAnalysis | null>(null);
  const [loading, setLoading] = useState(false);

  const handleBazi = async () => {
    if (!year || !month || !day || !hour) {
      alert(t('bazi.fillAllFields'));
      return;
    }

    setLoading(true);

    const response = await fetch('/api/bazi/chart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        year: parseInt(year),
        month: parseInt(month),
        day: parseInt(day),
        hour: parseInt(hour)
      })
    });

    const data = await response.json();

    if (data.success) {
      setResult(data.data);
    }

    setLoading(false);
  };

  const wuxingColors: Record<string, string> = {
    '金': 'text-yellow-700 bg-yellow-100 border-yellow-300',
    '木': 'text-green-700 bg-green-100 border-green-300',
    '水': 'text-blue-700 bg-blue-100 border-blue-300',
    '火': 'text-red-700 bg-red-100 border-red-300',
    '土': 'text-[#c9a962] bg-[#c9a962]/10 border-[#c9a962]/30'
  };

  const wuxingBgColors: Record<string, string> = {
    '金': 'bg-yellow-200',
    '木': 'bg-green-200',
    '水': 'bg-blue-200',
    '火': 'bg-red-200',
    '土': 'bg-[#c9a962]/30'
  };

  const shiShenColors: Record<string, string> = {
    '比肩': 'bg-gray-100 text-gray-700',
    '劫财': 'bg-gray-100 text-gray-700',
    '食神': 'bg-green-100 text-green-700',
    '伤官': 'bg-green-100 text-green-700',
    '偏财': 'bg-yellow-100 text-yellow-700',
    '正财': 'bg-yellow-100 text-yellow-700',
    '七杀': 'bg-red-100 text-red-700',
    '正官': 'bg-red-100 text-red-700',
    '偏印': 'bg-purple-100 text-purple-700',
    '正印': 'bg-purple-100 text-purple-700'
  };

  return (
    <div className="min-h-screen bg-paper taiji-bg">
      <Navigation activePath="/bazi" />

      <main className="max-w-4xl mx-auto px-4 py-8">
        {!result && (
          <div className="ancient-card rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#3d2914] mb-6 text-center tracking-wider">{t('bazi.charting')}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div>
                <label className="block text-[#3d2914] font-semibold mb-2">{t('bazi.year')}</label>
                <input
                  type="number"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="w-full px-4 py-3 border border-[#c9a962]/30 rounded-lg focus:ring-2 focus:ring-[#c9a962] focus:border-[#c9a962] bg-[#faf5e8]"
                  placeholder={t('bazi.yearPlaceholder')}
                  min="1900"
                  max="2050"
                />
              </div>
              
              <div>
                <label className="block text-[#3d2914] font-semibold mb-2">{t('bazi.month')}</label>
                <select
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  className="w-full px-4 py-3 border border-[#c9a962]/30 rounded-lg focus:ring-2 focus:ring-[#c9a962] focus:border-[#c9a962] bg-[#faf5e8]"
                >
                  <option value="">{t('bazi.selectMonth')}</option>
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}月</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-[#3d2914] font-semibold mb-2">{t('bazi.day')}</label>
                <select
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                  className="w-full px-4 py-3 border border-[#c9a962]/30 rounded-lg focus:ring-2 focus:ring-[#c9a962] focus:border-[#c9a962] bg-[#faf5e8]"
                >
                  <option value="">{t('bazi.selectDay')}</option>
                  {Array.from({ length: 31 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}日</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-[#3d2914] font-semibold mb-2">{t('bazi.hour')}</label>
                <select
                  value={hour}
                  onChange={(e) => setHour(e.target.value)}
                  className="w-full px-4 py-3 border border-[#c9a962]/30 rounded-lg focus:ring-2 focus:ring-[#c9a962] focus:border-[#c9a962] bg-[#faf5e8]"
                >
                  <option value="">{t('bazi.selectHour')}</option>
                  <option value="0">子时 (23:00-01:00)</option>
                  <option value="2">丑时 (01:00-03:00)</option>
                  <option value="4">寅时 (03:00-05:00)</option>
                  <option value="6">卯时 (05:00-07:00)</option>
                  <option value="8">辰时 (07:00-09:00)</option>
                  <option value="10">巳时 (09:00-11:00)</option>
                  <option value="12">午时 (11:00-13:00)</option>
                  <option value="14">未时 (13:00-15:00)</option>
                  <option value="16">申时 (15:00-17:00)</option>
                  <option value="18">酉时 (17:00-19:00)</option>
                  <option value="20">戌时 (19:00-21:00)</option>
                  <option value="22">亥时 (21:00-23:00)</option>
                </select>
              </div>
            </div>
            
            <button
              onClick={handleBazi}
              disabled={loading}
              className="w-full bg-[#3d2914] text-[#faf5e8] py-4 rounded-lg font-semibold text-lg hover:bg-[#2a1f10] transition-all disabled:opacity-50 disabled:cursor-not-allowed border border-[#c9a962]"
            >
              {loading ? t('bazi.calculating') : t('bazi.startCharting')}
            </button>
          </div>
        )}
        
        {result && (
          <div className="space-y-6">
            <div className="ancient-card rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#3d2914] mb-4">{t('bazi.baziChart')}</h3>
              <p className="text-2xl font-bold text-[#3d2914] mb-4">{result.baziString}</p>
              
              <div className="grid grid-cols-4 gap-4">
                {[t('bazi.yearPillar'), t('bazi.monthPillar'), t('bazi.dayPillar'), t('bazi.hourPillar')].map((label, index) => {
                  const pillar = result.bazi[['year', 'month', 'day', 'hour'][index] as keyof BaziChart];
                  const isDay = index === 2;
                  return (
                    <div key={label} className={`p-4 rounded-lg text-center border ${isDay ? 'bg-[#c9a962]/10 border-[#c9a962]' : 'bg-[#1a140a]/5 border-[#3d2914]/20'}`}>
                      <div className="text-sm text-[#5a4520] mb-2">{label}</div>
                      <div className="text-2xl font-bold">
                        <span className={`${wuxingColors[pillar.ganWuxing]} px-2 py-1 rounded border`}>
                          {pillar.gan}
                        </span>
                        <span className={`${wuxingColors[pillar.zhiWuxing]} px-2 py-1 rounded border ml-1`}>
                          {pillar.zhi}
                        </span>
                      </div>
                      {pillar.shiShen && (
                        <div className="text-sm text-[#5a4520] mt-2">{pillar.shiShen}</div>
                      )}
                      {isDay && (
                        <div className="text-sm text-[#c9a962] mt-1 font-semibold">{t('bazi.dayMaster')}</div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {result.mingGong && result.taiYuan && (
              <div className="ancient-card rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#3d2914] mb-4">{t('bazi.mingGong')}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50/50 rounded-lg p-4 border border-blue-200">
                    <div className="text-sm text-blue-800 font-semibold mb-2">{t('bazi.mingGongLabel')}</div>
                    <div className="text-xl font-bold text-[#3d2914]">{result.mingGong}</div>
                    <p className="text-sm text-[#5a4520] mt-2">{t('bazi.mingGongDesc')}</p>
                  </div>
                  <div className="bg-purple-50/50 rounded-lg p-4 border border-purple-200">
                    <div className="text-sm text-purple-800 font-semibold mb-2">{t('bazi.taiYuan')}</div>
                    <div className="text-xl font-bold text-[#3d2914]">{result.taiYuan.gan}{result.taiYuan.zhi}</div>
                    <p className="text-sm text-[#5a4520] mt-2">{t('bazi.taiYuanDesc')}</p>
                  </div>
                </div>
              </div>
            )}

            <div className="ancient-card rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#3d2914] mb-4">{t('bazi.wuxingAnalysis')}</h3>
              <div className="space-y-4">
                {Object.entries(result.wuxingScore).map(([wuxing, score]) => {
                  const maxScore = Math.max(...Object.values(result.wuxingScore));
                  const percentage = (score / maxScore) * 100;
                  return (
                    <div key={wuxing}>
                      <div className="flex justify-between mb-1">
                        <span className={`font-semibold ${wuxingColors[wuxing].split(' ')[0]}`}>{wuxing}</span>
                        <span className="text-[#5a4520]">{score}{t('bazi.score')}</span>
                      </div>
                      <div className="w-full bg-[#3d2914]/10 rounded-full h-3">
                        <div
                          className={`h-3 rounded-full transition-all duration-500 ${wuxingBgColors[wuxing]}`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="ancient-card rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#3d2914] mb-4">{t('bazi.dayMasterGod')}</h3>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className={`px-4 py-2 rounded-full font-semibold text-lg ${
                  result.dayMainStrength === '强' ? 'bg-red-100 text-red-700' :
                  result.dayMainStrength === '弱' ? 'bg-blue-100 text-blue-700' :
                  'bg-green-100 text-green-700'
                }`}>
                  {t('bazi.dayMasterText')}{result.dayMain}：{result.dayMainStrength}
                </div>
                <div className={`px-4 py-2 rounded-full font-semibold text-lg bg-purple-100 text-purple-700`}>
                  {t('bazi.yongShen')}：{result.yongshen.join('、')}
                </div>
              </div>
              {result.wangshuai && (
                <div className="bg-[#1a140a]/5 rounded-lg p-4 border border-[#3d2914]/20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-[#3d2914]">{t('bazi.wangShuai')}：</span>
                    <span className={`px-2 py-1 rounded text-sm font-semibold ${
                      result.wangshuai.level === '极旺' || result.wangshuai.level === '偏旺' ? 'bg-red-100 text-red-700' :
                      result.wangshuai.level === '中和' ? 'bg-green-100 text-green-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {result.wangshuai.level}
                    </span>
                  </div>
                  <p className="text-[#5a4520] text-sm mb-1">{result.wangshuai.description}</p>
                  <p className="text-[#c9a962] text-sm font-semibold">{result.wangshuai.suggestion}</p>
                </div>
              )}
            </div>

            {result.shensha && result.shensha.length > 0 && (
              <div className="ancient-card rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#3d2914] mb-4">{t('bazi.shenshaAnalysis')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {result.shensha.map((item, index) => (
                    <div key={index} className="bg-[#c9a962]/10 rounded-lg p-4 border border-[#c9a962]/30">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg font-bold text-[#3d2914]">{item.name}</span>
                        <span className="text-sm text-[#5a4520]">{item.meaning}</span>
                      </div>
                      <p className="text-sm text-[#5a4520]">{item.effect}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {result.shiShenDetails && (
              <div className="ancient-card rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#3d2914] mb-4">{t('bazi.shiShenAnalysis')}</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {result.shiShenDetails.map((item, index) => (
                    <div key={index} className={`p-3 rounded-lg text-center border ${shiShenColors[item.name]}`}>
                      <div className="font-bold text-sm">{item.name}</div>
                      <div className="text-xs mt-1">{t('bazi.strokes')}: {item.count}</div>
                      <div className={`text-xs px-2 py-0.5 rounded mt-1 ${
                        item.status === '适中' ? 'bg-green-200 text-green-800' :
                        item.status === '偏旺' ? 'bg-red-200 text-red-800' :
                        'bg-yellow-200 text-yellow-800'
                      }`}>
                        {item.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {result.dayun && (
              <div className="ancient-card rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#3d2914] mb-4">{t('bazi.dayunAnalysis')}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-[#1a140a]/10">
                        <th className="px-4 py-2 text-left text-sm font-semibold text-[#3d2914]">{t('bazi.period')}</th>
                        <th className="px-4 py-2 text-center text-sm font-semibold text-[#3d2914]">{t('bazi.ganZhi')}</th>
                        <th className="px-4 py-2 text-center text-sm font-semibold text-[#3d2914]">{t('bazi.shiShen')}</th>
                        <th className="px-4 py-2 text-center text-sm font-semibold text-[#3d2914]">{t('bazi.wuxing')}</th>
                        <th className="px-4 py-2 text-center text-sm font-semibold text-[#3d2914]">{t('bazi.goodBad')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.dayun.map((yun, index) => (
                        <tr key={index} className="border-b border-[#3d2914]/20">
                          <td className="px-4 py-3 text-[#3d2914]">{yun.period}</td>
                          <td className="px-4 py-3 text-center">
                            <span className={`${wuxingColors[yun.wuxing]} px-2 py-1 rounded font-semibold border`}>
                              {yun.gan}{yun.zhi}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-center text-[#3d2914]">{yun.shiShen}</td>
                          <td className="px-4 py-3 text-center text-[#3d2914]">{yun.wuxing}</td>
                          <td className="px-4 py-3 text-center">
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                              yun.direction === '吉' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                            }`}>
                              {yun.direction}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {result.liunian && (
              <div className="ancient-card rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#3d2914] mb-4">{t('bazi.liuNian')}</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {result.liunian.map((year, index) => (
                    <div key={index} className="bg-[#1a140a]/5 rounded-lg p-3 text-center border border-[#3d2914]/20">
                      <div className="text-lg font-bold text-[#3d2914]">{year.year}</div>
                      <div className={`text-sm ${wuxingColors[year.wuxing]} px-2 py-1 rounded mt-1 border`}>
                        {year.gan}{year.zhi}
                      </div>
                      <div className="text-xs text-[#5a4520] mt-1">{year.shiShen}</div>
                      <div className={`text-xs px-2 py-0.5 rounded mt-1 ${
                        year.direction === '吉' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {year.direction}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {result.analysis && (
              <div className="ancient-card rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#3d2914] mb-4">{t('bazi.comprehensive')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#c9a962]/10 rounded-lg p-4 border border-[#c9a962]/30">
                    <div className="text-sm text-[#3d2914] font-semibold mb-2">{t('bazi.destinyTotal')}</div>
                    <p className="text-[#5a4520] text-sm">{result.analysis.destiny}</p>
                  </div>
                  <div className="bg-blue-50/50 rounded-lg p-4 border border-blue-200">
                    <div className="text-sm text-blue-800 font-semibold mb-2">{t('bazi.academic')}</div>
                    <p className="text-[#5a4520] text-sm">{result.analysis.academic}</p>
                  </div>
                  <div className="bg-green-50/50 rounded-lg p-4 border border-green-200">
                    <div className="text-sm text-green-800 font-semibold mb-2">{t('bazi.wealth')}</div>
                    <p className="text-[#5a4520] text-sm">{result.analysis.wealth}</p>
                  </div>
                  <div className="bg-pink-50/50 rounded-lg p-4 border border-pink-200">
                    <div className="text-sm text-pink-800 font-semibold mb-2">{t('bazi.marriage')}</div>
                    <p className="text-[#5a4520] text-sm">{result.analysis.marriage}</p>
                  </div>
                  <div className="bg-purple-50/50 rounded-lg p-4 border border-purple-200">
                    <div className="text-sm text-purple-800 font-semibold mb-2">{t('bazi.career')}</div>
                    <p className="text-[#5a4520] text-sm">{result.analysis.career}</p>
                  </div>
                  <div className="bg-yellow-50/50 rounded-lg p-4 border border-yellow-200">
                    <div className="text-sm text-yellow-800 font-semibold mb-2">{t('bazi.personality')}</div>
                    <p className="text-[#5a4520] text-sm">{result.analysis.personality}</p>
                  </div>
                  <div className="bg-red-50/50 rounded-lg p-4 border border-red-200">
                    <div className="text-sm text-red-800 font-semibold mb-2">{t('bazi.health')}</div>
                    <p className="text-[#5a4520] text-sm">{result.analysis.health}</p>
                  </div>
                  <div className="bg-indigo-50/50 rounded-lg p-4 border border-indigo-200">
                    <div className="text-sm text-indigo-800 font-semibold mb-2">{t('bazi.friendship')}</div>
                    <p className="text-[#5a4520] text-sm">{result.analysis.friendship}</p>
                  </div>
                </div>
              </div>
            )}
            
            <button
              onClick={() => {
                setResult(null);
                setYear('');
                setMonth('');
                setDay('');
                setHour('');
              }}
              className="w-full bg-[#faf5e8] text-[#3d2914] py-4 rounded-lg font-semibold text-lg border-2 border-[#c9a962] hover:bg-[#c9a962]/10 transition-colors"
            >
              {t('bazi.restart')}
            </button>
          </div>
        )}
      </main>

      <footer className="bg-ancient-dark py-8 mt-16 border-t-4 border-[#c9a962]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#d4c8a0]/70">{t('common.footer.copyright')} · {t('common.footer.tagline')}</p>
          <p className="text-[#5a4520] text-sm mt-2">{t('common.footer.disclaimer')}</p>
          <p className="text-[#5a4520] text-sm mt-2">{t('common.footer.contact')}<a href="mailto:fengbuxiu@foxmail.com" className="text-[#c9a962] hover:text-[#d4c8a0] transition-colors">fengbuxiu@foxmail.com</a></p>
        </div>
      </footer>
    </div>
  );
}
