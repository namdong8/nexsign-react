/* eslint-disable prefer-const */
const regExp = {
	/** 모든문자 30자리 */
	name: (value: string) => {
		const regex = /^[\S\s]{0,30}$/
		return regex.test(value)
	},
	/** 숫자형식 11자리 */
	phoneNumber: (value: string) => {
		const regex = /^[0-9]{10,11}$/
		return regex.test(value)
	},
	/** 숫자형식 8자리 */
	birthNumber: (value: string) => {
		const regex = /^[0-9]{8}$/
		return regex.test(value)
	},
	/** 숫자형식 6자리 */
	rrn1Number: (value: string) => {
		const regex = /^[0-9]{6}$/
		return regex.test(value)
	},
	/** 숫자형식 7자리 */
	rrn2Number: (value: string) => {
		const regex = /^[0-9]{7}$/
		return regex.test(value)
	},
	/** 생년월일 유효성 검증 */
	birthdayCheck: (value: string) => {
		let year = Number(value.substring(0, 4))
		let month = Number(value.substring(4, 6))
		let day = Number(value.substring(6, 8))
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
	/** 주민등록번호 유효성 검증 */
	rrnCheck: (_ssn1: string, _ssn2: string) => {
		let ssn1 = _ssn1,
			ssn2 = _ssn2,
			ssn = ssn1 + '' + ssn2,
			arr_ssn = [],
			compare = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5],
			sum = 0

		if (ssn1 == '') {
			// console.log('주민등록번호를 기입해주세요.')
			return false
		}

		if (ssn2 == '') {
			// console.log('주민등록번호를 기입해주세요.')
			return false
		}

		if (ssn1.match('[^0-9]')) {
			// console.log('주민등록번호는 숫자만 입력하셔야 합니다.')
			return false
		}
		if (ssn2.match('[^0-9]')) {
			// console.log('주민등록번호는 숫자만 입력하셔야 합니다.')
			return false
		}

		if (ssn.length != 13) {
			// console.log('올바른 주민등록 번호를 입력하여 주세요.')
			return false
		}

		for (let i = 0; i < 13; i++) {
			arr_ssn[i] = ssn.substring(i, i + 1)
		}

		for (let i = 0; i < 12; i++) {
			sum = sum + arr_ssn[i] * compare[i]
		}

		sum = (11 - (sum % 11)) % 10

		if (sum != arr_ssn[12]) {
			// console.log('올바른 주민등록 번호를 입력하여 주세요.')
			return false
		}
		return true
	},
}
export default regExp
