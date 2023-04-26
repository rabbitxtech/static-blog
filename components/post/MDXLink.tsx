import Link from 'next/link'
import React, { FC, HTMLProps } from 'react'

const domainRegex = process.env.NEXT_PUBLIC_BASE_URL
	? /http[s]*:\/\/[www.]*rabbitxtech\.com[/]?/
	: /http[s]*:\/\/[www.]*localhost:3000[/]?/

const MDXLink: FC<HTMLProps<HTMLAnchorElement>> = ({ href, ...rest }) => {
	const sameDomain = domainRegex.test(href!)
	if (sameDomain) {
		href = href!.replace(domainRegex, '/')
	}
	if (href!.startsWith('/')) {
		//@ts-ignore
		return <Link data-link-internal href={href!} {...rest} />
	}
	if (!href!.startsWith('http')) {
		return <a href={href} target='_blank' {...rest} />
	}

	return <a data-link-external href={href} target='_blank' rel="nofollow" {...rest} />
}

export default MDXLink
