// Sử dụng jest.resetModules để có một instance store độc lập cho mỗi test,
// vì `initialFetch` là biến module-private ảnh hưởng tới hành vi short-circuit.

let useViewStore: any

beforeEach(() => {
	jest.resetModules()
	useViewStore = require('@/hooks/useViewStore').useViewStore
})

afterEach(() => {
	jest.restoreAllMocks()
})

const jsonResponse = (data: any) => ({
	json: async () => data
})

describe('useViewStore.fetch', () => {
	it('tải danh sách view và lưu vào state', async () => {
		global.fetch = jest
			.fn()
			.mockResolvedValue(jsonResponse([{ slug: 'a', count: 10 }])) as any

		const store = useViewStore
		await store.getState().fetch()

		expect(store.getState().listViews).toEqual([{ slug: 'a', count: 10 }])
		expect(global.fetch).toHaveBeenCalledWith('/api/v1/post/views', {
			cache: 'no-store'
		})
	})

	it('không gọi mạng nếu danh sách đã có dữ liệu', async () => {
		global.fetch = jest.fn() as any

		const store = useViewStore
		store.setState({ listViews: [{ slug: 'a', count: 1 }] })

		await store.getState().fetch()
		expect(global.fetch).not.toHaveBeenCalled()
	})

	it('nuốt lỗi mạng và giữ listViews rỗng', async () => {
		global.fetch = jest.fn().mockRejectedValue(new Error('network')) as any

		const store = useViewStore
		await store.getState().fetch()

		expect(store.getState().listViews).toEqual([])
	})
})

describe('useViewStore.updateView', () => {
	it('thêm slug mới khi chưa tồn tại', async () => {
		global.fetch = jest
			.fn()
			.mockResolvedValueOnce(jsonResponse([])) // GET danh sách ban đầu
			.mockResolvedValueOnce(jsonResponse({ slug: 'b', count: 3 })) // POST

		const store = useViewStore
		await store.getState().updateView('b')

		expect(store.getState().listViews).toEqual([{ slug: 'b', count: 3 }])
		expect(global.fetch).toHaveBeenLastCalledWith('/api/v1/post/views/b', {
			method: 'POST'
		})
	})

	it('cập nhật count của slug đã tồn tại', async () => {
		global.fetch = jest
			.fn()
			.mockResolvedValue(jsonResponse({ slug: 'b', count: 3 }))

		const store = useViewStore
		store.setState({ listViews: [{ slug: 'b', count: 2 }] })

		await store.getState().updateView('b')
		expect(store.getState().listViews).toEqual([{ slug: 'b', count: 3 }])
	})
})
