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

interface ZodiacAnalysis {
  zodiac: string;
  match: boolean;
  explanation: string;
}

interface ConstellationAnalysis {
  constellation: string;
  traits: string[];
}

interface ToneAnalysis {
  tones: Array<{ char: string; tone: string; pinyin: string }>;
  harmony: string;
  suggestion: string;
}

interface StructureAnalysis {
  characters: Array<{ char: string; structure: string; strokes: number }>;
  balance: string;
}

interface YinYangAnalysis {
  characters: Array<{ char: string; yinYang: string }>;
  yinCount: number;
  yangCount: number;
  balance: string;
  suggestion: string;
}

interface TabooAnalysis {
  hasTaboo: boolean;
  taboos: string[];
  suggestion: string;
}

interface PopularityAnalysis {
  level: string;
  rank: number;
  suggestion: string;
}

interface HomophoneAnalysis {
  hasBad: boolean;
  badHomophones: string[];
  suggestion: string;
}

interface NameAnalysis {
  name: string;
  strokes: number;
  strokeLuck: '吉' | '中' | '凶';
  wuxing: string[];
  wuxingMatch: boolean;
  wuxingExplanation: string;
  score: number;
  meaning: string;
  zodiac?: ZodiacAnalysis;
  constellation?: ConstellationAnalysis;
  tone?: ToneAnalysis;
  structure?: StructureAnalysis;
  yinYang?: YinYangAnalysis;
  taboo?: TabooAnalysis;
  popularity?: PopularityAnalysis;
  homophone?: HomophoneAnalysis;
}

interface GeneratedName {
  name: string;
  score: number;
  wuxing: string[];
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

export default function NamePage() {
  const [mode, setMode] = useState<'analyze' | 'generate'>('analyze');
  const [familyName, setFamilyName] = useState('');
  const [givenName, setGivenName] = useState('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [targetWuxing, setTargetWuxing] = useState<string[]>([]);
  const [birthYear, setBirthYear] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [analysisResult, setAnalysisResult] = useState<NameAnalysis | null>(null);
  const [generatedNames, setGeneratedNames] = useState<GeneratedName[]>([]);
  const [loading, setLoading] = useState(false);

  const wuxingOptions = ['金', '木', '水', '火', '土'];

  const toggleWuxing = (wuxing: string) => {
    if (targetWuxing.includes(wuxing)) {
      setTargetWuxing(targetWuxing.filter(w => w !== wuxing));
    } else {
      setTargetWuxing([...targetWuxing, wuxing]);
    }
  };

  const handleAnalyze = async () => {
    if (!familyName || !givenName) {
      alert('请输入完整的姓名');
      return;
    }

    setLoading(true);

    const response = await fetch('/api/name/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: familyName + givenName,
        targetWuxing,
        birthYear: birthYear ? parseInt(birthYear) : null,
        birthMonth: birthMonth ? parseInt(birthMonth) : null,
        gender
      })
    });

    const data = await response.json();

    if (data.success) {
      setAnalysisResult(data.data);
    }

