'use client';

import { useTranslations } from '@/lib/i18n';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useTranslations();

  const languages = [
    { code: 'zh' as const, name: '中文', flag: '🇨🇳' },
    { code: 'en' as const, name: 'English', flag: '🇺🇸' },
  ];

  const currentLang = languages.find((l) => l.code === locale) || languages[0];

  return (
    <div className="flex items-center gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLocale(lang.code)}
          className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
            lang.code === locale
              ? 'text-[#c9a962] bg-[#c9a962]/10 border border-[#c9a962]/50'
              : 'text-[#d4c8a0] hover:text-[#c9a962] hover:bg-[#c9a962]/10'
          }`}
        >
          {lang.flag} {lang.name}
        </button>
      ))}
    </div>
  );
}
