/** @type {import('next-sitemap').IConfig} */

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'

module.exports = {
	siteUrl: `${BASE_URL}`,
	changefreq: 'daily',
	generateRobotsTxt: true,
	transform: async (config, path) => {
		return {
			loc: path,
			changefreq: config.changefreq,
			priority: config.priority,
			lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
			alternateRefs: config.alternateRefs ?? []
		}
	}
}
