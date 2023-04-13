// @ts-nocheck
'use client'

import React from 'react'
import PostCard from './PostCard'
import Search from './Search'
import { PostMeta } from '@/utils/getPosts'
import useFlexSearch from '@/hooks/useFlexSearch'
import FadeInSection from './FadeInSection'

const ListPost = ({ posts }: { posts: PostMeta[] }) => {
	const { query, onSearch, result } = useFlexSearch({ posts, limit: 5 })

	if (posts.length === 0)
		return (
			<div className="font-semibold text-center">
				There&apos;s nothing here!
			</div>
		)

	return (
		<>
			<div className="mb-5 w-full">
				<Search onSearch={onSearch} />
			</div>
			{result.length === 0 && !query
				? posts.map((post, idx) => (
						<FadeInSection key={post._id}>
							<PostCard {...post} />
						</FadeInSection>
				  ))
				: result.find((x) => x.field === 'title') !== undefined
				? result
						.find((x) => x.field === 'title')
						?.result.map((post, idx) => (
							<FadeInSection key={post.id}>
								<PostCard {...post.doc} />
							</FadeInSection>
						))
				: result.find((x) => x.field === 'description') !== undefined
				? result
						.find((x) => x.field === 'description')
						?.result.map((post, idx) => (
							<FadeInSection key={post.id}>
								<PostCard {...post.doc} />
							</FadeInSection>
						))
				: null}
		</>
	)
}

export default ListPost
