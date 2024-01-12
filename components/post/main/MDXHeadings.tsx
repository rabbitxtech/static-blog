import { getSlugHeading } from '@/utils/getTexts'
import React, { FC, HTMLProps } from 'react'

type HeadingProps = HTMLProps<HTMLHeadingElement> & {
	headingLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const MDXHeadings: FC<HeadingProps> = props => {
	const VariantHeading = props.headingLevel

	return <VariantHeading id={getSlugHeading(props)}>{props.children}</VariantHeading>
}

export default MDXHeadings
