'use client'

import { type Category } from '@/utils/getCategories'
import { TabNavItem } from '../global/TabNavItem'
import { useSelectedLayoutSegments } from 'next/navigation'

const CategoryNav = ({ categories }: { categories: Category[] }) => {
	const [selectedLayoutSegments] = useSelectedLayoutSegments()
	return (
		<div className="flex-wrap inline-flex gap-3 ">
			<TabNavItem href="/blogs" isActive={!selectedLayoutSegments}>
				All
			</TabNavItem>

			{categories.map(item => (
				<TabNavItem
					key={item.slug}
					href={`/blogs/${item.slug}`}
					isActive={item.slug === selectedLayoutSegments}
				>
					{item.title}
				</TabNavItem>
			))}
		</div>
	)
}

export default CategoryNav
