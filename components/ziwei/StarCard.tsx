'use client';

import { useState } from 'react';
import { StarStoryData } from './types';

interface StarCardProps {
  star: StarStoryData;
  compact?: boolean;
}

export default function StarCard({ star, compact = false }: StarCardProps) {
  const [expanded, setExpanded] = useState(false);

  const wuxingColor: Record<string, string> = {
    '金': 'text-yellow-600',
    '木': 'text-green-600',
    '水': 'text-blue-600',
    '火': 'text-red-600',
    '土': 'text-amber-700',
  };

  if (compact) {
    return (
      <div className="bg-[#faf5e8] border border-[#3d2914]/20 rounded-lg p-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#c9a962]/20 flex items-center justify-center text-sm font-bold text-[#3d2914]">
            {star.name.charAt(0)}
          </div>
          <div>
            <div className="font-medium text-sm text-[#3d2914]">{star.name}</div>
            <div className="text-xs text-[#5a4520]">{star.role}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#faf5e8] border border-[#3d2914]/20 rounded-lg overflow-hidden hover:border-[#c9a962] transition-all">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#3d2914]/10 to-transparent p-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#c9a962]/20 flex items-center justify-center text-lg font-bold text-[#3d2914]">
            {star.name.charAt(0)}
          </div>
          <div className="flex-1">
            <div className="font-bold text-[#3d2914]">{star.name}</div>
            <div className="text-xs text-[#5a4520]">{star.role}</div>
          </div>
          <div className="text-right">
            <div className="text-xs text-[#5a4520]">五行</div>
            <div className={`font-medium ${wuxingColor[star.wuxing] || 'text-[#3d2914]'}`}>{star.wuxing}</div>
          </div>
        </div>
      </div>

      {/* Personality tags */}
      <div className="px-3 py-2 flex flex-wrap gap-1">
        {star.personality.map(trait => (
          <span key={trait} className="px-2 py-0.5 text-xs rounded-full bg-[#c9a962]/10 text-[#5a4520] border border-[#c9a962]/20">
            {trait}
          </span>
        ))}
      </div>

      {/* "展开故事" button */}
      <div className="px-3 pb-2">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs text-[#c9a962] hover:text-[#3d2914] transition-colors"
        >
          {expanded ? '收起' : '展开故事'}
        </button>
      </div>

      {/* Expanded story section */}
      {expanded && (
        <div className="px-3 pb-3 border-t border-[#c9a962]/20 pt-2">
          <div className="text-sm text-[#3d2914] leading-relaxed">{star.story}</div>
          <div className="mt-2 text-xs text-[#5a4520] italic">{star.description}</div>
        </div>
      )}
    </div>
  );
}
