import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import providerSlice from './modules/providerSlice'
import userSlice from './modules/userSlice'
import configSlice from './modules/configSlice'
import certifySlice from './modules/certifySlice'
import errorSlice from './modules/errorSlice'
import systemSlice from './modules/systemSlice'

// Redux - Flux 아키텍쳐 기반

const isDev = process.env.NODE_ENV !== 'production'
const logger = createLogger()
const initialState = {}

// Reducer Setting - Store
const reducer = combineReducers({
	provider: providerSlice,
	user: userSlice,
	config: configSlice,
	certify: certifySlice,
	error: errorSlice,
	system: systemSlice,
})

const devMiddleware = (getDefaultMiddleware) => {
	return getDefaultMiddleware({
		// serializableCheck: false,
	})
		.concat(logger)
		.concat(require('redux-immutable-state-invariant').default())
}
const prodMiddleware = (getDefaultMiddleware) => {
	return getDefaultMiddleware()
}

const store = configureStore({
	reducer,
	middleware: isDev ? devMiddleware : prodMiddleware,
	devTools: isDev, // Redux DevTools 사용 여부 설정. (기본값은 true)
	preloadedState: initialState, // 리덕스 스토어의 초기값 설정.Config
	//사용자 정의 미들웨어를 설정. 콜백 함수로 설정하면 미들웨어 적용 순서를 정의 가능.
	enhancers: (defaultEnhancers) => [...defaultEnhancers],
})
export default store
