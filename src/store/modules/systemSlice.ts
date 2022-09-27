/* eslint-disable no-extra-boolean-cast */
/* eslint-disable no-undef */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import MobileDetect from 'mobile-detect'
import message from '../../utils/message'
import { initCertifty } from './certifySlice'
import { initConfig } from './configSlice'
import { initError, setErrorPopupMessage } from './errorSlice'
import { initProvider } from './providerSlice'
import { initUser } from './userSlice'

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
	initSystem: (state: SystemState) => {
		Object.assign(state, initialState)
	},
}

// ✅ 비동기 Thunk
/** Device Info Setting */
export const setSystemInit = createAsyncThunk(
	'system/setSystemInit',
	async (v, { dispatch }) => {
		try {
			const md = new MobileDetect(window.navigator.userAgent)
			const code = !!md.mobile() ? 'MO' : !!md.tablet() ? 'TB' : 'PC'
			dispatch(setDeviceCode(code))
		} catch (err) {
			dispatch(setErrorPopupMessage(message.ERROR.SYSTEM))
		}
	},
)

export const initApp = createAsyncThunk(
	'system/initApp',
	async (v, { dispatch }) => {
		try {
			dispatch(initSystem())
			dispatch(initCertifty())
			dispatch(initConfig())
			dispatch(initProvider())
			dispatch(initUser())
			dispatch(initError())
		} catch (error) {
			error
		}
	},
)

// ✅ redux toolkit 설정
const systemSlice = createSlice({
	name: 'system', // 해당 모듈 이름
	initialState, // 모듈 상태 초기화
	reducers, // 리듀서 작성
})
export const { setLoading, setOpenApp, setDeviceCode, initSystem } =
	systemSlice.actions
export const selectSystem = (state: { system: SystemState }) => state.system
export default systemSlice.reducer
