import axios from 'axios'
import { JSONObject } from '../@types/type'

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
	getProviderList: async (rootPath: string) => {
		try {
			return await axios.get(rootPath + GET_PROVIDER_LIST_URL)
		} catch (Error) {
			console.log(Error)
		}
	},
	/** 인증요청 */
	authRequest: async (rootPath: string, json: JSONObject) => {
		try {
			return await axios.post(rootPath + POST_AUTH_REQUEST, json, HEADER)
		} catch (Error) {
			console.log(Error)
		}
	},
	/** 인증확인 요청 */
	authConfirm: async (rootPath: string, json: JSONObject) => {
		try {
			return await axios.post(rootPath + POST_AUTH_CONFIRM, json, HEADER)
		} catch (Error) {
			console.log(Error)
		}
	},
	getConfig: async (path: string) => {
		try {
			return await axios.get(path)
		} catch (Error) {
			console.log(Error)
		}
	},
}

export default api
