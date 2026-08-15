import generateRssFeed from '@/utils/generateRSSFeed'

export const dynamic = 'force-static'

export async function GET() {
	const xml = await generateRssFeed()
	return new Response(xml, {
		headers: {
			'Content-Type': 'application/rss+xml; charset=utf-8'
		}
	})
}
