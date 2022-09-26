import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import api from '../../utils/api'
import { setFonts } from '../../utils/cssVars'

export interface ConfigState {
	CONFIG_FILE_PATH: string
	FONT_PATH: string
	API_CONTEXT_URL: string
}

// ✅ 상태변수 초기값
const initialState: ConfigState = {
	FONT_PATH: '',
	API_CONTEXT_URL: '',
	CONFIG_FILE_PATH: '',
}

// ✅ Reducer 선언
const reducers = {
	setConfig: (state: ConfigState, action: PayloadAction<ConfigState>) => {
		state.FONT_PATH = action.payload.FONT_PATH
		state.API_CONTEXT_URL = action.payload.API_CONTEXT_URL
	},
	setConfigPath: (state: ConfigState, action: PayloadAction<string>) => {
		state.CONFIG_FILE_PATH = action.payload
	},
}

// ✅ 비동기 Thunk
/** 외부에서 들어온 Config File Data Parsing */
export const fetchSetConfig = createAsyncThunk(
	'config/fetchSetConfig',
	async (v, { rejectWithValue, dispatch, getState }) => {
		try {
			const { config } = getState() as { config: ConfigState }
			const res = await api.getConfig(config.CONFIG_FILE_PATH)
			setFonts(res.data.FONT_PATH)
			dispatch(setConfig(res.data))
		} catch (err) {
			return rejectWithValue(err.response.data)
		}
	},
)

// ✅ redux toolkit 설정
const configSlice = createSlice({
	name: 'config',
	initialState,
	reducers,
})
export const { setConfig, setConfigPath } = configSlice.actions
export const selectConfig = (state) => state.config
export default configSlice.reducer
