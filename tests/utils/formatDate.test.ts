import { formatPostDate } from '@/utils/formatDate'

describe('formatPostDate', () => {
	it('định dạng ngày từ ISO string đầy đủ (có giờ UTC)', () => {
		expect(formatPostDate('2023-04-13T03:01:00.000Z')).toBe('April 13, 2023')
	})

	it('giữ nguyên ngày khi giờ UTC vượt ngày (tránh lệch timezone)', () => {
		// 23:30 UTC vẫn là ngày 13 nếu chỉ giữ phần date
		expect(formatPostDate('2023-04-13T23:30:00.000Z')).toBe('April 13, 2023')
	})

	it('xử lý ngày đầu tháng', () => {
		expect(formatPostDate('2023-01-01T00:00:00.000Z')).toBe('January 1, 2023')
	})
})
