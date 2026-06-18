'use client';

import { useZiwei } from './context';
import { getDaXianTimeline, PALACE_NAMES } from '../../engine/ziwei';
import { useState, useMemo } from 'react';

export default function DaXianTimeline() {
  const { state, dispatch } = useZiwei();
  const plate = state.reCenteredPlate || state.plate;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  
  // Assume user is 30 years old if not specified - we could add an age input later
  const currentAge = 30;
  
  const timeline = useMemo(() => {
    if (!plate) return [];
    return getDaXianTimeline(plate, currentAge);
  }, [plate, currentAge]);
  
  if (timeline.length === 0) return <div className="text-[#5a4520] text-center py-8">暂无大限数据</div>;
  
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-[#3d2914]">大限时间轴</h3>
      <p className="text-xs text-[#5a4520]">大限代表每10年的人生阶段变化。当前所处大限高亮显示。</p>
      
      {/* Timeline */}
      <div className="relative py-6">
        {/* Horizontal line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#c9a962]/30 -translate-y-1/2"></div>
        
        {/* Period nodes */}
        <div className="flex justify-between relative">
          {timeline.map((period, idx) => (
            <div key={idx} className="flex flex-col items-center relative z-10">
              <button
                onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  period.isCurrent
                    ? 'bg-[#c9a962] text-white ring-4 ring-[#c9a962]/30 scale-110'
                    : 'bg-[#faf5e8] border-2 border-[#3d2914]/30 text-[#5a4520] hover:border-[#c9a962]'
                }`}
              >
                {period.startAge}
              </button>
              <div className={`mt-2 text-xs text-center ${period.isCurrent ? 'text-[#3d2914] font-bold' : 'text-[#5a4520]'}`}>
                {period.palaceName}
              </div>
              <div className="text-xs text-[#5a4520]/70">{period.startAge}-{period.endAge}岁</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Expanded detail */}
      {expandedIndex !== null && timeline[expandedIndex] && (
        <div className="bg-[#faf5e8] border border-[#c9a962]/30 rounded-lg p-4">
          <h4 className="font-bold text-[#3d2914] mb-2">
            {timeline[expandedIndex].startAge}-{timeline[expandedIndex].endAge}岁 · {timeline[expandedIndex].palaceName}
          </h4>
          <div className="text-sm text-[#5a4520] space-y-1">
            <p>地支：{timeline[expandedIndex].branch}宫</p>
            {timeline[expandedIndex].mainStars.length > 0 && (
              <p>主星：{timeline[expandedIndex].mainStars.join('、')}</p>
            )}
            <p className="mt-2">{timeline[expandedIndex].analysis}</p>
          </div>
        </div>
      )}
    </div>
  );
}
