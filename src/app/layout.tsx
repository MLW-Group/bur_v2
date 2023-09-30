import '@/styles/globals.css'
import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';


export const metadata: Metadata = {
  title: "Бурение скважин на воду в Челябинске",
  description: "Бурение скважин на воду",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}