'use client'

import { useMDXComponent } from 'next-contentlayer/hooks'
import { Post } from '@/.contentlayer/generated'
import MDXHeadings from './MDXHeadings'
import MDXImage from './MDXImage'
import MDXLink from './MDXLink'
import { HTMLProps } from 'react'

const MDXContent = ({ post }: { post: Post }) => {
	const Content = useMDXComponent(post.body.code)
	return (
		<Content
			components={{
				h1: (props: HTMLProps<HTMLHeadingElement>) => (
					<MDXHeadings {...props} headingLevel="h1" />
				),
				h2: (props: HTMLProps<HTMLHeadingElement>) => (
					<MDXHeadings {...props} headingLevel="h2" />
				),
				h3: (props: HTMLProps<HTMLHeadingElement>) => (
					<MDXHeadings {...props} headingLevel="h3" />
				),
				h4: (props: HTMLProps<HTMLHeadingElement>) => (
					<MDXHeadings {...props} headingLevel="h4" />
				),
				h5: (props: HTMLProps<HTMLHeadingElement>) => (
					<MDXHeadings {...props} headingLevel="h5" />
				),
				h6: (props: HTMLProps<HTMLHeadingElement>) => (
					<MDXHeadings {...props} headingLevel="h6" />
				),
				img: (props: HTMLProps<HTMLImageElement>) => (
					<MDXImage {...props} />
				),
				a: (props: HTMLProps<HTMLAnchorElement>) => (
					<MDXLink {...props} />
				)
			}}
		/>
	)
}

export default MDXContent