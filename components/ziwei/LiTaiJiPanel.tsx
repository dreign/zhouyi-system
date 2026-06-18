'use client';

import { useZiwei } from './context';
import { reCenterPlate } from '../../engine/ziwei';

export default function LiTaiJiPanel() {
  const { state, dispatch } = useZiwei();

  const plate = state.reCenteredPlate || state.plate;
  if (!plate) return null;

  const activePalace = plate.palaces[state.activePalace];
  if (!activePalace) return null;

  const handleEnterLiTaiJi = () => {
    const newPlate = reCenterPlate(plate, activePalace.branch);
    dispatch({
      type: 'ENTER_LI_TAI_JI',
      payload: { origin: state.activePalace, reCenteredPlate: newPlate },
    });
  };

  const handleExitLiTaiJi = () => {
    dispatch({ type: 'EXIT_LI_TAI_JI' });
  };

  const handlePopReCenter = () => {
    dispatch({ type: 'POP_RE_CENTER' });
  };

  const canGoBack = state.reCenterHistory.length > 1;
  const historyCount = state.reCenterHistory.length;

  return (
    <div className="mt-3 p-3 border border-[#3d2914]/20 rounded-lg bg-[#faf5e8]/80">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-[#3d2914]">立太极模式</span>
        {state.liTaiJiMode && (
          <span className="text-xs bg-[#8b2500]/10 text-[#8b2500] px-2 py-0.5 rounded">
            当前处于立太极模式
          </span>
        )}
      </div>

      {!state.liTaiJiMode ? (
        <div>
          <div className="text-xs text-[#5a4520] mb-2">
            立太极（Li Tai Ji）是以当前选中宫位为新的太极点，重新排列十二宫。点击下方按钮将以
            <span className="font-bold text-[#8b2500]"> {activePalace.name}（{activePalace.branch}宫）</span>
            为新命宫。
          </div>
          <button
            onClick={handleEnterLiTaiJi}
            className="w-full px-3 py-2 text-xs rounded border border-[#c9a962] bg-[#c9a962]/10 text-[#3d2914] hover:bg-[#c9a962]/30 transition-colors"
          >
            以{activePalace.name}（{activePalace.branch}宫）为中心立太极
          </button>
        </div>
      ) : (
        <div>
          <div className="text-xs text-[#5a4520] mb-2">
            当前以 <span className="font-bold text-[#8b2500]">{state.liTaiJiOrigin !== null ? plate.palaces[state.liTaiJiOrigin]?.name || '原命宫' : '原命宫'}</span> 为太极点。
            已进行 <span className="font-bold">{historyCount}</span> 次重定位。
          </div>

          <div className="flex gap-2">
            {canGoBack && (
              <button
                onClick={handlePopReCenter}
                className="flex-1 px-3 py-2 text-xs rounded border border-[#3d2914]/30 bg-white text-[#5a4520] hover:bg-[#faf5e8] transition-colors"
              >
                返回上一步 ({historyCount - 1})
              </button>
            )}
            <button
              onClick={handleExitLiTaiJi}
              className="flex-1 px-3 py-2 text-xs rounded border border-[#8b2500]/30 bg-[#8b2500]/5 text-[#8b2500] hover:bg-[#8b2500]/10 transition-colors"
            >
              退出立太极
            </button>
          </div>

          {/* Re-center history stack display */}
          {state.reCenterHistory.length > 0 && (
            <div className="mt-2 pt-2 border-t border-[#3d2914]/10">
              <div className="text-xs text-[#5a4520] mb-1">重定位历史：</div>
              <div className="flex gap-1 flex-wrap">
                {state.reCenterHistory.map((h: any, idx: number) => (
                  <span
                    key={idx}
                    className={`text-xs px-2 py-0.5 rounded ${
                      idx === state.reCenterHistory.length - 1
                        ? 'bg-[#c9a962]/20 text-[#3d2914]'
                        : 'bg-white text-[#5a4520]'
                    }`}
                  >
                    {idx === 0 ? '原盘' : `第${idx}次`}: {h?.mingGongBranch || '-'}宫
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
