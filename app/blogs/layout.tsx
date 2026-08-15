import { fetchTags } from '@/utils/getCategories'
import React, { use } from 'react'
import { CategoryNav } from '@/components/tags'
import { getKeyWords } from '@/utils/getCategories'
import { buildSiteMetadata } from '@/lib/seo'

export const metadata = buildSiteMetadata({
	title: 'RabbitxTech - Blog',
	description: 'Tất cả bài viết của mình',
	path: '/blogs',
	keywords: getKeyWords()
})

export default function Layout({ children }: { children: React.ReactNode }) {
	const categories = use(fetchTags())

	return (
		<div>
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
