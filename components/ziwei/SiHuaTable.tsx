'use client';

import { useZiwei } from './context';
import { TIANGAN, TIANGAN_SIHUA } from '../../engine/ziwei';

const SIHUA_NAMES: Record<string, { label: string; desc: string; color: string }> = {
  lu: { label: '禄', desc: '利益、享受、机遇', color: 'text-green-700 bg-green-50' },
  quan: { label: '权', desc: '权力、执行、能力', color: 'text-blue-700 bg-blue-50' },
  ke: { label: '科', desc: '名声、机会、贵人', color: 'text-purple-700 bg-purple-50' },
  ji: { label: '忌', desc: '代价、阻碍、变动', color: 'text-red-700 bg-red-50' },
};

export default function SiHuaTable() {
  const { state } = useZiwei();
  const plate = state.plate;
  const currentYearGan = plate ? plate.tiangan : '';
  
  return (
    <div className="space-y-4">
      <div className="bg-[#faf5e8] border border-[#c9a962]/30 rounded-lg p-4">
        <h3 className="font-bold text-[#3d2914] mb-3">十天干四化表</h3>
        <p className="text-xs text-[#5a4520] mb-4">
          四化是天干能量变化的具象化。化禄=利益享受、化权=权力执行、化科=机会名声、化忌=代价付出。
          每月、每年天干不同，四化也随之变化。
        </p>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#c9a962]/30">
                <th className="text-left py-2 px-2 text-[#3d2914] font-medium">天干</th>
                <th className="text-center py-2 px-2 text-green-700 font-medium">化禄</th>
                <th className="text-center py-2 px-2 text-blue-700 font-medium">化权</th>
                <th className="text-center py-2 px-2 text-purple-700 font-medium">化科</th>
                <th className="text-center py-2 px-2 text-red-700 font-medium">化忌</th>
              </tr>
            </thead>
            <tbody>
              {TIANGAN.map(gan => {
                const sihua = TIANGAN_SIHUA[gan];
                const isCurrent = gan === currentYearGan;
                return (
                  <tr
                    key={gan}
                    className={`border-b border-[#c9a962]/10 ${isCurrent ? 'bg-[#c9a962]/20 font-medium' : 'hover:bg-[#c9a962]/5'}`}
                  >
                    <td className="py-2 px-2 text-[#3d2914]">
                      {gan}
                      {isCurrent && <span className="ml-1 text-xs text-[#c9a962]">(本命)</span>}
                    </td>
                    <td className="text-center py-2 px-2 text-green-700">{sihua?.lu || '-'}</td>
                    <td className="text-center py-2 px-2 text-blue-700">{sihua?.quan || '-'}</td>
                    <td className="text-center py-2 px-2 text-purple-700">{sihua?.ke || '-'}</td>
                    <td className="text-center py-2 px-2 text-red-700">{sihua?.ji || '-'}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* 四化含义解释 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {Object.entries(SIHUA_NAMES).map(([key, val]) => (
          <div key={key} className={`rounded-lg p-3 text-center ${val.color} border`}>
            <div className="text-lg font-bold">{val.label}</div>
            <div className="text-xs mt-1">{val.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
