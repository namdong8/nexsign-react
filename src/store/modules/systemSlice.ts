/* eslint-disable no-extra-boolean-cast */
/* eslint-disable no-undef */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { JSONObject } from '../../@types/type'
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
	focusRefs: JSONObject
}

// ✅ 상태변수 초기값
const initialState = {
	deviceCode: '', // PC, MO, TB
	isLoading: false,
	isApp: true,
	focusRefs: {
		isNameFocus: false,
		isBirthdayFocus: false,
	},
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
	setFocusTarget: (
		state: SystemState,
		action: PayloadAction<{ key: string; value: boolean }>,
	) => {
		state.focusRefs[action.payload.key] = action.payload.value
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

/** State 초기화 - 닫기 */
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
export const {
	setLoading,
	setOpenApp,
	setDeviceCode,
	initSystem,
	setFocusTarget,
} = systemSlice.actions

// ✅ State 접근 | Component Re-Render 방지를 위한 독립 셋팅
export const system = {
	isApp: (state: { system: SystemState }) => state.system.isApp,
	isLoading: (state: { system: SystemState }) => state.system.isLoading,
	deviceCode: (state: { system: SystemState }) => state.system.deviceCode,
}

export default systemSlice.reducer
