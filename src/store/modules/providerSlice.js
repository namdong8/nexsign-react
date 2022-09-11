import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { api } from '../../utils/api'

// ✅ 상태변수 초기값
const initialState = {
  name: 'test',
  count: 0,
  value: 0,
  lists: []
}

// ✅ Reducer 선언
const reducers = {
  addCount: (state, action) => {
    state.value = action.payload
  },
  minusCount: (state, action) => {
    state.value = action.payload
  },
  init:  (state, action) => {
    state.value = initialState
  }
}

// ✅ API 비동기 통신
export const getProviderList = createAsyncThunk(
  'provider/getProviderList',
  async (id, {rejectWithValue}) => {
    try {
      const response = await api.getProviderList(id);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// ✅ thunk
// https://velog.io/@raejoonee/createAsyncThunk
const extraReducers = (builder) => {
  builder
  .addCase(getProviderList.pending, (state, action) => {
    // Wait
  })
  .addCase(getProviderList.fulfilled, (state, action) => {
    // Success
    state.lists = action.payload
  })
  .addCase(getProviderList.rejected, (state, action) => {
    // Fail
  })
}

// ✅ redux toolkit 설정 
// createSlice는 createAction과 createReducer() 를 한번에 사용한 것
// 액션 생성자, 액션 타입, 리듀서를 자동으로 생성
const providerSlice = createSlice({
  name: 'provider', // 해당 모듈 이름
  initialState,  // 모듈 상태 초기화
  reducers, // 리듀서 작성
  extraReducers
})
export const { addCount, minusCount } = providerSlice.actions
export const selectProvider = state => state.providerSlice
export default providerSlice.reducer