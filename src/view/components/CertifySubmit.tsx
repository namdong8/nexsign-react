import React from 'react'
import {
	fetchAuthConfirm,
	fetchAuthRequest,
	fetchTest,
	selectCertify,
} from '../../store/modules/certifySlice'
import { useAppDispatch, useAppSelector } from '../../store/hook'

/** 인증요청, 인증확인 */
function CertifySubmit() {
	// ✅ Redux
	const { authRequestJson, authConfirmJson } = useAppSelector(selectCertify)
	const dispatch = useAppDispatch()

	// ✅ API 통신
	const authRequest = async () => {
		await dispatch(fetchAuthRequest())
	}
	const authConfirm = async () => {
		await dispatch(fetchAuthConfirm())
	}
	const test = async () => {
		await dispatch(fetchTest())
	}
	// ✅ View
	return (
		<>
			<div className='ns-certify' style={{ fontSize: '11px' }}>
				<button onClick={authRequest}>인증요청</button>
				<button onClick={test}>에러 팝업</button>
				<div>{JSON.stringify(authRequestJson)}</div>
				<button onClick={authConfirm}>인증확인</button>
				<div>{JSON.stringify(authConfirmJson)}</div>
			</div>
		</>
	)
}

export default CertifySubmit
