import { Post, allPosts } from "contentlayer/generated";
import { getNormalSlug } from "./getTexts";

export type PageProps = {
    params?: any;
    children?: React.ReactNode;
};
export type Category = {
    title?: string;
    slug?: string;
    items?: Omit<Category, 'items'>[];
};


export const getAllTags = (posts: Post[] = allPosts): Category[] => {
    const tagMap = new Map<string, Category>()
    posts.forEach((post) => {
        post.tags?.forEach((tag) => {
            if (!tag.title) return
            const slug = getNormalSlug(tag.title)
            if (!tagMap.has(slug)) {
                tagMap.set(slug, { title: tag.title, slug })
            }
        })
    })
    return Array.from(tagMap.values())
}

export const getKeyWords = (posts: Post[] = allPosts): string[] => {
    const tags = getAllTags(posts)
    let keywords: string[] = []
    tags.forEach((ele) => {
        if (ele.title)
            keywords = [...keywords, ele.title]
    })
    return keywords
}

export async function fetchTags(): Promise<Category[]> {
    // Assuming it always return expected categories
    return getAllTags();
}