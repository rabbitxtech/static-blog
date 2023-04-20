'use client'

import React, { HTMLProps } from 'react'

const FadeInSection: React.FC<HTMLProps<HTMLDivElement>> = (props) => {
	const domRef = React.useRef<HTMLDivElement>(null)
	React.useEffect(() => {
		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					if (domRef.current) {
						domRef.current?.classList.add('is-visible')
						observer.unobserve(domRef.current)
					}
				}
			})
		})
		if (domRef.current) observer.observe(domRef.current)
		return () => {
			observer.disconnect()
		}
	}, [])
	return (
		<div className={'fade-in-section'} ref={domRef}>
			{props.children}
		</div>
	)
}

export default FadeInSection
