'use client'

import { useViewStore } from '@/hooks/useViewStore'
import React, { useEffect, useMemo } from 'react'
import { BsEyeFill } from 'react-icons/bs'

const ViewsCounter = ({
	slug,
	update = false
}: {
	slug: string
	update?: boolean
}) => {
	const listViews = useViewStore((state) => state.listViews)
	const updateView = useViewStore((state) => state.updateView)

	const viewCount = useMemo(() => {
		if (listViews.length != 0) {
			const postView = listViews.filter((val) => val.slug === slug)
			if (postView.length != 0) return postView[0].count
			return 0
		}
		return 0
	}, [listViews, slug])

	useEffect(() => {
		if (update) {
			updateView(slug)
		}
		return () => {}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	return (
		<div className="flex items-center gap-[2px]">
			<BsEyeFill size={14} />
			<span>{viewCount}</span>
		</div>
	)
}

export default ViewsCounter

