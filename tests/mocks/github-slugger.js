// Mock cho package ESM `github-slugger` để Jest có thể chạy mà không cần
// transform node_modules. Mô phỏng hành vi slug cơ bản của github-slugger
// cho đầu vào là chuỗi ASCII (sau khi đã bỏ dấu tiếng Việt).
module.exports = {
	slug(value) {
		return String(value)
			.toLowerCase()
			.replace(/\s+/g, '-')
			.replace(/[^a-z0-9-]/g, '')
	}
}
