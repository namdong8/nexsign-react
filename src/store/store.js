import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import providerSlice from './modules/providerSlice'
import userinfoSlice from './modules/userinfoSlice'
// import userinfo from './modules/userinfo'

// Redux - Flux 아키텍쳐 기반
// TODO redux-persist 사용검토
// TODO redux saga 사용검토
// Redux Toolkit에는 내부적으로 thunk를 내장

const logger = createLogger()
const initialState = {};

// Reducer Setting - Store
// Reducer: 인수가 주어지면, 다음 상태를 계산해서 반환하면 된다.예기치 못한 일은 없어야 한다.
// 사이드 이펙트도 없어야 한다. API 호출도 안된다. 변경도 안된다. 계산만 가능하다.
const reducer = combineReducers({
    //Defind Reducer
    providerSlice,
    userinfoSlice,
})

const store = configureStore({
    reducer, // 리덕스 스토어의 rootReducer를 설정.
    // redux-logger와 같은 리덕스 미들웨어를 설정.
    // 미들웨어를 설정한 경우엔 자동으로 applyMiddleware에 전달.
    // 미들웨어를 설정하지 않은 경우엔 getDefaultMiddleware를 호출.
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production', // Redux DevTools 사용 여부 설정. (기본값은 true)
    preloadedState: initialState, // 리덕스 스토어의 초기값 설정.
    //사용자 정의 미들웨어를 설정. 콜백 함수로 설정하면 미들웨어 적용 순서를 정의 가능.
    enhancers: (defaultEnhancers) => [...defaultEnhancers]
});

export default store;