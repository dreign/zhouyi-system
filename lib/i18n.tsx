'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import zh from '../messages/zh.json';
import en from '../messages/en.json';

type Messages = typeof zh;
type Locale = 'zh' | 'en';

const translations: Record<Locale, Messages> = { zh, en };

interface TranslationContextType {
  locale: Locale;
  t: (key: string, params?: Record<string, string>) => string;
  setLocale: (locale: Locale) => void;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

interface TranslationProviderProps {
  children: ReactNode;
}

export function TranslationProvider({ children }: TranslationProviderProps) {
  const [locale, setLocaleState] = useState<Locale>('zh');

  useEffect(() => {
    const saved = localStorage.getItem('locale') as Locale | null;
    if (saved && ['zh', 'en'].includes(saved)) {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
    document.documentElement.lang = newLocale;
  };

  const t = (key: string, params?: Record<string, string>): string => {
    const keys = key.split('.');
    let value: any = translations[locale];
    
    for (const k of keys) {
      value = value[k];
      if (value === undefined) {
        return key;
      }
    }
    
    if (typeof value === 'string' && params) {
      return value.replace(/\{(\w+)\}/g, (_, key) => params[key] || `{${key}}`);
    }
    
    return value as string;
  };

  return (
    <TranslationContext.Provider value={{ locale, t, setLocale }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslations() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslations must be used within a TranslationProvider');
  }
  return context;
}
