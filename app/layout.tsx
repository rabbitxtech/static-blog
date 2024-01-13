import './globals.css'
import '@code-hike/mdx/dist/index.css'
import 'tocbot/dist/tocbot.css'
import type { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'
import { NavBar, Footer } from '@/components/global'
import Providers from './providers'
import Script from 'next/script'

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'

export const metadata: Metadata = {
	metadataBase: new URL(BASE_URL),
	title: 'RabbitxTech - Home',
	description: 'Một góc chia sẻ và lưu trữ tri thức của Rabbit <3',
	icons: {
		other: [
			{
				rel: 'shortcut icon',
				type: 'image/x-icon',
				url: '/favicon.ico'
			},
			{
				rel: 'icon',
				type: 'image/png',
				url: '/icon/favicon-16x16.png'
			},
			{
				rel: 'icon',
				type: 'image/png',
				url: '/icon/favicon-32x32.png'
			}
		],
		apple: '/icon/apple-touch-icon.png'
	},
	robots: { index: true, follow: true },
	manifest: '/site.webmanifest',
	openGraph: {
		type: 'website',
		url: `${BASE_URL}`,
		title: 'RabbitxTech - Home',
		description: 'Một góc chia sẻ và lưu trữ tri thức của Rabbit <3',
		siteName: 'RabbitxTech Home',
		images: [
			{
				url: `${BASE_URL}/images/rabbit-astronaut.png`
			}
		],
		locale: 'vi-VN'
	},
	twitter: {
		card: 'summary',
		title: 'RabbitxTech - Home',
		description: 'Một góc chia sẻ và lưu trữ tri thức của Rabbit <3',
		creator: 'rabbitxtech',
		site: 'rabbitxtech',
		images: [
			{
				url: `${BASE_URL}/images/rabbit-astronaut.png`
			}
		]
	},
	applicationName: 'RabbitxTech',
	alternates: {
		canonical: `${BASE_URL}`,
		languages: { 'vi-VN': `${BASE_URL}` },
		types: {
			'application/rss+xml': [{ url: '/rss.xml', title: 'rss' }]
		}
	}
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="vi" suppressHydrationWarning>
			<head>
				<Script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-DJKFB8RH4N"
				/>
				<Script
					id="google-tag-manager"
					dangerouslySetInnerHTML={{
						__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
					  
						gtag('config', 'G-DJKFB8RH4N');
					`
					}}
					strategy="afterInteractive"
				/>
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
				/>
			</head>
			<body className="dark:bg-zinc-900 dark:text-slate-200">
				<Providers>
					<Toaster position="bottom-left" reverseOrder={false} />
					<div className="flex flex-col min-h-[100vh] relative">
						<NavBar />
						<div className="flex-1">{children}</div>
						<Footer />
					</div>
				</Providers>
			</body>
		</html>
	)
}

