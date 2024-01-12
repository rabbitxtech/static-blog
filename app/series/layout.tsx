import React from 'react'
import { getKeyWords } from '@/utils/getCategories'

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'

export const metadata = {
	title: 'RabbitxTech - Series',
	description: 'Tất cả các serie của mình',
    keywords: getKeyWords(),
	robots: { index: true, follow: true },
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
	manifest: '/site.webmanifest',
	openGraph: {
		type: 'website',
		url: `${BASE_URL}/series`,
		title: 'RabbitxTech - serie',
		description: 'Tất cả các serie của mình',
		siteName: 'RabbitxTech - Serie',
		images: [
			{
				url: `${BASE_URL}/images/rabbit-astronaut.png`
			}
		],
		locale: 'vi-VN'
	},
	twitter: {
		card: 'summary',
		title: 'RabbitxTech - Serie',
		description: 'Tất cả các serie của mình',
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
		canonical: `${BASE_URL}/series`,
		languages: { 'vi-VN': `${BASE_URL}/series` },
		types: {
			'application/rss+xml': [{ url: '/rss.xml', title: 'rss' }]
		}
	}
}

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			{children}
		</div>
	)
}

