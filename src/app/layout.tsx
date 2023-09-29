import '@/styles/globals.css'
import type { Metadata } from "next";

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
      </body>
    </html>
  );
}