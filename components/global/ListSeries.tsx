// @ts-nocheck
'use client'

import React from 'react'
import SerieCard from './SerieCard'
import { Serie } from '@/utils/getPosts'
import FadeInSection from './FadeInSection'

const ListSeries = ({ series }: { series: Serie[] }) => {
	if (series.length === 0)
		return (
			<div className="font-semibold text-center">
				There&apos;s nothing here!
			</div>
		)

	return (
		<div className='grid grid-cols-2 gap-5 max-md:grid-cols-1'>
			{series.map((serie) => (
				<FadeInSection key={serie.id}>
					<SerieCard {...serie} />
				</FadeInSection>
			))}
		</div>
	)
}

export default ListSeries

