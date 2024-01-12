'use client'

import { PostMeta } from '@/utils/getPosts'
import React, { useEffect, useState } from 'react'

const BookmarkButton = ({ meta }: { meta: PostMeta[] }) => {
	const [isBookmark, setIsBookmark] = useState<boolean>(false)

	useEffect(() => {
		if (!!localStorage.getItem('posts')) {
			try {
				const posts: PostMeta[] = JSON.parse(
					localStorage.getItem('posts') as string
				)
				setIsBookmark(() =>
					posts.some((el) => el.slug === meta[0].slug)
				)
			} catch (error) {
				localStorage.removeItem('posts')
			}
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div>
			{isBookmark ? (
				<button
					title="bookmark"
					onClick={(e) => {
						e.preventDefault()
						if (!!localStorage.getItem('posts')) {
							let posts: PostMeta[] = []
							try {
								posts = JSON.parse(
									localStorage.getItem('posts') as string
								)
								posts = posts.filter(
									(el) => el.slug != meta[0].slug
								)
								localStorage.setItem('posts',JSON.stringify(posts))
								setIsBookmark(() => false)
							} catch (error) {
								localStorage.removeItem('posts')
								setIsBookmark(() => false)
							}
						}
					}}
				>
					<svg
						width="24px"
						height="24px"
						viewBox="0 0 1920 1920"
						xmlns="http://www.w3.org/2000/svg"
						className="fill-blue-600 dark:fill-sky-500"
					>
						<path
							d="M1585.963 1920 960.48 1544.711 335 1920V170.586C335 76.536 411.536 0 505.586 0h909.79c94.05 0 170.587 76.536 170.587 170.586V1920Z"
							fillRule="evenodd"
						/>
					</svg>
				</button>
			) : (
				<button
					onClick={(e) => {
						e.preventDefault()
						if (!!localStorage.getItem('posts')) {
							let posts: PostMeta[] = []
							try {
								posts = JSON.parse(
									localStorage.getItem('posts') as string
								)
								localStorage.setItem(
									'posts',
									JSON.stringify([...posts, meta[0]])
								)
								setIsBookmark(() => true)
							} catch (error) {
								localStorage.removeItem('posts')
								setIsBookmark(() => false)
							}
						} else {
							localStorage.setItem('posts',JSON.stringify([meta[0]]))
							setIsBookmark(() => true)
						}
					}}
				>
					<svg
						fill="currentColor"
						width="24px"
						height="24px"
						viewBox="0 0 1920 1920"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="m960.481 1412.11 511.758 307.054V170.586c0-31.274-25.588-56.862-56.862-56.862H505.586c-31.274 0-56.862 25.588-56.862 56.862v1548.578l511.757-307.055ZM1585.963 1920 960.48 1544.711 335 1920V170.586C335 76.536 411.536 0 505.586 0h909.79c94.05 0 170.587 76.536 170.587 170.586V1920Z"
							fillRule="evenodd"
						/>
					</svg>
				</button>
			)}
		</div>
	)
}

export default BookmarkButton
