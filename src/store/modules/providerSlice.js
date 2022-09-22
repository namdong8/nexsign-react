import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../utils/api'
import { setErrorContents } from './errorSlice'
import { setLoading } from './systemSlice'

// ✅ 상태변수 초기값
const initialState = {
	id: '',
	list: [],
}

// ✅ Reducer 선언 ( export 에 등록 필요)
const reducers = {
	setProviderId: (state, action) => {
		state.id = action.payload
	},
	setList: (state, action) => {
		state.list = action.payload
	},
}

// ✅ 비동기 Thunk
export const fetchGetProviderList = createAsyncThunk(
	'providerSlice/fetchGetProviderList',
	async (v, { rejectWithValue, getState, dispatch }) => {
		try {
			dispatch(setLoading(true))
			const API_CONTEXT_URL = getState().configSlice.API_CONTEXT_URL
			const res = await api.getProviderList(API_CONTEXT_URL)
			if (!res.data) {
				dispatch(setErrorContents('시스템 에러'))
			} else {
				dispatch(setList(res.data))
			}
			dispatch(setLoading(false))
		} catch (err) {
			dispatch(setErrorContents('네트워크 에러'))
			dispatch(setLoading(false))
			return rejectWithValue(err.response.data)
		}
	},
)

// ✅ redux toolkit 설정
const providerSlice = createSlice({
	name: 'providerSlice', // 해당 모듈 이름
	initialState, // 모듈 상태 초기화
	reducers, // 리듀서 작성
})
export const { setProviderId, setList } = providerSlice.actions
export const selectProvider = (state) => state.providerSlice
export default providerSlice.reducer
