import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// ✅ 상태변수 초기값
const initialState = {
  name:"",
  phone:"",
  birthday:""
}

// ✅ Reducer 선언
const reducers = {
  setUser: (state, action) => {
    state.name = action.payload.name
    state.phone = action.payload.phone
    state.birthday = action.payload.birthday
  },
  setName: (state, action) => {
    state.name = action.payload
  },
  setBirthday: (state, action) => {
    state.birthday = action.payload
  },
  setPhone: (state, action) => {
    state.phone = action.payload
  },
  init:  (state) => {
    state = initialState
  }
}

// ✅ redux toolkit 설정 
// createSlice는 createAction과 createReducer() 를 한번에 사용한 것
// 액션 생성자, 액션 타입, 리듀서를 자동으로 생성
const userinfoSlice = createSlice({
  name: 'userinfoSlice', // 해당 모듈 이름
  initialState,  // 모듈 상태 초기화
  reducers, // 리듀서 작성
})
export const { setUser, setName, setBirthday, setPhone, init } = userinfoSlice.actions
export const selectUserinfo = state => state.userinfoSlice
export default userinfoSlice.reducer