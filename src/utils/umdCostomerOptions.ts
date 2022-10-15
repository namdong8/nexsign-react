import { JSONObject } from '../@types/type'

class Options {
	REQUEST_RESPONSE: (res: JSONObject) => void
	CALLBACK_RESULT: (res: JSONObject) => void
	LOADED_VIEW: () => void

	constructor() {
		// 인증완료 이후 얻은 데이터 반환
		this.CALLBACK_RESULT = () => {}
		// 인증요청에 얻은 데이터 반환
		this.REQUEST_RESPONSE = () => {}
		// 인증창 로드 완료 시 실행
		this.LOADED_VIEW = () => {}
	}
}

export default new Options()
