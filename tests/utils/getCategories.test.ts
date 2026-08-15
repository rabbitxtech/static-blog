jest.mock('contentlayer/generated', () => require('../fixtures/posts'))

import { getAllTags, getKeyWords, fetchTags } from '@/utils/getCategories'

describe('getAllTags', () => {
	it('gom và loại bỏ tag trùng lặp', () => {
		const tags = getAllTags()
		// 'oracle' xuất hiện 2 lần nên chỉ giữ 1
		const oracleCount = tags.filter((t) => t.slug === 'oracle').length
		expect(oracleCount).toBe(1)
	})

	it('normalize tiếng Việt thành slug ASCII', () => {
		const tags = getAllTags()
		expect(tags.map((t) => t.slug)).toEqual([
			'database',
			'oracle',
			'linux',
			'co-so-du-lieu',
			'javascript',
			'lap-trinh'
		])
	})

	it('giữ lại title gốc cho mỗi tag', () => {
		const tags = getAllTags()
		const csdl = tags.find((t) => t.slug === 'co-so-du-lieu')
		expect(csdl?.title).toBe('Cơ sở dữ liệu')
	})

	it('trả về mảng rỗng khi không có bài viết', () => {
		expect(getAllTags([])).toEqual([])
	})
})

describe('getKeyWords', () => {
	it('trả về danh sách title duy nhất', () => {
		const keywords = getKeyWords()
		expect(keywords).toEqual([
			'database',
			'oracle',
			'linux',
			'Cơ sở dữ liệu',
			'javascript',
			'Lập trình'
		])
	})
})

describe('fetchTags', () => {
	it('trả về danh sách tag qua Promise', async () => {
		const tags = await fetchTags()
		expect(tags).toHaveLength(6)
	})
})
