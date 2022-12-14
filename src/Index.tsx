/* eslint-disable no-extra-boolean-cast */
/* eslint-disable no-undef */
import '@babel/polyfill'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import store from './store/store'
import { parsingUserInfo, UserState } from './store/modules/userSlice'
import { setProviderId } from './store/modules/providerSlice'
import { fetchSetConfig } from './store/modules/configSlice'

// CSS Load
import './assets/css/common.css'
import './assets/css/app.css'
import './assets/css/mobile.app.css'
import './assets/css/fonts.css'
import { JSONObject } from './@types/type'
import Options from './utils/umdCostomerOptions'

let container = null

/** ✅ 사용자정보 자동 기입 */
export function SET_USER_JSON(json: UserState) {
	store.dispatch(parsingUserInfo(json))
}
/** ✅ 인증기관 자동 선택 */
export function SET_PROVIDER_ID(id: string) {
	store.dispatch(setProviderId(id))
}
/** ✅ System 셋팅 */
export function SET_CONFIG(path: string) {
	// 외부 설정파일 경로 설정
	return store.dispatch(fetchSetConfig(path))
}

/** ✅ 사용자 커스텀 함수 */
export const FN = Options

export function SET_DATA(json: JSONObject) {
	alert(`${JSON.stringify(json)} \n ✔️ 값 설정 완료`)
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
