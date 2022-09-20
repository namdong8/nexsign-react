const regExp = {
	name: (value) => {
		const regex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{0,30}$/
		return regex.test(value)
	},
	phoneNumber: (value) => {
		const regex = /^[0-9]{0,11}$/
		return regex.test(value)
	},
	birthNumber: (value) => {
		const regex = /^[0-9]{0,8}$/
		return regex.test(value)
	},
	rrn1Number: (value) => {
		const regex = /^[0-9]{0,6}$/
		return regex.test(value)
	},
	rrn2Number: (value) => {
		const regex = /^[0-9]{0,7}$/
		return regex.test(value)
	},
}
export default regExp
