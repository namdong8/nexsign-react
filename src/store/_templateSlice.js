import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// ✅ 상태변수 초기값
const initialState = {
	name: 'test',
	count: 0,
	value: 0,
}

// ✅ Reducer 선언
// state의 값을 어떻게 업데이트 시킬지의 정의
const reducers = {
	// Reducer에는 여러 액션을 정의
	// 액션 타입은 슬라이스 이름을 접두어로 사용해서 자동 생성 -> 'providerReducer/addCount'
	addCount: (state, action) => {
		// const { name, count } = action.payload
		state.value = action.payload
	},
	minusCount: (state, action) => {
		state.value = action.payload
	},
	init: (state) => {
		state.value = initialState
	},
}

// ✅ API 비동기
export const getTemplate = createAsyncThunk(
	// string action type value: 이 값에 따라 pending, fulfilled, rejected가 붙은 액션 타입이 생성된다.
	'templateSlice/getTemplate',
	// payloadCreator callback: 비동기 로직의 결과를 포함하고 있는 프로미스를 반환하는 비동기 함수
	async (id, { rejectWithValue }) => {
		try {
			// const response = await api.updateById(id, fields)
			// return response.data
		} catch (err) {
			// Use `err.response.data` as `action.payload` for a `rejected` action,
			// by explicitly returning it using the `rejectWithValue()` utility
			return rejectWithValue(err.response.data)
		}
	},
	// 세 번째 파라미터로 추가 옵션을 설정할 수 있다.
	// condition(arg, { getState, extra } ): boolean (비동기 로직 실행 전에 취소하거나, 실행 도중에 취소할 수 있다.)
	// dispatchConditionRejection: boolean (true면, condition()이 false를 반환할 때 액션 자체를 디스패치하지 않도록 한다.)
	// idGenerator(): string (requestId를 만들어준다. 같은 requestId일 경우 요청하지 않는 등의 기능을 사용할 수 있게 된다.)
)

// ✅ thunk
// https://velog.io/@raejoonee/createAsyncThunk
const extraReducers = (builder) => {
	builder
		.addCase(getTemplate.pending, (state, action) => {
			// Wait
			console.log(state, action)
		})
		.addCase(getTemplate.fulfilled, (state, action) => {
			// Success
			state.value = action.payload
		})
		.addCase(getTemplate.rejected, (state, action) => {
			// Fail
			console.log(state, action)
		})
}

// ✅ redux toolkit 설정
// createSlice는 createAction과 createReducer() 를 한번에 사용한 것
// 액션 생성자, 액션 타입, 리듀서를 자동으로 생성
const templateSlice = createSlice({
	name: 'templateSlice', // 해당 모듈 이름
	initialState, // 모듈 상태 초기화
	reducers, // 리듀서 작성
	extraReducers,
})
export const { addCount, minusCount } = templateSlice.actions
export const selectTemplate = (state) => state.templateSlice
export default templateSlice.reducer
