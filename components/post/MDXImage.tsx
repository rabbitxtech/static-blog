'use client'

import { FC, useRef, useEffect, HTMLProps } from 'react'

const MDXImage: FC<HTMLProps<HTMLImageElement>> = (props) => {
	const imgRef = useRef<HTMLImageElement>(null)
	useEffect(() => {
		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry: IntersectionObserverEntry) => {
				if (entry.isIntersecting) {
					(entry.target as HTMLImageElement).src = (entry.target as HTMLImageElement).dataset.src!
					setTimeout(()=>entry.target.classList.remove('blur-sm'), 500)
					observer.unobserve(entry.target)
				}
			})
		},{ threshold: 0.8 })
		if (imgRef.current) observer.observe(imgRef.current)
		return () => {
			observer.disconnect()
		}
	}, [])

	return (
		// eslint-disable-next-line @next/next/no-img-element
		<img
			ref={imgRef}
			data-src={props.src}
			alt={props.alt || ''}
			className="max-w-full m-auto my-3 blur-sm"
		/>
	)
}

export default MDXImage
