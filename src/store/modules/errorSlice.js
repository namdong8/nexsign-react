import { createSlice } from '@reduxjs/toolkit'

// ✅ 상태변수 초기값
const initialState = {
	title: 'Error',
	contents: '내용',
	isError: false,
}

// ✅ Reducer 선언
const reducers = {
	setError: (state, action) => {
		state.title = action.payload.title
		state.contents = action.payload.contents
		state.isError = true
	},
	setErrorContents: (state, action) => {
		state.contents = 'Error'
		state.contents = action.payload
		state.isError = true
	},
	setWarringContents: (state, action) => {
		state.contents = 'Warring'
		state.contents = action.payload
		state.isError = true
	},
	hidePopup: (state) => {
		state.isError = false
	},
}

// ✅ redux toolkit 설정
const errorSlice = createSlice({
	name: 'error',
	initialState,
	reducers,
})
export const { setError, hidePopup, setErrorContents, setWarringContents } =
	errorSlice.actions
export const selectError = (state) => state.error
export default errorSlice.reducer
