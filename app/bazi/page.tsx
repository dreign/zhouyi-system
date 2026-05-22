'use client';
import { useState } from 'react';
import Link from 'next/link';

const NavLink = ({ href, label, active }: { href: string; label: string; active?: boolean }) => (
  <Link 
    href={href}
    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
      active 
        ? 'bg-[#c9a962]/20 text-[#c9a962] border border-[#c9a962]/50' 
        : 'text-[#d4c8a0] hover:text-[#c9a962] hover:bg-[#c9a962]/10'
    }`}
  >
    {label}
  </Link>
);

interface BaziPillar {
  gan: string;
  zhi: string;
  ganYinyang: string;
  ganWuxing: string;
  zhiYinyang: string;
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

export default function BaziPage() {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [hour, setHour] = useState('');
  const [result, setResult] = useState<ExtendedBaziAnalysis | null>(null);
  const [loading, setLoading] = useState(false);

  const handleBazi = async () => {
    if (!year || !month || !day || !hour) {
      alert('请填写完整的出生日期和时辰');
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
      <header className="relative z-10 bg-ancient-dark pt-20 pb-10 border-b-4 border-[#c9a962]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-16 rotate-slow">
              <TaiChiIcon />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-[#c9a962] tracking-widest">八字命理</h1>
              <p className="text-[#d4c8a0] mt-2 tracking-wider">解读命运密码，揭示人生运势</p>
            </div>
          </div>
        </div>
      </header>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a140a]/95 backdrop-blur-md border-b border-[#c9a962]/30 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-[#c9a962] flex items-center justify-center bg-[#2a1f10]">
                <span className="text-[#c9a962] text-xl">☯</span>
              </div>
              <span className="text-[#c9a962] font-bold text-lg tracking-wider">周易智慧</span>
            </div>
            
            <div className="flex items-center gap-6">
              <NavLink href="/" label="首页" />
              <NavLink href="/yi" label="易经占卜" />
              <NavLink href="/bazi" label="八字命理" active />
              <NavLink href="/ziwei" label="紫微斗数" />
              <NavLink href="/name" label="姓名分析" />
              <NavLink href="/book" label="周易全书" />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {!result && (
          <div className="ancient-card rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#3d2914] mb-6 text-center tracking-wider">八字排盘</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div>
                <label className="block text-[#3d2914] font-semibold mb-2">出生年份</label>
                <input
                  type="number"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="w-full px-4 py-3 border border-[#c9a962]/30 rounded-lg focus:ring-2 focus:ring-[#c9a962] focus:border-[#c9a962] bg-[#faf5e8]"
                  placeholder="例如：1990"
                  min="1900"
                  max="2050"
                />
              </div>
              
              <div>
                <label className="block text-[#3d2914] font-semibold mb-2">出生月份</label>
                <select
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  className="w-full px-4 py-3 border border-[#c9a962]/30 rounded-lg focus:ring-2 focus:ring-[#c9a962] focus:border-[#c9a962] bg-[#faf5e8]"
                >
                  <option value="">请选择</option>
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}月</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-[#3d2914] font-semibold mb-2">出生日期</label>
                <select
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                  className="w-full px-4 py-3 border border-[#c9a962]/30 rounded-lg focus:ring-2 focus:ring-[#c9a962] focus:border-[#c9a962] bg-[#faf5e8]"
                >
                  <option value="">请选择</option>
                  {Array.from({ length: 31 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}日</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-[#3d2914] font-semibold mb-2">出生时辰</label>
                <select
                  value={hour}
                  onChange={(e) => setHour(e.target.value)}
                  className="w-full px-4 py-3 border border-[#c9a962]/30 rounded-lg focus:ring-2 focus:ring-[#c9a962] focus:border-[#c9a962] bg-[#faf5e8]"
                >
                  <option value="">请选择</option>
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
              {loading ? '正在排盘...' : '开始排盘'}
            </button>
          </div>
        )}
        
        {result && (
          <div className="space-y-6">
            <div className="ancient-card rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#3d2914] mb-4">八字命盘</h3>
              <p className="text-2xl font-bold text-[#3d2914] mb-4">{result.baziString}</p>
              
              <div className="grid grid-cols-4 gap-4">
                {['年柱', '月柱', '日柱', '时柱'].map((label, index) => {
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
                        <div className="text-sm text-[#c9a962] mt-1 font-semibold">日主</div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {result.mingGong && result.taiYuan && (
              <div className="ancient-card rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#3d2914] mb-4">命宫胎元</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50/50 rounded-lg p-4 border border-blue-200">
                    <div className="text-sm text-blue-800 font-semibold mb-2">命宫</div>
                    <div className="text-xl font-bold text-[#3d2914]">{result.mingGong}</div>
                    <p className="text-sm text-[#5a4520] mt-2">命宫为人生归宿，影响性格与命运走向</p>
                  </div>
                  <div className="bg-purple-50/50 rounded-lg p-4 border border-purple-200">
                    <div className="text-sm text-purple-800 font-semibold mb-2">胎元</div>
                    <div className="text-xl font-bold text-[#3d2914]">{result.taiYuan.gan}{result.taiYuan.zhi}</div>
                    <p className="text-sm text-[#5a4520] mt-2">胎元为受孕月份之气，影响先天禀赋</p>
                  </div>
                </div>
              </div>
            )}

            <div className="ancient-card rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#3d2914] mb-4">五行分析</h3>
              <div className="space-y-4">
                {Object.entries(result.wuxingScore).map(([wuxing, score]) => {
                  const maxScore = Math.max(...Object.values(result.wuxingScore));
                  const percentage = (score / maxScore) * 100;
                  return (
                    <div key={wuxing}>
                      <div className="flex justify-between mb-1">
                        <span className={`font-semibold ${wuxingColors[wuxing].split(' ')[0]}`}>{wuxing}</span>
                        <span className="text-[#5a4520]">{score}分</span>
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
              <h3 className="text-xl font-bold text-[#3d2914] mb-4">日主与用神</h3>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className={`px-4 py-2 rounded-full font-semibold text-lg ${
                  result.dayMainStrength === '强' ? 'bg-red-100 text-red-700' :
                  result.dayMainStrength === '弱' ? 'bg-blue-100 text-blue-700' :
                  'bg-green-100 text-green-700'
                }`}>
                  日主{result.dayMain}：{result.dayMainStrength}
                </div>
                <div className={`px-4 py-2 rounded-full font-semibold text-lg bg-purple-100 text-purple-700`}>
                  用神：{result.yongshen.join('、')}
                </div>
              </div>
              {result.wangshuai && (
                <div className="bg-[#1a140a]/5 rounded-lg p-4 border border-[#3d2914]/20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-[#3d2914]">旺衰等级：</span>
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
                <h3 className="text-xl font-bold text-[#3d2914] mb-4">神煞分析</h3>
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
                <h3 className="text-xl font-bold text-[#3d2914] mb-4">十神分析</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {result.shiShenDetails.map((item, index) => (
                    <div key={index} className={`p-3 rounded-lg text-center border ${shiShenColors[item.name]}`}>
                      <div className="font-bold text-sm">{item.name}</div>
                      <div className="text-xs mt-1">数量: {item.count}</div>
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
                <h3 className="text-xl font-bold text-[#3d2914] mb-4">大运分析</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-[#1a140a]/10">
                        <th className="px-4 py-2 text-left text-sm font-semibold text-[#3d2914]">运期</th>
                        <th className="px-4 py-2 text-center text-sm font-semibold text-[#3d2914]">干支</th>
                        <th className="px-4 py-2 text-center text-sm font-semibold text-[#3d2914]">十神</th>
                        <th className="px-4 py-2 text-center text-sm font-semibold text-[#3d2914]">五行</th>
                        <th className="px-4 py-2 text-center text-sm font-semibold text-[#3d2914]">吉凶</th>
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
                <h3 className="text-xl font-bold text-[#3d2914] mb-4">流年运势</h3>
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
                <h3 className="text-xl font-bold text-[#3d2914] mb-4">综合分析</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#c9a962]/10 rounded-lg p-4 border border-[#c9a962]/30">
                    <div className="text-sm text-[#3d2914] font-semibold mb-2">命运总评</div>
                    <p className="text-[#5a4520] text-sm">{result.analysis.destiny}</p>
                  </div>
                  <div className="bg-blue-50/50 rounded-lg p-4 border border-blue-200">
                    <div className="text-sm text-blue-800 font-semibold mb-2">学业智慧</div>
                    <p className="text-[#5a4520] text-sm">{result.analysis.academic}</p>
                  </div>
                  <div className="bg-green-50/50 rounded-lg p-4 border border-green-200">
                    <div className="text-sm text-green-800 font-semibold mb-2">财运事业</div>
                    <p className="text-[#5a4520] text-sm">{result.analysis.wealth}</p>
                  </div>
                  <div className="bg-pink-50/50 rounded-lg p-4 border border-pink-200">
                    <div className="text-sm text-pink-800 font-semibold mb-2">感情婚姻</div>
                    <p className="text-[#5a4520] text-sm">{result.analysis.marriage}</p>
                  </div>
                  <div className="bg-purple-50/50 rounded-lg p-4 border border-purple-200">
                    <div className="text-sm text-purple-800 font-semibold mb-2">职业发展</div>
                    <p className="text-[#5a4520] text-sm">{result.analysis.career}</p>
                  </div>
                  <div className="bg-yellow-50/50 rounded-lg p-4 border border-yellow-200">
                    <div className="text-sm text-yellow-800 font-semibold mb-2">性格特征</div>
                    <p className="text-[#5a4520] text-sm">{result.analysis.personality}</p>
                  </div>
                  <div className="bg-red-50/50 rounded-lg p-4 border border-red-200">
                    <div className="text-sm text-red-800 font-semibold mb-2">健康养生</div>
                    <p className="text-[#5a4520] text-sm">{result.analysis.health}</p>
                  </div>
                  <div className="bg-indigo-50/50 rounded-lg p-4 border border-indigo-200">
                    <div className="text-sm text-indigo-800 font-semibold mb-2">人际关系</div>
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
              重新排盘
            </button>
          </div>
        )}
      </main>

      <footer className="bg-ancient-dark py-8 mt-16 border-t-4 border-[#c9a962]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#d4c8a0]/70">© 2026 周易命理系统 · 传承千年智慧，启迪人生智慧</p>
          <p className="text-[#5a4520] text-sm mt-2">本系统仅供娱乐参考，请勿过分迷信</p>
          <p className="text-[#5a4520] text-sm mt-2">联系邮箱：<a href="mailto:fengbuxiu@foxmail.com" className="text-[#c9a962] hover:text-[#d4c8a0] transition-colors">fengbuxiu@foxmail.com</a></p>
        </div>
      </footer>
    </div>
  );
}
