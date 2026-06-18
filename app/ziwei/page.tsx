'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import { useTranslations } from '@/lib/i18n';
import { ZiweiProvider, useZiwei, PalaceGrid, SanfangSizheng, LiTaiJiPanel, PalaceDetail, StarsTab, TransformationTab, Dashboard, PalaceExplanation } from '@/components/ziwei';

// Tab 导航组件
function ZiweiTabs() {
  const { state, dispatch } = useZiwei();
  const { t } = useTranslations();

  const tabs = [
    { key: 'palace' as const, label: '宫 · 命盘' },
    { key: 'stars' as const, label: '星 · 图鉴' },
    { key: 'transformation' as const, label: '化 · 四化' },
    { key: 'dashboard' as const, label: '合 · 看板' },
  ];

  return (
    <div className="flex gap-1 border-b border-[#c9a962]/30 mb-6">
      {tabs.map(tab => (
        <button
          key={tab.key}
          onClick={() => dispatch({ type: 'SET_TAB', payload: tab.key })}
          className={`px-4 py-2 text-sm font-medium rounded-t transition-all ${
            state.activeTab === tab.key
              ? 'bg-[#c9a962]/10 text-[#3d2914] border-b-2 border-[#c9a962] font-bold'
              : 'text-[#5a4520] hover:text-[#3d2914] hover:bg-[#faf5e8]'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

// 排盘表单
function BirthForm({ formData, setFormData, loading, onSubmit }: {
  formData: { year: number; month: number; day: number; hour: number; gender: 'male' | 'female' };
  setFormData: (d: any) => void;
  loading: boolean;
  onSubmit: (e: React.FormEvent) => void;
}) {
  const { t } = useTranslations();

  return (
    <div className="ancient-card rounded-xl p-6 mb-6">
      <h2 className="text-lg font-bold text-[#3d2914] mb-4">{t('ziwei.charting')}</h2>
      <form onSubmit={onSubmit} className="grid grid-cols-2 md:grid-cols-6 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#3d2914] mb-1">{t('ziwei.year')}</label>
          <input
            type="number"
            value={formData.year}
            onChange={(e) => setFormData({ ...formData, year: parseInt(e.target.value) })}
            className="w-full px-3 py-2 border border-[#c9a962]/30 rounded-lg focus:ring-2 focus:ring-[#c9a962] focus:border-[#c9a962] bg-[#faf5e8] text-[#3d2914]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#3d2914] mb-1">{t('ziwei.month')}</label>
          <input
            type="number"
            value={formData.month}
            onChange={(e) => setFormData({ ...formData, month: parseInt(e.target.value) })}
            className="w-full px-3 py-2 border border-[#c9a962]/30 rounded-lg focus:ring-2 focus:ring-[#c9a962] focus:border-[#c9a962] bg-[#faf5e8] text-[#3d2914]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#3d2914] mb-1">{t('ziwei.day')}</label>
          <input
            type="number"
            value={formData.day}
            onChange={(e) => setFormData({ ...formData, day: parseInt(e.target.value) })}
            className="w-full px-3 py-2 border border-[#c9a962]/30 rounded-lg focus:ring-2 focus:ring-[#c9a962] focus:border-[#c9a962] bg-[#faf5e8] text-[#3d2914]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#3d2914] mb-1">{t('ziwei.hour')}</label>
          <input
            type="number"
            value={formData.hour}
            onChange={(e) => setFormData({ ...formData, hour: parseInt(e.target.value) })}
            className="w-full px-3 py-2 border border-[#c9a962]/30 rounded-lg focus:ring-2 focus:ring-[#c9a962] focus:border-[#c9a962] bg-[#faf5e8] text-[#3d2914]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#3d2914] mb-1">{t('ziwei.gender')}</label>
          <select
            value={formData.gender}
            onChange={(e) => setFormData({ ...formData, gender: e.target.value as 'male' | 'female' })}
            className="w-full px-3 py-2 border border-[#c9a962]/30 rounded-lg focus:ring-2 focus:ring-[#c9a962] focus:border-[#c9a962] bg-[#faf5e8] text-[#3d2914]"
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
  );
}

// Tab 内容区
function TabContent() {
  const { state } = useZiwei();

  switch (state.activeTab) {
    case 'palace':
      return (
        <div className="space-y-6">
          <PalaceGrid />
          {state.liTaiJiMode && <LiTaiJiPanel />}
          <SanfangSizheng />
          <PalaceDetail />
          <PalaceExplanation type="palace" />
        </div>
      );
    case 'stars':
      return <StarsTab />;
    case 'transformation':
      return <TransformationTab />;
    case 'dashboard':
      return <Dashboard />;
    default:
      return null;
  }
}

// 页面主内容区
function ZiweiContent() {
  const { t } = useTranslations();
  const { state, dispatch } = useZiwei();
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
    dispatch({ type: 'SET_PLATE', payload: data });
    setLoading(false);
  };

  useEffect(() => {
    handleSubmit({ preventDefault: () => {} } as unknown as React.FormEvent);
  }, []);

  return (
    <div className="min-h-screen bg-paper taiji-bg">
      <Navigation activePath="/ziwei" />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <BirthForm formData={formData} setFormData={setFormData} loading={loading} onSubmit={handleSubmit} />

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-[#c9a962] border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : state.plate ? (
          <div className="ancient-card rounded-xl p-6">
            <ZiweiTabs />
            <TabContent />
          </div>
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
    </div>
  );
}

export default function ZiweiPage() {
  return (
    <ZiweiProvider>
      <ZiweiContent />
    </ZiweiProvider>
  );
}
