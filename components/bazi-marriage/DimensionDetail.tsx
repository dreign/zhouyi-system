'use client';

interface DimensionProps {
  title: string;
  score: number;
  analysis: string;
  suggestions: string[];
  colorClass: string;
  icon: string;
}

export default function DimensionDetail({ title, score, analysis, suggestions, colorClass, icon }: DimensionProps) {
  const scoreBarColor = score >= 80 ? 'bg-green-500' : score >= 70 ? 'bg-[#c9a962]' : score >= 60 ? 'bg-yellow-500' : 'bg-red-500';
  
  return (
    <div className={`rounded-xl p-5 border ${colorClass} mb-3`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">{icon}</span>
          <h4 className="font-bold text-[#3d2914]">{title}</h4>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${scoreBarColor}`}
              style={{ width: `${score}%` }}
            />
          </div>
          <span className="font-bold text-sm text-[#3d2914]">{score}<span className="text-xs text-[#5a4520]">分</span></span>
        </div>
      </div>
      <p className="text-sm text-[#5a4520] leading-relaxed mb-3">{analysis}</p>
      {suggestions.length > 0 && (
        <div className="bg-white/60 rounded-lg p-3">
          <div className="text-xs text-[#5a4520] font-medium mb-1">💡 建议</div>
          {suggestions.map((s, i) => (
            <p key={i} className="text-xs text-[#5a4520] ml-2">• {s}</p>
          ))}
        </div>
      )}
    </div>
  );
}
