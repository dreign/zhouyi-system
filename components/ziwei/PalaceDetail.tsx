'use client';

import { useZiwei } from './context';
import { analyzePalace, BRIGHTNESS_LABELS, SIHUA_DESCRIPTION } from '../../engine/ziwei';

export default function PalaceDetail() {
  const { state, dispatch } = useZiwei();

  const plate = state.reCenteredPlate || state.plate;
  if (!plate) return null;

  const activePalaceIndex = state.activePalace;
  const analysis = analyzePalace(plate, activePalaceIndex);
  const palace = analysis.palace;

  if (!palace) return null;

  const majorStars = palace.stars.filter((s: any) => s.type === 'major');
  const luckyStars = palace.stars.filter((s: any) => s.type === 'lucky');
  const badStars = palace.stars.filter((s: any) => s.type === 'bad');
  const minorStars = palace.stars.filter((s: any) => s.type === 'minor');

  return (
    <div className="mt-3 p-3 border border-[#3d2914]/20 rounded-lg bg-[#faf5e8]/80">
      {/* 宫位标题 */}
      <div className="flex items-center justify-between mb-2">
        <div>
          <span className="text-sm font-bold text-[#3d2914]">{palace.name}</span>
          <span className="text-xs text-[#5a4520] ml-2">
            {palace.branch}宫 · 天干{palace.stem}
          </span>
        </div>
        <div className="flex gap-1">
          <button
            onClick={() => {
              const prev = (activePalaceIndex - 1 + 12) % 12;
              dispatch({ type: 'SET_ACTIVE_PALACE', payload: prev });
            }}
            className="px-1.5 py-0.5 text-xs border border-[#3d2914]/30 rounded hover:bg-[#c9a962]/20 text-[#5a4520]"
          >
            ◀
          </button>
          <button
            onClick={() => {
              const next = (activePalaceIndex + 1) % 12;
              dispatch({ type: 'SET_ACTIVE_PALACE', payload: next });
            }}
            className="px-1.5 py-0.5 text-xs border border-[#3d2914]/30 rounded hover:bg-[#c9a962]/20 text-[#5a4520]"
          >
            ▶
          </button>
        </div>
      </div>

      {/* 主星 */}
      {majorStars.length > 0 && (
        <div className="mb-2">
          <div className="text-xs text-[#5a4520] mb-1">主星</div>
          <div className="flex flex-wrap gap-1">
            {majorStars.map((star: any) => {
              const brightness = palace.brightness[star.name] || 'ping';
              const brightnessLabel = BRIGHTNESS_LABELS[brightness as keyof typeof BRIGHTNESS_LABELS] || '';
              const starColor =
                brightness === 'miao' || brightness === 'wang' ? 'text-[#8b2500] bg-red-50' :
                brightness === 'de' || brightness === 'li' ? 'text-[#c9a962] bg-yellow-50' :
                brightness === 'xian' ? 'text-gray-400 bg-gray-50' : 'text-[#3d2914] bg-white';

              return (
                <div
                  key={star.name}
                  className={`px-2 py-1 rounded text-xs border ${starColor} border-current/20`}
                  title={star.description}
                >
                  {star.name}
                  {brightnessLabel && <span className="ml-0.5 opacity-70">({brightnessLabel})</span>}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 四化 */}
      {palace.siHua.length > 0 && (
        <div className="mb-2">
          <div className="text-xs text-[#5a4520] mb-1">四化</div>
          <div className="flex flex-wrap gap-1">
            {palace.siHua.map((sh: any, idx: number) => {
              const desc = SIHUA_DESCRIPTION[sh.type as keyof typeof SIHUA_DESCRIPTION];
              const colorMap: Record<string, string> = {
                'lu': 'text-green-700 bg-green-50',
                'quan': 'text-blue-700 bg-blue-50',
                'ke': 'text-purple-700 bg-purple-50',
                'ji': 'text-red-700 bg-red-50',
              };
              return (
                <div
                  key={idx}
                  className={`px-2 py-1 rounded text-xs border ${colorMap[sh.type] || ''} border-current/20`}
                  title={desc?.effect || ''}
                >
                  {sh.star} {desc?.name || sh.type}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 吉星 */}
      {luckyStars.length > 0 && (
        <div className="mb-2">
          <div className="text-xs text-[#5a4520] mb-1">吉星</div>
          <div className="flex flex-wrap gap-1">
            {luckyStars.map((star: any) => (
              <span key={star.name} className="px-2 py-0.5 rounded text-xs text-green-700 bg-green-50 border border-green-200">
                {star.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* 凶星 */}
      {badStars.length > 0 && (
        <div className="mb-2">
          <div className="text-xs text-[#5a4520] mb-1">凶星</div>
          <div className="flex flex-wrap gap-1">
            {badStars.map((star: any) => (
              <span key={star.name} className="px-2 py-0.5 rounded text-xs text-[#8b2500] bg-red-50 border border-red-200">
                {star.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* 杂曜 */}
      {minorStars.length > 0 && (
        <div className="mb-2">
          <div className="text-xs text-[#5a4520] mb-1">杂曜</div>
          <div className="flex flex-wrap gap-1">
            {minorStars.map((star: any) => (
              <span key={star.name} className="px-2 py-0.5 rounded text-xs text-gray-500 bg-gray-50 border border-gray-200">
                {star.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* 分析文本 */}
      <div className="mt-2 pt-2 border-t border-[#3d2914]/10">
        <div className="text-xs text-[#5a4520] leading-relaxed">{analysis.analysis}</div>
      </div>

      {/* 建议 */}
      {analysis.suggestions.length > 0 && (
        <div className="mt-2 pt-2 border-t border-[#3d2914]/10">
          <div className="text-xs text-[#5a4520] mb-1">建议</div>
          <ul className="list-disc list-inside">
            {analysis.suggestions.map((suggestion, idx) => (
              <li key={idx} className="text-xs text-[#8b2500]">{suggestion}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
