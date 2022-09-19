import axios from 'axios'
// import store from "../store/store.js"
// 파일 순환 종속성 문제

const GET_PROVIDER_LIST_URL = `/provider/list`
const SET_PROVIDER_URL = `/set/provider`

const HEADER = {
	headers: {
		'Content-type': 'application/json',
		Accept: 'application/json',
	},
}

const api = {
	getProviderList: async (rootPath) => {
		try {
			const res = await axios.get(rootPath + GET_PROVIDER_LIST_URL)
			return res.data
		} catch (Error) {
			console.log(Error)
		}
	},
	setTest: async (json) => {
		try {
			const res = await axios.post(SET_PROVIDER_URL, json, HEADER)
			console.log(res.data)
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
