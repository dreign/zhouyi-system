'use client';

import { useZiwei } from './context';
import { PALACE_NAMES } from '../../engine/ziwei';
import LiuQinGraph from './LiuQinGraph';
import PalaceExplanation from './PalaceExplanation';

export default function Dashboard() {
  const { state } = useZiwei();
  const plate = state.reCenteredPlate || state.plate;
  
  if (!plate) {
    return (
      <div className="text-center py-12 text-[#5a4520]">
        <p>请先排盘以查看综合看板</p>
      </div>
    );
  }
  
  const mingGong = plate.palaces[0];
  const mingGongStars = mingGong.stars.filter((s: any) => s.type === 'major');
  
  return (
    <div className="space-y-6">
      {/* 命盘摘要 */}
      <div className="bg-gradient-to-r from-[#3d2914]/5 to-transparent border border-[#c9a962]/30 rounded-lg p-5">
        <h3 className="text-lg font-bold text-[#3d2914] mb-3">命盘摘要</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#faf5e8] rounded-lg p-3 text-center">
            <div className="text-xs text-[#5a4520]">五行局</div>
            <div className="font-bold text-[#3d2914] mt-1">{plate.fiveElementBureau}</div>
          </div>
          <div className="bg-[#faf5e8] rounded-lg p-3 text-center">
            <div className="text-xs text-[#5a4520]">命主</div>
            <div className="font-bold text-[#3d2914] mt-1">{plate.mingZhu}</div>
          </div>
          <div className="bg-[#faf5e8] rounded-lg p-3 text-center">
            <div className="text-xs text-[#5a4520]">身主</div>
            <div className="font-bold text-[#3d2914] mt-1">{plate.shenZhu}</div>
          </div>
          <div className="bg-[#faf5e8] rounded-lg p-3 text-center">
            <div className="text-xs text-[#5a4520]">命宫</div>
            <div className="font-bold text-[#3d2914] mt-1">{mingGong.branch}宫</div>
          </div>
        </div>
        
        {mingGongStars.length > 0 && (
          <div className="mt-3">
            <div className="text-xs text-[#5a4520] mb-1">命宫主星</div>
            <div className="flex gap-2 flex-wrap">
              {mingGongStars.map((star: any) => (
                <span key={star.name} className="px-2 py-1 bg-[#c9a962]/10 rounded text-sm font-medium text-[#3d2914]">
                  {star.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* 六亲关系 */}
      <LiuQinGraph />
      <PalaceExplanation type="dashboard" />
    </div>
  );
}
