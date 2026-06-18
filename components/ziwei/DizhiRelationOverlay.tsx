'use client';

import { useZiwei } from './context';
import { getLiuHe, getLiuChong, getLiuHai } from '../../engine/ziwei';
import { useState } from 'react';

type RelationType = 'liuhe' | 'liuchong' | 'liuhai';

const RELATION_CONFIG: Record<RelationType, { label: string; description: string }> = {
  liuhe: { label: '六合', description: '六合：相合之宫，相互吸引、和谐、合作' },
  liuchong: { label: '六冲', description: '六冲：对冲之宫，对立、冲突、竞争' },
  liuhai: { label: '六害', description: '六害：相害之宫，相互不待见、暗中损害' },
};

const DIZHI_LIST = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

export default function DizhiRelationOverlay() {
  const { state, dispatch } = useZiwei();
  const [activeRelation, setActiveRelation] = useState<RelationType | null>(null);

  const plate = state.reCenteredPlate || state.plate;
  if (!plate) return null;

  const getBranchRelation = (branch: string, type: RelationType): string | null => {
    switch (type) {
      case 'liuhe': return getLiuHe(branch);
      case 'liuchong': return getLiuChong(branch);
      case 'liuhai': return getLiuHai(branch);
    }
  };

  const toggleRelation = (type: RelationType) => {
    if (activeRelation === type) {
      setActiveRelation(null);
      dispatch({ type: 'SET_RELATION_MODE', payload: null });
    } else {
      setActiveRelation(type);
      dispatch({ type: 'SET_RELATION_MODE', payload: type });
    }
  };

  // Build relation pairs
  const relationPairs: Array<{ from: string; to: string }> = [];
  if (activeRelation) {
    const processed = new Set<string>();
    DIZHI_LIST.forEach(branch => {
      if (processed.has(branch)) return;
      const target = getBranchRelation(branch, activeRelation);
      if (target) {
        relationPairs.push({ from: branch, to: target });
        processed.add(branch);
        processed.add(target);
      }
    });
  }

  // Get palace name by branch
  const getPalaceName = (branch: string): string => {
    const p = plate.palaces.find((p: any) => p.branch === branch);
    return p ? p.name : branch;
  };

  return (
    <div className="mt-3 p-3 border border-[#3d2914]/20 rounded-lg bg-[#faf5e8]/80">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm font-medium text-[#3d2914]">地支关系</span>
        <div className="flex gap-1">
          {(Object.entries(RELATION_CONFIG) as [RelationType, typeof RELATION_CONFIG[RelationType]][]).map(([type, config]) => (
            <button
              key={type}
              onClick={() => toggleRelation(type)}
              className={`px-2 py-1 text-xs rounded border transition-colors ${
                activeRelation === type
                  ? 'bg-[#c9a962] text-white border-[#c9a962]'
                  : 'bg-white text-[#5a4520] border-[#3d2914]/30 hover:border-[#c9a962]'
              }`}
            >
              {config.label}
            </button>
          ))}
        </div>
      </div>

      {activeRelation && (
        <div className="text-xs text-[#5a4520] mb-2">
          {RELATION_CONFIG[activeRelation].description}
        </div>
      )}

      {activeRelation && relationPairs.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {relationPairs.map((pair) => {
            const fromPalace = plate.palaces.find((p: any) => p.branch === pair.from);
            const toPalace = plate.palaces.find((p: any) => p.branch === pair.to);
            const isActiveFrom = fromPalace && state.activePalace === fromPalace.index;
            const isActiveTo = toPalace && state.activePalace === toPalace.index;

            return (
              <div
                key={`${pair.from}-${pair.to}`}
                className={`flex items-center gap-1 px-2 py-1 rounded text-xs border ${
                  isActiveFrom || isActiveTo
                    ? 'bg-[#c9a962]/20 border-[#c9a962]'
                    : 'bg-white border-[#3d2914]/20'
                }`}
              >
                <span className="font-medium text-[#3d2914]">{getPalaceName(pair.from)}</span>
                <span className="text-[#8b2500]">{pair.from}</span>
                <span className="text-gray-400 mx-1">
                  {activeRelation === 'liuhe' ? '—合—' : activeRelation === 'liuchong' ? '—冲—' : '—害—'}
                </span>
                <span className="font-medium text-[#3d2914]">{getPalaceName(pair.to)}</span>
                <span className="text-[#8b2500]">{pair.to}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
