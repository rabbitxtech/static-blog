'use client'

import React, { useEffect, useState } from 'react'
import Giscus from '@giscus/react'
import { useTheme } from 'next-themes'

const Comment = () => {
	const { resolvedTheme } = useTheme()
	const [theme, setTheme] = useState<'light' | 'dark'>('light')

	useEffect(() => {
		setTheme(resolvedTheme === 'dark' ? 'dark' : 'light')
	}, [resolvedTheme])

	return (
		<div className='w-full'>
			<Giscus
				id="comments"
				repo="rabbitxtech/static-blog"
				repoId="R_kgDOJWdOOg"
				category="Announcements"
				categoryId="DIC_kwDOJWdOOs4CVwH3"
				mapping="pathname"
				emitMetadata="0"
				inputPosition="bottom"
				theme={theme}
				lang="en"
				loading="lazy"
			/>
		</div>
	)
}

export default Comment
