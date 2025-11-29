import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Пример сайта",
  description: "Простой одностраничный сайт на Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
