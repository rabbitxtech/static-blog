import { fetchTags } from '@/utils/getCategories'
import React, { use } from 'react'
import { CategoryNav } from '@/components/tags'
import { getKeyWords } from '@/utils/getCategories'

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'

export const metadata = {
	title: 'RabbitxTech Blog',
	description: 'Tất cả bài viết của mình',
	keywords: getKeyWords(),
	robots: { index: true, follow: true },
	openGraph: {
		type: 'website',
		url: `${BASE_URL}/blogs`,
		title: 'RabbitxTech Home',
		description: 'Tất cả bài viết của mình',
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
		title: 'RabbitxTech Blog',
		description: 'Tất cả bài viết của mình',
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
		canonical: `${BASE_URL}/blogs`,
		languages: { 'vi-VN': `${BASE_URL}/blogs` },
		types: {
			'application/rss+xml': [{ url: 'rss.xml', title: 'rss' }]
		}
	}
}

export default function Layout({ children }: { children: React.ReactNode }) {
	const categories = use(fetchTags())

	return (
		<div className="mt-8">
			<div className="max-w-6xl m-auto max-md:px-4 px-8">
				<div className="m-auto max-w-2xl">
					<div className="my-10 text-6xl font-semibold">Blog</div>
					<CategoryNav categories={categories} />
				</div>
			</div>
			{children}
		</div>
	)
}
