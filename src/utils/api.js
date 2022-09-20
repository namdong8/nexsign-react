import axios from 'axios'
// import store from "../store/store.js"
// 파일 순환 종속성 문제

const GET_PROVIDER_LIST_URL = `/provider/list`
const POST_AUTH_REQUEST = '/auth/request'
const POST_AUTH_CONFIRM = '/auth/confirm'

const HEADER = {
	headers: {
		'Content-type': 'application/json',
		Accept: 'application/json',
	},
}

const api = {
	/** 인증기관 목록 조회 */
	getProviderList: async (rootPath) => {
		try {
			const res = await axios.get(rootPath + GET_PROVIDER_LIST_URL)
			return res.data
		} catch (Error) {
			console.log(Error)
		}
	},
	/** 인증요청 */
	authRequest: async (rootPath, json) => {
		try {
			const res = await axios.post(rootPath + POST_AUTH_REQUEST, json, HEADER)
			return res.data
		} catch (Error) {
			console.log(Error)
		}
	},
	/** 인증확인 요청 */
	authConfirm: async (rootPath, json) => {
		try {
			const res = await axios.post(rootPath + POST_AUTH_CONFIRM, json, HEADER)
			return res.data
		} catch (Error) {
			console.log(Error)
		}
	},
	getConfig: async (path) => {
		try {
			const res = await axios.get(path)
			return res.data
		} catch (Error) {
			console.log(Error)
		}
	},
}

export default api
