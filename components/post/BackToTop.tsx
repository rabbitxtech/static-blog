'use client'

import React from 'react'
import { GoMoveToTop } from 'react-icons/go'

const BackToTop = () => {
	return (
		<button
			aria-label="Back to top"
			title="Back to top"
			onClick={function (e) {
				e.preventDefault()
				window.scrollTo({ top: 0, behavior: 'smooth' })
			}}
			className="fixed p-2 rounded-md border-[2px] border-current bottom-6 right-6 max-md:hidden"
		>
			<GoMoveToTop size={16}/>
		</button>
	)
}

export default BackToTop

