import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../utils/api'

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
export const fetchSetConfig = createAsyncThunk(
	'configSlice/fetchSetConfig',
	async (path, { rejectWithValue, dispatch }) => {
		try {
			const res = await api.getConfig(path)
			dispatch(setConfig(res))
		} catch (err) {
			return rejectWithValue(err.response.data)
		}
	},
)

// ✅ redux toolkit 설정
const configSlice = createSlice({
	name: 'configSlice',
	initialState,
	reducers,
})
export const { setConfig } = configSlice.actions
export const selectConfig = (state) => state.configSlice
export default configSlice.reducer