import { use } from 'react'
import { Metadata } from 'next'
import { ListPost } from '@/components/global'
import {
	fetchAllSerieId,
	fetchAllMetaPostBySerieId,
	Serie
} from '@/utils/getPosts'
import _meta_series from '@/meta/_meta_series.json'
import Link from 'next/link'

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'

export const generateStaticParams = async () => {
	const allSerieId = await fetchAllSerieId()
	return allSerieId
}

export const generateMetadata = ({
	params
}: {
	params: { serie_id: number }
}): Metadata => {
	if (_meta_series.series.length !== 0) {
		const serie: Serie[] = _meta_series.series.filter((el: Serie) => {
			return el.id == params.serie_id
		})

		if (serie) {
			return {
				title: serie[0].title,
				description: serie[0].description,
				twitter: {
					card: 'summary',
					title: serie[0].title,
					description: serie[0].description
				},
				applicationName: 'RabbitxTech',
				colorScheme: 'normal',
				alternates: {
					canonical: `${BASE_URL}/series/${params.serie_id}`,
					languages: {
						'vi-VN': `${BASE_URL}/series/${params.serie_id}`
					}
				}
			}
		}
	}

	return {}
}

const Page = ({ params }: { params: { serie_id: number } }) => {
	const posts = use(fetchAllMetaPostBySerieId(params.serie_id))
	let serie: Serie[]

	if (_meta_series.series.length == 0) {
		serie = []
	} else {
		serie = _meta_series.series.filter(
			(el: Serie) => el.id == params.serie_id
		)
	}

	return (
		<>
			<div className="max-w-6xl m-auto max-md:px-4 px-8">
				<div className="m-auto max-w-2xl">
					<div className="my-10 text-6xl font-semibold">Series</div>
				</div>
			</div>
			<div className="max-w-6xl flex flex-col mx-auto max-md:px-4 px-8 mt-8 mb-4">
				<div className="m-auto max-w-2xl w-full">
					<div className="mb-4">
						{serie.length != 0 && (
							<>
								<div className="text-3xl font-semibold mb-4">
									{serie[0].title}
								</div>
								<div>{serie[0].description}</div>
							</>
						)}
					</div>
					<ListPost posts={posts} />
					<Link
						href="/series"
						className="text-blue-600 dark:text-sky-500"
					>
						<span>Read other series &#187;</span>
					</Link>
				</div>
			</div>
		</>
	)
}

export default Page

