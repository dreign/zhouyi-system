'use client';

import { useZiwei } from './context';
import { getLiuQinMap, PALACE_NAMES } from '../../engine/ziwei';
import { useMemo } from 'react';

export default function LiuQinGraph() {
  const { state, dispatch } = useZiwei();
  const plate = state.reCenteredPlate || state.plate;
  
  const relations = useMemo(() => {
    if (!plate) return [];
    try {
      return getLiuQinMap(plate);
    } catch {
      return [];
    }
  }, [plate]);
  
  if (relations.length === 0) {
    return <div className="text-[#5a4520] text-sm">暂无六亲数据</div>;
  }
  
  return (
    <div className="bg-[#faf5e8] border border-[#c9a962]/30 rounded-lg p-4">
      <h3 className="font-bold text-[#3d2914] mb-3">六亲关系</h3>
      <p className="text-xs text-[#5a4520] mb-3">
        基于&ldquo;立太极&rdquo;算法：每宫皆可重新立太极定位六亲。命宫为自己，父母宫为父亲，以父母宫立太极的夫妻宫为母亲，以此类推。
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {relations.map((rel, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 p-2 rounded-lg bg-white/50 border border-[#3d2914]/10 cursor-pointer hover:border-[#c9a962] transition-colors"
            onClick={() => {
              // Navigate to the palace tab and select this palace
              dispatch({ type: 'SET_TAB', payload: 'palace' });
              dispatch({ type: 'SET_ACTIVE_PALACE', payload: rel.palaceIndex });
            }}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
              idx === 0 ? 'bg-[#c9a962] text-white' : 'bg-[#c9a962]/20 text-[#3d2914]'
            }`}>
              {rel.relation.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-[#3d2914]">{rel.relation}</div>
              <div className="text-xs text-[#5a4520]">{rel.palaceName} · {rel.branch}宫</div>
            </div>
            <div className="text-xs text-right text-[#5a4520] truncate max-w-[100px]">
              {rel.mainStars.join('、') || '无主星'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
