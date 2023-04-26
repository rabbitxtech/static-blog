import { compareDesc } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import { pick } from 'contentlayer/client'
import { getNormalSlug } from './getTexts'
import { IView, View } from '@/models/view.model'
import { Error } from 'mongoose'

export type PostMeta = Omit<Post, "_raw" | "body" | "toc" | "type">

export const getAllPost = () => {
    const posts: Post[] = allPosts.sort((a, b) => {
        return compareDesc(new Date(a.date), new Date(b.date))
    })
    return posts
}

export const getAllPostByTagSlug = (slug: string) => {
    let posts: Post[] = allPosts.filter(post =>
        post.tags?.find(el => getNormalSlug(el.title as string) === slug)
    )
    posts = posts.sort((a, b) => {
        return compareDesc(new Date(a.date), new Date(b.date))
    })
    return posts
}

export const fetchAllPost = async (): Promise<Post[]> => {
    return getAllPost();
}

export const fetchAllPostByTagSlug = async (slug: string): Promise<Post[]> => {
    return getAllPostByTagSlug(slug);
}


export const fetchAllMetaPost = async (posts: Post[] = allPosts): Promise<PostMeta[]> => {
    return posts.map((post) => pick(post, ["_id", "type", "date", "author", "title", "description", "tags", "readingTime", "url", "toc", "thumbnail","slug"]));
}