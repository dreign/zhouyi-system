'use client';

import { useZiwei } from './context';
import { getSanFangSiZheng } from '../../engine/ziwei';

export default function SanfangSizheng() {
  const { state, dispatch } = useZiwei();

  const plate = state.reCenteredPlate || state.plate;
  if (!plate) return null;

  const activePalaceIndex = state.activePalace;
  const activePalace = plate.palaces[activePalaceIndex];
  if (!activePalace) return null;

  const { sanfang, sizheng } = getSanFangSiZheng(activePalaceIndex);

  const sanfangPalaces = sanfang.map((idx: number) => plate.palaces[idx]).filter(Boolean);
  const sizhengPalace = plate.palaces[sizheng];
  const allRelated = [...sanfang, sizheng];

  // Get analysis text for a palace
  const getPalaceStars = (palace: any): string => {
    const majors = palace.stars.filter((s: any) => s.type === 'major').map((s: any) => s.name);
    return majors.length > 0 ? majors.join('、') : '无主星';
  };

  return (
    <div className="mt-3 p-3 border border-[#3d2914]/20 rounded-lg bg-[#faf5e8]/80">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm font-medium text-[#3d2914]">三方四正</span>
        <span className="text-xs text-[#5a4520]">
          以 <span className="font-bold text-[#8b2500]">{activePalace.name}</span> 为基准
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {/* 三方 (Sanfang) */}
        <div className="col-span-2">
          <div className="text-xs text-[#5a4520] mb-1">三方（三合宫）</div>
          <div className="flex gap-2">
            {sanfangPalaces.map((palace: any) => (
              <button
                key={palace.index}
                onClick={() => dispatch({ type: 'SET_ACTIVE_PALACE', payload: palace.index })}
                className={`flex-1 px-2 py-1.5 rounded text-xs border transition-colors ${
                  state.activePalace === palace.index
                    ? 'bg-[#c9a962]/20 border-[#c9a962]'
                    : 'bg-white border-[#3d2914]/20 hover:border-[#c9a962]'
                }`}
              >
                <div className="font-medium text-[#3d2914]">{palace.name}</div>
                <div className="text-[#5a4520] mt-0.5">{palace.branch}宫</div>
                <div className="text-[#8b2500] mt-0.5">{getPalaceStars(palace)}</div>
              </button>
            ))}
          </div>
        </div>

        {/* 四正 (Sizheng / 对宫) */}
        <div className="col-span-2 mt-1">
          <div className="text-xs text-[#5a4520] mb-1">四正（对宫）</div>
          {sizhengPalace && (
            <button
              onClick={() => dispatch({ type: 'SET_ACTIVE_PALACE', payload: sizhengPalace.index })}
              className={`w-full px-2 py-1.5 rounded text-xs border transition-colors ${
                state.activePalace === sizhengPalace.index
                  ? 'bg-red-50 ring-2 ring-[#8b2500]/40 border-[#8b2500]/30'
                  : 'bg-white border-[#3d2914]/20 hover:border-[#8b2500]/50'
              }`}
            >
              <div className="font-medium text-[#3d2914]">{sizhengPalace.name}</div>
              <div className="text-[#5a4520] mt-0.5">{sizhengPalace.branch}宫</div>
              <div className="text-[#8b2500] mt-0.5">{getPalaceStars(sizhengPalace)}</div>
            </button>
          )}
        </div>
      </div>

      {/* 分析总结 */}
      <div className="mt-2 pt-2 border-t border-[#3d2914]/10">
        <div className="text-xs text-[#5a4520]">
          <span className="font-medium">分析：</span>
          {activePalace.name}与
          {sanfangPalaces.map((p: any) => p.name).join('、')}
          形成三方拱照，
          {sizhengPalace && `与${sizhengPalace.name}形成四正对照。`}
          {sanfangPalaces.some((p: any) => p.stars.filter((s: any) => s.type === 'major').length > 0)
            ? '三方有主星照会，格局有力。'
            : '三方无主星，需借星安宫。'}
        </div>
      </div>
    </div>
  );
}
