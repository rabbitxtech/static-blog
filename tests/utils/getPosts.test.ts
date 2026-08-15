import { allPosts } from '../fixtures/posts'

jest.mock('contentlayer/generated', () => require('../fixtures/posts'))

import {
	getAllPost,
	getPostBySlug,
	getAllPostByTagSlug,
	getAllMetaPost,
	fetchAllPost,
	fetchPostBySlug,
	fetchAllPostByTagSlug,
	fetchAllMetaPost,
	fetchAllSerieId,
	fetchAllMetaPostBySerieId
} from '@/utils/getPosts'

describe('getAllPost', () => {
	it('sắp xếp bài viết theo date giảm dần', () => {
		const posts = getAllPost()
		expect(posts.map((p) => p.slug)).toEqual([
			'xay-dung-oracle-data-guard-19c',
			'cai-dat-oracle-database-19c-tren-linux',
			'tim-hieu-javascript'
		])
	})

	it('không làm thay đổi mảng gốc', () => {
		const original = [...allPosts]
		getAllPost()
		expect(allPosts).toEqual(original)
	})
})

describe('getPostBySlug', () => {
	it('trả về bài viết đúng theo slug', () => {
		const post = getPostBySlug('cai-dat-oracle-database-19c-tren-linux')
		expect(post?.title).toBe('Cài đặt Oracle Database 19c trên linux')
	})

	it('trả về undefined khi không tìm thấy slug', () => {
		expect(getPostBySlug('khong-ton-tai')).toBeUndefined()
	})
})

describe('getAllPostByTagSlug', () => {
	it('lọc bài theo tag slug ASCII', () => {
		const posts = getAllPostByTagSlug('oracle')
		expect(posts.map((p) => p.slug)).toEqual([
			'xay-dung-oracle-data-guard-19c',
			'cai-dat-oracle-database-19c-tren-linux'
		])
	})

	it('normalize tag tiếng Việt trước khi so khớp', () => {
		const posts = getAllPostByTagSlug('co-so-du-lieu')
		expect(posts.map((p) => p.slug)).toEqual([
			'xay-dung-oracle-data-guard-19c'
		])
	})

	it('trả về mảng rỗng khi không có tag trùng', () => {
		expect(getAllPostByTagSlug('khong-co-tag')).toEqual([])
	})
})

describe('getAllMetaPost', () => {
	it('loại bỏ các field nặng body/_raw/heading/toc/type', () => {
		const metas = getAllMetaPost(allPosts)
		metas.forEach((m) => {
			expect(m).not.toHaveProperty('body')
			expect(m).not.toHaveProperty('_raw')
			expect(m).not.toHaveProperty('heading')
			expect(m).not.toHaveProperty('toc')
			expect(m).not.toHaveProperty('type')
		})
	})

	it('giữ lại các field meta cần thiết', () => {
		const metas = getAllMetaPost(allPosts)
		metas.forEach((m) => {
			expect(m).toHaveProperty('slug')
			expect(m).toHaveProperty('title')
			expect(m).toHaveProperty('url')
			expect(m).toHaveProperty('tags')
		})
	})
})

describe('fetch* wrappers', () => {
	it('fetchAllPost trả về toàn bộ bài', async () => {
		const posts = await fetchAllPost()
		expect(posts).toHaveLength(3)
	})

	it('fetchPostBySlug trả về bài hoặc undefined', async () => {
		expect(await fetchPostBySlug('tim-hieu-javascript')).toBeDefined()
		expect(await fetchPostBySlug('missing')).toBeUndefined()
	})

	it('fetchAllPostByTagSlug lọc đúng', async () => {
		const posts = await fetchAllPostByTagSlug('javascript')
		expect(posts.map((p) => p.slug)).toEqual(['tim-hieu-javascript'])
	})

	it('fetchAllMetaPost trả về PostMeta', async () => {
		const metas = await fetchAllMetaPost()
		expect(metas).toHaveLength(3)
		expect(metas[0]).not.toHaveProperty('body')
	})

	it('fetchAllSerieId đọc từ _meta_series.json', async () => {
		const ids = await fetchAllSerieId()
		expect(ids).toEqual([1])
	})

	it('fetchAllMetaPostBySerieId lọc theo serie_id', async () => {
		const metas = await fetchAllMetaPostBySerieId(1)
		expect(metas.map((m) => m.slug)).toEqual([
			'cai-dat-oracle-database-19c-tren-linux'
		])
	})

	it('fetchAllMetaPostBySerieId trả rỗng với serie không tồn tại', async () => {
		const metas = await fetchAllMetaPostBySerieId(999)
		expect(metas).toEqual([])
	})
})
