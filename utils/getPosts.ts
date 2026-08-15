import { compareDesc } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import _meta_series from '@/meta/_meta_series.json'
import { pick } from 'contentlayer/client'
import { getNormalSlug } from './getTexts'

export type PostMeta = Omit<Post, '_raw' | 'body' | 'toc' | 'type'>
export type Serie = {
	id: number
	title: string
	description: string
	thumbnail?: string
}

export const getAllPost = () => {
	const posts: Post[] = [...allPosts].sort((a, b) => {
		return compareDesc(new Date(a.date), new Date(b.date))
	})
	return posts
}
export const getPostBySlug = (slug: string) => {
	const post: Post | undefined = allPosts.find(
		(post) => post._raw.sourceFileName.replace(/\.mdx/, '') === slug
	)
	return post
}

export const getAllPostByTagSlug = (slug: string) => {
	let posts: Post[] = allPosts.filter((post) =>
		post.tags?.find(
			(el) => el.title && getNormalSlug(el.title) === slug
		)
	)
	posts = posts.sort((a, b) => {
		return compareDesc(new Date(a.date), new Date(b.date))
	})
	return posts
}

export const getAllMetaPost = (posts: Post[]) => {
	return posts.map((post) =>
		pick(post, [
			'_id',
			'date',
			'author',
			'title',
			'description',
			'tags',
			'readingTime',
			'url',
			'thumbnail',
			'slug',
			'serie_id'
		])
	)
}

export const fetchAllPost = async (): Promise<Post[]> => {
	return getAllPost()
}

export const fetchPostBySlug = async (
	slug: string
): Promise<Post | undefined> => {
	return getPostBySlug(slug)
}

export const fetchAllPostByTagSlug = async (slug: string): Promise<Post[]> => {
	return getAllPostByTagSlug(slug)
}

export const fetchAllMetaPost = async (
	posts: Post[] = allPosts
): Promise<PostMeta[]> => {
	return getAllMetaPost(posts)
}

export const fetchAllSerieId = async (): Promise<number[]> => {
	return _meta_series.series.map((el: Serie) => el.id)
}

export const fetchAllMetaPostBySerieId = async (
	serie_id: number
): Promise<PostMeta[]> => {
	return getAllMetaPost(
		allPosts.filter(
			(el) => el.serie_id !== undefined && el.serie_id == serie_id
		)
	)
}

