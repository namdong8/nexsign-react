import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import api from '../../utils/api'
import { setFonts } from '../../utils/cssVars'
import { ErrorState, setErrorPopupMessage } from './errorSlice'
import { setOpenApp } from './systemSlice'

export interface ConfigState {
	CONFIG_FILE_PATH: string
	RESOURCE_CONTEXT_URL: string
	API_CONTEXT_URL: string
}

// ✅ 상태변수 초기값
const initialState: ConfigState = {
	RESOURCE_CONTEXT_URL: '',
	API_CONTEXT_URL: '',
	CONFIG_FILE_PATH: '',
}

// ✅ Reducer 선언
const reducers = {
	setConfig: (state: ConfigState, action: PayloadAction<ConfigState>) => {
		state.RESOURCE_CONTEXT_URL = action.payload.RESOURCE_CONTEXT_URL
		state.API_CONTEXT_URL = action.payload.API_CONTEXT_URL
	},
	setConfigPath: (state: ConfigState, action: PayloadAction<string>) => {
		state.CONFIG_FILE_PATH = action.payload
	},
	initConfig: (state: ConfigState) => {
		Object.assign(state, initialState)
	},
}

// ✅ 비동기 Thunk
/** 외부에서 들어온 Config File Data Parsing */
export const fetchSetConfig = createAsyncThunk(
	'config/fetchSetConfig',
	async (path: string, { dispatch, getState }) => {
		try {
			const { error } = getState() as { error: ErrorState }
			if (error.isError) {
				return dispatch(setOpenApp(false))
			}

			const res = (await api.getConfig(path)).data
			// 유효한 JSON 형식 체크
			if (typeof res === 'string') {
				dispatch(setOpenApp(false))
				dispatch(setErrorPopupMessage('설정 에러'))
			} else {
				setFonts(res.RESOURCE_CONTEXT_URL)
				dispatch(setConfig(res))
				dispatch(setOpenApp(true))
			}
		} catch (err) {
			dispatch(setOpenApp(false))
			dispatch(setErrorPopupMessage('설정 에러'))
		}
	},
)

/** 설정 Parsing 에러 */
export const fetchSetTest = createAsyncThunk(
	'config/fetchSetConfig',
	async (v, { dispatch, getState }) => {
		try {
			const { config } = getState() as { config: ConfigState }
			const res = (await api.getConfig(config.CONFIG_FILE_PATH + 1)).data
			if (typeof res === 'string') {
				dispatch(setOpenApp(false))
				dispatch(setErrorPopupMessage('설정 에러'))
			} else {
				setFonts(res.RESOURCE_CONTEXT_URL)
				dispatch(setConfig(res))
				dispatch(setOpenApp(true))
			}
		} catch (err) {
			dispatch(setOpenApp(false))
			dispatch(setErrorPopupMessage('설정 에러'))
		}
	},
)

// ✅ redux toolkit 설정
const configSlice = createSlice({
	name: 'config',
	initialState,
	reducers,
})
export const { setConfig, setConfigPath, initConfig } = configSlice.actions
export const selectConfig = (state: { config: ConfigState }) => state.config
export default configSlice.reducer
