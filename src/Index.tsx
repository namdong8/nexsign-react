/* eslint-disable no-extra-boolean-cast */
/* eslint-disable no-undef */
import '@babel/polyfill'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import store from './store/store'
import { setUser, UserState } from './store/modules/userSlice'
import { setProviderId } from './store/modules/providerSlice'
import { setConfigPath } from './store/modules/configSlice'
import { setOpenApp } from './store/modules/systemSlice'

// CSS Load
import './assets/css/common.css'
import './assets/css/app.css'
import './assets/css/fonts.css'

let container = null

// const dispatch = store.dispatch

/** ✅ 사용자정보 자동 기입 */
export function SET_USER_JSON(json: UserState) {
	store.dispatch(setUser(json))
}
/** ✅ 인증기관 자동 선택 */
export function SET_SELECT_PROVIDER_ID(id: string) {
	store.dispatch(setProviderId(id))
}
/** ✅ System 셋팅 */
export function SET_CONFIG(path: string) {
	// 외부 설정파일 경로 설정
	store.dispatch(setConfigPath(path))
}

/** ✅ 인증창 팝업 */
export async function POPUP() {
	if (!container) {
		container = document.getElementById('ns-root')
		createRoot(container).render(
			<Provider store={store}>
				<App />
			</Provider>,
		)
	}
	// 팝업 표시
	store.dispatch(setOpenApp(true))
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
