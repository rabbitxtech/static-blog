import Link from 'next/link'
import Image from 'next/image'
import { format, parseISO } from 'date-fns'
import { TabNavItem } from './TabNavItem'
import ViewsCounter from './ViewsCounter'
import { PostMeta } from '@/utils/getPosts'
import { getNormalSlug } from '@/utils/getTexts'
import { IoMdTime } from 'react-icons/io'
import { CgReadme } from "react-icons/cg";

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
						loading="eager"
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
						<div className="text-sm mt-2 line-clamp-2">
							{post.description}
						</div>
					</div>
					<div className="flex gap-2 text-xs text-gray-600 dark:text-gray-400 mt-2">
						<div className="flex items-center gap-[2px]">
							<IoMdTime size={14} />
							<time dateTime={post.date}>
								{format(parseISO(post.date), 'LLLL d, yyyy')}
							</time>
						</div>
						<div className="flex items-center gap-[2px]">
							<CgReadme size={14} />
							<span>{post.readingTime.text}</span>
						</div>
						<ViewsCounter slug={post.slug} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default PostCard

