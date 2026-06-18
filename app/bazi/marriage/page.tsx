'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { useTranslations } from '@/lib/i18n';
import MarriageHeader from '@/components/bazi-marriage/MarriageHeader';
import KnowledgeCards from '@/components/bazi-marriage/KnowledgeCards';
import DualFormInput from '@/components/bazi-marriage/DualFormInput';
import ResultScore from '@/components/bazi-marriage/ResultScore';
import PillarComparison from '@/components/bazi-marriage/PillarComparison';
import DimensionDetail from '@/components/bazi-marriage/DimensionDetail';
import ConsultationCTA from '@/components/bazi-marriage/ConsultationCTA';

interface PersonData {
  name: string;
  year: number;
  month: number;
  day: number;
  hour: number;
}

interface BaziPillar {
  gan: string;
  zhi: string;
  ganWuxing: string;
  zhiWuxing: string;
  shiShen?: string;
  cangGan: string[];
}

interface DimensionResult {
  score: number;
  level: string;
  analysis: string;
  suggestions: string[];
}

interface MarriageResult {
  totalScore: number;
  totalLevel: string;
  totalAnalysis: string;
  dimensions: {
    wuxing: DimensionResult & { maleScore: Record<string,number>; femaleScore: Record<string,number> };
    zodiac: DimensionResult & { maleZodiac: string; femaleZodiac: string; relation: string };
    rizhu: DimensionResult & { maleDay: { gan: string; zhi: string }; femaleDay: { gan: string; zhi: string }; matchType: string };
    shishen: DimensionResult;
  };
  maleBazi: { bazi: { year: BaziPillar; month: BaziPillar; day: BaziPillar; hour: BaziPillar } };
  femaleBazi: { bazi: { year: BaziPillar; month: BaziPillar; day: BaziPillar; hour: BaziPillar } };
  suggestions: string[];
}

const initialPersonData: PersonData = {
  name: '',
  year: 0,
  month: 0,
  day: 0,
  hour: 12,
};

export default function MarriagePage() {
  const [maleData, setMaleData] = useState<PersonData>({ ...initialPersonData });
  const [femaleData, setFemaleData] = useState<PersonData>({ ...initialPersonData });
  const [result, setResult] = useState<MarriageResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!maleData.year || !maleData.month || !maleData.day || !femaleData.year || !femaleData.month || !femaleData.day) {
      setError('请完整填写双方出生信息');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/bazi/marriage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          male: maleData,
          female: femaleData,
        }),
      });
      
      const data = await response.json();
      if (!response.ok) {
        setError(data.error || '计算失败，请重试');
      } else {
        setResult(data);
      }
    } catch {
      setError('网络错误，请检查连接后重试');
    } finally {
      setLoading(false);
    }
  };

  const dimensionConfigs = [
    { key: 'wuxing' as const, title: '五行互补', icon: '☯', colorClass: 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200' },
    { key: 'zodiac' as const, title: '生肖关系', icon: '🐉', colorClass: 'bg-gradient-to-br from-yellow-50 to-amber-50 border-yellow-200' },
    { key: 'rizhu' as const, title: '日柱匹配', icon: '🌞', colorClass: 'bg-gradient-to-br from-red-50 to-pink-50 border-pink-200' },
    { key: 'shishen' as const, title: '十神互补', icon: '📊', colorClass: 'bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200' },
  ];

  return (
    <div className="min-h-screen bg-paper">
      <Navigation activePath="/bazi/marriage" />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        <MarriageHeader />
        <KnowledgeCards />
        <DualFormInput
          maleData={maleData}
          femaleData={femaleData}
          onMaleChange={(d) => setMaleData({ ...maleData, ...d })}
          onFemaleChange={(d) => setFemaleData({ ...femaleData, ...d })}
          onSubmit={handleSubmit}
          loading={loading}
        />
        
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-red-700 text-sm text-center">
            {error}
          </div>
        )}
        
        {loading && (
          <div className="flex justify-center py-12">
            <div className="w-12 h-12 border-4 border-[#c9a962] border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        
        {result && !loading && (
          <div className="space-y-6">
            {/* 综合评分 */}
            <ResultScore
              score={result.totalScore}
              level={result.totalLevel}
              analysis={result.totalAnalysis}
            />
            
            {/* 四柱对照 */}
            <PillarComparison
              malePillars={result.maleBazi.bazi}
              femalePillars={result.femaleBazi.bazi}
            />
            
            {/* 各维度详情 */}
            <h3 className="text-lg font-bold text-[#3d2914] text-center">
              <span className="text-[#c9a962]">◇</span> 各维度详解 <span className="text-[#c9a962]">◇</span>
            </h3>
            {dimensionConfigs.map(({ key, title, icon, colorClass }) => {
              const dim = result.dimensions[key];
              return (
                <DimensionDetail
                  key={key}
                  title={title}
                  score={dim.score}
                  analysis={dim.analysis}
                  suggestions={dim.suggestions}
                  colorClass={colorClass}
                  icon={icon}
                />
              );
            })}
            
            {/* 综合建议 */}
            {result.suggestions.length > 0 && (
              <div className="bg-[#faf5e8] border border-[#c9a962]/30 rounded-xl p-5">
                <h4 className="font-bold text-[#3d2914] mb-3">📋 综合建议</h4>
                <ul className="space-y-2">
                  {result.suggestions.map((s, i) => (
                    <li key={i} className="text-sm text-[#5a4520] flex gap-2">
                      <span className="text-[#c9a962] font-bold">•</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* 重新测算 */}
            <button
              onClick={() => { setResult(null); setError(''); }}
              className="w-full py-3 bg-[#faf5e8] border-2 border-[#c9a962] text-[#3d2914] font-bold rounded-xl hover:bg-[#c9a962]/10 transition-colors"
            >
              重新测算
            </button>
          </div>
        )}
        
        <ConsultationCTA />
      </main>
    </div>
  );
}
