import '@/styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from "next";
import Script from "next/script";


export const metadata: Metadata = {
  title: "Бурение скважин на воду в Челябинской области",
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
        <Script id="yandex-metrica" type="text/javascript">
          {`
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym(94753079, "init", {
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true,
          webvisor:true
    });
   `}
        </Script>
        <noscript>
          <img
            id={"yandex-metrica123"}
            src={"https://mc.yandex.ru/watch/94753079"}
            style={{ position: "absolute", left: "-9999px" }}
            alt={""}
          />
        </noscript>
      </body>
    </html>
  );
}
