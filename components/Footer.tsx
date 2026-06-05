'use client';

import { useTranslations } from '@/lib/i18n';

export default function Footer() {
  const { t } = useTranslations();

  return (
    <footer className="bg-ancient-dark py-8 mt-16 border-t-4 border-[#c9a962]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-[#d4c8a0]/70">{t('common.footer.copyright')} · {t('common.footer.tagline')}</p>
        <div className="text-sm mt-4">
          <a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer" style={{ color: '#8B2252', textDecoration: 'none' }}>
            沪ICP备2026011498号-2
          </a>
          <span style={{ color: '#8B2252', margin: '0 8px' }}>|</span>
          <a href="mailto:fengbuxiu@foxmail.com" style={{ color: '#8B2252', textDecoration: 'none' }}>fengbuxiu@foxmail.com</a>
        </div>
        <p className="text-[#5a4520] text-sm mt-2">{t('common.footer.disclaimer')}</p>
      </div>
    </footer>
  );
}
