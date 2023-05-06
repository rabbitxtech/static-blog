'use client'

import { PostMeta } from '@/utils/getPosts'
import React, { useEffect, useState } from 'react'
import FadeInSection from './FadeInSection'
import PostCard from './PostCard'

const BookmarkPost = () => {
	const [listPost, setListPost] = useState<PostMeta[]>([])
	useEffect(() => {
		if (!!localStorage.getItem('posts')) {
			try {
				const posts: PostMeta[] = JSON.parse(
					localStorage.getItem('posts') as string
				)
				setListPost(() => posts)
			} catch (error) {
				localStorage.removeItem('posts')
			}
		}
	}, [])

	if (listPost.length === 0)
		return (
			<div className="font-semibold text-center">
				There&apos;s nothing here!
			</div>
		)
	return (
		<>
			{listPost?.map((post) => (
				<FadeInSection key={post._id}>
					<PostCard {...post} />
				</FadeInSection>
			))}
		</>
	)
}

export default BookmarkPost
