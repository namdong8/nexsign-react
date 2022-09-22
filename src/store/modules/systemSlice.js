import { createSlice } from '@reduxjs/toolkit'

// ✅ 상태변수 초기값
const initialState = {
	isMobile: false,
	isTablet: false,
	isLoading: false,
}

// ✅ Reducer 선언
const reducers = {
	setLoading: (state, action) => {
		state.isLoading = action.payload
	},
}

// ✅ redux toolkit 설정
const systemSlice = createSlice({
	name: 'systemSlice', // 해당 모듈 이름
	initialState, // 모듈 상태 초기화
	reducers, // 리듀서 작성
})
export const { setLoading } = systemSlice.actions
export const selectSystem = (state) => state.systemSlice
export default systemSlice.reducer
