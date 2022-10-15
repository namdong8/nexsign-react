/* eslint-disable prefer-const */
const regExp = {
	isNumber: (value: string) => {
		const regex = /[0-9]$/
		return regex.test(value) || value === ''
	},
	/** 이름 모든문자 10자리 */
	isName: (value: string) => {
		const regex = /[\S]$/
		return regex.test(value) && value?.length <= 10
	},
	getName: (value: string) => {
		return regExp.isName(value) ? value : value?.slice(0, 10)
	},
	/** 숫자형식 11자리 */
	isPhone: (value: string) => {
		return regExp.isNumber(value) && value?.length <= 11
	},
	getPhone: (value: string) => {
		return regExp.isPhone(value) ? value : value?.slice(0, 11)
	},
	/** 숫자형식 8자리 */
	isBirthDay: (value: string) => {
		return regExp.isNumber(value) && value?.length <= 8
	},
	getBirthDay: (value: string) => {
		return regExp.isBirthDay(value) ? value : value?.slice(0, 8)
	},
	/** 숫자형식 6자리 */
	isRrn1: (value: string) => {
		return regExp.isNumber(value) && value?.length <= 6
	},
	getRrn1: (value: string) => {
		return regExp.isRrn1(value) ? value : value?.slice(0, 6)
	},
	/** 숫자형식 7자리 */
	isRrn2: (value: string) => {
		return regExp.isNumber(value) && value?.length <= 7
	},
	getRrn2: (value: string) => {
		return regExp.isRrn2(value) ? value : value?.slice(0, 7)
	},
	/** 생년월일 유효성 검증 */
	birthdayCheck: (value: string) => {
		let year = Number(value?.substring(0, 4))
		let month = Number(value?.substring(4, 6))
		let day = Number(value?.substring(6, 8))
		let today = new Date()
		let yearNow = today.getFullYear()

		if (value.length <= 8) {
			if (1900 > year || year > yearNow) {
				return false
			} else if (month < 1 || month > 12) {
				return false
			} else if (day < 1 || day > 31) {
				return false
			} else if (
				(month == 4 || month == 6 || month == 9 || month == 11) &&
				day == 31
			) {
				return false
			} else if (month == 2) {
				let isleap = year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)
				if (day > 29 || (day == 29 && !isleap)) {
					return false
				} else {
					return true
				}
			} else {
				return true
			}
		} else {
			return false
		}
	},
	rrn1Check: (value: string) => {
		const regex = /^(?:[0-9]{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[1,2][0-9]|3[0,1]))$/
		return regex.test(value)
	},
	rrn2Check: (value: string) => {
		const regex = /^[1-4]\d{6}$/
		return regex.test(value)
	},
	/** 주민등록번호 유효성 검증 */
	rrnCheck: (ssn1: string, ssn2: string) => {
		let ssn = ssn1 + '' + ssn2,
			arr_ssn = [],
			compare = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5],
			sum = 0

		for (let i = 0; i < 13; i++) {
			arr_ssn[i] = ssn.substring(i, i + 1)
		}

		for (let i = 0; i < 12; i++) {
			sum = sum + arr_ssn[i] * compare[i]
		}

		sum = (11 - (sum % 11)) % 10

		if (sum != arr_ssn[12]) {
			return false
		}
		return true
	},
}
export default regExp
