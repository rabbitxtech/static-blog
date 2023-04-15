import React from 'react'
import Link from 'next/link'
const Footer = () => {
	return (
		<div className="max-w-6xl mx-auto max-sm:px-4 px-8 w-full">
			<div className="flex justify-between text-sm border-t-[1px] border-[#d2d3d4] dark:border-white/20 py-4">
				<div className="flex gap-1">
					<span>&#169;</span>
					<span>{new Date().getFullYear()}</span>
					<span>Nguyen Dong Anh</span>
				</div>
				<div className="flex gap-1">
					<Link href="/rss.xml" className="text-blue-600">
						RSS
					</Link>
					<span>&#x2022;</span>
					<a
						href="https://github.com/rabbitxtech"
						className="text-blue-600"
						target="_blank"
					>
						Github
					</a>
				</div>
			</div>
		</div>
	)
}

export default Footer