    setLoading(false);
  };

  const handleGenerate = async () => {
    if (!familyName) {
      alert('请输入姓氏');
      return;
    }

    setLoading(true);

    const response = await fetch('/api/name/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        familyName,
        gender,
        targetWuxing,
        count: 10
      })
    });

    const data = await response.json();

    if (data.success) {
      setGeneratedNames(data.data);
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

  const luckColors: Record<string, string> = {
    '吉': 'bg-green-100 text-green-700',
    '中': 'bg-yellow-100 text-yellow-700',
    '凶': 'bg-red-100 text-red-700'
  };

  const balanceColors: Record<string, string> = {
    '阴阳平衡': 'bg-green-100 text-green-700',
    '阳盛阴衰': 'bg-orange-100 text-orange-700',
    '阴盛阳衰': 'bg-blue-100 text-blue-700'
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
              <h1 className="text-4xl font-bold text-[#c9a962] tracking-widest">起名分析</h1>
              <p className="text-[#d4c8a0] mt-2 tracking-wider">为宝宝起一个吉祥如意的好名字</p>
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
              <NavLink href="/bazi" label="八字命理" />
              <NavLink href="/ziwei" label="紫微斗数" />
              <NavLink href="/name" label="姓名分析" active />
              <NavLink href="/book" label="周易全书" />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => {
              setMode('analyze');
              setAnalysisResult(null);
              setGeneratedNames([]);
            }}
            className={`px-8 py-3 rounded-lg font-semibold transition-all border-2 ${
              mode === 'analyze'
                ? 'bg-[#3d2914] text-[#faf5e8] border-[#c9a962]'
                : 'bg-[#faf5e8] text-[#3d2914] border-[#c9a962] hover:bg-[#c9a962]/10'
            }`}
          >
            姓名分析
          </button>
          <button
            onClick={() => {
              setMode('generate');
              setAnalysisResult(null);
              setGeneratedNames([]);
            }}
            className={`px-8 py-3 rounded-lg font-semibold transition-all border-2 ${
              mode === 'generate'
                ? 'bg-[#3d2914] text-[#faf5e8] border-[#c9a962]'
                : 'bg-[#faf5e8] text-[#3d2914] border-[#c9a962] hover:bg-[#c9a962]/10'
            }`}
          >
            智能起名
          </button>
        </div>

        <div className="ancient-card rounded-xl p-8 mb-8">
          {mode === 'analyze' ? (
            <>
              <h2 className="text-2xl font-bold text-[#3d2914] mb-6 text-center tracking-wider">姓名分析</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-[#3d2914] font-semibold mb-2">姓氏</label>
                  <input
                    type="text"
                    value={familyName}
                    onChange={(e) => setFamilyName(e.target.value)}
                    className="w-full px-4 py-3 border border-[#c9a962]/30 rounded-lg focus:ring-2 focus:ring-[#c9a962] focus:border-[#c9a962] bg-[#faf5e8]"
                    placeholder="例如：王"
                    maxLength={5}
                  />
                </div>
                <div>
                  <label className="block text-[#3d2914] font-semibold mb-2">名字</label>
                  <input
                    type="text"
                    value={givenName}
                    onChange={(e) => setGivenName(e.target.value)}
                    className="w-full px-4 py-3 border border-[#c9a962]/30 rounded-lg focus:ring-2 focus:ring-[#c9a962] focus:border-[#c9a962] bg-[#faf5e8]"
                    placeholder="例如：伟"
                    maxLength={10}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-[#3d2914] font-semibold mb-2">性别</label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setGender('male')}
                      className={`flex-1 py-2 rounded-lg font-semibold transition-all ${
                        gender === 'male'
                          ? 'bg-blue-600 text-white'
                          : 'bg-[#1a140a]/5 text-[#3d2914] hover:bg-[#1a140a]/10'
                      }`}
                    >
                      男
                    </button>
                    <button
                      onClick={() => setGender('female')}
                      className={`flex-1 py-2 rounded-lg font-semibold transition-all ${
                        gender === 'female'
                          ? 'bg-pink-600 text-white'
                          : 'bg-[#1a140a]/5 text-[#3d2914] hover:bg-[#1a140a]/10'
                      }`}
                    >
                      女
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-[#3d2914] font-semibold mb-2">出生年份（属相）</label>
                  <input
                    type="number"
                    value={birthYear}
                    onChange={(e) => setBirthYear(e.target.value)}
                    className="w-full px-4 py-2 border border-[#c9a962]/30 rounded-lg focus:ring-2 focus:ring-[#c9a962] focus:border-[#c9a962] bg-[#faf5e8]"
                    placeholder="例如：2024"
                  />
                </div>
                <div>
                  <label className="block text-[#3d2914] font-semibold mb-2">出生月份（星座）</label>
                  <input
                    type="number"
                    value={birthMonth}
                    onChange={(e) => setBirthMonth(e.target.value)}
                    className="w-full px-4 py-2 border border-[#c9a962]/30 rounded-lg focus:ring-2 focus:ring-[#c9a962] focus:border-[#c9a962] bg-[#faf5e8]"
                    placeholder="例如：5"
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-[#3d2914] mb-6 text-center tracking-wider">智能起名</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-[#3d2914] font-semibold mb-2">姓氏</label>
                  <input
                    type="text"
                    value={familyName}
                    onChange={(e) => setFamilyName(e.target.value)}
                    className="w-full px-4 py-3 border border-[#c9a962]/30 rounded-lg focus:ring-2 focus:ring-[#c9a962] focus:border-[#c9a962] bg-[#faf5e8]"
                    placeholder="例如：王"
                    maxLength={5}
                  />
                </div>
                <div>
                  <label className="block text-[#3d2914] font-semibold mb-2">性别</label>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setGender('male')}
                      className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                        gender === 'male'
                          ? 'bg-blue-600 text-white'
                          : 'bg-[#1a140a]/5 text-[#3d2914] hover:bg-[#1a140a]/10'
                      }`}
                    >
                      男
                    </button>
                    <button
                      onClick={() => setGender('female')}
                      className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                        gender === 'female'
                          ? 'bg-pink-600 text-white'
                          : 'bg-[#1a140a]/5 text-[#3d2914] hover:bg-[#1a140a]/10'
                      }`}
                    >
                      女
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
          
          <div className="mb-6">
            <label className="block text-[#3d2914] font-semibold mb-3">选择用神五行（可选）</label>
            <div className="flex flex-wrap gap-3">
              {wuxingOptions.map((wuxing) => (
                <button
                  key={wuxing}
                  onClick={() => toggleWuxing(wuxing)}
                  className={`px-4 py-2 rounded-full font-semibold border-2 transition-all ${
                    targetWuxing.includes(wuxing)
                      ? `${wuxingColors[wuxing]} border-current`
                      : 'bg-[#faf5e8] text-[#3d2914] border-[#c9a962]/30 hover:border-[#c9a962]'
                  }`}
                >
                  {wuxing}
                </button>
              ))}
            </div>
          </div>
          
          <button
            onClick={mode === 'analyze' ? handleAnalyze : handleGenerate}
            disabled={loading}
            className="w-full bg-[#3d2914] text-[#faf5e8] py-4 rounded-lg font-semibold text-lg hover:bg-[#2a1f10] transition-all disabled:opacity-50 disabled:cursor-not-allowed border border-[#c9a962]"
          >
            {loading ? '正在分析...' : (mode === 'analyze' ? '分析姓名' : '生成名字')}
          </button>
        </div>

        {analysisResult && (
          <div className="space-y-6">
            <div className="ancient-card rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#3d2914] mb-4">姓名分析结果</h3>
              <p className="text-3xl font-bold text-[#3d2914] mb-4">{analysisResult.name}</p>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl font-bold text-[#c9a962]">{analysisResult.score}</div>
                <div>
                  <div className="text-sm text-[#5a4520]">综合评分</div>
                  <div className="w-40 bg-[#3d2914]/10 rounded-full h-3">
                    <div
                      className="h-3 rounded-full bg-[#c9a962] transition-all duration-500"
                      style={{ width: `${analysisResult.score}%` }}
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="text-lg font-semibold text-[#3d2914]">笔画数：{analysisResult.strokes}</div>
                <div className={`px-3 py-1 rounded-full text-sm font-semibold ${luckColors[analysisResult.strokeLuck]}`}>
                  {analysisResult.strokeLuck}
                </div>
              </div>
              
              <div className="mb-4">
                <div className="text-lg font-semibold text-[#3d2914] mb-2">五行属性</div>
                <div className="flex gap-2">
                  {analysisResult.wuxing.map((w, i) => (
                    <span key={i} className={`px-3 py-1 rounded-full text-sm font-semibold border ${wuxingColors[w]}`}>
                      {w}
                    </span>
                  ))}
                </div>
                <p className="text-[#5a4520] mt-2">{analysisResult.wuxingExplanation}</p>
              </div>
              
              <div className="bg-[#c9a962]/10 rounded-lg p-4 border border-[#c9a962]/30">
                <div className="text-lg font-semibold text-[#3d2914] mb-2">名字寓意</div>
                <p className="text-[#5a4520]">{analysisResult.meaning}</p>
              </div>
            </div>

            {analysisResult.zodiac && (
              <div className="ancient-card rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#3d2914] mb-3">属相分析</h3>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">
                    {['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'].indexOf(analysisResult.zodiac.zodiac) !== -1 
                      ? analysisResult.zodiac.zodiac 
                      : analysisResult.zodiac.zodiac}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    analysisResult.zodiac.match ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {analysisResult.zodiac.match ? '相合' : '一般'}
                  </span>
                </div>
                <p className="text-[#5a4520]">{analysisResult.zodiac.explanation}</p>
              </div>
            )}

            {analysisResult.constellation && (
              <div className="ancient-card rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#3d2914] mb-3">星座分析</h3>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xl font-semibold text-purple-700">{analysisResult.constellation.constellation}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {analysisResult.constellation.traits.map((trait, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {analysisResult.tone && (
              <div className="ancient-card rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#3d2914] mb-3">音律分析</h3>
                <div className="flex flex-wrap gap-3 mb-3">
                  {analysisResult.tone.tones.map((item, i) => (
                    <div key={i} className="text-center">
                      <div className="text-xl font-bold text-[#3d2914]">{item.char}</div>
                      <div className="text-sm text-[#5a4520]">{item.pinyin}</div>
                      <div className="text-xs text-blue-700">{item.tone}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#5a4520]">音律和谐度：</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    analysisResult.tone.harmony === '和谐' ? 'bg-green-100 text-green-700' :
                    analysisResult.tone.harmony === '一般' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {analysisResult.tone.harmony}
                  </span>
                </div>
                <p className="text-[#5a4520] text-sm">{analysisResult.tone.suggestion}</p>
              </div>
            )}

            {analysisResult.structure && (
              <div className="ancient-card rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#3d2914] mb-3">字形分析</h3>
                <div className="flex flex-wrap gap-4 mb-3">
                  {analysisResult.structure.characters.map((item, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-[#3d2914]">{item.char}</div>
                      <div className="text-sm text-[#5a4520]">{item.strokes}画 · {item.structure}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#5a4520]">字形平衡：</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    analysisResult.structure.balance === '平衡' ? 'bg-green-100 text-green-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {analysisResult.structure.balance}
                  </span>
                </div>
              </div>
            )}

            {analysisResult.yinYang && (
              <div className="ancient-card rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#3d2914] mb-3">阴阳平衡分析</h3>
                <div className="flex flex-wrap gap-3 mb-3">
                  {analysisResult.yinYang.characters.map((item, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-[#3d2914]">{item.char}</div>
                      <div className={`text-xs px-2 py-1 rounded ${
                        item.yinYang === '阴' ? 'bg-blue-100 text-blue-700' :
                        item.yinYang === '阳' ? 'bg-red-100 text-red-700' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {item.yinYang}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-[#5a4520]">阴：{analysisResult.yinYang.yinCount} | 阳：{analysisResult.yinYang.yangCount}</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${balanceColors[analysisResult.yinYang.balance] || 'bg-gray-100 text-gray-700'}`}>
                    {analysisResult.yinYang.balance}
                  </span>
                </div>
                <p className="text-[#5a4520] text-sm">{analysisResult.yinYang.suggestion}</p>
              </div>
            )}

            {analysisResult.taboo && (
              <div className="ancient-card rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#3d2914] mb-3">禁忌部首检查</h3>
                {analysisResult.taboo.hasTaboo ? (
                  <>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {analysisResult.taboo.taboos.map((taboo, i) => (
                        <span key={i} className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
                          {taboo}
                        </span>
                      ))}
                    </div>
                    <p className="text-red-700 text-sm">{analysisResult.taboo.suggestion}</p>
                  </>
                ) : (
                  <p className="text-green-700">✓ 未发现禁忌部首</p>
                )}
              </div>
            )}

            {analysisResult.popularity && (
              <div className="ancient-card rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#3d2914] mb-3">流行度分析</h3>
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-[#5a4520]">流行等级：</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    analysisResult.popularity.level === '低' ? 'bg-green-100 text-green-700' :
                    analysisResult.popularity.level === '中' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {analysisResult.popularity.level}
                  </span>
                  <span className="text-[#5a4520]">排名：第{analysisResult.popularity.rank}位</span>
                </div>
                <p className="text-[#5a4520] text-sm">{analysisResult.popularity.suggestion}</p>
              </div>
            )}

            {analysisResult.homophone && (
              <div className="ancient-card rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#3d2914] mb-3">谐音分析</h3>
                {analysisResult.homophone.hasBad ? (
                  <>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {analysisResult.homophone.badHomophones.map((h, i) => (
                        <span key={i} className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
                          {h}
                        </span>
                      ))}
                    </div>
                    <p className="text-red-700 text-sm">{analysisResult.homophone.suggestion}</p>
                  </>
                ) : (
                  <p className="text-green-700">✓ 未发现不良谐音</p>
                )}
              </div>
            )}

            <button
              onClick={() => {
                setAnalysisResult(null);
                setFamilyName('');
                setGivenName('');
                setBirthYear('');
                setBirthMonth('');
              }}
              className="w-full bg-[#faf5e8] text-[#3d2914] py-4 rounded-lg font-semibold text-lg border-2 border-[#c9a962] hover:bg-[#c9a962]/10 transition-colors"
            >
              重新分析
            </button>
          </div>
        )}

        {generatedNames.length > 0 && (
          <div className="space-y-6">
            <div className="ancient-card rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#3d2914] mb-4">推荐名字</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {generatedNames.map((item, index) => (
                  <div key={index} className="bg-[#1a140a]/5 rounded-lg p-4 border border-[#3d2914]/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xl font-bold text-[#3d2914]">{item.name}</span>
                      <span className={`text-lg font-bold ${
                        item.score >= 80 ? 'text-green-700' :
                        item.score >= 60 ? 'text-yellow-700' : 'text-red-700'
                      }`}>
                        {item.score}分
                      </span>
                    </div>
                    <div className="flex gap-2">
                      {item.wuxing.map((w, i) => (
                        <span key={i} className={`px-2 py-1 rounded text-xs font-semibold border ${wuxingColors[w]}`}>
                          {w}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button
              onClick={() => {
                setGeneratedNames([]);
                setFamilyName('');
              }}
              className="w-full bg-[#faf5e8] text-[#3d2914] py-4 rounded-lg font-semibold text-lg border-2 border-[#c9a962] hover:bg-[#c9a962]/10 transition-colors"
            >
              重新生成
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
