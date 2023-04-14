import Link from 'next/link'
import Image from 'next/image'
import { format, parseISO } from 'date-fns'
import { TabNavItem } from './TabNavItem'
import { PostMeta } from '@/utils/getPosts'
import { getNormalSlug } from '@/utils/getTexts'

const PostCard = (post: PostMeta) => {
	return (
		<div className=" shadow-slate-200 dark:shadow-slate-800 shadow-md rounded-lg mb-5">
			<div className="p-4 border dark:border-white/20 dark:hover:border-white/30 dark:bg-zinc-800 bg-slate-50 rounded-lg h-full flex max-sm:block">
				<Link href={post.url} aria-label={`Read more ${post.title}`}>
					<Image
						src={post.thumbnail}
						width={500}
						height={500}
						alt=""
						className="max-w-[200px] max-h-[250px] min-h-[140px] mr-4 max-sm:max-w-full max-sm:w-full max-sm:mb-4"
					/>
				</Link>
				<div className="flex flex-col justify-between">
					<div>
						<Link
							href={post.url}
							className="text-xl text-blue-600 dark:text-blue-400 duration-300 block"
						>
							<span>{post.title}</span>
						</Link>
						<div className="flex-wrap inline-flex gap-2 mt-1">
							{post.tags?.map((tag) => {
								if (tag.title)
									return (
										<TabNavItem
											href={`/blogs/${getNormalSlug(
												tag.title
											)}`}
											isActive={false}
											key={tag.title}
										>
											{tag.title}
										</TabNavItem>
									)
							})}
						</div>
						<div className="mt-2 line-clamp-2">
							{post.description}
						</div>
					</div>
					<div className="flex gap-2 text-xs text-gray-600 dark:text-gray-400 mt-2">
						<div className="flex items-center gap-[2px]">
							<span>
								<svg
									width="14px"
									height="14px"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6V12C11 12.2652 11.1054 12.5196 11.2929 12.7071L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L13 11.5858V6Z"
										fill="currentColor"
									/>
								</svg>
							</span>
							<time dateTime={post.date}>
								{format(parseISO(post.date), 'LLLL d, yyyy')}
							</time>
						</div>
						<div className="flex items-center gap-[2px]">
							<svg
								height="14px"
								width="14px"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 32 32"
								fill="currentColor"
							>
								<path
									d="M28.9,9.4C28.9,9.4,28.9,9.4,28.9,9.4C28.9,9.3,29,9.2,29,9.1c0,0,0,0,0-0.1c0,0,0,0,0-0.1c0-0.1,0-0.2,0-0.3c0,0,0,0,0-0.1
	c0-0.1-0.1-0.2-0.1-0.3c0,0,0,0,0,0c-0.1-0.1-0.1-0.1-0.2-0.2l-11-7c-0.3-0.2-0.8-0.2-1.1,0l-13,9c0,0-0.1,0.1-0.1,0.1
	c0,0,0,0-0.1,0c-0.1,0.1-0.1,0.2-0.2,0.3c0,0,0,0,0,0.1C3,10.8,3,10.9,3,11c0,0,0,0,0,0v6v6c0,0.3,0.2,0.7,0.5,0.8l11,7
	c0.2,0.1,0.4,0.2,0.5,0.2c0.2,0,0.4-0.1,0.6-0.2l13-9c0.2-0.2,0.4-0.4,0.4-0.7s-0.1-0.6-0.3-0.8c-0.9-0.9-1.1-2.2-0.5-3.4l0.7-1.5
	c0-0.1,0.1-0.2,0.1-0.3c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0-0.1,0-0.3-0.1-0.4c0,0,0-0.1,0-0.1c0-0.1-0.1-0.2-0.2-0.3c0,0,0,0,0,0
	c-0.9-0.9-1.1-2.2-0.5-3.4L28.9,9.4z M26.6,14.8l-11.6,8L5,16.5v-3.6l9.5,6c0.2,0.1,0.4,0.2,0.5,0.2c0.2,0,0.4-0.1,0.6-0.2l10.3-7.1
	C25.8,12.8,26,13.8,26.6,14.8z M15,28.8L5,22.5v-3.6l9.5,6c0.2,0.1,0.4,0.2,0.5,0.2c0.2,0,0.4-0.1,0.6-0.2l10.3-7.1
	c-0.1,1.1,0.1,2.2,0.7,3.1L15,28.8z"
								/>
							</svg>
							<span>{post.readingTime.text}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PostCard
