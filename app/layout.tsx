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
      </body>
    </html>
  );
}
