'use client'

import React, { useEffect, FC, HTMLProps } from 'react'
import tocbot from 'tocbot'

const MDXToc: FC<HTMLProps<HTMLDivElement> & { toc: boolean }> = (props) => {
useEffect(() => {
	if (props.toc) {
		tocbot.init({
			tocSelector: '.js-toc',
			contentSelector: '.js-toc-content',
			headingSelector: 'h1, h2, h3',
			headingsOffset: 64,
			scrollSmoothOffset: -64
		})
	}
	tocbot.refresh()
	return () => tocbot.destroy()
	// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

if (!props.toc) return null
return (
	<div>
		<div className='font-semibold pt-3'>On This Page</div>
		<div className="js-toc"></div>
	</div>
)

}

// const MDXToc: FC<
// 	HTMLProps<HTMLDivElement> & { toc?: boolean; heading?: [] }
// > = (props) => {
// 	return (
// 		<div className='py-4'>
// 			<div className="capitalize font-semibold">On this page</div>
// 			{props.heading && props.heading.map((a:any)=>{
// 				return <div>{a.content}</div>
// 			})}
// 		</div>
// 	)
// }

export default MDXToc

