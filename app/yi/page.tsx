'use client';
import { useState } from 'react';
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

interface YaInfo {
  position: number;
  type: 'yang' | 'yin';
  text?: string;
  vernacularText?: string;
  isDong: boolean;
}

interface GuaInfo {
  code: string;
  name: string;
  fullName: string;
  summary: string;
  symbol: string;
  guaci?: string;
  yaoci?: string[];
  interpretation?: string;
  vernacular?: string;
  yaociVernacular?: string[];
}

interface FortuneResult {
  level: '吉' | '中吉' | '小吉' | '平' | '小凶' | '凶';
  description: string;
  advice: string[];
}

const getFortuneLevel = (guaCode: string): FortuneResult => {
  const goodGuas = ['111111', '000111', '111101', '011011', '101101', '011001', '110001', '011101'];
  const mediumGuas = ['000000', '111011', '010101', '101010', '011110', '101110'];
  const badGuas = ['111000', '010010', '100000'];

  if (goodGuas.includes(guaCode)) {
    return {
      level: '吉',
      description: '大吉大利，万事如意',
      advice: ['把握良机，大胆行动', '保持谦虚，戒骄戒躁', '多行善事，积累福报']
    };
  } else if (mediumGuas.includes(guaCode)) {
    return {
      level: '中吉',
      description: '吉凶参半，需谨慎行事',
      advice: ['三思而后行', '多听他人意见', '保持耐心，静待时机']
    };
  } else if (badGuas.includes(guaCode)) {
    return {
      level: '凶',
      description: '形势不利，需小心谨慎',
      advice: ['收敛锋芒，低调行事', '避免冒险投资', '多做准备，防患未然']
    };
  } else {
    return {
      level: '平',
      description: '平平淡淡，稳中有升',
      advice: ['稳扎稳打，步步为营', '积累实力，厚积薄发', '保持平常心']
    };
  }
};

const getQuestionAdvice = (question: string, guaName: string): string => {
  const questionLower = question.toLowerCase();

  if (questionLower.includes('事业') || questionLower.includes('工作') || questionLower.includes('职场')) {
    return `关于事业方面，${guaName}卦提示您：要像龙一样不断进取，但也要懂得把握时机。建议您保持专业能力的提升，与同事保持良好关系，抓住展示自己的机会。`;
  }

  if (questionLower.includes('感情') || questionLower.includes('婚姻') || questionLower.includes('恋爱')) {
    return `关于感情方面，${guaName}卦告诉您：感情需要双方的共同努力和相互理解。建议您多与对方沟通，保持真诚和包容，缘分到了自然会有好结果。`;
  }

  if (questionLower.includes('财运') || questionLower.includes('投资') || questionLower.includes('赚钱')) {
    return `关于财运方面，${guaName}卦提醒您：财富需要慢慢积累，不要急于求成。建议您谨慎投资，做好风险评估，不要贪多求大。`;
  }

  if (questionLower.includes('健康') || questionLower.includes('身体')) {
    return `关于健康方面，${guaName}卦提示您：身体是革命的本钱，要注意劳逸结合。建议您保持规律作息，适当运动，关注身体发出的信号。`;
  }

  if (questionLower.includes('考试') || questionLower.includes('学业') || questionLower.includes('学习')) {
    return `关于学业方面，${guaName}卦告诉您：一分耕耘一分收获，天道酬勤。建议您制定学习计划，保持专注，相信付出总会有回报。`;
  }

  return `综合来看，${guaName}卦提示您要保持积极乐观的心态，坚守正道，自然会迎来好的结果。`;
};

interface DivinationResult {
  benGua: GuaInfo;
  bianGua?: GuaInfo;
  dongYao: number[];
  yaos: YaInfo[];
}

