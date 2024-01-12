import {
	defineDocumentType,
	defineNestedType,
	makeSource
} from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { remarkCodeHike } from '@code-hike/mdx'
import { createRequire } from 'module'
import readingTime from 'reading-time'
import { getNormalSlug } from './utils/getTexts'

const require = createRequire(import.meta.url)
const theme = require('shiki/themes/one-dark-pro.json')

const Tag = defineNestedType(() => ({
	name: 'Tag',
	fields: {
		title: { type: 'string' }
	}
}))

// const Serie = defineNestedType(() => ({
// 	name: 'Serie',
// 	fields: {
// 		id: { type: 'number' },
// 		title: { type: 'string' },
// 		description: { type: 'string' }
// 	}
// }))

const Post = defineDocumentType(() => ({
	name: 'Post',
	filePathPattern: `**/*.mdx`,
	contentType: 'mdx',
	fields: {
		title: {
			type: 'string',
			description: 'Tiêu đề bài viết',
			required: true
		},
		date: {
			type: 'date',
			description: 'Ngày viết bài',
			required: true
		},
		toc: {
			type: 'boolean',
			required: false,
			default: false
		},
		author: {
			type: 'string',
			required: true,
			description: 'Tác giả của bài viết',
			default: 'Nguyen Dong Anh'
		},
		description: {
			type: 'string',
			required: true,
			default: 'Mô tả bài viết'
		},
		thumbnail: {
			type: 'string',
			required: true,
			default: '/images/javascript-img.png'
		},
		tags: {
			type: 'list',
			description: 'Thể loại bài viết',
			of: Tag
		},
		// serie: {
		// 	type: 'nested',
		// 	description: 'Mô tả chuỗi bài vieest',
		// 	of: Serie
		// }
		serie_id: {
			type: 'number',
			description: 'Id của serie'
		}
	},
	computedFields: {
		readingTime: {
			type: 'json',
			resolve: (doc) => readingTime(doc.body.raw)
		},
		slug: {
			type: 'string',
			resolve: (doc) => `${doc._raw.sourceFileName.replace(/\.mdx/, '')}`
		},
		url: {
			type: 'string',
			resolve: (doc) =>
				`/posts/${doc._raw.sourceFileName.replace(/\.mdx/, '')}`
		},
		heading: {
			type: 'json',
			resolve: (doc) => {
				const regexHeader = /(?<heading>#{1,6})\s(?<content>.*)/gm
				const headings = Array.from(
					doc.body.raw.matchAll(regexHeader)
				).map(({ groups }) => {
					const heading = groups?.heading
					const content = getNormalSlug(groups?.content as string)
					return {
						level: heading?.length,
						content: content
					}
				})
				return headings
			}
		}
	}
}))

export default makeSource({
	contentDirPath: 'posts',
	documentTypes: [Post],
	mdx: {
		remarkPlugins: [
			remarkGfm,
			remarkMath,
			[
				remarkCodeHike,
				{
					theme,
					lineNumbers: false,
					showCopyButton: true,
					skipLanguages: ['mermaid'],
					staticMediaQuery: 'not screen, (max-width: 1080px)'
				}
			]
		],
		rehypePlugins: [rehypeKatex]
	}
})

