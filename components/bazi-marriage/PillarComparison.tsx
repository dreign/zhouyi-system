'use client';

interface PillarInfo {
  gan: string;
  zhi: string;
  ganWuxing: string;
  zhiWuxing: string;
  shiShen?: string;
  cangGan: string[];
}

interface PillarComparisonProps {
  malePillars: { year: PillarInfo; month: PillarInfo; day: PillarInfo; hour: PillarInfo };
  femalePillars: { year: PillarInfo; month: PillarInfo; day: PillarInfo; hour: PillarInfo };
}

const wuxingColors: Record<string, string> = {
  '木': 'text-green-600 bg-green-50 border-green-200',
  '火': 'text-red-600 bg-red-50 border-red-200',
  '土': 'text-amber-700 bg-amber-50 border-amber-200',
  '金': 'text-yellow-600 bg-yellow-50 border-yellow-200',
  '水': 'text-blue-600 bg-blue-50 border-blue-200',
};

export default function PillarComparison({ malePillars, femalePillars }: PillarComparisonProps) {
  const pillarNames = [
    { key: 'year', label: '年柱' },
    { key: 'month', label: '月柱' },
    { key: 'day', label: '日柱' },
    { key: 'hour', label: '时柱' },
  ];

  return (
    <div className="rounded-xl border border-[#c9a962]/30 overflow-hidden mb-6">
      <div className="bg-gradient-to-r from-[#8b2500]/10 to-[#d44a4a]/10 px-4 py-3 text-center">
        <h3 className="font-bold text-[#3d2914]">四柱对照</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#faf5e8]">
              <th className="px-4 py-2 text-left text-[#5a4520]"></th>
              {pillarNames.map(p => (
                <th key={p.key} className="px-4 py-2 text-center text-[#3d2914] font-bold">{p.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-[#c9a962]/20">
              <td className="px-4 py-2 font-medium text-blue-700 bg-blue-50/50">男方</td>
              {pillarNames.map(p => {
                const pillar = (malePillars as any)[p.key] as PillarInfo;
                return (
                  <td key={p.key} className="px-4 py-2 text-center">
                    <div className="font-bold">{pillar.gan}{pillar.zhi}</div>
                    <div className={`text-xs mt-1 px-2 py-0.5 rounded-full inline-block border ${wuxingColors[pillar.ganWuxing] || ''}`}>
                      {pillar.ganWuxing}
                    </div>
                  </td>
                );
              })}
            </tr>
            <tr className="border-t border-[#c9a962]/20">
              <td className="px-4 py-2 font-medium text-pink-700 bg-pink-50/50">女方</td>
              {pillarNames.map(p => {
                const pillar = (femalePillars as any)[p.key] as PillarInfo;
                return (
                  <td key={p.key} className="px-4 py-2 text-center">
                    <div className="font-bold">{pillar.gan}{pillar.zhi}</div>
                    <div className={`text-xs mt-1 px-2 py-0.5 rounded-full inline-block border ${wuxingColors[pillar.ganWuxing] || ''}`}>
                      {pillar.ganWuxing}
                    </div>
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
