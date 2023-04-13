import { useState, useEffect } from 'react'

const useOpenMenu = () => {
	const [isOpen, setIsOpen] = useState(false)
	useEffect(() => {
		window.addEventListener('resize', (e: Event) => {
			if (window.innerWidth > 768) setIsOpen(() => false)
		})
	}, [])
	return { isOpen, setIsOpen }
}

export default useOpenMenu
