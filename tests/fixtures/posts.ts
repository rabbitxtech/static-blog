// Dữ liệu mẫu cho các test import `contentlayer/generated`.
// Export tên `allPosts` để khớp với API mà `utils/getPosts.ts` và
// `utils/getCategories.ts` import từ contentlayer.

export const allPosts: any[] = [
	{
		_id: 'post-oracle-linux',
		_raw: {
			sourceFileName: 'cai-dat-oracle-database-19c-tren-linux.mdx'
		},
		title: 'Cài đặt Oracle Database 19c trên linux',
		date: '2023-04-13T03:01:00.000Z',
		author: 'Nguyen Dong Anh',
		description: 'Hướng dẫn cài đặt oracle 19c trên linux',
		thumbnail: '/images/cai-dat-csdl-oracle-19c/thumbnail.webp',
		tags: [{ title: 'database' }, { title: 'oracle' }, { title: 'linux' }],
		serie_id: 1,
		slug: 'cai-dat-oracle-database-19c-tren-linux',
		url: '/posts/cai-dat-oracle-database-19c-tren-linux',
		toc: false,
		readingTime: { text: '10 min read', minutes: 10, time: 600000, words: 2000 },
		heading: [{ level: 1, content: 'i-chuan-bi-cai-dat' }],
		body: { raw: '...' }
	},
	{
		_id: 'post-oracle-dataguard',
		_raw: {
			sourceFileName: 'xay-dung-oracle-data-guard-19c.mdx'
		},
		title: 'Xây dựng Oracle Data Guard 19c',
		date: '2023-06-01T03:01:00.000Z',
		author: 'Nguyen Dong Anh',
		description: 'Hướng dẫn xây dựng Data Guard',
		thumbnail: '/images/dataguard.png',
		tags: [{ title: 'oracle' }, { title: 'Cơ sở dữ liệu' }],
		slug: 'xay-dung-oracle-data-guard-19c',
		url: '/posts/xay-dung-oracle-data-guard-19c',
		toc: true,
		readingTime: { text: '5 min read', minutes: 5, time: 300000, words: 1000 },
		heading: [{ level: 1, content: 'mo-dau' }],
		body: { raw: '...' }
	},
	{
		_id: 'post-js',
		_raw: {
			sourceFileName: 'tim-hieu-javascript.mdx'
		},
		title: 'Tìm hiểu JavaScript',
		date: '2023-01-15T03:01:00.000Z',
		author: 'Nguyen Dong Anh',
		description: 'Khái niệm cơ bản về JavaScript',
		thumbnail: '/images/javascript-img.png',
		tags: [{ title: 'javascript' }, { title: 'Lập trình' }],
		slug: 'tim-hieu-javascript',
		url: '/posts/tim-hieu-javascript',
		toc: false,
		readingTime: { text: '8 min read', minutes: 8, time: 480000, words: 1600 },
		heading: [],
		body: { raw: '...' }
	}
]
