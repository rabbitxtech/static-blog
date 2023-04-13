import { use } from 'react'
import { ListPost } from '@/components/global'
import { getAllPost, fetchAllMetaPost } from '@/utils/getPosts'

const Page = () => {
	const posts = use(fetchAllMetaPost(getAllPost()))

	return (
		<div className="max-w-6xl flex flex-col mx-auto max-md:px-4 px-8 mt-8">
			<div className="m-auto max-w-2xl w-full">
				<ListPost posts={posts} />
			</div>
		</div>
	)
}

export default Page
