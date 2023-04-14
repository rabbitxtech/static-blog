import './globals.css'
import '@code-hike/mdx/dist/index.css'
import 'tocbot/dist/tocbot.css'
import { NavBar, Footer } from '@/components/global'

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'

export const metadata = {
	title: 'RabbitxTech Home',
	description: 'Một góc chia sẻ và lưu trữ tri thức của Rabbit <3',
	icons: { other: { rel: 'shortcut icon', url: '/favicon.ico' } },
	robots: { index: true, follow: true },
	openGraph: {
		type: 'website',
		url: `${BASE_URL}`,
		title: 'RabbitxTech Home',
		description: 'Một góc chia sẻ và lưu trữ tri thức của Rabbit <3',
		siteName: 'RabbitxTech Blog',
		images: [
			{
				url: `${BASE_URL}/images/rabbit-astronaut.png`
			}
		],
		locale: 'vi-VN'
	},
	twitter: {
		card: 'summary',
		title: 'RabbitxTech Home',
		description: 'Một góc chia sẻ và lưu trữ tri thức của Rabbit <3',
		creator: 'rabbitxtech',
		site: 'rabbitxtech',
		images: [
			{
				url: `${BASE_URL}/images/rabbit-astronaut.png`
			}
		]
	},
	applicationName: 'RabbitxTech Blog',
	alternates: {
		canonical: `${BASE_URL}`,
		languages: { 'vi-VN': `${BASE_URL}` },
		types: {
			'application/rss+xml': [{ url: 'rss.xml', title: 'rss' }]
		}
	}
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="vi">
			<head>
				<script
					dangerouslySetInnerHTML={{
						__html: `
						try {
							if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
							  document.documentElement.classList.add('dark')
							  //document.querySelector('meta[name="color-scheme"]').setAttribute('content', 'dark')
							} else {
							  document.documentElement.classList.remove('dark')
							}
						  } catch (_) {}
					`
					}}
				/>
			</head>
			<body className="dark:bg-zinc-900 dark:text-slate-200">
				<div className="flex flex-col min-h-[100vh]">
					<NavBar />
					<div className="flex-1">{children}</div>
					<Footer />
				</div>
			</body>
		</html>
	)
}

