import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
	name: string
	rrn1: string
	rrn2: string
	phone: string
	birthday: string
}

// ✅ 상태변수 초기값
const initialState: UserState = {
	name: '',
	rrn1: '',
	rrn2: '',
	phone: '',
	birthday: '',
}

// ✅ Reducer 선언
const reducers = {
	setUser: (state: UserState, action: PayloadAction<UserState>) => {
		state.name = action.payload.name
		state.phone = action.payload.phone
		state.birthday = action.payload.birthday
	},
	setName: (state: UserState, action: PayloadAction<string>) => {
		state.name = action.payload
	},
	setRrn1: (state: UserState, action: PayloadAction<string>) => {
		state.rrn1 = action.payload
	},
	setRrn2: (state: UserState, action: PayloadAction<string>) => {
		state.rrn2 = action.payload
	},
	setBirthday: (state: UserState, action: PayloadAction<string>) => {
		state.birthday = action.payload
	},
	setPhone: (state: UserState, action: PayloadAction<string>) => {
		state.phone = action.payload
	},
	initUser: (state: UserState) => {
		Object.assign(state, initialState)
	},
}

// ✅ redux toolkit 설정
// createSlice는 createAction과 createReducer() 를 한번에 사용한 것
// 액션 생성자, 액션 타입, 리듀서를 자동으로 생성
const userSlice = createSlice({
	name: 'user', // 해당 모듈 이름
	initialState, // 모듈 상태 초기화
	reducers, // 리듀서 작성
})
export const {
	setUser,
	setName,
	setBirthday,
	setPhone,
	setRrn1,
	setRrn2,
	initUser,
} = userSlice.actions
export const selectUser = (state: { user: UserState }) => state.user
export default userSlice.reducer
