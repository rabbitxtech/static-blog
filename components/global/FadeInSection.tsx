'use client'

import React, { HTMLProps } from 'react'

const FadeInSection: React.FC<HTMLProps<HTMLDivElement>> = (props) => {
	const [isVisible, setVisible] = React.useState(true)
	const domRef = React.useRef<HTMLDivElement>(null)
	React.useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => setVisible(entry.isIntersecting))
		})
		if (domRef.current) observer.observe(domRef.current)
		return () => {
			// eslint-disable-next-line react-hooks/exhaustive-deps
			if (domRef.current) return observer.unobserve(domRef.current)
		}
	}, [])
	return (
		<div
			className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
			ref={domRef}
		>
			{props.children}
		</div>
	)
}

export default FadeInSection
