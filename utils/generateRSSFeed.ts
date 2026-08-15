import RSS from 'rss'
import { getAllPost } from './getPosts'
import { getKeyWords } from './getCategories'

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'

export default async function generateRssFeed(): Promise<string> {
	const feedOptions = {
		title: 'RabbitxTech blog | RSS Feed',
		description: 'Welcome to RabbitxTech blog!',
		site_url: BASE_URL,
		feed_url: `${BASE_URL}/rss.xml`,
		image_url: `${BASE_URL}/images/rabbit-astronaut.png`,
		pubDate: new Date(),
		copyright: `All rights reserved ${new Date().getFullYear()}`
	}
	const feed = new RSS(feedOptions)

	getAllPost().forEach((post) => {
		feed.item({
			title: post.title,
			description: post.description,
			url: `${BASE_URL}${post.url}`,
			date: post.date,
			categories: getKeyWords([post]),
			author: post.author
		})
	})

	return feed.xml({ indent: true })
}
