const regExp = {
	name: (value: string) => {
		const regex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{0,30}$/
		return regex.test(value)
	},
	phoneNumber: (value: string) => {
		const regex = /^[0-9]{0,11}$/
		return regex.test(value)
	},
	birthNumber: (value: string) => {
		const regex = /^[0-9]{0,8}$/
		return regex.test(value)
	},
	rrn1Number: (value: string) => {
		const regex = /^[0-9]{0,6}$/
		return regex.test(value)
	},
	rrn2Number: (value: string) => {
		const regex = /^[0-9]{0,7}$/
		return regex.test(value)
	},
}
export default regExp
