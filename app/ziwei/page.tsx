'use client';

import { useState, useEffect } from 'react';
import { ZiweiPlate, Palace, BRIGHTNESS_LABELS, PALACE_NAMES } from '../../engine/ziwei';
import Link from 'next/link';

const NavLink = ({ href, label, active }: { href: string; label: string; active?: boolean }) => (
  <Link 
    href={href}
    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
      active 
        ? 'bg-[#c9a962]/20 text-[#c9a962] border border-[#c9a962]/50' 
        : 'text-[#d4c8a0] hover:text-[#c9a962] hover:bg-[#c9a962]/10'
    }`}
  >
    {label}
  </Link>
);

interface ZiweiChartProps {
  plate: ZiweiPlate;
}

const TaiChiIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <circle cx="50" cy="50" r="48" fill="none" stroke="#1a140a" strokeWidth="2"/>
    <path d="M50 2 A48 48 0 0 1 50 98 A24 24 0 0 1 50 50 A24 24 0 0 0 50 2" fill="#1a140a"/>
    <path d="M50 2 A48 48 0 0 0 50 98 A24 24 0 0 0 50 50 A24 24 0 0 1 50 2" fill="#faf5e8"/>
    <circle cx="50" cy="26" r="8" fill="#faf5e8"/>
    <circle cx="50" cy="74" r="8" fill="#1a140a"/>
    <circle cx="50" cy="26" r="2" fill="#1a140a"/>
    <circle cx="50" cy="74" r="2" fill="#faf5e8"/>
  </svg>
);

function PalaceCell({ palace, isActive, onClick }: { palace: Palace; isActive: boolean; onClick: () => void }) {
  const mainStars = palace.stars.filter(s => s.type === 'major');
  const luckyStars = palace.stars.filter(s => s.type === 'lucky');
  const badStars = palace.stars.filter(s => s.type === 'bad');
  const siHuaText = palace.siHua.map(sh => `${sh.type === 'lu' ? '禄' : sh.type === 'quan' ? '权' : sh.type === 'ke' ? '科' : '忌'}(${sh.star})`).join('');

  return (
    <div
      onClick={onClick}
      className={`relative border rounded-lg p-2 cursor-pointer transition-all duration-200 ${
        isActive 
          ? 'bg-[#c9a962]/10 border-[#c9a962]' 
          : 'bg-[#faf5e8] border-[#3d2914]/30 hover:border-[#c9a962]'
      }`}
      style={{ minHeight: '120px' }}
    >
      <div className="flex justify-between items-start mb-1">
        <span className="font-bold text-sm text-[#3d2914]">{palace.name}</span>
        <span className="text-xs text-[#5a4520]">{palace.branch}</span>
      </div>
      
      <div className="text-xs text-[#5a4520] mb-1">天干: {palace.stem}</div>
      
      {mainStars.length > 0 && (
        <div className="space-y-0.5">
          {mainStars.map(star => {
            const brightness = palace.brightness[star.name];
            const brightnessLabel = BRIGHTNESS_LABELS[brightness as keyof typeof BRIGHTNESS_LABELS] || '';
            return (
              <div key={star.name} className="flex items-center gap-1">
                <span className={`text-xs font-medium ${
                  brightness === 'miao' || brightness === 'wang' ? 'text-[#8b2500]' :
                  brightness === 'de' || brightness === 'li' ? 'text-[#c9a962]' :
                  brightness === 'xian' ? 'text-gray-400' : 'text-[#3d2914]'
                }`}>
                  {star.name}
                </span>
                {brightnessLabel && (
                  <span className={`text-xs ${
                    brightness === 'miao' || brightness === 'wang' ? 'text-[#8b2500]' :
                    brightness === 'xian' ? 'text-gray-400' : 'text-[#5a4520]'
                  }`}>
                    ({brightnessLabel})
                  </span>
                )}
              </div>
            );
          })}
        </div>
      )}
      
      {luckyStars.length > 0 && (
        <div className="mt-1">
          {luckyStars.map(star => (
            <span key={star.name} className="text-xs text-green-700 mr-1">◎{star.name}</span>
          ))}
        </div>
      )}
      
      {badStars.length > 0 && (
        <div className="mt-1">
          {badStars.map(star => (
            <span key={star.name} className="text-xs text-[#8b2500] mr-1">●{star.name}</span>
          ))}
        </div>
      )}
      
      {siHuaText && (
        <div className="mt-1 text-xs font-bold text-purple-700">{siHuaText}</div>
      )}
    </div>
  );
}

function ZiweiChart({ plate }: ZiweiChartProps) {
  const [activePalace, setActivePalace] = useState<number>(0);

  return (
    <div className="ancient-card rounded-xl p-6">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold text-[#3d2914]">紫微斗数命盘</h2>
        <p className="text-sm text-[#5a4520] mt-1">
          五行局: {plate.fiveElementBureau} | 命主: {plate.mingZhu} | 身主: {plate.shenZhu}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {plate.palaces.map((palace, index) => (
          <PalaceCell
            key={index}
            palace={palace}
            isActive={activePalace === index}
            onClick={() => setActivePalace(index)}
          />
        ))}
      </div>

      <div className="mt-6 p-4 bg-[#1a140a]/5 rounded-lg border border-[#3d2914]/20">
        <h3 className="font-bold text-[#3d2914] mb-2">宫位详解: {PALACE_NAMES[activePalace]}</h3>
        <div className="text-sm text-[#5a4520]">
          <p>{plate.palaces[activePalace].stars.map(s => s.description).join(' ')}</p>
        </div>
      </div>
    </div>
  );
}

export default function ZiweiPage() {
  const [plate, setPlate] = useState<ZiweiPlate | null>(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
    hour: new Date().getHours(),
    gender: 'male' as 'male' | 'female'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const response = await fetch('/api/ziwei/chart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    const data = await response.json();
    setPlate(data);
    setLoading(false);
  };

  useEffect(() => {
    handleSubmit({ preventDefault: () => {} } as unknown as React.FormEvent);
  }, []);

  return (
    <div className="min-h-screen bg-paper taiji-bg">
      <header className="relative z-10 bg-ancient-dark py-10 border-b-4 border-[#c9a962]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-16 rotate-slow">
              <TaiChiIcon />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-[#c9a962] tracking-widest">紫微斗数</h1>
              <p className="text-[#d4c8a0] mt-2 tracking-wider">紫微斗数是中国传统命理学术，通过星曜分布推断人生运势</p>
            </div>
          </div>
        </div>
      </header>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a140a]/95 backdrop-blur-md border-b border-[#c9a962]/30 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-[#c9a962] flex items-center justify-center bg-[#2a1f10]">
                <span className="text-[#c9a962] text-xl">☯</span>
              </div>
              <span className="text-[#c9a962] font-bold text-lg tracking-wider">周易智慧</span>
            </div>
            
            <div className="flex items-center gap-6">
              <NavLink href="/" label="首页" />
              <NavLink href="/yi" label="易经占卜" />
              <NavLink href="/bazi" label="八字命理" />
              <NavLink href="/ziwei" label="紫微斗数" active />
              <NavLink href="/name" label="姓名分析" />
              <NavLink href="/book" label="周易全书" />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="ancient-card rounded-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-[#3d2914] mb-4">排盘输入</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 md:grid-cols-6 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#3d2914] mb-1">年份</label>
              <input
                type="number"
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: parseInt(e.target.value) })}
                className="w-full px-3 py-2 border border-[#c9a962]/30 rounded-lg focus:ring-2 focus:ring-[#c9a962] focus:border-[#c9a962] bg-[#faf5e8]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#3d2914] mb-1">月份</label>
              <input
                type="number"
                value={formData.month}
                onChange={(e) => setFormData({ ...formData, month: parseInt(e.target.value) })}
                className="w-full px-3 py-2 border border-[#c9a962]/30 rounded-lg focus:ring-2 focus:ring-[#c9a962] focus:border-[#c9a962] bg-[#faf5e8]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#3d2914] mb-1">日期</label>
              <input
                type="number"
                value={formData.day}
                onChange={(e) => setFormData({ ...formData, day: parseInt(e.target.value) })}
                className="w-full px-3 py-2 border border-[#c9a962]/30 rounded-lg focus:ring-2 focus:ring-[#c9a962] focus:border-[#c9a962] bg-[#faf5e8]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#3d2914] mb-1">时辰</label>
              <input
                type="number"
                value={formData.hour}
                onChange={(e) => setFormData({ ...formData, hour: parseInt(e.target.value) })}
                className="w-full px-3 py-2 border border-[#c9a962]/30 rounded-lg focus:ring-2 focus:ring-[#c9a962] focus:border-[#c9a962] bg-[#faf5e8]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#3d2914] mb-1">性别</label>
              <select
                value={formData.gender}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value as 'male' | 'female' })}
                className="w-full px-3 py-2 border border-[#c9a962]/30 rounded-lg focus:ring-2 focus:ring-[#c9a962] focus:border-[#c9a962] bg-[#faf5e8]"
              >
                <option value="male">男</option>
                <option value="female">女</option>
              </select>
            </div>
            <div className="flex items-end">
              <button
                type="submit"
                disabled={loading}
                className="w-full px-4 py-2 bg-[#3d2914] text-[#faf5e8] font-medium rounded-lg hover:bg-[#2a1f10] focus:ring-2 focus:ring-[#c9a962] disabled:opacity-50 disabled:cursor-not-allowed border border-[#c9a962]"
              >
                {loading ? '排盘中...' : '排盘'}
              </button>
            </div>
          </form>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 rotate-slow">
              <TaiChiIcon />
            </div>
          </div>
        ) : plate ? (
          <ZiweiChart plate={plate} />
        ) : (
          <div className="ancient-card rounded-xl p-12 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-[#1a140a]/5 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-[#5a4520]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-[#3d2914]">请输入出生信息进行排盘</h3>
            <p className="text-[#5a4520] mt-2">填写上方表单获取紫微斗数命盘</p>
          </div>
        )}
      </main>

      <footer className="bg-ancient-dark py-8 mt-16 border-t-4 border-[#c9a962]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-[#d4c8a0]/70">© 2026 周易命理系统 · 传承千年智慧，启迪人生智慧</p>
          <p className="text-[#5a4520] text-sm mt-2">本系统仅供娱乐参考，请勿过分迷信</p>
        </div>
      </footer>
    </div>
  );
}