export default function YiPage() {
  const { t } = useTranslations();
  const [question, setQuestion] = useState('');
  const [method, setMethod] = useState<'random' | 'coins' | 'number'>('random');
  const [numbers, setNumbers] = useState('');
  const [result, setResult] = useState<DivinationResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [showVernacular, setShowVernacular] = useState(true);

  const handleDivine = async () => {
    setLoading(true);

    const parsedNumbers = numbers ? numbers.split(',').map(n => parseInt(n.trim())) : undefined;

    const response = await fetch('/api/yi/divine', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        method,
        numbers: parsedNumbers,
        question
      })
    });

    const data = await response.json();

    if (data.success) {
      setResult(data.data);
    }

    setLoading(false);
  };

  const getFortuneColor = (level: string) => {
    switch (level) {
      case '吉': return 'bg-green-100 text-green-700 border-green-300';
      case '中吉': return 'bg-blue-100 text-blue-700 border-blue-300';
      case '小吉': return 'bg-teal-100 text-teal-700 border-teal-300';
      case '平': return 'bg-gray-100 text-gray-700 border-gray-300';
      case '小凶': return 'bg-orange-100 text-orange-700 border-orange-300';
      case '凶': return 'bg-red-100 text-red-700 border-red-300';
      default: return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const renderGua = (guaInfo: GuaInfo, title: string, showFortune = true) => {
    const fortune = getFortuneLevel(guaInfo.code);

    return (
      <div className="ancient-card rounded-xl p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-[#3d2914] tracking-wider">{title}：{guaInfo.name} ({guaInfo.fullName})</h3>
          {showFortune && (
            <span className={`px-4 py-2 rounded-full text-sm font-bold border ${getFortuneColor(fortune.level)}`}>
              {fortune.level} · {fortune.description}
            </span>
          )}
        </div>

        <div className="flex justify-center mb-4">
          <div className="relative">
            <div className="w-40 h-40 rounded-lg border-4 border-[#c9a962] flex items-center justify-center bg-gradient-to-br from-[#1a140a] to-[#2d2110] shadow-xl">
              <div className="text-center">
                <span className="text-6xl text-[#c9a962] drop-shadow-lg">{guaInfo.symbol}</span>
                <div className="text-[#c9a962] text-sm mt-2 font-serif">{guaInfo.name}</div>
              </div>
            </div>

            <div className="absolute -right-24 top-1/2 -translate-y-1/2 space-y-2">
              {guaInfo.code.split('').reverse().map((bit, index) => (
                <div key={index} className={`text-2xl font-serif ${bit === '1' ? 'text-[#8b2500]' : 'text-blue-700'}`}>
                  {bit === '1' ? '—' : '--'}
                </div>
              ))}
            </div>

            <div className="absolute -left-8 top-1/2 -translate-y-1/2 space-y-1">
              {['上', '五', '四', '三', '二', '初'].map((label, index) => (
                <div key={index} className="text-xs text-[#3d2914]/60 w-6 text-right">
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {guaInfo.guaci && (
          <div className="bg-[#c9a962]/10 rounded-lg p-4 mb-4 border border-[#c9a962]/30">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#c9a962] text-lg">📜</span>
              <span className="text-[#3d2914] font-semibold">{t('yi.interpretation.original')}</span>
            </div>
            <p className="text-[#3d2914] text-lg">{guaInfo.guaci}</p>
          </div>
        )}

        {guaInfo.vernacular && (
          <div className="bg-green-50/50 rounded-lg p-4 mb-4 border border-green-300/50">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-green-600 text-lg">💬</span>
              <span className="text-green-800 font-semibold">{t('yi.interpretation.vernacular')}</span>
              <span className="text-xs text-green-600">{t('yi.interpretation.vernacularHint')}</span>
            </div>
            <p className="text-[#3d2914] leading-relaxed">{guaInfo.vernacular}</p>
          </div>
        )}

        <div className="bg-[#1a140a]/5 rounded-lg p-4 mb-4 border border-[#3d2914]/20">
          <div className="flex items-center gap-2 mb-2">
              <span className="text-[#c9a962] text-lg">✨</span>
              <span className="text-[#3d2914] font-semibold">{t('yi.interpretation.deepMeaning')}</span>
            </div>
          <p className="text-[#3d2914] leading-relaxed">{guaInfo.interpretation || guaInfo.summary}</p>
        </div>

        {showFortune && fortune.advice && fortune.advice.length > 0 && (
          <div className="bg-blue-50/50 rounded-lg p-4 border border-blue-300/50">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-blue-600 text-lg">💡</span>
              <span className="text-blue-800 font-semibold">{t('yi.interpretation.advice')}</span>
            </div>
            <ul className="space-y-2">
              {fortune.advice.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-[#3d2914]">
                  <span className="text-blue-500">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
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
              <h1 className="text-4xl font-bold text-[#c9a962] tracking-widest">{t('yi.title')}</h1>
              <p className="text-[#d4c8a0] mt-2 tracking-wider">{t('yi.subtitle')}</p>
            </div>
          </div>
        </div>
      </header>

      <Navigation activePath="/yi" />

      <main className="max-w-4xl mx-auto px-4 py-8">
        {!result && (
          <div className="ancient-card rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#3d2914] mb-6 text-center tracking-wider">{t('yi.startDivination')}</h2>

            <div className="mb-6">
              <label className="block text-[#3d2914] font-semibold mb-2">{t('yi.question.label')}</label>
              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="w-full px-4 py-3 border border-[#c9a962]/30 rounded-lg focus:ring-2 focus:ring-[#c9a962] focus:border-[#c9a962] resize-none bg-[#faf5e8]"
                rows={3}
                placeholder={t('yi.question.placeholder')}
              />
            </div>

            <div className="mb-6">
              <label className="block text-[#3d2914] font-semibold mb-3">{t('yi.methods.label')}</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  onClick={() => setMethod('random')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    method === 'random'
                      ? 'border-[#c9a962] bg-[#c9a962]/10'
                      : 'border-[#c9a962]/30 hover:border-[#c9a962]'
                  }`}
                >
                  <div className="text-3xl mb-2">🎲</div>
                  <div className="font-semibold text-[#3d2914]">{t('yi.methods.random')}</div>
                  <div className="text-sm text-[#5a4520] mt-1">{t('yi.methods.randomDesc')}</div>
                </button>

                <button
                  onClick={() => setMethod('coins')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    method === 'coins'
                      ? 'border-[#c9a962] bg-[#c9a962]/10'
                      : 'border-[#c9a962]/30 hover:border-[#c9a962]'
                  }`}
                >
                  <div className="text-3xl mb-2">🪙</div>
                  <div className="font-semibold text-[#3d2914]">{t('yi.methods.coins')}</div>
                  <div className="text-sm text-[#5a4520] mt-1">{t('yi.methods.coinsDesc')}</div>
                </button>

                <button
                  onClick={() => setMethod('number')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    method === 'number'
                      ? 'border-[#c9a962] bg-[#c9a962]/10'
                      : 'border-[#c9a962]/30 hover:border-[#c9a962]'
                  }`}
                >
                  <div className="text-3xl mb-2">🔢</div>
                  <div className="font-semibold text-[#3d2914]">{t('yi.methods.number')}</div>
                  <div className="text-sm text-[#5a4520] mt-1">{t('yi.methods.numberDesc')}</div>
                </button>
              </div>
            </div>

            {(method === 'coins' || method === 'number') && (
              <div className="mb-6">
                <label className="block text-[#3d2914] font-semibold mb-2">
                  {method === 'coins' ? t('yi.inputNumbers.coins') : t('yi.inputNumbers.number')}
                </label>
                <input
                  type="text"
                  value={numbers}
                  onChange={(e) => setNumbers(e.target.value)}
                  className="w-full px-4 py-3 border border-[#c9a962]/30 rounded-lg focus:ring-2 focus:ring-[#c9a962] focus:border-[#c9a962] bg-[#faf5e8]"
                  placeholder={method === 'coins' ? t('yi.inputNumbers.placeholder.coins') : t('yi.inputNumbers.placeholder.number')}
                />
              </div>
            )}

            <button
              onClick={handleDivine}
              disabled={loading}
              className="w-full bg-[#3d2914] text-[#faf5e8] py-4 rounded-lg font-semibold text-lg hover:bg-[#2a1f10] transition-all disabled:opacity-50 disabled:cursor-not-allowed border border-[#c9a962]"
            >
              {loading ? t('yi.divining') : t('yi.divinationComplete')}
            </button>
          </div>
        )}

        {result && (
          <div className="space-y-6">
            <div className="ancient-card rounded-xl p-4">
              <div className="flex items-center justify-center gap-4">
                <span className="text-[#3d2914]">{t('yi.showVernacular')}</span>
                <button
                  onClick={() => setShowVernacular(!showVernacular)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    showVernacular
                      ? 'bg-green-600 text-white'
                      : 'bg-[#c9a962]/20 text-[#3d2914]'
                  }`}
                >
                  {showVernacular ? t('yi.toggleOn') : t('yi.toggleOff')}
                </button>
              </div>
            </div>

            {question && (
              <div className="ancient-card rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[#3d2914] mb-2">{t('yi.yourQuestion')}</h3>
                <p className="text-[#5a4520]">{question}</p>
              </div>
            )}

            {question && (
              <div className="ancient-card rounded-xl p-6 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-300/50">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-purple-600 text-lg">🎯</span>
                  <span className="text-purple-800 font-semibold">{t('yi.answerForQuestion')}</span>
                </div>
                <p className="text-[#3d2914] leading-relaxed">{getQuestionAdvice(question, result.benGua.name)}</p>
              </div>
            )}

            {renderGua(result.benGua, t('yi.benGua'))}

            {result.bianGua && result.bianGua.code !== result.benGua.code && (
              <div className="mt-6">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="w-16 h-px bg-[#c9a962]/30"></div>
                  <span className="text-[#c9a962] text-sm tracking-widest">{t('yi.bianGuaHint')}</span>
                  <div className="w-16 h-px bg-[#c9a962]/30"></div>
                </div>
                <p className="text-center text-[#5a4520] text-sm mb-4">{t('yi.bianGuaDesc')}</p>
                {renderGua(result.bianGua, t('yi.bianGua'), false)}
              </div>
            )}

            {result.dongYao.length > 0 && (
              <div className="ancient-card rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#3d2914] mb-4">{t('yi.dongYao')}</h3>
                <div className="flex flex-wrap gap-2">
                  {result.dongYao.map((yao) => (
                    <span key={yao} className="bg-[#8b2500]/10 text-[#8b2500] px-4 py-2 rounded-full font-semibold border border-[#8b2500]/30">
                      {t('yi.yaoLine', { yao })}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {result.benGua.yaoci && (
              <div className="ancient-card rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#3d2914] mb-4">{t('yi.yaoDetail')}</h3>
                <div className="space-y-4">
                  {result.yaos.map((yao, index) => (
                    <div
                      key={yao.position}
                      className={`p-4 rounded-lg border ${yao.isDong ? 'bg-[#8b2500]/10 border-[#8b2500]/30' : 'bg-[#1a140a]/5 border-[#3d2914]/20'}`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`text-xl ${yao.type === 'yang' ? 'text-[#8b2500]' : 'text-blue-700'}`}>
                          {yao.type === 'yang' ? '—' : '--'}
                        </span>
                        <span className="font-semibold text-[#3d2914]">
                          {yao.position === 1 ? '初九' : yao.position === 2 ? '九二' : yao.position === 3 ? '九三' :
                           yao.position === 4 ? '九四' : yao.position === 5 ? '九五' : '上九'}{yao.type === 'yin' && '（阴）'}
                        </span>
                        {yao.isDong && (
                          <span className="bg-[#8b2500] text-white text-xs px-2 py-1 rounded-full">动爻</span>
                        )}
                      </div>
                      {yao.text && <p className="text-[#3d2914] pl-6">{yao.text}</p>}
                      {showVernacular && yao.vernacularText && (
                        <p className="text-green-800 pl-6 mt-2 text-sm">📖 {yao.vernacularText}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <button
              onClick={() => {
                setResult(null);
                setQuestion('');
                setNumbers('');
              }}
              className="w-full bg-[#faf5e8] text-[#3d2914] py-4 rounded-lg font-semibold text-lg border-2 border-[#c9a962] hover:bg-[#c9a962]/10 transition-colors"
            >
              {t('yi.restart')}
            </button>
          </div>
        )}
      </main>

      <footer className="bg-ancient-dark py-8 mt-16 border-t-4 border-[#c9a962]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#d4c8a0]/70">{t('common.footer.copyright')} · 传承千年智慧，启迪人生智慧</p>
          <p className="text-[#5a4520] text-sm mt-2">{t('common.footer.disclaimer')}</p>
          <p className="text-[#5a4520] text-sm mt-2">{t('common.footer.contact')}<a href="mailto:fengbuxiu@foxmail.com" className="text-[#c9a962] hover:text-[#d4c8a0] transition-colors">fengbuxiu@foxmail.com</a></p>
        </div>
      </footer>
    </div>
  );
}
