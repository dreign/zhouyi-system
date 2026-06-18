'use client';

interface ResultScoreProps {
  score: number;
  level: string;
  analysis: string;
}

export default function ResultScore({ score, level, analysis }: ResultScoreProps) {
  const circumference = 2 * Math.PI * 54; // r=54
  const offset = circumference - (score / 100) * circumference;
  
  const scoreColor = score >= 80 ? '#22c55e' : score >= 70 ? '#c9a962' : score >= 60 ? '#f59e0b' : '#ef4444';
  const scoreBgColor = score >= 80 ? 'bg-green-50 border-green-200' : score >= 70 ? 'bg-[#faf5e8] border-[#c9a962]' : score >= 60 ? 'bg-yellow-50 border-yellow-200' : 'bg-red-50 border-red-200';
  
  return (
    <div className={`rounded-xl p-6 border ${scoreBgColor} mb-6`}>
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Circular score */}
        <div className="relative w-32 h-32 flex-shrink-0">
          <svg className="w-32 h-32 transform -rotate-90">
            <circle cx="64" cy="64" r="54" fill="none" stroke="#e5e7eb" strokeWidth="8" />
            <circle
              cx="64"
              cy="64"
              r="54"
              fill="none"
              stroke={scoreColor}
              strokeWidth="8"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              className="transition-all duration-1000"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold" style={{ color: scoreColor }}>{score}</span>
            <span className="text-xs text-[#5a4520]">分</span>
          </div>
        </div>
        
        {/* Level and analysis */}
        <div className="flex-1 text-center md:text-left">
          <div className="text-2xl font-bold text-[#3d2914] mb-2">{level}</div>
          <p className="text-sm text-[#5a4520] leading-relaxed">{analysis}</p>
        </div>
      </div>
    </div>
  );
}
