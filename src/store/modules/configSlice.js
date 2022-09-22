import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../utils/api'
import { setFonts } from '../../utils/cssVars'

// ✅ 상태변수 초기값
const initialState = {
	FONT_PATH: '',
	API_CONTEXT_URL: '',
}

// ✅ Reducer 선언
const reducers = {
	setConfig: (state, action) => {
		state.FONT_PATH = action.payload.FONT_PATH
		state.API_CONTEXT_URL = action.payload.API_CONTEXT_URL
	},
}

// ✅ 비동기 Thunk
/** 외부에서 들어온 Config File Data Parsing */
export const fetchSetConfig = createAsyncThunk(
	'config/fetchSetConfig',
	async (path, { rejectWithValue, dispatch }) => {
		try {
			const res = await api.getConfig(path)
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
export const { setConfig } = configSlice.actions
export const selectConfig = (state) => state.config
export default configSlice.reducer
