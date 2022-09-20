import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../utils/api'

// ✅ 상태변수 초기값
const initialState = {
	authRequestJson: {},
	authConfirmJson: {},
}

// ✅ Reducer 선언
const reducers = {
	setAuthRequestJson: (state, action) => {
		state.authRequestJson = action.payload
	},
	setAuthConfirmJson: (state, action) => {
		state.authConfirmJson = action.payload
	},
}

// ✅ 비동기 Thunk
export const fetchAuthRequest = createAsyncThunk(
	'certifySlice/fetchAuthRequest',
	async (v, { rejectWithValue, getState, dispatch }) => {
		try {
			const API_CONTEXT_URL = getState().configSlice.API_CONTEXT_URL
			const userJson = getState().userSlice
			const json = await api.authRequest(API_CONTEXT_URL, userJson)
			dispatch(setAuthRequestJson(json))
		} catch (err) {
			return rejectWithValue(err.response.data)
		}
	},
)
export const fetchAuthConfirm = createAsyncThunk(
	'certifySlice/fetchAuthConfirm',
	async (v, { rejectWithValue, getState, dispatch }) => {
		try {
			const API_CONTEXT_URL = getState().configSlice.API_CONTEXT_URL
			const userJson = getState().userSlice
			const json = await api.authConfirm(API_CONTEXT_URL, userJson)
			dispatch(setAuthConfirmJson(json))
		} catch (err) {
			return rejectWithValue(err.response.data)
		}
	},
)
// ✅ redux toolkit 설정
export const certifySlice = createSlice({
	name: 'certifySlice',
	initialState,
	reducers,
})
export const { setAuthRequestJson, setAuthConfirmJson } = certifySlice.actions
export const selectCertify = (state) => state.certifySlice
export default certifySlice.reducer
