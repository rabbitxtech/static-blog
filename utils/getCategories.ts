import { Post, allPosts } from "@/.contentlayer/generated";
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


export const getAllTags = (posts: Post[] = allPosts) => posts.reduce((allTags: Category[], post) => {
    post.tags?.forEach(tag => {
        let idx = allTags.find((el) => {
            if (!tag.title) return false
            return el.slug === getNormalSlug(tag.title)
        })
        if (!idx) {
            if (tag.title)
                allTags = [...allTags, { title: tag.title, slug: getNormalSlug(tag.title) }]
        }
    })
    return allTags
}, [])

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