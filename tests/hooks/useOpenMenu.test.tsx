import { renderHook, act } from '@testing-library/react'
import useOpenMenu from '@/hooks/useOpenMenu'

const setInnerWidth = (width: number) => {
	Object.defineProperty(window, 'innerWidth', {
		configurable: true,
		writable: true,
		value: width
	})
}

describe('useOpenMenu', () => {
	beforeEach(() => {
		setInnerWidth(500)
	})

	it('khởi tạo với trạng thái đóng', () => {
		const { result } = renderHook(() => useOpenMenu())
		expect(result.current.isOpen).toBe(false)
	})

	it('mở menu khi setIsOpen(true)', () => {
		const { result } = renderHook(() => useOpenMenu())
		act(() => result.current.setIsOpen(true))
		expect(result.current.isOpen).toBe(true)
	})

	it('đóng menu khi resize qua breakpoint 768px', () => {
		const { result } = renderHook(() => useOpenMenu())
		act(() => result.current.setIsOpen(true))

		setInnerWidth(1024)
		act(() => {
			window.dispatchEvent(new Event('resize'))
		})

		expect(result.current.isOpen).toBe(false)
	})

	it('giữ nguyên trạng thái khi resize dưới breakpoint', () => {
		const { result } = renderHook(() => useOpenMenu())
		act(() => result.current.setIsOpen(true))

		act(() => {
			window.dispatchEvent(new Event('resize'))
		})

		expect(result.current.isOpen).toBe(true)
	})
})
