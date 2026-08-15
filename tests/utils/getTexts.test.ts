import {
	getInnerText,
	getNormalSlug,
	getSlugHeading,
	removeVietnameseTones
} from '@/utils/getTexts'

describe('getInnerText', () => {
	it('trả về chuỗi từ children dạng string', () => {
		expect(getInnerText({ children: 'Xin chào' })).toBe('Xin chào')
	})

	it('trả về chuỗi từ children dạng number', () => {
		expect(getInnerText({ children: 42 })).toBe('42')
	})

	it('ghép text từ mảng các React element lồng nhau', () => {
		const tree = {
			children: [
				{ props: { children: 'a' } },
				{ props: { children: 'b' } },
				{ props: { children: 'c' } }
			]
		}
		expect(getInnerText(tree)).toBe('abc')
	})

	it('đệ quy vào props.children khi là object lồng sâu', () => {
		const tree = {
			children: {
				props: {
					children: {
						props: {
							children: 'deep'
						}
					}
				}
			}
		}
		expect(getInnerText(tree)).toBe('deep')
	})

	it('trả về chuỗi rỗng khi không có children', () => {
		expect(getInnerText({})).toBe('')
		expect(getInnerText({ children: null })).toBe('')
	})
})

describe('removeVietnameseTones', () => {
	it('loại bỏ dấu tiếng Việt', () => {
		expect(removeVietnameseTones('Cơ sở dữ liệu')).toBe('Co so du lieu')
	})

	it('chuyển đ/Đ thành d/D', () => {
		expect(removeVietnameseTones('đường đi')).toBe('duong di')
		expect(removeVietnameseTones('Đại học')).toBe('Dai hoc')
	})

	it('giữ nguyên chuỗi không có dấu', () => {
		expect(removeVietnameseTones('oracle 19c')).toBe('oracle 19c')
	})
})

describe('getNormalSlug', () => {
	it('chuyển tiếng Việt có dấu thành slug ASCII', () => {
		expect(getNormalSlug('Cơ sở dữ liệu')).toBe('co-so-du-lieu')
	})

	it('giữ nguyên chữ thường và thay khoảng trắng bằng dấu gạch ngang', () => {
		expect(getNormalSlug('Oracle Data Guard 19c')).toBe(
			'oracle-data-guard-19c'
		)
	})

	it('chuyển đ thành d trong slug', () => {
		expect(getNormalSlug('Đường dẫn')).toBe('duong-dan')
	})
})

describe('getSlugHeading', () => {
	it('tạo slug từ heading là object chứa children', () => {
		expect(getSlugHeading({ children: 'Cơ sở dữ liệu' })).toBe(
			'co-so-du-lieu'
		)
	})

	it('tạo slug từ heading là mảng các node', () => {
		expect(
			getSlugHeading({
				children: [
					{ props: { children: 'Hướng' } },
					{ props: { children: ' dẫn' } }
				]
			})
		).toBe('huong-dan')
	})
})
