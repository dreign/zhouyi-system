'use client';

import { useZiwei } from './context';
import PalaceCell from './PalaceCell';
import DizhiRelationOverlay from './DizhiRelationOverlay';
import { getSanFang, getSiZheng } from '../../engine/ziwei';

// The grid layout with 12 palaces arranged in a 3x4 grid
// Traditional layout:
// [巳] [午] [未] [申]
// [辰]       [酉]
// [卯]       [戌]
// [寅] [丑] [子] [亥]
const gridLayout = [
  [5, 6, 7, 8],    // 巳 午 未 申
  [4, -1, -1, 9],   // 辰 ... 酉
  [3, -1, -1, 10],  // 卯 ... 戌
  [2, 1, 0, 11],    // 寅 丑 子 亥
];

export default function PalaceGrid() {
  const { state, dispatch } = useZiwei();

  if (!state.plate) return null;

  const plate = state.reCenteredPlate || state.plate;

  // Compute sanfang and sizheng for the active palace
  const sanfang = getSanFang(state.activePalace);
  const sizheng = getSiZheng(state.activePalace);

  const isSanfang = (index: number) => sanfang.includes(index);
  const isSizheng = (index: number) => index === sizheng;

  const handleDoubleClick = (index: number) => {
    // Double-click to enter LiTaiJi mode (handled at grid level)
    if (!state.liTaiJiMode) {
      // This will be handled by the parent, but we dispatch ENTER_LI_TAI_JI
      // The actual re-centering is done in LiTaiJiPanel
    }
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-4 gap-2">
        {gridLayout.flat().map((index, i) => {
          if (index === -1) {
            return <div key={`empty-${i}`} className="min-h-[100px]" />;
          }
          const palace = plate.palaces[index];
          return (
            <PalaceCell
              key={index}
              palace={palace}
              isActive={state.activePalace === index}
              isSanfang={isSanfang(index)}
              isSizheng={isSizheng(index)}
              onClick={() => dispatch({ type: 'SET_ACTIVE_PALACE', payload: index })}
              onDoubleClick={() => handleDoubleClick(index)}
            />
          );
        })}
      </div>

      {state.showDizhiRelation && <DizhiRelationOverlay />}

      {/* Direction labels */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-[#5a4520]">南 (午)</div>
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-[#5a4520]">北 (子)</div>
      <div className="absolute top-1/2 -left-8 -translate-y-1/2 text-xs text-[#5a4520]">东 (卯)</div>
      <div className="absolute top-1/2 -right-8 -translate-y-1/2 text-xs text-[#5a4520]">西 (酉)</div>

      {/* 五行局/命主/身主 info bar */}
      <div className="mt-8 text-center text-sm text-[#5a4520]">
        <span>五行局: {plate.fiveElementBureau}</span>
        <span className="mx-3">|</span>
        <span>命主: {plate.mingZhu}</span>
        <span className="mx-3">|</span>
        <span>身主: {plate.shenZhu}</span>
      </div>
    </div>
  );
}
