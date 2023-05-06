import { BookmarkPost } from '@/components/global'

const Page = () => {
	return (
		<div className="max-w-6xl flex flex-col mx-auto max-md:px-4 px-8">
			<div className="m-auto max-w-2xl w-full">
				<div className="my-10 text-6xl font-semibold">Bookmark</div>
				<BookmarkPost />
			</div>
		</div>
	)
}

export default Page
