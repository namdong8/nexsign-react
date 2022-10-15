import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import regExp from '../../utils/regExp'
import { ErrorState, setErrPopupMsg } from './errorSlice'
import { setOpenApp } from './systemSlice'

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
		state.name = action.payload.name || ''
		state.phone = action.payload.phone || ''
		state.birthday = action.payload.birthday || ''
		state.rrn1 = action.payload.rrn1 || ''
		state.rrn2 = action.payload.rrn2 || ''
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

/** 사용자 자동기입 최초 체크 및 설정 */
export const parsingUserInfo = createAsyncThunk(
	'user/setUserInfo',
	async (user: UserState, { dispatch, getState }) => {
		try {
			const { error } = getState() as { error: ErrorState }
			if (error.isError) {
				return dispatch(setOpenApp(false))
			}

			if (regExp.isName(user.name)) {
				dispatch(setName(user.name))
			} else {
				return dispatch(setErrPopupMsg('이름 유효성 체크'))
			}

			if (regExp.isPhone(user.phone)) {
				dispatch(setPhone(user.phone))
			} else {
				return dispatch(setErrPopupMsg('휴대폰번호 유효성 체크'))
			}

			if (regExp.isBirthDay(user.birthday)) {
				if (regExp.birthdayCheck(user.birthday)) {
					dispatch(setBirthday(user.birthday))
				} else {
					return dispatch(setErrPopupMsg('생년월일 유효성 체크2'))
				}
			} else {
				return dispatch(setErrPopupMsg('생년월일 유효성 체크1'))
			}

			if (!!user.rrn1 || !!user.rrn2) {
				if (!regExp.isRrn1(user.rrn1)) {
					return dispatch(setErrPopupMsg('주민등록번호 앞자리 유효성 체크'))
				}
				if (!regExp.isRrn2(user.rrn2)) {
					return dispatch(setErrPopupMsg('주민등록번호 뒷자리 유효성 체크'))
				}

				if (regExp.rrnCheck(user.rrn1, user.rrn2)) {
					dispatch(setRrn1(user.rrn1))
					dispatch(setRrn2(user.rrn2))
				} else {
					return dispatch(setErrPopupMsg('주민등록번호 유효성 체크'))
				}
			}
		} catch (err) {
			dispatch(setOpenApp(false))
			dispatch(setErrPopupMsg('사용자 입력 검증 에러'))
		}
	},
)

// ✅ redux toolkit 설정
const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers,
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
