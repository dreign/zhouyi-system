'use client';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { useTranslations } from '@/lib/i18n';
import KnowledgePanel from '@/components/knowledge/KnowledgePanel';
import { KNOWLEDGE_CONFIGS } from '@/components/knowledge/knowledge-data';

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

export default function NamePage() {
  const { t } = useTranslations();
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
      alert(t('name.fillFullName'));
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
      alert(t('name.fillFamilyName'));
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
      <Navigation activePath="/name" />

      <div className="max-w-4xl mx-auto px-4 py-6">
        <KnowledgePanel
          title={KNOWLEDGE_CONFIGS.name.title}
          icon={KNOWLEDGE_CONFIGS.name.icon}
          sections={KNOWLEDGE_CONFIGS.name.sections}
        />
      </div>

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
            {t('name.analyze')}
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
            {t('name.generate')}
          </button>
        </div>

        <div className="ancient-card rounded-xl p-8 mb-8">
          {mode === 'analyze' ? (
            <>
              <h2 className="text-2xl font-bold text-[#3d2914] mb-6 text-center tracking-wider">{t('name.analyze')}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-[#3d2914] font-semibold mb-2">{t('name.familyName')}</label>
                  <input
                    type="text"
                    value={familyName}
                    onChange={(e) => setFamilyName(e.target.value)}
                    className="w-full px-4 py-3 border border-[#c9a962]/30 rounded-lg focus:ring-2 focus:ring-[#c9a962] focus:border-[#c9a962] bg-[#faf5e8]"
                    placeholder={t('name.familyNamePlaceholder')}
                    maxLength={5}
                  />
                </div>
                <div>
                  <label className="block text-[#3d2914] font-semibold mb-2">{t('name.givenName')}</label>
                  <input
                    type="text"
                    value={givenName}
                    onChange={(e) => setGivenName(e.target.value)}
                    className="w-full px-4 py-3 border border-[#c9a962]/30 rounded-lg focus:ring-2 focus:ring-[#c9a962] focus:border-[#c9a962] bg-[#faf5e8]"
                    placeholder={t('name.givenNamePlaceholder')}
                    maxLength={10}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-[#3d2914] font-semibold mb-2">{t('name.gender')}</label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setGender('male')}
                      className={`flex-1 py-2 rounded-lg font-semibold transition-all ${
                        gender === 'male'
                          ? 'bg-blue-600 text-white'
                          : 'bg-[#1a140a]/5 text-[#3d2914] hover:bg-[#1a140a]/10'
                      }`}
                    >
                      {t('name.male')}
                    </button>
                    <button
                      onClick={() => setGender('female')}
                      className={`flex-1 py-2 rounded-lg font-semibold transition-all ${
                        gender === 'female'
                          ? 'bg-pink-600 text-white'
                          : 'bg-[#1a140a]/5 text-[#3d2914] hover:bg-[#1a140a]/10'
                      }`}
                    >
                      {t('name.female')}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-[#3d2914] font-semibold mb-2">{t('name.birthYear')}</label>
                  <input
                    type="number"
                    value={birthYear}
                    onChange={(e) => setBirthYear(e.target.value)}
                    className="w-full px-4 py-2 border border-[#c9a962]/30 rounded-lg focus:ring-2 focus:ring-[#c9a962] focus:border-[#c9a962] bg-[#faf5e8]"
                    placeholder={t('name.birthYearPlaceholder')}
                  />
                </div>
                <div>
                  <label className="block text-[#3d2914] font-semibold mb-2">{t('name.birthMonth')}</label>
                  <input
                    type="number"
                    value={birthMonth}
                    onChange={(e) => setBirthMonth(e.target.value)}
                    className="w-full px-4 py-2 border border-[#c9a962]/30 rounded-lg focus:ring-2 focus:ring-[#c9a962] focus:border-[#c9a962] bg-[#faf5e8]"
                    placeholder={t('name.birthMonthPlaceholder')}
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-[#3d2914] mb-6 text-center tracking-wider">{t('name.generate')}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-[#3d2914] font-semibold mb-2">{t('name.familyName')}</label>
                  <input
                    type="text"
                    value={familyName}
                    onChange={(e) => setFamilyName(e.target.value)}
                    className="w-full px-4 py-3 border border-[#c9a962]/30 rounded-lg focus:ring-2 focus:ring-[#c9a962] focus:border-[#c9a962] bg-[#faf5e8]"
                    placeholder={t('name.familyNamePlaceholder')}
                    maxLength={5}
                  />
                </div>
                <div>
                  <label className="block text-[#3d2914] font-semibold mb-2">{t('name.gender')}</label>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setGender('male')}
                      className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                        gender === 'male'
                          ? 'bg-blue-600 text-white'
                          : 'bg-[#1a140a]/5 text-[#3d2914] hover:bg-[#1a140a]/10'
                      }`}
                    >
                      {t('name.male')}
                    </button>
                    <button
                      onClick={() => setGender('female')}
                      className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                        gender === 'female'
                          ? 'bg-pink-600 text-white'
                          : 'bg-[#1a140a]/5 text-[#3d2914] hover:bg-[#1a140a]/10'
                      }`}
                    >
                      {t('name.female')}
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
          
          <div className="mb-6">
            <label className="block text-[#3d2914] font-semibold mb-3">{t('name.selectWuxing')}</label>
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
            {loading ? t('name.analyzing') : (mode === 'analyze' ? t('name.doAnalyze') : t('name.doGenerate'))}
          </button>
        </div>

        {analysisResult && (
          <div className="space-y-6">
            <div className="ancient-card rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#3d2914] mb-4">{t('name.analysisResult')}</h3>
              <p className="text-3xl font-bold text-[#3d2914] mb-4">{analysisResult.name}</p>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl font-bold text-[#c9a962]">{analysisResult.score}</div>
                <div>
                  <div className="text-sm text-[#5a4520]">{t('name.comprehensiveScore')}</div>
                  <div className="w-40 bg-[#3d2914]/10 rounded-full h-3">
                    <div
                      className="h-3 rounded-full bg-[#c9a962] transition-all duration-500"
                      style={{ width: `${analysisResult.score}%` }}
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="text-lg font-semibold text-[#3d2914]">{t('name.strokes')}：{analysisResult.strokes}</div>
                <div className={`px-3 py-1 rounded-full text-sm font-semibold ${luckColors[analysisResult.strokeLuck]}`}>
                  {analysisResult.strokeLuck}
                </div>
              </div>
              
              <div className="mb-4">
                <div className="text-lg font-semibold text-[#3d2914] mb-2">{t('name.wuxingProperty')}</div>
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
                <div className="text-lg font-semibold text-[#3d2914] mb-2">{t('name.nameMeaning')}</div>
                <p className="text-[#5a4520]">{analysisResult.meaning}</p>
              </div>
            </div>

            {analysisResult.zodiac && (
              <div className="ancient-card rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#3d2914] mb-3">{t('name.zodiacAnalysis')}</h3>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">
                    {['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'].indexOf(analysisResult.zodiac.zodiac) !== -1 
                      ? analysisResult.zodiac.zodiac 
                      : analysisResult.zodiac.zodiac}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${analysisResult.zodiac.match ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {analysisResult.zodiac.match ? t('name.match') : t('name.general')}
                  </span>
                </div>
                <p className="text-[#5a4520]">{analysisResult.zodiac.explanation}</p>
              </div>
            )}

            {analysisResult.constellation && (
              <div className="ancient-card rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#3d2914] mb-3">{t('name.constellationAnalysis')}</h3>
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
                <h3 className="text-lg font-bold text-[#3d2914] mb-3">{t('name.toneAnalysis')}</h3>
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
                  <span className="text-[#5a4520]">{t('name.toneHarmony')}：</span>
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
                <h3 className="text-lg font-bold text-[#3d2914] mb-3">{t('name.structureAnalysis')}</h3>
                <div className="flex flex-wrap gap-4 mb-3">
                  {analysisResult.structure.characters.map((item, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-[#3d2914]">{item.char}</div>
                      <div className="text-sm text-[#5a4520]">{item.strokes}{t('name.strokesUnit')} · {item.structure}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#5a4520]">{t('name.structureBalance')}：</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    analysisResult.structure.balance === '平衡' ? 'bg-green-100 text-green-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {analysisResult.structure.balance === '平衡' ? t('name.balanced') : analysisResult.structure.balance}
                  </span>
                </div>
              </div>
            )}

            {analysisResult.yinYang && (
              <div className="ancient-card rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#3d2914] mb-3">{t('name.yinYangAnalysis')}</h3>
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
                <div className="flex flex-wrap items-center gap-4 mb-2">
                  <span className="text-[#5a4520]">{t('name.yin')}：{analysisResult.yinYang.yinCount} | {t('name.yang')}：{analysisResult.yinYang.yangCount}</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${balanceColors[analysisResult.yinYang.balance] || 'bg-gray-100 text-gray-700'}`}>
                    {analysisResult.yinYang.balance}
                  </span>
                </div>
                <p className="text-[#5a4520] text-sm">{analysisResult.yinYang.suggestion}</p>
              </div>
            )}

            {analysisResult.taboo && (
              <div className="ancient-card rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#3d2914] mb-3">{t('name.tabooAnalysis')}</h3>
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
                  <p className="text-green-700">✓ {t('name.noTabooFound')}</p>
                )}
              </div>
            )}

            {analysisResult.popularity && (
              <div className="ancient-card rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#3d2914] mb-3">{t('name.popularityAnalysis')}</h3>
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-[#5a4520]">{t('name.popularityLevel')}：</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    analysisResult.popularity.level === '低' ? 'bg-green-100 text-green-700' :
                    analysisResult.popularity.level === '中' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {analysisResult.popularity.level}
                  </span>
                  <span className="text-[#5a4520]">{t('name.rank')}：{t('name.rankUnit')}{analysisResult.popularity.rank}</span>
                </div>
                <p className="text-[#5a4520] text-sm">{analysisResult.popularity.suggestion}</p>
              </div>
            )}

            {analysisResult.homophone && (
              <div className="ancient-card rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#3d2914] mb-3">{t('name.homophoneAnalysis')}</h3>
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
                  <p className="text-green-700">✓ {t('name.noBadHomophone')}</p>
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
              {t('name.restart')}
            </button>
          </div>
        )}

        {generatedNames.length > 0 && (
          <div className="space-y-6">
            <div className="ancient-card rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#3d2914] mb-4">{t('name.recommendedNames')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {generatedNames.map((item, index) => (
                  <div key={index} className="bg-[#1a140a]/5 rounded-lg p-4 border border-[#3d2914]/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xl font-bold text-[#3d2914]">{item.name}</span>
                      <span className={`text-lg font-bold ${
                        item.score >= 80 ? 'text-green-700' :
                        item.score >= 60 ? 'text-yellow-700' : 'text-red-700'
                      }`}>
                        {item.score}{t('name.points')}
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
              {t('name.regenerate')}
            </button>
          </div>
        )}
      </main>


    </div>
  );
}
