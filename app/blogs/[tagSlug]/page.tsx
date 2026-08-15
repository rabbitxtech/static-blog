import React, { use } from 'react'
import type { Metadata } from 'next'
import { ListPost } from '@/components/global'
import { getAllPostByTagSlug, fetchAllMetaPost } from '@/utils/getPosts'
import { fetchTags, getKeyWords } from '@/utils/getCategories'
import { buildSiteMetadata } from '@/lib/seo'

export const generateStaticParams = async () => {
	const allTags = await fetchTags()
	return allTags
		.filter((tag) => tag.slug)
		.map((tag) => ({
			tagSlug: tag.slug
		}))
}

export const generateMetadata = ({
	params
}: {
	params: { tagSlug: string }
}): Metadata => {
	return buildSiteMetadata({
		title: 'RabbitxTech - Blog',
		description: 'Tất cả bài viết của mình',
		path: `/blogs/${params.tagSlug}`,
		keywords: getKeyWords()
	})
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
