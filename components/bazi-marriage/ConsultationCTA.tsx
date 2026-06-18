'use client';

export default function ConsultationCTA() {
  return (
    <div className="bg-gradient-to-r from-[#3d2914] to-[#2a1f10] rounded-xl p-6 border border-[#c9a962]/30 text-center mb-8">
      <h3 className="text-xl font-bold text-[#c9a962] mb-3">深度合婚报告</h3>
      <p className="text-[#d4c8a0] text-sm mb-4 max-w-lg mx-auto">
        基础测算仅展示初步匹配度。联系专业命理师，获取包含双方八字详细分析、流年婚运、子女缘分、注意事项的深度合婚报告。
      </p>
      <button
        onClick={() => {
          // For now, show a simple alert/modal
          alert('深度合婚服务即将上线，敬请期待！');
        }}
        className="px-6 py-3 bg-gradient-to-r from-[#c9a962] to-[#b8963a] text-[#3d2914] font-bold rounded-lg hover:from-[#b8963a] hover:to-[#a88530] transition-all shadow-lg"
      >
        联系专业命理师 →
      </button>
    </div>
  );
}
