import { format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import clsx from 'clsx'
import { MDXContent, MDXToc } from '@/components/post'
import type { Metadata } from 'next'
import { getKeyWords } from '@/utils/getCategories'
import {
	BackToTop,
	Comment,
	TabNavItem,
	SocialShare
} from '@/components/global'
import { getNormalSlug } from '@/utils/getTexts'

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'

export const generateStaticParams = async () =>
	allPosts.map((post) => ({
		slug: post._raw.sourceFileName.replace(/\.mdx/, '')
	}))

export const generateMetadata = ({
	params
}: {
	params: { slug: string }
}): Metadata => {
	const post: Post | undefined = allPosts.find(
		(post) => post._raw.sourceFileName.replace(/\.mdx/, '') === params.slug
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
					'application/rss+xml': [{ url: 'rss.xml', title: 'rss' }]
				}
			},
			keywords: getKeyWords([post])
		}
	return {}
}

const Page = async ({ params }: { params: { slug: string } }) => {
	const post: Post | undefined = allPosts.find(
		(post) => post._raw.sourceFileName.replace(/\.mdx/, '') === params.slug
	)

	if (!post) {
		return notFound()
	}

	return (
		<>
			<div className="max-w-6xl mb-8 m-auto px-8 max-sm:px-4 mt-8">
				<div className="text-5xl font-semibold">{post.title}</div>
				<div className="text-sm text-gray-600 dark:text-gray-400 mt-4 mb-2">
					<div className="flex items-center gap-2 w-full">
						<div className="flex items-center gap-[2px]">
							<span>
								<svg
									width="14px"
									height="14px"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6V12C11 12.2652 11.1054 12.5196 11.2929 12.7071L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L13 11.5858V6Z"
										fill="currentColor"
									/>
								</svg>
							</span>
							<span itemProp="datePublished">
								{format(parseISO(post.date), 'LLLL d, yyyy')}
							</span>
						</div>
						<div className="flex items-center gap-[2px]">
							<svg
								height="14px"
								width="14px"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 32 32"
								fill="currentColor"
							>
								<path
									d="M28.9,9.4C28.9,9.4,28.9,9.4,28.9,9.4C28.9,9.3,29,9.2,29,9.1c0,0,0,0,0-0.1c0,0,0,0,0-0.1c0-0.1,0-0.2,0-0.3c0,0,0,0,0-0.1
	c0-0.1-0.1-0.2-0.1-0.3c0,0,0,0,0,0c-0.1-0.1-0.1-0.1-0.2-0.2l-11-7c-0.3-0.2-0.8-0.2-1.1,0l-13,9c0,0-0.1,0.1-0.1,0.1
	c0,0,0,0-0.1,0c-0.1,0.1-0.1,0.2-0.2,0.3c0,0,0,0,0,0.1C3,10.8,3,10.9,3,11c0,0,0,0,0,0v6v6c0,0.3,0.2,0.7,0.5,0.8l11,7
	c0.2,0.1,0.4,0.2,0.5,0.2c0.2,0,0.4-0.1,0.6-0.2l13-9c0.2-0.2,0.4-0.4,0.4-0.7s-0.1-0.6-0.3-0.8c-0.9-0.9-1.1-2.2-0.5-3.4l0.7-1.5
	c0-0.1,0.1-0.2,0.1-0.3c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0-0.1,0-0.3-0.1-0.4c0,0,0-0.1,0-0.1c0-0.1-0.1-0.2-0.2-0.3c0,0,0,0,0,0
	c-0.9-0.9-1.1-2.2-0.5-3.4L28.9,9.4z M26.6,14.8l-11.6,8L5,16.5v-3.6l9.5,6c0.2,0.1,0.4,0.2,0.5,0.2c0.2,0,0.4-0.1,0.6-0.2l10.3-7.1
	C25.8,12.8,26,13.8,26.6,14.8z M15,28.8L5,22.5v-3.6l9.5,6c0.2,0.1,0.4,0.2,0.5,0.2c0.2,0,0.4-0.1,0.6-0.2l10.3-7.1
	c-0.1,1.1,0.1,2.2,0.7,3.1L15,28.8z"
								/>
							</svg>
							<span>{post.readingTime.text}</span>
						</div>
						<SocialShare />
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
