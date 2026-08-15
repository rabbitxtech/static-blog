import type { Metadata } from 'next'

export const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'

export const SITE_NAME = 'RabbitxTech'

export const SITE_DESCRIPTION =
	'Một góc chia sẻ và lưu trữ tri thức của Rabbit <3'

export const DEFAULT_OG_IMAGE = `${BASE_URL}/images/rabbit-astronaut.png`

export const siteIcons: NonNullable<Metadata['icons']> = {
	other: [
		{
			rel: 'icon',
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
}

type SiteMetadataInput = {
	title: string
	description: string
	path: string
	keywords?: string[]
}

export const buildSiteMetadata = ({
	title,
	description,
	path,
	keywords
}: SiteMetadataInput): Metadata => {
	const url = `${BASE_URL}${path}`
	const images = [{ url: DEFAULT_OG_IMAGE }]

	return {
		title,
		description,
		icons: siteIcons,
		manifest: '/site.webmanifest',
		robots: { index: true, follow: true },
		openGraph: {
			type: 'website',
			url,
			title,
			description,
			siteName: SITE_NAME,
			images,
			locale: 'vi-VN'
		},
		twitter: {
			card: 'summary',
			title,
			description,
			creator: 'rabbitxtech',
			site: 'rabbitxtech',
			images
		},
		applicationName: SITE_NAME,
		alternates: {
			canonical: url,
			languages: { 'vi-VN': url },
			types: {
				'application/rss+xml': [{ url: '/rss.xml', title: 'rss' }]
			}
		},
		...(keywords ? { keywords } : {})
	}
}
