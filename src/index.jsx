/* eslint-disable no-undef */
import '@babel/polyfill'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import store from './store/store'
import { setUser } from './store/modules/userSlice'
import { setProviderId } from './store/modules/providerSlice'
import { fetchSetConfig } from './store/modules/configSlice'

// CSS Load
import './assets/css/common.css'
import './assets/css/app.css'
import './assets/css/fonts.css'

/** ✅ 사용자정보 자동 기입 */
export function SET_USER_JSON(json) {
	store.dispatch(setUser(json))
}
/** ✅ 인증기관 자동 선택 */
export function SET_SELECT_PROVIDER_ID(json) {
	store.dispatch(setProviderId(json))
}
/** ✅ System 셋팅 */
export function SET_CONFIG_PATH(path) {
	// 외부 설정파일 Config 셋팅
	store.dispatch(fetchSetConfig(path))
}

/** ✅ 인증창 팝업 */
export async function POPUP() {
	createRoot(document.getElementById('ns-root')).render(
		<Provider store={store}>
			<App />
		</Provider>,
	)
}

export const CONFIG = {
	TOKEN_API_CALLBACK: () => {
		alert('토큰요청 CALLBACK')
	},
	AUTH_API_CALLBACK: () => {
		alert('인증요청 CALLBACK')
	},
	CONFIRM_API_CALLBACK: () => {
		alert('인증확인 CALLBACK')
	},
}
