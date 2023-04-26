import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { PostMeta } from '@/utils/getPosts'
import { debounce } from 'throttle-debounce'

import { Document } from 'flexsearch'
const useFlexSearch = ({
	posts,
	limit
}: {
	posts: PostMeta[]
	limit?: number
}) => {
	const [query, updateQuery] = useState('')

	const document = useMemo(() => {
		const index = new Document({
			tokenize: 'reverse',
			optimize: true,
			preset: 'match',
			cache: true,
			context: true,
			document: {
				id: '_id',
				index: ['title', 'description'],
				store: [
					'title',
					'date',
					'author',
					'description',
					'readingTime',
					'tags',
					'url',
					'thumbnail',
					'slug'
				]
			}
		})

		for (const post of posts) {
			index.add(post)
		}
		return index
	}, [posts])

	const result = useMemo(() => {
		return document.search(query, { limit, enrich: true })
	}, [query, document, limit])

	const setQuery = useMemo(() => debounce(100, updateQuery), [])
	const onSearch = useCallback(
		(e: ChangeEvent) => setQuery((e.target as HTMLInputElement).value),
		[setQuery]
	)

	return {
		result,
		query,
		setQuery,
		onSearch
	}
}

export default useFlexSearch
