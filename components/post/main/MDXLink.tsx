import Link from 'next/link'
import React, { FC, HTMLProps } from 'react'

const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const getDomainRegex = (): RegExp => {
	const baseUrl =
		process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
	try {
		const hostname = new URL(baseUrl).hostname
		return new RegExp(`^https?:\\/\\/(?:www\\.)?${escapeRegExp(hostname)}\\/?`)
	} catch {
		return /^https?:\/\/(?:www\.)?localhost:3000\/?/
	}
}

const domainRegex = getDomainRegex()

const MDXLink: FC<HTMLProps<HTMLAnchorElement>> = ({ href, ...rest }) => {
	if (!href) {
		return <a {...rest} />
	}

	const normalizedHref = domainRegex.test(href)
		? href.replace(domainRegex, '/')
		: href

	if (normalizedHref.startsWith('/')) {
		//@ts-ignore
		return <Link data-link-internal href={normalizedHref} {...rest} />
	}
	if (!normalizedHref.startsWith('http')) {
		return (
			<a
				href={normalizedHref}
				target="_blank"
				rel="noreferrer noopener"
				{...rest}
			/>
		)
	}

	return (
		<a
			data-link-external
			href={normalizedHref}
			target="_blank"
			rel="nofollow noreferrer noopener"
			{...rest}
		/>
	)
}

export default MDXLink
