import { FC, HTMLProps } from 'react'
import Image from 'next/image'
const MDXImage: FC<HTMLProps<HTMLImageElement>> = (props) => {
	return (
		// eslint-disable-next-line @next/next/no-img-element
		<img
			src={props.src}
			alt={props.alt || ''}
			className="max-w-full m-auto my-3"
			{...props}
		/>
	)
}

export default MDXImage
