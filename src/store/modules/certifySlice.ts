import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import Options from '../../utils/umdCostomerOptions'
import { JSONObject } from '../../@types/type'
import api from '../../utils/api'
import { ConfigState } from './configSlice'
import { setErrPopupMsg } from './errorSlice'
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
	initCertifty: (state: CertifyState) => {
		Object.assign(state, initialState)
	},
}

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
				dispatch(setErrPopupMsg('시스템 에러'))
			} else {
				Options.REQUEST_RESPONSE(res.data)
				dispatch(setAuthRequestJson(res.data))
			}
			dispatch(setLoading(false))
		} catch (err) {
			dispatch(setErrPopupMsg('네트워크 에러'))
			dispatch(setLoading(false))
			rejectWithValue(err.response.data)
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
				dispatch(setErrPopupMsg('시스템 에러'))
			} else {
				dispatch(setAuthConfirmJson(res.data))
				Options.CALLBACK_RESULT(res.data)
			}
			dispatch(setLoading(false))
		} catch (err) {
			dispatch(setErrPopupMsg('네트워크 에러'))
			dispatch(setLoading(false))
			rejectWithValue(err.response.data)
		}
	},
)
/** 인증 통신 에러 테스트 */
export const fetchNetworkError = createAsyncThunk(
	'certify/fetchTest',
	async (v, { dispatch }) => {
		try {
			dispatch(setLoading(true))
			const res = await api.getProviderList('http://localhost:1000')
			dispatch(setLoading(false))
			if (!res.data) {
				dispatch(setErrPopupMsg('시스템 에러'))
			}
		} catch (err) {
			dispatch(setLoading(false))
			dispatch(setErrPopupMsg('네트워크 에러'))
		}
	},
)
/** 요청 파싱에러 */
export const fetchSystemError = createAsyncThunk(
	'certify/fetchTest',
	async (v, { dispatch, getState }) => {
		try {
			dispatch(setLoading(true))
			const { config } = getState() as { config: ConfigState }
			const API_CONTEXT_URL = config.API_CONTEXT_URL
			const res = await api.getProviderList(API_CONTEXT_URL)
			res.status = 500
			dispatch(setLoading(false))
			if (res.status === 500) {
				dispatch(setErrPopupMsg('시스템 에러'))
			}
		} catch (err) {
			dispatch(setLoading(false))
			dispatch(setErrPopupMsg('네트워크 에러'))
		}
	},
)

// ✅ redux toolkit 설정
export const certifySlice = createSlice({
	name: 'certify',
	initialState,
	reducers,
})
export const { setAuthRequestJson, setAuthConfirmJson, initCertifty } =
	certifySlice.actions
export const selectCertify = (state: { certify: CertifyState }) => state.certify
export default certifySlice.reducer
