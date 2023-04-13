import fs from 'fs';
import RSS from 'rss'
import { getAllPost } from './getPosts'
import { getKeyWords } from './getCategories';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'

export default async function generateRssFeed() {
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

	getAllPost().map((post) => {
		feed.item({
			title: post.title,
			description: post.description,
			url: `${BASE_URL}${post.url}`,
			date: post.date,
			categories: getKeyWords([post]),
			author: post.author
		})
	})

	fs.writeFileSync('./public/rss.xml', feed.xml({ indent: true }));
}