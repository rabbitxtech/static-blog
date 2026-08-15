import { render, screen } from '@testing-library/react'
import BookmarkPost from '@/components/global/BookmarkPost'

// Mock các component con để test cô lập logic đọc localStorage.
jest.mock('@/components/global/PostCard', () => ({
	__esModule: true,
	default: ({ title }: any) => <div data-testid="postcard">{title}</div>
}))

jest.mock('@/components/global/FadeInSection', () => ({
	__esModule: true,
	default: ({ children }: any) => <>{children}</>
}))

describe('BookmarkPost', () => {
	beforeEach(() => {
		localStorage.clear()
	})

	it('hiển thị thông báo khi chưa có bookmark', () => {
		render(<BookmarkPost />)
		expect(screen.getByText("There's nothing here!")).toBeInTheDocument()
	})

	it('hiển thị các bài viết đã bookmark từ localStorage', () => {
		localStorage.setItem(
			'posts',
			JSON.stringify([
				{ _id: '1', title: 'Bài viết A' },
				{ _id: '2', title: 'Bài viết B' }
			])
		)

		render(<BookmarkPost />)

		const cards = screen.getAllByTestId('postcard')
		expect(cards).toHaveLength(2)
		expect(screen.getByText('Bài viết A')).toBeInTheDocument()
		expect(screen.getByText('Bài viết B')).toBeInTheDocument()
	})

	it('xóa localStorage khi dữ liệu JSON không hợp lệ', () => {
		localStorage.setItem('posts', '{invalid json')

		render(<BookmarkPost />)

		expect(screen.getByText("There's nothing here!")).toBeInTheDocument()
		expect(localStorage.getItem('posts')).toBeNull()
	})
})
