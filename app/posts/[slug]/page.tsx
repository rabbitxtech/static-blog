import { use } from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { format, parseISO } from 'date-fns'
import type { Metadata } from 'next'
import clsx from 'clsx'
import { allPosts, Post } from 'contentlayer/generated'
import {
	MDXContent,
	MDXToc,
	SocialShare,
	Comment,
	BackToTop,
	BookmarkButton
} from '@/components/post'
import { getKeyWords } from '@/utils/getCategories'
import { TabNavItem, ViewsCounter } from '@/components/global'
import { getNormalSlug } from '@/utils/getTexts'
import { fetchAllMetaPost, fetchPostBySlug } from '@/utils/getPosts'
import { IoMdTime } from 'react-icons/io'
import { CgReadme } from 'react-icons/cg'

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'

export const generateStaticParams = async () => {
	return allPosts.map((post) => ({
		slug: post.slug
	}))
}

export const generateMetadata = ({
	params
}: {
	params: { slug: string }
}): Metadata => {
	const post: Post | undefined = allPosts.find(
		(post) => post.slug === params.slug
	)
	if (post)
		return {
			title: `${post.title} - RabbitxTech`,
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
				type: 'article',
				url: `${BASE_URL}${post.url}`,
				title: `${post.title} - RabbitxTech`,
				description: post.description,
				siteName: 'RabbitxTech',
				images: [
					{
						url: `${BASE_URL}${post.thumbnail}`
					}
				],
				locale: 'vi-VN',
				publishedTime: post.date,
				modifiedTime: post.date,
				authors: post.author
			},
			twitter: {
				card: 'summary',
				title: `${post.title} - RabbitxTech`,
				description: post.description,
				creator: 'rabbitxtech',
				site: 'RabbitxTech',
				images: [
					{
						url: `${BASE_URL}${post.thumbnail}`
					}
				]
			},
			applicationName: 'RabbitxTech',
			alternates: {
				canonical: `${BASE_URL}${post.url}`,
				languages: { 'vi-VN': `${BASE_URL}${post.url}` },
				types: {
					'application/rss+xml': [{ url: '/rss.xml', title: 'rss' }]
				}
			},
			keywords: getKeyWords([post])
		}
	return {}
}

const Page = ({ params }: { params: { slug: string } }) => {
	const post: Post | undefined = use(fetchPostBySlug(params.slug))

	if (!post) {
		return notFound()
	}
	const meta = use(fetchAllMetaPost([post]))

	return (
		<>
			<div className="max-w-6xl mb-8 m-auto px-8 max-sm:px-4 mt-8">
				<div className="text-5xl font-semibold">{post.title}</div>
				<div className="text-sm text-gray-600 dark:text-gray-400 mt-4 mb-2">
					<div className="flex items-center justify-between w-full">
						<div className="flex items-center gap-2 w-full">
							<div className="flex items-center gap-[2px]">
								<IoMdTime size={14} />
								<span itemProp="datePublished">
									{format(
										parseISO(post.date),
										'LLLL d, yyyy'
									)}
								</span>
							</div>
							<div className="flex items-center gap-[2px]">
								<CgReadme size={14} />{' '}
								<span>{post.readingTime.text}</span>
							</div>
							<ViewsCounter slug={post.slug} update={true} />
						</div>
						<div className="flex gap-1">
							<BookmarkButton meta={meta} />
							<SocialShare />
						</div>
					</div>
				</div>
				<div className="flex-wrap inline-flex gap-2 mt-1">
					{post.tags?.map((tag) => {
						if (tag.title)
							return (
								<TabNavItem
									href={`/blogs/${getNormalSlug(tag.title)}`}
									isActive={false}
									key={tag.title}
								>
									{tag.title}
								</TabNavItem>
							)
					})}
				</div>
			</div>
			<div
				className={clsx(
					'max-w-6xl flex mx-auto mb-4 max-[1080px]:justify-center',
					post.toc ? 'justify-between' : 'justify-center w-full'
				)}
			>
				<article className="main w-3/4 max-md:w-full">
					<div className="js-toc-content px-8 max-sm:px-4">
						<Image
							src={post.thumbnail}
							alt="Featured image"
							className="max-w-full m-auto my-3"
							priority
							width={1000}
							height={1000}
						/>
						<MDXContent post={post} />
						<Comment />
					</div>
				</article>
				<aside className="sticky top-[64px] max-h-[calc(100vh-64px)] max-[1080px]:hidden overflow-y-auto overflow-x-hidden">
					<MDXToc toc={true} />
				</aside>
				<BackToTop />
			</div>
		</>
	)
}

export default Page

