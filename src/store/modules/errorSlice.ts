import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ErrorState {
	title: string
	contents: string
	isError: boolean
}
// ✅ 상태변수 초기값
const initialState = {
	title: 'Error',
	contents: '내용',
	isError: false,
}

// ✅ Reducer 선언
const reducers = {
	setError: (state: ErrorState, action: PayloadAction<ErrorState>) => {
		state.title = action.payload.title
		state.contents = action.payload.contents
		state.isError = true
	},
	setErrorContents: (state: ErrorState, action: PayloadAction<string>) => {
		state.title = 'Error'
		state.contents = action.payload
		state.isError = true
	},
	setWarringContents: (state: ErrorState, action: PayloadAction<string>) => {
		state.title = 'Warring'
		state.contents = action.payload
		state.isError = true
	},
	hidePopup: (state: ErrorState) => {
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