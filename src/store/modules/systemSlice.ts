/* eslint-disable no-extra-boolean-cast */
/* eslint-disable no-undef */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import MobileDetect from 'mobile-detect'
import { setErrorContents } from './errorSlice'

export interface SystemState {
	deviceCode: string
	isLoading: boolean
	isApp: boolean
}

// ✅ 상태변수 초기값
const initialState = {
	deviceCode: '', // PC, MO, TB
	isLoading: false,
	isApp: false,
}

// ✅ Reducer 선언
const reducers = {
	setLoading: (state: SystemState, action: PayloadAction<boolean>) => {
		state.isLoading = action.payload
	},
	setDeviceCode: (state: SystemState, action: PayloadAction<string>) => {
		state.deviceCode = action.payload
	},
	setOpenApp: (state: SystemState, action: PayloadAction<boolean>) => {
		state.isApp = action.payload
	},
}

// ✅ 비동기 Thunk
/** Device Info Setting */
export const setSystemInit = createAsyncThunk(
	'system/setSystemInit',
	async (v, { rejectWithValue, dispatch }) => {
		try {
			// dispatch(setOpenApp(true))
			const md = new MobileDetect(window.navigator.userAgent)
			const code = !!md.mobile() ? 'MO' : !!md.tablet() ? 'TB' : 'PC'
			dispatch(setDeviceCode(code))
		} catch (err) {
			dispatch(setErrorContents('시스템 에러'))
			return rejectWithValue(err.response.data)
		}
	},
)

// ✅ redux toolkit 설정
const systemSlice = createSlice({
	name: 'system', // 해당 모듈 이름
	initialState, // 모듈 상태 초기화
	reducers, // 리듀서 작성
})
export const { setLoading, setOpenApp, setDeviceCode } = systemSlice.actions
export const selectSystem = (state) => state.system
export default systemSlice.reducer
