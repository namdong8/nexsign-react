import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import message from '../../utils/message'
import { JSONArray } from '../../@types/type'
import api from '../../utils/api'
import { ConfigState } from './configSlice'
import { setErrPopupMsg } from './errorSlice'
import { setLoading } from './systemSlice'

export interface ProviderState {
	id: string
	list: JSONArray
}

// ✅ 상태변수 초기값
const initialState: ProviderState = {
	id: '',
	list: [],
}

// ✅ Reducer 선언 ( export 에 등록 필요)
const reducers = {
	setProviderId: (state: ProviderState, action: PayloadAction<string>) => {
		state.id = action.payload
	},
	setList: (state: ProviderState, action: PayloadAction<JSONArray>) => {
		state.list = action.payload
	},
	initProvider: (state: ProviderState) => {
		Object.assign(state, initialState)
	},
}

// ✅ 비동기 Thunk
/** 인증기관 목록 조회 */
export const fetchGetProviderList = createAsyncThunk(
	'provider/fetchGetProviderList',
	async (v, { getState, dispatch }) => {
		try {
			dispatch(setLoading(true))
			const { config } = getState() as { config: ConfigState }
			const API_CONTEXT_URL = config.API_CONTEXT_URL
			const res = await api.getProviderList(API_CONTEXT_URL)
			if (!res.data) {
				dispatch(setErrPopupMsg(message.ERROR.SYSTEM))
			} else {
				dispatch(setList(res.data))
			}
			dispatch(setLoading(false))
		} catch (err) {
			dispatch(setErrPopupMsg(message.ERROR.NETWORK))
			dispatch(setLoading(false))
		}
	},
)

// ✅ redux toolkit 설정
const providerSlice = createSlice({
	name: 'provider', // 해당 모듈 이름
	initialState, // 모듈 상태 초기화
	reducers, // 리듀서 작성
})
export const { setProviderId, setList, initProvider } = providerSlice.actions
export const selectProvider = (state: { provider: ProviderState }) =>
	state.provider
export default providerSlice.reducer
