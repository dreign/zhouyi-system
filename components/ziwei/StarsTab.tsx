'use client';

import { useState } from 'react';
import { useZiwei } from './context';
import StarCard from './StarCard';
import PalaceExplanation from './PalaceExplanation';
import { STAR_STORIES } from '../../engine/ziwei';

export default function StarsTab() {
  const { state } = useZiwei();
  const [view, setView] = useState<'encyclopedia' | 'plate'>('encyclopedia');
  const [searchTerm, setSearchTerm] = useState('');

  const allStars = Object.values(STAR_STORIES);
  const filteredStars = searchTerm
    ? allStars.filter(s => s.name.includes(searchTerm) || s.role.includes(searchTerm))
    : allStars;

  // Star groups for the story
  const starGroups = [
    { name: '核心领导', stars: ['紫微', '天府'], color: 'from-[#8b2500] to-[#c9a962]' },
    { name: '谋士文官', stars: ['天机', '文昌', '文曲', '左辅', '右弼'], color: 'from-[#3d2914] to-[#5a4520]' },
    { name: '武将财富', stars: ['武曲', '七杀', '破军', '太阳'], color: 'from-[#8b2500] to-[#3d2914]' },
    { name: '感情人际', stars: ['廉贞', '贪狼', '太阴', '巨门'], color: 'from-[#c9a962] to-[#5a4520]' },
    { name: '福寿贵气', stars: ['天同', '天相', '天梁', '天魁', '天钺'], color: 'from-[#5a4520] to-[#c9a962]' },
  ];

  if (view === 'plate') {
    // Show stars that appear in the current plate
    const plate = state.reCenteredPlate || state.plate;
    const plateStars = new Set<string>();
    if (plate) {
      plate.palaces.forEach((p: any) => {
        p.stars.filter((s: any) => s.type === 'major').forEach((s: any) => plateStars.add(s.name));
      });
    }

    return (
      <div className="space-y-4">
        <div className="flex gap-2 mb-4">
          <button onClick={() => setView('encyclopedia')} className="px-3 py-1 text-sm rounded bg-[#faf5e8] border border-[#3d2914]/30 text-[#5a4520] hover:border-[#c9a962]">星曜图鉴</button>
          <button onClick={() => setView('plate')} className="px-3 py-1 text-sm rounded bg-[#c9a962]/20 border border-[#c9a962] text-[#3d2914] font-medium">命盘星曜</button>
        </div>

        <h3 className="text-lg font-bold text-[#3d2914]">命盘主星分布</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {Array.from(plateStars).map(starName => {
            const story = STAR_STORIES[starName];
            if (!story) return null;
            return <StarCard key={starName} star={story} compact />;
          })}
          {plateStars.size === 0 && (
            <p className="text-[#5a4520] col-span-full text-center py-8">请先排盘</p>
          )}
        </div>
        <PalaceExplanation type="stars" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex gap-2 mb-4">
        <button onClick={() => setView('encyclopedia')} className="px-3 py-1 text-sm rounded bg-[#c9a962]/20 border border-[#c9a962] text-[#3d2914] font-medium">星曜图鉴</button>
        <button onClick={() => setView('plate')} className="px-3 py-1 text-sm rounded bg-[#faf5e8] border border-[#3d2914]/30 text-[#5a4520] hover:border-[#c9a962]">命盘星曜</button>
      </div>

      {/* Search */}
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="搜索星曜名称..."
        className="w-full px-3 py-2 border border-[#c9a962]/30 rounded-lg bg-[#faf5e8] text-[#3d2914] placeholder-[#5a4520]/50"
      />

      {/* Star groups */}
      {starGroups.map(group => {
        const groupStars = group.stars.map(name => STAR_STORIES[name]).filter(Boolean);
        const visibleStars = groupStars.filter(s => filteredStars.includes(s));
        if (visibleStars.length === 0) return null;

        return (
          <div key={group.name}>
            <h3 className="text-md font-bold text-[#3d2914] mb-3 border-b border-[#c9a962]/30 pb-1">{group.name}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {visibleStars.map(star => (
                <StarCard key={star.name} star={star} />
              ))}
            </div>
          </div>
        );
      })}
      <PalaceExplanation type="stars" />
    </div>
  );
}
