import GlobalStyle from '@/styles/globalstyles';
import Script from 'next/script';
import { Metadata } from 'next';
import Providers from '@/Providers/Providers';

export const metadata: Metadata = {
	title: 'Бурение скважин на воду в Челябинской области',
	description: 'Бурение скважин на воду',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html>
			<head>
				{process.env.NODE_ENV !== 'development' && (
					<Script id="gtm" type="text/javascript">
						{`
							<!-- Google Tag Manager -->
					<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
					new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
					j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
					'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
					})(window,document,'script','dataLayer','GTM-PV8HXG22');</script>
					<!-- End Google Tag Manager -->
							`}
					</Script>
				)}
				{process.env.NODE_ENV !== 'development' && (
					<Script id="gtag" async src="https://www.googletagmanager.com/gtag/js?id=G-P75PS75CP8" />
				)}
				{process.env.NODE_ENV !== 'development' && (
					<Script id="gtag-init">
						{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', 'G-P75PS75CP8');
					`}
					</Script>
				)}

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link
					href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Oswald:wght@200..700&display=swap"
					rel="stylesheet"
				/>
				<link
					rel="stylesheet"
					type="text/css"
					charSet="UTF-8"
					href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
				/>
				<link
					rel="stylesheet"
					type="text/css"
					href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
				/>
			</head>
			<body
				style={{
					overflowY: 'scroll',
					scrollBehavior: 'smooth',
				}}
			>
				<Providers>{children}</Providers>
				{process.env.NODE_ENV !== 'development' && (
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
				)}
				<noscript>
					<img
						id={'yandex-metrica123'}
						src={'https://mc.yandex.ru/watch/94753079'}
						style={{ position: 'absolute', left: '-9999px' }}
						alt={''}
					/>
				</noscript>
				<noscript>
					<iframe
						src="https://www.googletagmanager.com/ns.html?id=GTM-PV8HXG22"
						height="0"
						width="0"
						style={{ display: 'none', visibility: 'hidden' }}
					></iframe>
				</noscript>
			</body>
		</html>
	);
}
