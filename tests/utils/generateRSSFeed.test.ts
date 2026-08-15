import fs from 'fs'

jest.mock('rss', () => {
	return jest.fn().mockImplementation(() => ({
		item: jest.fn(),
		xml: jest.fn(() => '<rss>mock</rss>')
	}))
})

jest.mock('@/utils/getPosts', () => ({
	getAllPost: () => [{ title: 'Post 1', url: '/posts/post-1', date: new Date() }]
}))

jest.mock('@/utils/getCategories', () => ({
	getKeyWords: () => ['tag-a']
}))

import generateRssFeed from '@/utils/generateRSSFeed'

describe('generateRssFeed', () => {
	it('trả về chuỗi XML mà không ghi file', async () => {
		const writeSpy = jest
			.spyOn(fs, 'writeFileSync')
			.mockImplementation(() => {})

		const xml = await generateRssFeed()

		expect(xml).toBe('<rss>mock</rss>')
		expect(writeSpy).not.toHaveBeenCalled()

		writeSpy.mockRestore()
	})
})
