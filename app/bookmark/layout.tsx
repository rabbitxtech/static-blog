const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'

export const metadata = {
	title: 'RabbitxTech - Bookmark',
	description: 'Bài viết bạn đã đánh dấu',
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
	robots: { index: true, follow: true },
	manifest: '/site.webmanifest',
	openGraph: {
		type: 'website',
		url: `${BASE_URL}/bookmark`,
		title: 'RabbitxTech - Bookmark',
		description: 'Bài viết bạn đã đánh dấu',
		siteName: 'RabbitxTech Bookmark',
		images: [
			{
				url: `${BASE_URL}/images/rabbit-astronaut.png`
			}
		],
		locale: 'vi-VN'
	},
	twitter: {
		card: 'summary',
		title: 'RabbitxTech - Bookmark',
		description: 'Bài viết bạn đã đánh dấu',
		creator: 'rabbitxtech',
		site: 'rabbitxtech',
		images: [
			{
				url: `${BASE_URL}/images/rabbit-astronaut.png`
			}
		]
	}
}

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
