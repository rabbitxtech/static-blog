'use client'

import React from 'react'

const BackToTop = () => {
	return (
		<button
			aria-label="Back to top"
			title="Back to top"
			onClick={function(e){
				e.preventDefault()
				window.scrollTo({ top: 0, behavior: 'smooth' })
			}}
            className='fixed p-2 rounded-md border-[2px] border-current bottom-6 right-6 max-md:hidden'
		>
			<svg
				width="16px"
				height="16px"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g id="Complete">
					<g id="F-Push">
						<g id="Up">
							<g>
								<polyline
									data-name="Down"
									fill="none"
									id="Down-2"
									points="19 17.9 12 10.9 5 17.9"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
								/>

								<line
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									x1="19"
									x2="5"
									y1="6.1"
									y2="6.1"
								/>
							</g>
						</g>
					</g>
				</g>
			</svg>
		</button>
	)
}

export default BackToTop
