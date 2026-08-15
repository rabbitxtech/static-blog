import { buildSiteMetadata } from '@/lib/seo'

export const metadata = buildSiteMetadata({
	title: 'RabbitxTech - Bookmark',
	description: 'Bài viết bạn đã đánh dấu',
	path: '/bookmark'
})

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<div className="max-w-6xl flex flex-col mx-auto max-md:px-4 px-8">
				<div className="m-auto max-w-2xl w-full">
					<div className="my-10 text-6xl font-semibold">Bookmark</div>
				</div>
			</div>
			{children}
		</div>
	)
}
