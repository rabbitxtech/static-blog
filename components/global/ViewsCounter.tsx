'use client'

import React, { useEffect, useRef, useState } from 'react'

const getViews = async (slug: string, update: boolean) => {
	if (!update) {
		const res = await fetch(`/api/v1/post/${slug}`, {
			cache: 'no-store'
		})
		if (!res.ok) {
			throw new Error('Failed to fetch data')
		}
		return res.json()
	} else {
		const res = await fetch(`/api/v1/post/${slug}`, {
			method: 'POST',
			cache: 'no-store'
		})
		if (!res.ok) {
			throw new Error('Failed to fetch data')
		}
		return res.json()
	}
}

const ViewsCounter = ({
	slug,
	update = false
}: {
	slug: string
	update?: boolean
}) => {
	const [viewCount, setViewCount] = useState<number>()
	const domRef = useRef<HTMLDivElement>(null)
	useEffect(() => {
		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					getViews(slug, update).then((res) => {
						setViewCount(() => res.views.count)
					})
					observer.unobserve(entry.target)
				}
			})
		})
		if (domRef.current) observer.observe(domRef.current)
		return () => {
			observer.disconnect()
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	return (
		<div className="flex items-center gap-[2px]" ref={domRef}>
			<svg
				width="14px"
				height="14px"
				viewBox="0 0 16 16"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="m 8 2 c -3.648438 0.003906 -6.832031 2.476562 -7.738281 6.007812 c 0.914062 3.527344 4.097656 5.988282 7.738281 5.992188 c 3.648438 -0.003906 6.832031 -2.476562 7.738281 -6.011719 c -0.914062 -3.523437 -4.097656 -5.984375 -7.738281 -5.988281 z m 0 2 c 2.210938 0 4 1.789062 4 4 s -1.789062 4 -4 4 s -4 -1.789062 -4 -4 s 1.789062 -4 4 -4 z m 0 2 c -1.105469 0 -2 0.894531 -2 2 s 0.894531 2 2 2 s 2 -0.894531 2 -2 s -0.894531 -2 -2 -2 z m 0 0"
					fill="currentColor"
				/>
			</svg>
			<span>{viewCount}</span>
		</div>
	)
}

export default ViewsCounter
