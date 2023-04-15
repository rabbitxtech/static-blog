import { use } from 'react'
import Link from 'next/link'
import { PostCard } from '@/components/global'
import { getAllPost, fetchAllMetaPost } from '@/utils/getPosts'
import Image from 'next/image'
import rabbitAstronaut from '@/public/images/rabbit-astronaut.png'
import generateRssFeed from '@/utils/generateRSSFeed'
import { FadeInSection } from '@/components/global'

const Page = () => {
	use(generateRssFeed())
	const posts = use(fetchAllMetaPost(getAllPost())).splice(0, 4)

	return (
		<>
			<div className="w-full min-h-[calc(100vh-60px)] flex flex-col justify-center items-center">
				<div className="max-w-2xl max-sm:px-4 px-8">
					<Image
						src={rabbitAstronaut}
						alt="rabbit astronaut"
						width={400}
						className="m-auto"
						loading="lazy"
					></Image>
					<div className="font-handwritten font-semibold text-3xl text-center mb-3">
						My name&apos;s Nguyen Dong Anh, I&apos;m Data Engineer
					</div>
					<div className="text-center">
						Hi, i&apos;m Nguyen Dong Anh from Viet Nam, i blog to
						remember and share my knowledge in the field of
						technology, please read and rate so I can improve my
						writing in the best way, Thank you for your attention!
					</div>
				</div>
			</div>
			<div className="max-w-6xl m-auto max-md:px-4 p-8">
				<div className="max-w-2xl m-auto">
					<div className="text-3xl font-semibold mb-8">My Skills</div>
					<div className="text-3xl font-semibold mb-8">
						Recent posts
					</div>
					<div className="border-b border-zinc-300 dark:border-white/20 pb-4 ">
						<div className="w-full grid grid-cols-1 mb-6">
							{posts.map((post, idx) => (
								<FadeInSection key={post._id}>
									<PostCard {...post} />
								</FadeInSection>
							))}
						</div>
						<Link href="/blogs" className="text-blue-600">
							<span>Read more &#187;</span>
						</Link>
					</div>
					<div className="text-3xl font-semibold mt-8 mb-3">
						Contact with me
					</div>
					<div>Email: nguyendonganh510@gmail.com</div>
				</div>
			</div>
		</>
	)
}

export default Page
