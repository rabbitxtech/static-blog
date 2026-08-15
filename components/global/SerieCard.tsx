import { Serie } from '@/utils/getPosts'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const SerieCard = (serie: Serie) => {
	return (
		<Link href={`/series/${serie.id}`}>
			<div className="p-6 border dark:border-white/20 dark:hover:border-white/30 dark:bg-zinc-800 bg-slate-50 rounded-lg h-full max-sm:block">
				<span>
					<Image
						src={serie.thumbnail || '/images/default-img.jpg'}
						alt={serie.title}
						width={500}
						height={280}
						className="min-h-[220px] w-full object-cover"
					/>
				</span>
				<div className='mt-3'>
					<div
						className="text-xl text-blue-600 line-clamp-2 dark:text-blue-400 duration-300 font-semibold mb-1"
						aria-label={serie.title}
					>
						{serie.title}
					</div>
					<div className="text-sm line-clamp-3">
						{serie.description}
					</div>
				</div>
			</div>
		</Link>
	)
}

export default SerieCard

