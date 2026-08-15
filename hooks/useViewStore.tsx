import { create } from 'zustand'

type View = {
	slug: string
	count: number
}

type ListViews = Array<View>

type ViewState = {
	listViews: ListViews
	fetch: () => Promise<void>
	updateView: (slug: string) => Promise<void>
}

// Shared in-flight promise so the initial list load and the increment that
// fires on the same mount never race: both route through `fetch()`, so the
// GET always resolves before `updateView` issues its POST.
let initialFetch: Promise<void> | null = null

export const useViewStore = create<ViewState>((set, get) => ({
	listViews: [],
	fetch: () => {
		if (get().listViews.length > 0) return Promise.resolve()
		if (!initialFetch) {
			initialFetch = (async () => {
				try {
					const response = await fetch('/api/v1/post/views', {
						cache: 'no-store'
					})
					set({ listViews: await response.json() })
				} catch (error) {
					// Reset so a later mount can retry.
					initialFetch = null
				}
			})()
		}
		return initialFetch
	},
	updateView: async (slug: string) => {
		// Ensure the initial list is loaded first so a late GET response
		// can't clobber the freshly-incremented count.
		await get().fetch()
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
					temp[idx] = { ...temp[idx], count: result.count }
					return {
						listViews: temp
					}
				}
			})
		} catch (error) {
			// Swallow — a failed increment shouldn't break the UI.
		}
	}
}))

