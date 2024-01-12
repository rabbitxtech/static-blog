'use client'

import React from 'react'
import Giscus from '@giscus/react'

const Comment = () => {
	return (
		<div className='w-full'>
			<Giscus
				id="comments"
				repo="rabbitxtech/static-blog"
				repoId="R_kgDOJWdOOg"
				category="Announcements"
				categoryId="DIC_kwDOJWdOOs4CVwH3"
				mapping="pathname"
				term="Welcome to @giscus/react component!"
				emitMetadata="0"
				inputPosition="bottom"
				theme="dark"
				lang="en"
				loading="lazy"
			/>
		</div>
	)
}

export default Comment
