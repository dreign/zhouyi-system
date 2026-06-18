'use client';

import { useState } from 'react';
import { useZiwei } from './context';
import SiHuaTable from './SiHuaTable';
import DaXianTimeline from './DaXianTimeline';
import LiuNianNavigator from './LiuNianNavigator';
import PalaceExplanation from './PalaceExplanation';

export default function TransformationTab() {
  const { state } = useZiwei();
  const [subView, setSubView] = useState<'sihua' | 'daxian' | 'liunian'>('sihua');
  
  const tabs = [
    { key: 'sihua', label: '四化总表' },
    { key: 'daxian', label: '大限时间轴' },
    { key: 'liunian', label: '流年模拟' },
  ] as const;
  
  return (
    <div className="space-y-4">
      {/* Sub-tabs */}
      <div className="flex gap-2 border-b border-[#c9a962]/30 pb-2">
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setSubView(tab.key)}
            className={`px-4 py-1.5 text-sm rounded-t transition-colors ${
              subView === tab.key
                ? 'bg-[#c9a962]/20 text-[#3d2914] font-medium border-b-2 border-[#c9a962]'
                : 'text-[#5a4520] hover:text-[#3d2914]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      {/* Content */}
      {subView === 'sihua' && <SiHuaTable />}
      {subView === 'daxian' && state.plate && <DaXianTimeline />}
      {subView === 'liunian' && state.plate && <LiuNianNavigator />}
      
      {!state.plate && subView !== 'sihua' && (
        <div className="text-center py-8 text-[#5a4520]">请先排盘以查看大限和流年信息</div>
      )}
      <PalaceExplanation type="transformation" />
    </div>
  );
}
