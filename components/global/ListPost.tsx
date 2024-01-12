// @ts-nocheck
'use client'

import React from 'react'
import PostCard from './PostCard'
import { PostMeta } from '@/utils/getPosts'
import FadeInSection from './FadeInSection'

const ListPost = ({ posts }: { posts: PostMeta[] }) => {
	if (posts.length === 0)
		return (
			<div className="font-semibold text-center">
				There&apos;s nothing here!
			</div>
		)

	return (
		<>
			{posts.map((post) => (
				<FadeInSection key={post._id}>
					<PostCard {...post} />
				</FadeInSection>
			))}
		</>
	)
}

export default ListPost

