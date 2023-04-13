import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { remarkCodeHike } from '@code-hike/mdx'
import { createRequire } from "module"
import readingTime from 'reading-time'
const require = createRequire(import.meta.url)
const theme = require("shiki/themes/one-dark-pro.json")

const Tag = defineNestedType(() => ({
    name: 'Tag',
    fields: {
        title: { type: 'string' },
    },
}))
//   const Images = defineNestedType(() => ({
//     name: 'Images',
//     fields: {
//        title: { type: 'string', required: true },
//     },
//   }))
//   const Categories = defineNestedType(() => ({
//      name: 'Categories',
//      fields: {
//         title: { type: 'string' },
//      },
//   }))

const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: {
            type: 'string',
            description: 'The title of the post',
            required: true,
        },
        date: {
            type: 'date',
            description: 'The date of the post',
            required: true,
        },
        toc: {
            type: "boolean",
            required: false,
            default: false,
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
        // draft: {
        //     type: 'string',
        //     required: true,
        // },
        // summary: {
        //     type: 'string',
        //     required: true,
        // },
        tags: {
            type: 'list', of: Tag
        },
        // images: {
        //     type: 'list', of: Images,
        // },
        // categories: {
        //     type: 'list', of: Categories,
        // }
        // serie: {
        //      type: 'string'
        // }
    },
    computedFields: {
        readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
        url: {
            type: 'string',
            resolve: (doc) => `/posts/${doc._raw.sourceFileName.replace(/\.mdx/, "")}`,
        },
    },
}))

export default makeSource({
    contentDirPath: 'posts',
    documentTypes: [Post],
    mdx: {
        remarkPlugins: [
            remarkGfm, remarkMath,
            [remarkCodeHike, {
                theme,
                showCopyButton: true,
                skipLanguages: ["mermaid"],
                staticMediaQuery: "not screen, (max-width: 1080px)"
            }]
        ],
        rehypePlugins: [rehypeKatex]
    }
})
