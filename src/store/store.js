import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import providerSlice from './modules/providerSlice'
import userSlice from './modules/userSlice'
import configSlice from './modules/configSlice'
import certifySlice from './modules/certifySlice'
import errorSlice from './modules/errorSlice'
import systemSlice from './modules/systemSlice'

// Redux - Flux 아키텍쳐 기반
// TODO redux-persist 사용검토
// TODO redux saga 사용검토

const logger = createLogger()
// const initialState = {}

// Reducer Setting - Store
const reducer = combineReducers({
	providerSlice,
	userSlice,
	configSlice,
	certifySlice,
	errorSlice,
	systemSlice,
})

const store = configureStore({
	reducer, // 리덕스 스토어의 rootReducer를 설정.
	// redux-logger와 같은 리덕스 미들웨어를 설정.
	// 미들웨어를 설정한 경우엔 자동으로 applyMiddleware에 전달.
	// 미들웨어를 설정하지 않은 경우엔 getDefaultMiddleware를 호출.
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(logger),
	devTools: process.env.NODE_ENV !== 'production', // Redux DevTools 사용 여부 설정. (기본값은 true)
	// preloadedState: initialState, // 리덕스 스토어의 초기값 설정.Config
	//사용자 정의 미들웨어를 설정. 콜백 함수로 설정하면 미들웨어 적용 순서를 정의 가능.
	enhancers: (defaultEnhancers) => [...defaultEnhancers],
})
export default store
