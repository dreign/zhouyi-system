import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "周易命理系统",
  description: "传承千年智慧，探索人生奥秘",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-paper font-serif">
        {children}
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
