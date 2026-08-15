import './globals.css'
import '@code-hike/mdx/dist/index.css'
import 'tocbot/dist/tocbot.css'
import type { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Toaster } from 'react-hot-toast'
import { NavBar, Footer } from '@/components/global'
import Providers from './providers'
import Script from 'next/script'
import { BASE_URL, SITE_DESCRIPTION, buildSiteMetadata } from '@/lib/seo'

export const metadata: Metadata = {
	...buildSiteMetadata({
		title: 'RabbitxTech - Home',
		description: SITE_DESCRIPTION,
		path: ''
	}),
	metadataBase: new URL(BASE_URL)
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
				<SpeedInsights />
			</body>
		</html>
	)
}

