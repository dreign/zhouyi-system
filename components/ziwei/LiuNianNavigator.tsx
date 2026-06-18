'use client';

import { useZiwei } from './context';
import { TIANGAN_SIHUA, getLiuNianMingGong, getLiuNianGanZhi, PALACE_NAMES, DIZHI } from '../../engine/ziwei';

export default function LiuNianNavigator() {
  const { state, dispatch } = useZiwei();
  const plate = state.reCenteredPlate || state.plate;
  
  const currentYear = state.selectedYear;
  const prevYear = currentYear - 1;
  const nextYear = currentYear + 1;
  
  if (!plate) return null;
  
  const getYearSihua = (year: number) => {
    const { stem } = getLiuNianGanZhi(year);
    const sihua = TIANGAN_SIHUA[stem];
    if (!sihua) return [];
    return [
      { star: sihua.lu, type: 'lu' as const },
      { star: sihua.quan, type: 'quan' as const },
      { star: sihua.ke, type: 'ke' as const },
      { star: sihua.ji, type: 'ji' as const },
    ];
  };
  
  const renderYearCard = (year: number, isCurrent: boolean) => {
    const { stem, branch } = getLiuNianGanZhi(year);
    const mingGong = getLiuNianMingGong(year);
    const sihua = getYearSihua(year);
    
    return (
      <div
        className={`p-3 rounded-lg border cursor-pointer transition-all ${
          isCurrent
            ? 'bg-[#c9a962]/20 border-[#c9a962] ring-1 ring-[#c9a962]'
            : 'bg-[#faf5e8] border-[#3d2914]/20 hover:border-[#c9a962]'
        }`}
        onClick={() => dispatch({ type: 'SET_SELECTED_YEAR', payload: year })}
      >
        <div className="text-center">
          <div className={`text-lg font-bold ${isCurrent ? 'text-[#3d2914]' : 'text-[#5a4520]'}`}>
            {year}
          </div>
          <div className="text-sm text-[#5a4520]">{stem}{branch}</div>
          <div className="text-xs text-[#5a4520] mt-1">命宫: {PALACE_NAMES[mingGong.palaceIndex]}</div>
        </div>
        
        {isCurrent && (
          <div className="mt-2 space-y-0.5 text-xs text-center">
            {sihua.map((s, i) => {
              const labels: Record<string, string> = { lu: '禄', quan: '权', ke: '科', ji: '忌' };
              const colors: Record<string, string> = { lu: 'text-green-700', quan: 'text-blue-700', ke: 'text-purple-700', ji: 'text-red-700' };
              return (
                <div key={i} className={colors[s.type]}>
                  {s.star}化{labels[s.type]}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };
  
  // Simple trend descriptions
  const getTrend = (year: number): string => {
    const { stem } = getLiuNianGanZhi(year);
    // Generate a simple trend based on the stem
    const trends: Record<string, string> = {
      '甲': '改革之年，适合创新突破',
      '乙': '调整之年，适合稳中求进',
      '丙': '蓬勃发展，积极进取',
      '丁': '内修之年，积蓄能量',
      '戊': '变化之年，把握机遇',
      '己': '稳重之年，守成为上',
      '庚': '突破之年，果断决策',
      '辛': '收获之年，成果显现',
      '壬': '流动之年，顺势而为',
      '癸': '反思之年，韬光养晦',
    };
    return trends[stem] || '平顺之年';
  };
  
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-[#3d2914]">流年导航</h3>
      
      {/* Year cards */}
      <div className="grid grid-cols-3 gap-3">
        {renderYearCard(prevYear, false)}
        {renderYearCard(currentYear, true)}
        {renderYearCard(nextYear, false)}
      </div>
      
      {/* Current year trend */}
      <div className="bg-[#faf5e8] border border-[#c9a962]/30 rounded-lg p-4">
        <h4 className="font-medium text-[#3d2914] mb-2">{currentYear}年趋势</h4>
        <p className="text-sm text-[#5a4520]">{getTrend(currentYear)}</p>
      </div>
    </div>
  );
}
