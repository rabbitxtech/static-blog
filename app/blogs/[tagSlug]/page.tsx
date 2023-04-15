import React, { use } from 'react'
import type { Metadata } from 'next'
import { ListPost } from '@/components/global'
import { getAllPostByTagSlug, fetchAllMetaPost } from '@/utils/getPosts'
import { Post, allPosts } from '@/.contentlayer/generated'
import { fetchTags } from '@/utils/getCategories'

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'

export const generateStaticParams = async () => {
	const allTags = await fetchTags()
	return allTags.map((tag) => ({
		tagSlug: tag.slug
	}))
}

export const generateMetadata = ({
	params
}: {
	params: { tagSlug: string }
}): Metadata => {
	const post: Post | undefined = allPosts.find((post) =>
		post.tags?.some((x) => x.title === params.tagSlug)
	)
	if (post)
		return {
			title: post.title,
			description: post.description,
			authors: { name: post.author },
			creator: 'rabbitxtech',
			publisher: 'rabbitxtech',
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
				title: post.title,
				description: post.description,
				creator: 'rabbitxtech',
				site: 'rabbitxtech',
				images: [
					{
						url: `${BASE_URL}/images/rabbit-astronaut.png`
					}
				]
			},
			applicationName: 'RabbitxTech Blog',
			colorScheme: 'normal',
			alternates: {
				canonical: `${BASE_URL}/blogs/${params.tagSlug}`,
				languages: { 'vi-VN': `${BASE_URL}/blogs/${params.tagSlug}` },
				types: {
					'application/rss+xml': [{ url: 'rss.xml', title: 'rss' }]
				}
			},
			keywords: params.tagSlug
		}
	return {}
}

const Page = ({ params }: { params: { tagSlug: string } }) => {
	const posts = use(fetchAllMetaPost(getAllPostByTagSlug(params.tagSlug)))

	return (
		<div className="max-w-6xl flex flex-col mx-auto px-8 max-md:px-4 mt-8">
			<div className="m-auto w-full max-w-2xl">
				<ListPost posts={posts} />
			</div>
		</div>
	)
}

export default Page
