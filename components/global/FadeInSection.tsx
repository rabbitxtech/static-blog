'use client'

import React, { useState, HTMLProps } from 'react'

const FadeInSection: React.FC<HTMLProps<HTMLDivElement>> = (props) => {
	const [isVisible, setVisible] = useState<boolean>(true)
	const domRef = React.useRef<HTMLDivElement>(null)
	React.useEffect(() => {
		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				setVisible(entry.isIntersecting)
				if (entry.isIntersecting) {
					observer.unobserve(entry.target)
				}
			})
		})
		if (domRef.current) observer.observe(domRef.current)
		return () => {
			observer.disconnect()
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
