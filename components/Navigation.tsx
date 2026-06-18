'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from '@/lib/i18n';
import LanguageSwitcher from './LanguageSwitcher';

interface NavigationProps {
  activePath?: string;
}

export default function Navigation({ activePath }: NavigationProps) {
  const pathname = usePathname() || activePath || '/';
  const { t } = useTranslations();

  const navItems = [
    { href: '/', label: t('nav.home') },
    { href: '/yi', label: t('nav.yi') },
    { href: '/bazi', label: t('nav.bazi') },
    { href: '/bazi/marriage', label: t('nav.marriage') },
    { href: '/ziwei', label: t('nav.ziwei') },
    { href: '/name', label: t('nav.name') },
    { href: '/book', label: t('nav.book') },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a140a]/95 backdrop-blur-md border-b border-[#c9a962]/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-[#c9a962] flex items-center justify-center bg-[#2a1f10]">
              <span className="text-[#c9a962] text-xl">☯</span>
            </div>
            <Link href="/" className="text-[#c9a962] font-bold text-lg tracking-wider">
              {t('common.appName')}
            </Link>
          </div>

          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === item.href
                    ? 'bg-[#c9a962]/20 text-[#c9a962] border border-[#c9a962]/50'
                    : 'text-[#d4c8a0] hover:text-[#c9a962] hover:bg-[#c9a962]/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}
