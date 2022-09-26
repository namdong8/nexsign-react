/* eslint-disable no-undef */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { JSONObject } from '../../@types/type'
import api from '../../utils/api'
import { ConfigState } from './configSlice'
import { setErrorContents } from './errorSlice'
import { setLoading } from './systemSlice'
import { UserState } from './userSlice'

export interface CertifyState {
	authRequestJson: JSONObject
	authConfirmJson: JSONObject
}
// ✅ 상태변수 초기값
const initialState = {
	authRequestJson: {},
	authConfirmJson: {},
}

// ✅ Reducer 선언
const reducers = {
	setAuthRequestJson: (
		state: CertifyState,
		action: PayloadAction<JSONObject>,
	) => {
		state.authRequestJson = action.payload
	},
	setAuthConfirmJson: (
		state: CertifyState,
		action: PayloadAction<JSONObject>,
	) => {
		state.authConfirmJson = action.payload
	},
}

// ✅ 비동기 Thunk
/** 인증요청 */
export const fetchAuthRequest = createAsyncThunk(
	'certify/fetchAuthRequest',
	async (v, { rejectWithValue, getState, dispatch }) => {
		try {
			dispatch(setLoading(true))

			const { config } = getState() as { config: ConfigState }
			const { user } = getState() as { user: UserState }
			const API_CONTEXT_URL = config.API_CONTEXT_URL
			const json = {
				name: user.name,
				birthday: user.birthday,
				phone: user.phone,
				rrn1: user.rrn1,
				rrn2: user.rrn2,
			}
			const res = await api.authRequest(API_CONTEXT_URL, json)
			if (!res.data) {
				dispatch(setErrorContents('시스템 에러'))
			} else {
				dispatch(setAuthRequestJson(res.data))
			}
			dispatch(setLoading(false))
		} catch (err) {
			dispatch(setErrorContents('네트워크 에러'))
			dispatch(setLoading(false))
			return rejectWithValue(err.response.data)
		}
	},
)
/** 인증확인 */
export const fetchAuthConfirm = createAsyncThunk(
	'certify/fetchAuthConfirm',
	async (v, { rejectWithValue, getState, dispatch }) => {
		try {
			dispatch(setLoading(true))

			const { config } = getState() as { config: ConfigState }
			const { user } = getState() as { user: UserState }
			const API_CONTEXT_URL = config.API_CONTEXT_URL
			const json = {
				name: user.name,
				birthday: user.birthday,
				phone: user.phone,
				rrn1: user.rrn1,
				rrn2: user.rrn2,
			}
			const res = await api.authConfirm(API_CONTEXT_URL, json)
			if (!res.data) {
				dispatch(setErrorContents('시스템 에러'))
			} else {
				dispatch(setAuthConfirmJson(res.data))
			}
			dispatch(setLoading(false))
		} catch (err) {
			dispatch(setErrorContents('네트워크 에러'))
			dispatch(setLoading(false))
			return rejectWithValue(err.response.data)
		}
	},
)
/** 인증 통신 에러 테스트 */
export const fetchTest = createAsyncThunk(
	'certify/fetchTest',
	async (v, { rejectWithValue, dispatch }) => {
		try {
			dispatch(setLoading(true))
			const res = await api.getProviderList('http://localhost:1000')
			if (!res.data) {
				dispatch(setErrorContents('시스템 에러'))
				dispatch(setLoading(false))
			}
		} catch (err) {
			dispatch(setErrorContents('네트워크 에러'))
			dispatch(setLoading(false))
			return rejectWithValue(err.response.data)
		}
	},
)

// ✅ redux toolkit 설정
export const certifySlice = createSlice({
	name: 'certify',
	initialState,
	reducers,
})
export const { setAuthRequestJson, setAuthConfirmJson } = certifySlice.actions
export const selectCertify = (state) => state.certify
export default certifySlice.reducer