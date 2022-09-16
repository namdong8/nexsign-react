import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// ✅ 상태변수 초기값
const initialState = {
  authRequestJson: {

  },
  authConfirmJson: {

    }
}

// ✅ Reducer 선언
const reducers = {
  setPhone: (state, action) => {
    state.phone = action.payload
  },
  init:  (state) => {
    state = initialState
  }
}

// ✅ redux toolkit 설정 
export const certifySlice = createSlice({
  name: 'certifySlice',
  initialState,
  reducers,
})
export const { setUser, setName, setBirthday, setPhone, init } = certifySlice.actions
export const selectCertify = state => state.certifySlice
export default certifySlice.reducer