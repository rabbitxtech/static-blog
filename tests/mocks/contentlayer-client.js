// Mock cho package ESM `contentlayer/client` (hàm `pick`) để tránh transform
// node_modules. Mô phỏng đúng hành vi của `pick(document, keys)`.
module.exports = {
	pick(obj, keys) {
		const result = {}
		keys.forEach((k) => {
			if (obj != null && k in obj) result[k] = obj[k]
		})
		return result
	}
}
