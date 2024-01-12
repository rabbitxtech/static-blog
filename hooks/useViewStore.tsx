import { create } from 'zustand'

type View = {
	slug: string
	count: number
}

type ListViews = Array<View>

type ViewState = {
	listViews: ListViews
	fetch: () => void
	updateView: (slug: string) => void
}

export const useViewStore = create<ViewState>(
	(
		set
	): {
		listViews: ListViews
		fetch: () => void
		updateView: (slug: string) => void
	} => ({
		listViews: [],
		fetch: async () => {
			try {
				const response = await fetch('/api/v1/post/views', {
					cache: 'no-store'
				})
				set({ listViews: await response.json() })
			} catch (error) {
				return []
			}
		},
		updateView: async (slug: string) => {
			try {
				const response = await fetch(`/api/v1/post/views/${slug}`, {
					method: 'POST'
				})
				const result = await response.json()
				set((state) => {
					const idx = state.listViews.findIndex(
						(el) => el.slug === slug
					)
					if (idx === -1) {
						return { listViews: [...state.listViews, result] }
					} else {
						let temp = [...state.listViews]
						temp[idx].count = result.count
						return {
							listViews: temp
						}
					}
				})
			} catch (error) {
				return []
			}
		}
	})
)

