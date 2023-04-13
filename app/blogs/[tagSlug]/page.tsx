import React, { use } from 'react'
import { ListPost } from '@/components/global'
import { getAllPostByTagSlug, fetchAllMetaPost } from '@/utils/getPosts'

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
