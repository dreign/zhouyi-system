'use client';

import { BRIGHTNESS_LABELS } from '../../engine/ziwei';

interface PalaceCellProps {
  palace: {
    index: number;
    name: string;
    branch: string;
    stem: string;
    stars: Array<{
      name: string;
      type: 'major' | 'lucky' | 'bad' | 'minor';
    }>;
    siHua: Array<{ star: string; type: 'lu' | 'quan' | 'ke' | 'ji' }>;
    brightness: Record<string, string>;
  };
  isActive: boolean;
  isSanfang: boolean;
  isSizheng: boolean;
  onClick: () => void;
  onDoubleClick: () => void;
}

const SIHUA_LABELS: Record<string, { text: string; color: string }> = {
  'lu': { text: '禄', color: 'text-green-700' },
  'quan': { text: '权', color: 'text-blue-700' },
  'ke': { text: '科', color: 'text-purple-700' },
  'ji': { text: '忌', color: 'text-red-700' },
};

export default function PalaceCell({
  palace,
  isActive,
  isSanfang,
  isSizheng,
  onClick,
  onDoubleClick,
}: PalaceCellProps) {
  const mainStars = palace.stars.filter(s => s.type === 'major');
  const luckyStars = palace.stars.filter(s => s.type === 'lucky');
  const badStars = palace.stars.filter(s => s.type === 'bad');

  // Determine background color based on active state
  let bgClass = 'bg-[#faf5e8]';
  if (isActive) bgClass = 'bg-[#c9a962]/20 ring-2 ring-[#c9a962]';
  else if (isSizheng) bgClass = 'bg-red-50 ring-2 ring-[#8b2500]/40';
  else if (isSanfang) bgClass = 'bg-[#c9a962]/10 ring-2 ring-[#c9a962]/30';

  return (
    <div
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      className={`relative border rounded-lg p-2 cursor-pointer transition-all duration-200 ${bgClass} border-[#3d2914]/30 hover:border-[#c9a962]`}
      style={{ minHeight: '110px' }}
    >
      <div className="flex justify-between items-start mb-1">
        <span className="font-bold text-sm text-[#3d2914]">{palace.name}</span>
        <span className="text-xs text-[#5a4520]">{palace.branch}</span>
      </div>

      <div className="text-xs text-[#5a4520] mb-1">{palace.stem}</div>

      {mainStars.length > 0 && (
        <div className="space-y-0.5">
          {mainStars.map(star => {
            const brightness = palace.brightness[star.name] || 'ping';
            const brightnessLabel = BRIGHTNESS_LABELS[brightness as keyof typeof BRIGHTNESS_LABELS] || '';
            const starColor =
              brightness === 'miao' || brightness === 'wang' ? 'text-[#8b2500]' :
              brightness === 'de' || brightness === 'li' ? 'text-[#c9a962]' :
              brightness === 'xian' ? 'text-gray-400' : 'text-[#3d2914]';
            return (
              <div key={star.name} className="flex items-center gap-1 text-xs">
                <span className={`font-medium ${starColor}`}>{star.name}</span>
                {brightnessLabel && (
                  <span className={`text-xs ${starColor}`}>
                    ({brightnessLabel})
                  </span>
                )}
              </div>
            );
          })}
        </div>
      )}

      {luckyStars.length > 0 && (
        <div className="mt-1 text-xs">
          {luckyStars.map(star => (
            <span key={star.name} className="text-green-700 mr-1">◎{star.name}</span>
          ))}
        </div>
      )}

      {badStars.length > 0 && (
        <div className="mt-1 text-xs">
          {badStars.map(star => (
            <span key={star.name} className="text-[#8b2500] mr-1">●{star.name}</span>
          ))}
        </div>
      )}

      {palace.siHua.length > 0 && (
        <div className="mt-1 text-xs font-bold flex gap-1">
          {palace.siHua.map((sh, idx) => (
            <span key={idx} className={SIHUA_LABELS[sh.type]?.color || ''}>
              {SIHUA_LABELS[sh.type]?.text || ''}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
