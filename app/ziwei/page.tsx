'use client';

import { useState, useEffect } from 'react';
import { ZiweiPlate, Palace, BRIGHTNESS_LABELS, PALACE_NAMES } from '../../engine/ziwei';
import Navigation from '@/components/Navigation';
import { useTranslations } from '@/lib/i18n';

interface ZiweiChartProps {
  plate: ZiweiPlate;
}

function PalaceCell({ palace, isActive, onClick }: { palace: Palace; isActive: boolean; onClick: () => void }) {
  const mainStars = palace.stars.filter(s => s.type === 'major');
  const luckyStars = palace.stars.filter(s => s.type === 'lucky');
  const badStars = palace.stars.filter(s => s.type === 'bad');
  const siHuaText = palace.siHua.map(sh => `${sh.type === 'lu' ? '禄' : sh.type === 'quan' ? '权' : sh.type === 'ke' ? '科' : '忌'}`).join('');

  const { t } = useTranslations();

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
      
      <div className="text-xs text-[#5a4520] mb-1">{t('ziwei.tianGan')}: {palace.stem}</div>
      
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
  const { t } = useTranslations();
  const [activePalace, setActivePalace] = useState<number>(0);

  return (
    <div className="ancient-card rounded-xl p-6">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold text-[#3d2914]">{t('ziwei.chart')}</h2>
        <p className="text-sm text-[#5a4520] mt-1">
          {t('ziwei.fiveElements')}: {plate.fiveElementBureau} | {t('ziwei.lifeLord')}: {plate.mingZhu} | {t('ziwei.bodyLord')}: {plate.shenZhu}
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
        <h3 className="font-bold text-[#3d2914] mb-2">{t('ziwei.palaceDetail')}: {PALACE_NAMES[activePalace]}</h3>
        <div className="text-sm text-[#5a4520]">
          <p>{plate.palaces[activePalace].stars.map(s => s.description).join(' ')}</p>
        </div>
      </div>
    </div>
  );
}

export default function ZiweiPage() {
  const { t } = useTranslations();
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
      <Navigation activePath="/ziwei" />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="ancient-card rounded-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-[#3d2914] mb-4">{t('ziwei.charting')}</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 md:grid-cols-6 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#3d2914] mb-1">{t('ziwei.year')}</label>
              <input
                type="number"
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: parseInt(e.target.value)})}
                className="w-full px-3 py-2 border border-[#c9a962]/30 rounded-lg focus:ring-2 focus:ring-[#c9a962] focus:border-[#c9a962] bg-[#faf5e8]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#3d2914] mb-1">{t('ziwei.month')}</label>
              <input
                type="number"
                value={formData.month}
                onChange={(e) => setFormData({ ...formData, month: parseInt(e.target.value)})}
                className="w-full px-3 py-2 border border-[#c9a962]/30 rounded-lg focus:ring-2 focus:ring-[#c9a962] focus:border-[#c9a962] bg-[#faf5e8]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#3d2914] mb-1">{t('ziwei.day')}</label>
              <input
                type="number"
                value={formData.day}
                onChange={(e) => setFormData({ ...formData, day: parseInt(e.target.value)})}
                className="w-full px-3 py-2 border border-[#c9a962]/30 rounded-lg focus:ring-2 focus:ring-[#c9a962] focus:border-[#c9a962] bg-[#faf5e8]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#3d2914] mb-1">{t('ziwei.hour')}</label>
              <input
                type="number"
                value={formData.hour}
                onChange={(e) => setFormData({ ...formData, hour: parseInt(e.target.value)})}
                className="w-full px-3 py-2 border border-[#c9a962]/30 rounded-lg focus:ring-2 focus:ring-[#c9a962] focus:border-[#c9a962] bg-[#faf5e8]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#3d2914] mb-1">{t('ziwei.gender')}</label>
              <select
                value={formData.gender}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value as 'male' | 'female'})}
                className="w-full px-3 py-2 border border-[#c9a962]/30 rounded-lg focus:ring-2 focus:ring-[#c9a962] focus:border-[#c9a962] bg-[#faf5e8]"
              >
                <option value="male">{t('ziwei.male')}</option>
                <option value="female">{t('ziwei.female')}</option>
              </select>
            </div>
            <div className="flex items-end">
              <button
                type="submit"
                disabled={loading}
                className="w-full px-4 py-2 bg-[#3d2914] text-[#faf5e8] font-medium rounded-lg hover:bg-[#2a1f10] focus:ring-2 focus:ring-[#c9a962] disabled:opacity-50 disabled:cursor-not-allowed border border-[#c9a962]"
              >
                {loading ? t('ziwei.calculating') : t('ziwei.startCharting')}
              </button>
            </div>
          </form>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-[#c9a962] border-t-transparent rounded-full animate-spin"></div>
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
            <h3 className="text-lg font-medium text-[#3d2914]">{t('ziwei.enterBirthInfo')}</h3>
            <p className="text-[#5a4520] mt-2">{t('ziwei.fillForm')}</p>
          </div>
        )}
      </main>

      <footer className="bg-ancient-dark py-8 mt-16 border-t-4 border-[#c9a962]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-[#d4c8a0]/70">{t('common.footer.copyright')} · {t('common.footer.tagline')}</p>
          <p className="text-[#5a4520] text-sm mt-2">{t('common.footer.disclaimer')}</p>
          <p className="text-[#5a4520] text-sm mt-2">{t('common.footer.contact')}<a href="mailto:fengbuxiu@foxmail.com" className="text-[#c9a962] hover:text-[#d4c8a0] transition-colors">fengbuxiu@foxmail.com</a></p>
        </div>
      </footer>
    </div>
  );
}
