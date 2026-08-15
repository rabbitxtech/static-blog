import { useState, useEffect } from 'react'

const useOpenMenu = () => {
	const [isOpen, setIsOpen] = useState(false)
	useEffect(() => {
		const onResize = (e: Event) => {
			if (window.innerWidth > 768) setIsOpen(() => false)
		}
		window.addEventListener('resize', onResize)
		return () => window.removeEventListener('resize', onResize)
	}, [])
	return { isOpen, setIsOpen }
}

export default useOpenMenu
