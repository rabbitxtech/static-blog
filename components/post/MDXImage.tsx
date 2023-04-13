import { FC, HTMLProps } from 'react'
const MDXImage: FC<HTMLProps<HTMLImageElement>> = props => {
	return (
		// eslint-disable-next-line @next/next/no-img-element
		<img
			src={props.src}
			alt={'' || props.alt}
			className="max-w-full max-h-[500px] m-auto"
			{...props}
		/>
	)
}

export default MDXImage
