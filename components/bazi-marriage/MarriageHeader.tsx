'use client';

export default function MarriageHeader() {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#8b2500] via-[#d44a4a] to-[#8b2500] p-8 md:p-12 mb-8">
      {/* Decorative elements */}
      <div className="absolute top-2 left-4 text-6xl opacity-10 select-none">囍</div>
      <div className="absolute bottom-2 right-4 text-6xl opacity-10 select-none">囍</div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] opacity-5 select-none">囍</div>
      
      <div className="relative z-10 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-[#faf5e8] tracking-wider mb-3">
          八字合姻缘
        </h1>
        <p className="text-[#f5edd6] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          天干地支定缘分 · 五行八字测良缘<br className="hidden md:block" />
          输入双方生辰，看你们的姻缘匹配度
        </p>
        <div className="flex items-center justify-center gap-4 mt-4">
          <div className="w-16 h-px bg-[#c9a962]/50"></div>
          <span className="text-[#c9a962] text-sm tracking-widest">♥ 天赐良缘 ♥</span>
          <div className="w-16 h-px bg-[#c9a962]/50"></div>
        </div>
      </div>
    </div>
  );
}
