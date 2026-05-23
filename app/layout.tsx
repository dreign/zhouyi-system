'use client';

import { TranslationProvider } from '@/lib/i18n';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body className="min-h-screen bg-paper font-serif">
        <TranslationProvider>
          {children}
        </TranslationProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var _hmt = _hmt || [];
              (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?872034ded637616c5cf8e173a446bb0e";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
